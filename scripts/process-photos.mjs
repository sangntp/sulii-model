import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { GoogleGenAI, Type } from "@google/genai";

const RAW_DIR = path.join(process.cwd(), "public", "image");
const OUT_DIR = path.join(process.cwd(), "public", "images", "portfolio");
const DATA_FILE = path.join(process.cwd(), "lib", "data.ts");
const CACHE_FILE = path.join(process.cwd(), "scripts", ".photo-cache.json");

const VALID_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".heic"]);
const BATCH_SIZE = 25;
const MODEL_NAME = "gemini-3.8-flash";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// 1. Đọc .env.local (xử lý sạch UTF-8 BOM của Windows PowerShell & hỗ trợ nhiều API key)
async function loadApiKeys() {
    try {
        const raw = await fs.readFile(".env.local", "utf-8");
        const envContent = raw.replace(/^\uFEFF/, "");
        for (const line of envContent.split(/\r?\n/)) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith("#")) continue;
            const eqIdx = trimmed.indexOf("=");
            if (eqIdx > 0) {
                const key = trimmed.slice(0, eqIdx).trim();
                const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, "");
                process.env[key] = val;
            }
        }
    } catch { }

    const pool = [];
    if (process.env.GEMINI_API_KEYS) {
        pool.push(...process.env.GEMINI_API_KEYS.split(",").map((k) => k.trim()));
    }
    if (process.env.GEMINI_API_KEY) {
        pool.push(process.env.GEMINI_API_KEY.trim());
    }
    return [...new Set(pool.filter(Boolean))];
}

// 2. Quản lý gọi API thông minh: tự thử lại khi 503/429 tạm thời & tự đổi key nếu hết hạn mức ngày
function createApiRunner(apiKeys) {
    let keyIndex = 0;

    return async function runWithRetry(buildRequest, maxRetries = 5) {
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            const ai = new GoogleGenAI({ apiKey: apiKeys[keyIndex] });
            try {
                return await buildRequest(ai);
            } catch (err) {
                const msg = err?.message || String(err);

                // Chạm trần 20 lượt/ngày của Project hiện tại
                if (msg.includes("PerDay")) {
                    if (keyIndex + 1 < apiKeys.length) {
                        keyIndex++;
                        console.log(`\n🔄 Key hiện tại đã hết hạn mức ngày ➔ Tự động chuyển sang API Key #${keyIndex + 1}...`);
                        attempt = 0;
                        continue;
                    }
                    const quotaErr = new Error("DAILY_QUOTA_EXCEEDED");
                    quotaErr.code = "DAILY_QUOTA_EXCEEDED";
                    throw quotaErr;
                }

                const isTemporary =
                    msg.includes("503") ||
                    msg.includes("UNAVAILABLE") ||
                    msg.includes("429") ||
                    msg.toLowerCase().includes("high demand") ||
                    msg.toLowerCase().includes("fetch failed");

                if (isTemporary && attempt < maxRetries) {
                    const waitSec = attempt * 15;
                    console.log(`\n⏳ Máy chủ Google đang bận (lần ${attempt}/${maxRetries}). Tự động thử lại sau ${waitSec} giây...`);
                    await sleep(waitSec * 1000);
                    continue;
                }
                throw err;
            }
        }
    };
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

// 3. Tra cứu cache đa lớp (khớp theo đường dẫn chuẩn, đường dẫn Windows, hoặc tên file gốc)
function buildCacheLookup(cacheObj) {
    const byFull = new Map();
    const byBase = new Map();

    for (const [key, val] of Object.entries(cacheObj)) {
        if (!val || !val.title) continue;
        const norm = key.replace(/\\/g, "/");
        byFull.set(key, val);
        byFull.set(norm, val);
        const baseName = path.basename(norm);
        if (baseName) {
            byBase.set(baseName, val);
            byBase.set(baseName.replace(/^_+/, ""), val);
        }
    }

    return (relPath) => {
        const norm = relPath.replace(/\\/g, "/");
        const baseName = path.basename(norm);
        return (
            byFull.get(relPath) ||
            byFull.get(norm) ||
            byBase.get(baseName) ||
            byBase.get(baseName.replace(/^_+/, ""))
        );
    };
}

// 4. Phân tích theo lô 25 ảnh bằng mã số ngắn ("1", "2"...) để tránh lệch tên file
async function analyzeBatchWithAI(runApi, batchItems) {
    const idToNormPath = new Map();
    const contents = [
        `Bạn là chuyên gia phân tích thị giác và quản lý hình ảnh người mẫu thời trang.
Dưới đây là ${batchItems.length} tấm ảnh của người mẫu "Sulii", mỗi tấm đi kèm mã số "photoId".
Hãy quan sát từng tấm ảnh và tự mô tả chính xác những gì thực sự xuất hiện:
1. photoId: Giữ nguyên chính xác chuỗi số photoId được cung cấp ngay phía trên mỗi ảnh.
2. title: Đặt tên concept ngắn gọn bằng tiếng Anh (2 - 4 từ viết hoa) phản ánh đúng tinh thần bức ảnh.
3. visualSummary: Mô tả 1 câu ngắn gọn bằng tiếng Việt về trang phục, bối cảnh, ánh sáng và biểu cảm.
4. rawAttributes: Mảng 5 - 7 từ khóa tiếng Việt ngắn gọn (1 - 3 chữ/từ) mô tả tự do đặc điểm nổi bật nhất.
5. featured: true nếu ảnh xuất sắc nhất đáng đưa lên đầu trang; ngược lại false.`
    ];

    batchItems.forEach((item, idx) => {
        const pid = String(idx + 1);
        idToNormPath.set(pid, item.normPath);
        contents.push(`Ảnh có photoId: "${pid}"`);
        contents.push({
            inlineData: {
                mimeType: "image/webp",
                data: item.aiThumbBuffer.toString("base64"),
            },
        });
    });

    const rawResults = await runApi(async (ai) => {
        const response = await ai.models.generateContent({
            model: MODEL_NAME,
            contents,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            photoId: { type: Type.STRING },
                            title: { type: Type.STRING },
                            visualSummary: { type: Type.STRING },
                            rawAttributes: {
                                type: Type.ARRAY,
                                items: { type: Type.STRING },
                            },
                            featured: { type: Type.BOOLEAN },
                        },
                        required: ["photoId", "title", "visualSummary", "rawAttributes", "featured"],
                    },
                },
            },
        });
        return JSON.parse(response.text);
    });

    return rawResults.map((res) => ({
        ...res,
        resolvedNormPath: idToNormPath.get(String(res.photoId).trim()),
    }));
}

// 5. Bộ phân loại dự phòng cục bộ (đảm bảo luôn xuất được data.ts kể cả khi hết quota API)
function fallbackLocalTaxonomy(items) {
    const categories = ["Traditional", "Casual Outdoor", "Sweet Birthday", "Vintage Retro", "Modern Chic"];
    const normalizedItems = items.map((item) => {
        const text = `${item.visualSummary} ${item.rawAttributes.join(" ")}`.toLowerCase();
        let category = "Modern Chic";
        if (text.includes("áo dài") || text.includes("cổ phục") || text.includes("truyền thống") || text.includes("nón lá")) {
            category = "Traditional";
        } else if (text.includes("sinh nhật") || text.includes("bánh kem") || text.includes("vương miện") || text.includes("bóng bay")) {
            category = "Sweet Birthday";
        } else if (text.includes("cổ điển") || text.includes("retro") || text.includes("vintage") || text.includes("phim")) {
            category = "Vintage Retro";
        } else if (text.includes("ngoài trời") || text.includes("công viên") || text.includes("đường phố") || text.includes("cây xanh") || text.includes("nắng")) {
            category = "Casual Outdoor";
        }

        return {
            id: item.id,
            category,
            tags: item.rawAttributes.slice(0, 5),
        };
    });

    return { discoveredCategories: categories, normalizedItems };
}

async function synthesizeTaxonomy(runApi, items) {
    const compactList = items.map((item) => ({
        id: item.id,
        summary: item.visualSummary,
        attrs: item.rawAttributes,
    }));

    const prompt = `Dưới đây là danh sách đặc điểm thực tế được trích xuất từ ${items.length} tấm ảnh của người mẫu Sulii.
Nhiệm vụ của bạn là tự động khám phá cấu trúc của kho ảnh này và chuẩn hóa lại để hiển thị bộ lọc trên website booking:
1. Tự đúc kết ra từ 4 đến 7 nhóm chủ đề lớn (category) bao quát toàn bộ kho ảnh (tên nhóm tiếng Anh ngắn gọn 1-2 từ, viết hoa chữ cái đầu, phản ánh đúng thực tế).
2. Chuẩn hóa lại mảng tags (3 - 5 thẻ tiếng Việt ngắn gọn) cho từng ảnh bằng cách gộp các từ đồng nghĩa để khách hàng dễ lọc trên web.
3. Trả về danh sách ánh xạ chính xác theo từng id.`;

    try {
        return await runApi(async (ai) => {
            const response = await ai.models.generateContent({
                model: MODEL_NAME,
                contents: [prompt, JSON.stringify(compactList)],
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            discoveredCategories: {
                                type: Type.ARRAY,
                                items: { type: Type.STRING },
                            },
                            normalizedItems: {
                                type: Type.ARRAY,
                                items: {
                                    type: Type.OBJECT,
                                    properties: {
                                        id: { type: Type.STRING },
                                        category: { type: Type.STRING },
                                        tags: {
                                            type: Type.ARRAY,
                                            items: { type: Type.STRING },
                                        },
                                    },
                                    required: ["id", "category", "tags"],
                                },
                            },
                        },
                        required: ["discoveredCategories", "normalizedItems"],
                    },
                },
            });
            return JSON.parse(response.text);
        });
    } catch {
        console.log("⚠️ Không thể gọi API tổng hợp (hết hạn mức) ➔ Sử dụng bộ phân loại chuẩn hóa cục bộ...");
        return fallbackLocalTaxonomy(items);
    }
}

async function main() {
    const apiKeys = await loadApiKeys();
    if (apiKeys.length === 0) {
        console.error("❌ Lỗi: Chưa tìm thấy GEMINI_API_KEY trong file .env.local");
        process.exitCode = 1;
        return;
    }

    const runApi = createApiRunner(apiKeys);
    await fs.mkdir(OUT_DIR, { recursive: true });

    const files = await getAllImageFiles(RAW_DIR);
    if (files.length === 0) {
        console.log("⚠️ Không tìm thấy ảnh nào trong public/image!");
        return;
    }

    let cache = {};
    try {
        cache = JSON.parse(await fs.readFile(CACHE_FILE, "utf-8"));
    } catch {
        cache = {};
    }

    const findCached = buildCacheLookup(cache);
    console.log(`🔍 Tìm thấy ${files.length} ảnh (đã có ${Object.keys(cache).length} mục trong cache, nạp ${apiKeys.length} API key).`);
    console.log(`⚙️ Đang nén ảnh chuẩn WebP và đồng bộ cache...`);

    const preparedFiles = [];
    let cacheSynced = false;

    for (let i = 0; i < files.length; i++) {
        const filePath = files[i];
        const relPath = path.relative(RAW_DIR, filePath);
        const normPath = relPath.replace(/\\/g, "/");
        const shootFolder = path.dirname(normPath) === "." ? "Archive" : path.dirname(normPath);
        const cachedItem = findCached(relPath);

        // Chuẩn hóa lại key trong cache để lần sau tra cứu tức thì
        if (cachedItem && !cache[normPath]) {
            cache[normPath] = cachedItem;
            cacheSynced = true;
        }

        try {
            const imagePipeline = sharp(filePath).rotate();
            const metadata = await imagePipeline.metadata();

            const ratio = (metadata.width || 1) / (metadata.height || 1);
            let layout = "square";
            if (ratio < 0.85) layout = "tall";
            else if (ratio > 1.2) layout = "wide";

            const webBuffer = await imagePipeline
                .clone()
                .resize({ width: 1400, height: 1800, fit: "inside", withoutEnlargement: true })
                .webp({ quality: 82 })
                .toBuffer();

            const aiThumbBuffer = cachedItem
                ? null
                : await imagePipeline
                    .clone()
                    .resize({ width: 448, height: 448, fit: "inside" })
                    .webp({ quality: 68 })
                    .toBuffer();

            preparedFiles.push({
                index: i + 1,
                relPath,
                normPath,
                shootFolder,
                layout,
                webBuffer,
                aiThumbBuffer,
            });
        } catch (err) {
            console.error(`❌ Lỗi đọc ảnh ${normPath}:`, err.message);
        }
    }

    if (cacheSynced) {
        await fs.writeFile(CACHE_FILE, JSON.stringify(cache, null, 2), "utf-8");
    }

    const uncached = preparedFiles.filter((f) => !cache[f.normPath]);
    const totalBatches = Math.ceil(uncached.length / BATCH_SIZE);

    if (uncached.length > 0) {
        console.log(`🚀 Cần phân tích ${uncached.length} ảnh còn lại ➔ Chia thành ${totalBatches} lượt gọi API (${BATCH_SIZE} ảnh/lượt)...\n`);

        for (let b = 0; b < totalBatches; b++) {
            const batch = uncached.slice(b * BATCH_SIZE, (b + 1) * BATCH_SIZE);
            process.stdout.write(`[Lượt ${b + 1}/${totalBatches}] Đang gửi nhóm ${batch.length} ảnh cho AI... `);

            try {
                const results = await analyzeBatchWithAI(runApi, batch);
                let matchedCount = 0;

                for (const res of results) {
                    if (res.resolvedNormPath) {
                        cache[res.resolvedNormPath] = {
                            title: res.title,
                            visualSummary: res.visualSummary,
                            rawAttributes: res.rawAttributes,
                            featured: res.featured,
                        };
                        matchedCount++;
                    }
                }

                await fs.writeFile(CACHE_FILE, JSON.stringify(cache, null, 2), "utf-8");
                console.log(`✅ Xong ${matchedCount}/${batch.length} ảnh!`);

                if (b < totalBatches - 1) await sleep(5000);
            } catch (err) {
                if (err.code === "DAILY_QUOTA_EXCEEDED") {
                    console.log(`\n\n⛔ Đã chạm trần hạn mức miễn phí 20 lượt/ngày của Google AI Studio.`);
                    console.log(`🕒 Hạn mức sẽ tự động mở lại vào 15:00 chiều nay (00:00 UTC-8).`);
                    console.log(`💾 Toàn bộ tiến độ trước đó đã được lưu an toàn. Bạn chỉ cần chạy lại "node scripts/process-photos.mjs" sau 15:00.`);
                } else {
                    console.error(`\n❌ Lỗi ở lượt ${b + 1}:`, err.message);
                }
                process.exitCode = 1;
                return;
            }
        }
    } else {
        console.log(`⚡ Toàn bộ ${preparedFiles.length}/${preparedFiles.length} ảnh đã khớp dữ liệu từ cache!`);
    }

    const rawItems = [];
    for (const item of preparedFiles) {
        const aiMeta = cache[item.normPath];
        if (!aiMeta) continue;

        const indexStr = String(item.index).padStart(3, "0");
        const cleanName = `sulii-${slugify(aiMeta.title)}-${indexStr}.webp`;
        await fs.writeFile(path.join(OUT_DIR, cleanName), item.webBuffer);

        rawItems.push({
            id: String(item.index),
            shootFolder: item.shootFolder,
            title: aiMeta.title.toUpperCase(),
            visualSummary: aiMeta.visualSummary,
            rawAttributes: aiMeta.rawAttributes,
            imageUrl: `/images/portfolio/${cleanName}`,
            layout: item.layout,
            featured: aiMeta.featured,
        });
    }

    console.log(`\n🧠 Đang tổng hợp & chuẩn hóa nhóm chủ đề từ ${rawItems.length} ảnh...`);
    const taxonomy = await synthesizeTaxonomy(runApi, rawItems);
    const normMap = new Map(taxonomy.normalizedItems.map((n) => [n.id, n]));

    console.log(`📂 Các nhóm chủ đề: ${taxonomy.discoveredCategories.join(" | ")}`);

    const portfolioItems = rawItems.map((item) => {
        const norm = normMap.get(item.id);
        return {
            id: item.id,
            indexNo: item.id.padStart(2, "0"),
            title: item.title,
            category: norm ? norm.category : "Modern Chic",
            tags: norm ? norm.tags : item.rawAttributes,
            description: item.visualSummary,
            shootCode: item.shootFolder,
            client: "Sulii Archive",
            year: "2026",
            imageUrl: item.imageUrl,
            layout: item.layout,
            featured: item.featured,
        };
    });

    portfolioItems.sort((a, b) => Number(b.featured) - Number(a.featured));
    portfolioItems.forEach((item, idx) => {
        item.id = String(idx + 1);
        item.indexNo = String(idx + 1).padStart(2, "0");
    });

    let dataTs = await fs.readFile(DATA_FILE, "utf-8");

    // Dọn dẹp nếu interface PortfolioItem từng bị chèn trùng trường ở các lần chạy trước
    dataTs = dataTs.replace(/\n\s*(?:tags\?: string\[\];|description\?: string;|shootCode\?: string;|featured\?: boolean;)/g, "");
    dataTs = dataTs.replace(
        /category:\s*[^;]+;/,
        `category: string;\n  tags?: string[];\n  description?: string;\n  shootCode?: string;\n  featured?: boolean;`
    );

    const generatedBlock = `// === AUTO-GENERATED PORTFOLIO START ===
export const DISCOVERED_CATEGORIES: string[] = ${JSON.stringify(taxonomy.discoveredCategories, null, 2)};

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
    console.log(`\n🎉 Hoàn tất! Toàn bộ ${portfolioItems.length} ảnh đã được nén và cập nhật vào lib/data.ts`);
}

main().catch((err) => {
    console.error("❌ Lỗi không mong muốn:", err.message);
    process.exitCode = 1;
});