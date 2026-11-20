import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const RAW_DIR = path.join(process.cwd(), "public", "image");
const OUT_DIR = path.join(process.cwd(), "public", "images", "portfolio");
const DATA_FILE = path.join(process.cwd(), "lib", "data.ts");
const CACHE_FILE = path.join(process.cwd(), "scripts", ".photo-cache.json");

const VALID_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".heic"]);

// 5 tấm đời thường/tạp loại khỏi Lookbook booking
const EXCLUDED_IDS = new Set([
    "3986827806159907561", // CRISPY FRIED CHICKEN
    "3986827809951570088", // NIGHT RIDE SELFIE
    "3986827801109979992", // PLAYFUL PHOTOBOOTH MOMENT
    "3986827804020666693", // PRINTED PHOTO MEMORIES
    "3957875122035843697", // BRAVE PYTHON EXPERIENCE
]);

// 5 tấm tĩnh vật/không gian dùng làm ảnh đệm chuyển nhịp Editorial
const INTERLUDE_IDS = new Set([
    "3813619917812657266", // VINTAGE APOTHECARY CORNER
    "3940499000897921293", // URBAN GREENERY CORNER
    "3942419466742959828", // MINIMALIST SCULPTURAL SPACE
    "3957875105871047031", // RUSTIC HORSE CARRIAGE
    "3986827790590611427", // COZY COFFEE TIME
]);

// 6 tấm "Đinh" mở màn trang chủ & Comp Card (sắp xếp theo thứ tự ưu tiên)
const HERO_PRIORITY = [
    "20261031.jpg",        // 1. AUTUMN GLOW PORTRAIT
    "4029992703974192549", // 2. BLOOMING RADIANCE
    "3993758150171743502", // 3. ORIENTAL PARASOL CHARM
    "3963619188463633295", // 4. COZY RECORD NOOK
    "3949108725365403409", // 5. FAIRYTALE CANDLELIGHT WISH
    "3942419483713167367", // 6. PLAYFUL STREET POSTURE
];

// Ánh xạ 16 đợt chụp vào 4 Chương Editorial
const FOLDER_TO_CHAPTER = {
    "20261115": "Heritage & Muse",
    "20260925": "Heritage & Muse",
    "20261012": "Heritage & Muse",
    "20260119": "Heritage & Muse",

    "20261003": "Noir & Retro",
    "20260814": "Noir & Retro",
    "20260915": "Noir & Retro",

    "20260725": "Coquette & Dreamy",
    "20260723": "Coquette & Dreamy",
    "20261102": "Coquette & Dreamy",

    "20261031": "Sunlit Lifestyle",
    "20260807": "Sunlit Lifestyle",
    "20260728": "Sunlit Lifestyle",
    "20260714": "Sunlit Lifestyle",
    "20260822": "Sunlit Lifestyle",
    "20260716": "Sunlit Lifestyle",
};

const EDITORIAL_CHAPTERS = [
    {
        id: "All",
        index: "00",
        label: "Toàn bộ kho ảnh",
        subtitle:
            "Tổng hợp 16 buổi chụp tuyển chọn của Sulii — từ áo dài cổ điển, chân dung phòng tối đến phong cách dạo phố tự nhiên.",
        theme: {
            bg: "#F6F4EF",
            surface: "#ECE8DF",
            ink: "#151412",
            muted: "#6B655D",
            border: "rgba(21, 20, 18, 0.14)",
            accent: "#7A2E2A",
        },
    },
    {
        id: "Heritage & Muse",
        index: "01",
        label: "Heritage & Muse",
        subtitle:
            "Áo dài, lụa gấm và Yukata — tôn vinh vẻ đẹp Á Đông thanh lịch trong không gian bảo tàng và vườn cổ.",
        theme: {
            bg: "#F5F0E6",
            surface: "#EAE2D3",
            ink: "#1E1A17",
            muted: "#6E6357",
            border: "rgba(30, 26, 23, 0.16)",
            accent: "#8E2E2B",
        },
    },
    {
        id: "Noir & Retro",
        index: "02",
        label: "Noir & Retro",
        subtitle:
            "Trang phục đen tối giản trong ánh đèn trầm ấm của phòng trà, quán đĩa than và những khung hình điện ảnh về đêm.",
        theme: {
            bg: "#111010",
            surface: "#1B1918",
            ink: "#EFEAE1",
            muted: "#9E9589",
            border: "rgba(239, 234, 225, 0.16)",
            accent: "#C89B54",
        },
    },
    {
        id: "Coquette & Dreamy",
        index: "03",
        label: "Coquette & Dreamy",
        subtitle:
            "Sắc kem, váy ren trắng và ánh nến dịu nhẹ gợi cảm giác ngọt ngào, nữ tính và lãng mạn.",
        theme: {
            bg: "#FBF4F1",
            surface: "#F2E5DF",
            ink: "#382622",
            muted: "#846A63",
            border: "rgba(56, 38, 34, 0.14)",
            accent: "#B87A52",
        },
    },
    {
        id: "Sunlit Lifestyle",
        index: "04",
        label: "Sunlit Lifestyle",
        subtitle:
            "Ánh nắng tự nhiên, bối cảnh dạo phố, miệt vườn và phong cách streetwear trẻ trung, giàu năng lượng.",
        theme: {
            bg: "#F7F8F6",
            surface: "#EBEEE9",
            ink: "#151816",
            muted: "#5D6660",
            border: "rgba(21, 24, 22, 0.14)",
            accent: "#3E664F",
        },
    },
];

// Chuẩn hóa xưng hô & xóa các từ lặp do AI sinh ra trong mô tả ảnh
function cleanCaption(raw = "") {
    return raw
        .trim()
        .replace(/^(Nữ người mẫu|Người mẫu|Nàng mẫu|Nàng thơ|Cô nàng)\b/gi, "Sulii")
        .replace(/\bcủa người mẫu\b/gi, "của Sulii")
        .replace(/\bngười mẫu\b/gi, "Sulii")
        .replace(/\s+/g, " ");
}

async function getAllImageFiles(dir) {
    let results = [];
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results = results.concat(await getAllImageFiles(fullPath));
        } else if (VALID_EXTS.has(path.extname(entry.name).toLowerCase())) {
            results.push(fullPath);
        }
    }
    return results.sort((a, b) => a.localeCompare(b));
}

function slugify(str) {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

// Trích xuất mã ID 15+ chữ số (hoặc tên file) để khớp 100% cache bất kể lỗi dấu gạch chéo
function extractMediaId(str) {
    const match = str.match(/(\d{15,})/);
    if (match) return match[1];
    return path.basename(str.replace(/\\/g, "/")).toLowerCase();
}

function buildSmartCacheLookup(cacheObj) {
    const byMediaId = new Map();
    for (const [key, val] of Object.entries(cacheObj)) {
        if (!val || !val.title) continue;
        const id = extractMediaId(key);
        // Ưu tiên bản có đường dẫn thư mục chuẩn nếu bị lưu trùng
        if (!byMediaId.has(id) || key.includes("/") || key.includes("\\")) {
            byMediaId.set(id, val);
        }
    }
    return (relPath) => byMediaId.get(extractMediaId(relPath));
}

// Chuẩn hóa bộ thẻ lọc nhanh cho khách hàng / Agency
function deriveAgencyTags(summary, rawAttrs = [], shootCode = "") {
    const text = `${summary} ${rawAttrs.join(" ")}`.toLowerCase();
    const tags = new Set();

    // Góc máy
    if (/(cận cảnh|cận mặt|chân dung cận|gương mặt|ngang ngực)/.test(text)) tags.add("Cận Mặt");
    if (/(toàn thân|toàn cảnh|dáng đứng|sải bước|bước đi|ngồi cầu thang|ngồi xổm)/.test(text)) tags.add("Toàn Thân");

    // Ánh sáng & Bối cảnh
    if (/(nắng|ánh sáng tự nhiên|ban ngày|ngược sáng|ngoài trời)/.test(text)) tags.add("Nắng Tự Nhiên");
    if (/(đêm|đèn vàng|đèn flash|ánh nến|đèn lồng|đèn neon|bar)/.test(text)) tags.add("Ánh Đèn Đêm");
    if (/(kiến trúc|bảo tàng|cầu thang|cổ kính|cầu đỏ|phòng trà|vườn nhật|phố cổ|tủ thuốc)/.test(text)) tags.add("Kiến Trúc Cổ");
    if (/(cafe|cà phê|tiệm bánh|quán đĩa|hiệu sách)/.test(text)) tags.add("Quán Cafe");

    // Phong thái
    if (/(áo dài|yukata|kimono|nón lá|gấm)/.test(text)) tags.add("Truyền Thống");
    if (/(streetwear|y2k|cá tính|rằn ri|all-black|bụi bặm|crop top|bốt da)/.test(text) || shootCode === "20260716") tags.add("Cá Tính");
    if (/(nàng thơ|dịu dàng|ngọt ngào|mơ màng|trong trẻo|e ấp)/.test(text)) tags.add("Nàng Thơ");

    return Array.from(tags).slice(0, 4);
}

async function main() {
    await fs.mkdir(OUT_DIR, { recursive: true });

    const files = await getAllImageFiles(RAW_DIR);
    if (files.length === 0) {
        console.log("⚠️ Không tìm thấy ảnh nào trong public/image!");
        return;
    }

    const cache = JSON.parse(await fs.readFile(CACHE_FILE, "utf-8"));
    const findCached = buildSmartCacheLookup(cache);

    console.log(`🔍 Tìm thấy ${files.length} ảnh gốc. Đang đối chiếu cache & nén chuẩn WebP (100% Offline)...\n`);

    const portfolioItems = [];
    let excludedCount = 0;
    let interludeCount = 0;
    let missingCacheCount = 0;

    for (let i = 0; i < files.length; i++) {
        const filePath = files[i];
        const relPath = path.relative(RAW_DIR, filePath);
        const normPath = relPath.replace(/\\/g, "/");
        const mediaId = extractMediaId(normPath);

        if (EXCLUDED_IDS.has(mediaId)) {
            excludedCount++;
            continue;
        }

        const aiMeta = findCached(normPath);
        if (!aiMeta) {
            missingCacheCount++;
            console.warn(`⚠️ Không tìm thấy cache cho: ${normPath}`);
            continue;
        }

        let shootCode = path.dirname(normPath) === "." ? "20261031" : path.dirname(normPath);
        if (normPath.includes("20261031")) shootCode = "20261031";

        const category = FOLDER_TO_CHAPTER[shootCode] || "Sunlit Lifestyle";
        const isInterlude = INTERLUDE_IDS.has(mediaId);
        if (isInterlude) interludeCount++;

        const heroIdx = HERO_PRIORITY.findIndex((id) => mediaId === id || normPath.toLowerCase().endsWith(id));
        const heroRank = heroIdx >= 0 ? heroIdx + 1 : undefined;

        try {
            const imagePipeline = sharp(filePath).rotate();
            const metadata = await imagePipeline.metadata();

            const ratio = (metadata.width || 1) / (metadata.height || 1);
            let layout = "square";
            if (ratio < 0.85) layout = "tall";
            else if (ratio > 1.2) layout = "wide";

            const webBuffer = await imagePipeline
                .resize({ width: 1400, height: 1800, fit: "inside", withoutEnlargement: true })
                .webp({ quality: 82 })
                .toBuffer();

            const indexStr = String(portfolioItems.length + 1).padStart(3, "0");
            const cleanName = `sulii-${slugify(aiMeta.title)}-${indexStr}.webp`;
            await fs.writeFile(path.join(OUT_DIR, cleanName), webBuffer);

            const agencyTags = deriveAgencyTags(aiMeta.visualSummary, aiMeta.rawAttributes, shootCode);

            portfolioItems.push({
                id: String(portfolioItems.length + 1),
                indexNo: indexStr,
                title: aiMeta.title.toUpperCase(),
                category,
                tags: aiMeta.rawAttributes.slice(0, 5),
                agencyTags,
                description: aiMeta.visualSummary,
                shootCode,
                client: "Sulii Archive",
                year: "2026",
                imageUrl: `/images/portfolio/${cleanName}`,
                layout,
                featured: Boolean(heroRank || aiMeta.featured),
                isInterlude,
                ...(heroRank ? { heroRank } : {}),
            });
        } catch (err) {
            console.error(`❌ Lỗi nén ảnh ${normPath}:`, err.message);
        }
    }

    // Sắp xếp thứ tự hiển thị Editorial:
    // 1. 6 tấm Hero lên đầu theo đúng thứ tự 1 -> 6
    // 2. Các tấm featured tiếp theo
    // 3. Các tấm còn lại xen kẽ giữ mạch theo đợt chụp mới -> cũ
    portfolioItems.sort((a, b) => {
        const rankA = a.heroRank ?? 999;
        const rankB = b.heroRank ?? 999;
        if (rankA !== rankB) return rankA - rankB;
        if (a.featured !== b.featured) return Number(b.featured) - Number(a.featured);
        if (a.isInterlude !== b.isInterlude) return Number(a.isInterlude) - Number(b.isInterlude);
        return b.shootCode.localeCompare(a.shootCode);
    });

    portfolioItems.forEach((item, idx) => {
        item.id = String(idx + 1);
        item.indexNo = String(idx + 1).padStart(3, "0");
    });

    // Cập nhật lib/data.ts sạch sẽ
    let dataTs = await fs.readFile(DATA_FILE, "utf-8");

    dataTs = dataTs.replace(
        /\n\s*(?:tags\?: string\[\];|agencyTags\?: string\[\];|description\?: string;|shootCode\?: string;|featured\?: boolean;|isInterlude\?: boolean;|heroRank\?: number;)/g,
        ""
    );
    dataTs = dataTs.replace(
        /category:\s*[^;]+;/,
        `category: string;\n  tags?: string[];\n  agencyTags?: string[];\n  description?: string;\n  shootCode?: string;\n  featured?: boolean;\n  isInterlude?: boolean;\n  heroRank?: number;`
    );

    const discoveredCategories = EDITORIAL_CHAPTERS.filter((c) => c.id !== "All").map((c) => c.id);

    const generatedBlock = `// === AUTO-GENERATED PORTFOLIO START ===
export interface EditorialChapter {
  id: string;
  index: string;
  label: string;
  subtitle: string;
  theme: {
    bg: string;
    surface: string;
    ink: string;
    muted: string;
    border: string;
    accent: string;
  };
}

export const EDITORIAL_CHAPTERS: EditorialChapter[] = ${JSON.stringify(EDITORIAL_CHAPTERS, null, 2)};

export const DISCOVERED_CATEGORIES: string[] = ${JSON.stringify(discoveredCategories, null, 2)};

export const PORTFOLIO_ITEMS: PortfolioItem[] = ${JSON.stringify(portfolioItems, null, 2)};
// === AUTO-GENERATED PORTFOLIO END ===`;

    if (dataTs.includes("// === AUTO-GENERATED PORTFOLIO START ===")) {
        dataTs = dataTs.replace(
            /\/\/ === AUTO-GENERATED PORTFOLIO START ===[\s\S]*?\/\/ === AUTO-GENERATED PORTFOLIO END ===/,
            generatedBlock
        );
    } else {
        dataTs = dataTs.replace(
            /export const PORTFOLIO_ITEMS:\s*PortfolioItem\[\]\s*=\s*\[[\s\S]*?\];/,
            generatedBlock
        );
    }

    await fs.writeFile(DATA_FILE, dataTs, "utf-8");

    console.log(`✅ Hoàn tất 100% Offline!`);
    console.log(`   • Đã xuất vào Lookbook: ${portfolioItems.length} ảnh (gồm ${interludeCount} ảnh đệm chuyển nhịp & 6 ảnh Hero đầu trang)`);
    console.log(`   • Đã loại bỏ ảnh tạp:   ${excludedCount} ảnh`);
    if (missingCacheCount > 0) console.log(`   • Chưa khớp cache:      ${missingCacheCount} ảnh`);
}

main().catch((err) => {
    console.error("❌ Lỗi:", err.message);
    process.exitCode = 1;
});