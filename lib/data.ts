export type VibeMode = "street" | "editorial" | "commercial";
export type ConceptCategory = "All" | "Editorial" | "Streetwear" | "Commercial" | "Beauty";

export interface PortfolioItem {
  id: string;
  indexNo: string;
  title: string;
  category: string;
  tags?: string[];
  agencyTags?: string[];
  description?: string;
  shootCode?: string;
  featured?: boolean;
  isInterlude?: boolean;
  heroRank?: number;
  client: string;
  year: string;
  imageUrl: string;
  layout: "wide" | "tall" | "offset";
}

export const VIBE_THEMES: Record<
  VibeMode,
  {
    label: string;
    subtitle: string;
    bg: string;
    text: string;
    muted: string;
    accent: string;
    accentText: string;
    border: string;
    cardBg: string;
  }
> = {
  street: {
    label: "01. STREET / ENERGY",
    subtitle: "Trẻ trung • Năng động • Phá cách",
    bg: "#F4F3EF",
    text: "#121212",
    muted: "#5C5C58",
    accent: "#D4FF00",
    accentText: "#121212",
    border: "rgba(18, 18, 18, 0.14)",
    cardBg: "#EAE8E1",
  },
  editorial: {
    label: "02. EDITORIAL / NOIR",
    subtitle: "Sắc sảo • High-Fashion • Nghệ thuật",
    bg: "#0D0D0D",
    text: "#F5F5F2",
    muted: "#9A9A95",
    accent: "#FFFFFF",
    accentText: "#0D0D0D",
    border: "rgba(255, 255, 255, 0.16)",
    cardBg: "#1A1A1A",
  },
  commercial: {
    label: "03. COMMERCIAL / SUN",
    subtitle: "Tươi sáng • Tự nhiên • Thu hút nhãn hàng",
    bg: "#FDF7F0",
    text: "#221C1A",
    muted: "#756863",
    accent: "#FF5E3A",
    accentText: "#FFFFFF",
    border: "rgba(34, 28, 26, 0.14)",
    cardBg: "#F4E9DC",
  },
};

export const MODEL_PROFILE = {
  stageName: "SULLI",
  code: "SL—2026 / HCMC",
  tagline: "THE CHAMELEON MUSE",
  location: "Ho Chi Minh City, VN",
  bio: "Không đóng khung trong một hình mẫu cố định. Sulli biến hóa linh hoạt theo từng ngôn ngữ hình ảnh của nhãn hàng — từ năng lượng đường phố phóng khoáng, vẻ đẹp thương mại gần gũi đến những khung hình Editorial giàu tính nghệ thuật.",
  availability: "OPEN FOR BOOKING • Q4/2026",
  heroImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&q=85",
  polaroidImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=85",
  stats: [
    { label: "HEIGHT", value: "168 CM" },
    { label: "BUST / WAIST / HIPS", value: "80 - 60 - 88" },
    { label: "SHOES", value: "37 EU" },
    { label: "HAIR / EYES", value: "BLACK / DARK BROWN" },
  ],
  socials: {
    instagram: "@sulli.model",
    tiktok: "@sulli.vibe",
    email: "booking.sulli@gmail.com",
    zalo: "0900 000 000",
  },
};

export const CATEGORIES: ConceptCategory[] = [
  "All",
  "Editorial",
  "Streetwear",
  "Commercial",
  "Beauty",
];

// === AUTO-GENERATED PORTFOLIO START ===
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

export const EDITORIAL_CHAPTERS: EditorialChapter[] = [
  {
    "id": "All",
    "index": "00",
    "label": "Toàn bộ kho ảnh",
    "subtitle": "Tổng hợp 16 buổi chụp tuyển chọn của Sulii — từ áo dài cổ điển, chân dung phòng tối đến phong cách dạo phố tự nhiên.",
    "theme": {
      "bg": "#F6F4EF",
      "surface": "#ECE8DF",
      "ink": "#151412",
      "muted": "#6B655D",
      "border": "rgba(21, 20, 18, 0.14)",
      "accent": "#7A2E2A"
    }
  },
  {
    "id": "Heritage & Muse",
    "index": "01",
    "label": "Heritage & Muse",
    "subtitle": "Áo dài, lụa gấm và Yukata — tôn vinh vẻ đẹp Á Đông thanh lịch trong không gian bảo tàng và vườn cổ.",
    "theme": {
      "bg": "#F5F0E6",
      "surface": "#EAE2D3",
      "ink": "#1E1A17",
      "muted": "#6E6357",
      "border": "rgba(30, 26, 23, 0.16)",
      "accent": "#8E2E2B"
    }
  },
  {
    "id": "Noir & Retro",
    "index": "02",
    "label": "Noir & Retro",
    "subtitle": "Trang phục đen tối giản trong ánh đèn trầm ấm của phòng trà, quán đĩa than và những khung hình điện ảnh về đêm.",
    "theme": {
      "bg": "#111010",
      "surface": "#1B1918",
      "ink": "#EFEAE1",
      "muted": "#9E9589",
      "border": "rgba(239, 234, 225, 0.16)",
      "accent": "#C89B54"
    }
  },
  {
    "id": "Coquette & Dreamy",
    "index": "03",
    "label": "Coquette & Dreamy",
    "subtitle": "Sắc kem, váy ren trắng và ánh nến dịu nhẹ gợi cảm giác ngọt ngào, nữ tính và lãng mạn.",
    "theme": {
      "bg": "#FBF4F1",
      "surface": "#F2E5DF",
      "ink": "#382622",
      "muted": "#846A63",
      "border": "rgba(56, 38, 34, 0.14)",
      "accent": "#B87A52"
    }
  },
  {
    "id": "Sunlit Lifestyle",
    "index": "04",
    "label": "Sunlit Lifestyle",
    "subtitle": "Ánh nắng tự nhiên, bối cảnh dạo phố, miệt vườn và phong cách streetwear trẻ trung, giàu năng lượng.",
    "theme": {
      "bg": "#F7F8F6",
      "surface": "#EBEEE9",
      "ink": "#151816",
      "muted": "#5D6660",
      "border": "rgba(21, 24, 22, 0.14)",
      "accent": "#3E664F"
    }
  }
];

export const DISCOVERED_CATEGORIES: string[] = [
  "Heritage & Muse",
  "Noir & Retro",
  "Coquette & Dreamy",
  "Sunlit Lifestyle"
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    "id": "1",
    "indexNo": "001",
    "title": "AUTUMN GLOW PORTRAIT",
    "category": "Sunlit Lifestyle",
    "tags": [
      "áo măng tô",
      "khăn choàng",
      "ngược sáng",
      "nắng vàng",
      "thần thái mơ màng"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Nắng Tự Nhiên",
      "Nàng Thơ"
    ],
    "description": "Người mẫu mặc áo khoác măng tô màu be phối khăn choàng sáng màu, quay đầu nhìn với ánh mắt mơ màng dưới ánh nắng ven chiều thu ngược sáng tuyệt đẹp.",
    "shootCode": "20261031",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-autumn-glow-portrait-154.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false,
    "heroRank": 1
  },
  {
    "id": "2",
    "indexNo": "002",
    "title": "BLOOMING RADIANCE",
    "category": "Heritage & Muse",
    "tags": [
      "chân dung cận",
      "nét đẹp trong trẻo",
      "hoa ly rực rỡ",
      "ánh nắng xiên",
      "áo dài ren"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Nắng Tự Nhiên",
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Chân dung cận cảnh Sulii rạng rỡ bên khung cửa đón nắng ban mai, nét mặt thanh tú cùng bó hoa ly khoe sắc thắm.",
    "shootCode": "20261115",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-blooming-radiance-175.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false,
    "heroRank": 2
  },
  {
    "id": "3",
    "indexNo": "003",
    "title": "ORIENTAL PARASOL CHARM",
    "category": "Heritage & Muse",
    "tags": [
      "ô giấy truyền thống",
      "cầu đỏ",
      "kimono xanh",
      "vườn cảnh",
      "góc nghiêng"
    ],
    "agencyTags": [
      "Kiến Trúc Cổ",
      "Truyền Thống"
    ],
    "description": "Sulii cầm chiếc ô giấy truyền thống đứng trên cầu đỏ giữa cảnh quan xanh ngát và hồ nước tĩnh lặng.",
    "shootCode": "20260925",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-oriental-parasol-charm-124.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false,
    "heroRank": 3
  },
  {
    "id": "4",
    "indexNo": "004",
    "title": "COZY RECORD NOOK",
    "category": "Noir & Retro",
    "tags": [
      "cận cảnh ngọt ngào",
      "kệ đĩa nhạc",
      "đèn trang trí",
      "nụ cười dịu dàng",
      "ánh sáng vàng dịu"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Nàng Thơ"
    ],
    "description": "Sulii nở nụ cười ngọt ngào cận cảnh bên bàn trang trí nghệ thuật, nổi bật trên nền kệ đĩa nhạc retro ấm áp.",
    "shootCode": "20260814",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-cozy-record-nook-085.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false,
    "heroRank": 4
  },
  {
    "id": "5",
    "indexNo": "005",
    "title": "WARM CANDLELIGHT WISH",
    "category": "Coquette & Dreamy",
    "tags": [
      "ánh nến lung linh",
      "vương miện hoa",
      "ngắm bánh kem",
      "không gian tối ấm",
      "dịu dàng lãng mạn"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm",
      "Nàng Thơ"
    ],
    "description": "Sulii đội vương miện công chúa, dịu dàng ngắm nhìn ánh nến lung linh trên chiếc bánh kem trong không gian tối ấm áp.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-warm-candlelight-wish-034.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false,
    "heroRank": 5
  },
  {
    "id": "6",
    "indexNo": "006",
    "title": "MONOCHROME GRAPHIC ATTITUDE",
    "category": "Sunlit Lifestyle",
    "tags": [
      "set đồ all-black",
      "tạo dáng một chân",
      "khoanh tay",
      "poster đen trắng",
      "năng động cá tính"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Cá Tính"
    ],
    "description": "Cô nàng đứng co chân tạo dáng tinh nghịch trước mảng tường poster đen trắng với trang phục all-black khỏe khoắn.",
    "shootCode": "20260716",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-monochrome-graphic-attitude-024.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false,
    "heroRank": 6
  },
  {
    "id": "7",
    "indexNo": "007",
    "title": "RUSTIC NOSTALGIC BEAUTY",
    "category": "Heritage & Muse",
    "tags": [
      "kệ nước ngọt xưa",
      "hoa hồng hạc",
      "lồng đèn cá chép",
      "áo dài truyền thống",
      "nét mặt trong trẻo"
    ],
    "agencyTags": [
      "Kiến Trúc Cổ",
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Sulii ngồi e ấp bên kệ nước ngọt cổ kính và lồng đèn cá chép, tay cầm nhành hoa hồng pastel với ánh mắt cuốn hút.",
    "shootCode": "20261012",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-rustic-nostalgic-beauty-144.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false
  },
  {
    "id": "8",
    "indexNo": "008",
    "title": "YUKATA BY THE POND",
    "category": "Heritage & Muse",
    "tags": [
      "yukata xanh nhạt",
      "hoa cài tóc",
      "ngồi bên hồ",
      "góc nghiêng",
      "dịu dàng"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Sulii diện yukata xanh nhạt thắt nơ ren cùng hoa cài tóc tinh khôi, ngồi tựa gối dịu dàng bên bờ đá cạnh hồ nước ngoài trời.",
    "shootCode": "20260925",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-yukata-by-the-pond-113.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false
  },
  {
    "id": "9",
    "indexNo": "009",
    "title": "TEA HOUSE PROFILE",
    "category": "Heritage & Muse",
    "tags": [
      "góc nghiêng thanh thoát",
      "quạt giấy cầm tay",
      "hoa trắng cài tóc",
      "yukata hoa văn",
      "hiên quán trà"
    ],
    "agencyTags": [
      "Truyền Thống"
    ],
    "description": "Sulii để lộ góc nghiêng kiêu sa cùng đóa hoa trắng cài tóc, tay cầm quạt giấy thư thái bên hiên quán rợp bóng cây xanh.",
    "shootCode": "20260925",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-tea-house-profile-119.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false
  },
  {
    "id": "10",
    "indexNo": "010",
    "title": "VINTAGE CAMERA MIRROR",
    "category": "Noir & Retro",
    "tags": [
      "máy ảnh film",
      "soi gương",
      "giá sách gỗ",
      "áo cardigan đen",
      "nụ cười tươi tắn"
    ],
    "agencyTags": [
      "Quán Cafe",
      "Nàng Thơ"
    ],
    "description": "Sulii mỉm cười ngọt ngào trước gương trong hiệu sách vintage, trên tay cầm máy ảnh film nhỏ xinh bên cạnh dãy máy ảnh Kodak cổ điển.",
    "shootCode": "20260915",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-vintage-camera-mirror-108.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false
  },
  {
    "id": "11",
    "indexNo": "011",
    "title": "YELLOW BLOSSOM CHARM",
    "category": "Sunlit Lifestyle",
    "tags": [
      "váy hai dây xanh",
      "hoa vàng",
      "vườn hoa",
      "cận cảnh",
      "ánh sáng tự nhiên"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Nắng Tự Nhiên",
      "Nàng Thơ"
    ],
    "description": "Người mẫu diện váy hoa nhí xanh hai dây dịu dàng, cầm bông hoa vàng che trước miệng với ánh mắt ngây thơ giữa khu vườn ngập tràn cây xanh.",
    "shootCode": "20260822",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-yellow-blossom-charm-098.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false
  },
  {
    "id": "12",
    "indexNo": "012",
    "title": "MEKONG RIVER CHARM",
    "category": "Sunlit Lifestyle",
    "tags": [
      "váy chấm bi",
      "nón lá",
      "xuồng ba lá",
      "dừa nước",
      "cận cảnh"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Sulii đội nón lá quai ngọc thanh tú, diện váy chấm bi hai dây ngồi xuồng ba lá lướt nhẹ qua những rặng dừa nước mát rượi.",
    "shootCode": "20260807",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-mekong-river-charm-068.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false
  },
  {
    "id": "13",
    "indexNo": "013",
    "title": "COUNTRYSIDE SUMMER CHARM",
    "category": "Sunlit Lifestyle",
    "tags": [
      "váy chấm bi",
      "nón lá",
      "xe ngựa",
      "chu môi tinh nghịch",
      "nắng hè rực rỡ"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Nắng Tự Nhiên",
      "Truyền Thống"
    ],
    "description": "Sulii diện váy hai dây chấm bi và đội nón lá truyền thống, tạo dáng chu môi tinh nghịch bên cỗ xe ngựa dưới nắng vàng.",
    "shootCode": "20260807",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-countryside-summer-charm-083.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false
  },
  {
    "id": "14",
    "indexNo": "014",
    "title": "BLOOMING WHITE BEAUTY",
    "category": "Sunlit Lifestyle",
    "tags": [
      "cận cảnh",
      "áo trễ vai",
      "hoa giấy trắng",
      "nụ cười mỉm",
      "ánh sáng tự nhiên"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Nắng Tự Nhiên",
      "Nàng Thơ"
    ],
    "description": "Nữ người mẫu khoe nhan sắc trong trẻo với áo trắng bồng bềnh bên giàn hoa giấy trắng ngập tràn ánh sáng tự nhiên.",
    "shootCode": "20260728",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-blooming-white-beauty-055.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false
  },
  {
    "id": "15",
    "indexNo": "015",
    "title": "GOLDEN HOUR SERENITY",
    "category": "Coquette & Dreamy",
    "tags": [
      "nắng vàng rực rỡ",
      "bên khung cửa sổ",
      "góc nghiêng dịu dàng",
      "váy hoa bồng",
      "ánh sáng tự nhiên"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Nàng Thơ"
    ],
    "description": "Đắm mình trong vạt nắng chiều vàng ươm bên bậu cửa sổ, Sulii nghiêng đầu ngắm nhìn ra ngoài với góc nghiêng thanh tú tĩnh lặng.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-golden-hour-serenity-036.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false
  },
  {
    "id": "16",
    "indexNo": "016",
    "title": "SUNLIT WINDOW REFLECTION",
    "category": "Coquette & Dreamy",
    "tags": [
      "váy hoa nhí",
      "bậu cửa sổ",
      "nắng tự nhiên",
      "bánh sinh nhật",
      "nét mặt trầm tư"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên"
    ],
    "description": "Sulii diện váy hoa nhí tay bồng ngồi bên bậu cửa sổ ngập nắng tự nhiên, bên cạnh là chiếc bánh kem sinh nhật với nét mặt trầm tư nhẹ nhàng.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sunlit-window-reflection-037.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false
  },
  {
    "id": "17",
    "indexNo": "017",
    "title": "JOYFUL CROWN MOMENT",
    "category": "Coquette & Dreamy",
    "tags": [
      "nụ cười rạng rỡ",
      "vương miện hoa",
      "nắng chiều",
      "cầm bánh kem",
      "góc chụp trung cảnh"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Nàng Thơ"
    ],
    "description": "Sulii rạng rỡ nâng bánh sinh nhật, tay chạm vương miện và mỉm cười hạnh phúc dưới vệt nắng chiều rọi qua khung cửa kính.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-joyful-crown-moment-039.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false
  },
  {
    "id": "18",
    "indexNo": "018",
    "title": "COZY CAFE DATE",
    "category": "Coquette & Dreamy",
    "tags": [
      "chống cằm cười",
      "váy hoa nhí",
      "bánh sinh nhật",
      "quán cà phê",
      "ánh sáng tự nhiên"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Quán Cafe",
      "Nàng Thơ"
    ],
    "description": "Nàng mẫu diện váy hoa vintage nhẹ nhàng chống cằm mỉm cười ngọt ngào bên bàn tiệc bánh kem trong quán cà phê ngập nắng.",
    "shootCode": "20260723",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-cozy-cafe-date-027.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false
  },
  {
    "id": "19",
    "indexNo": "019",
    "title": "SUNLIT DREAMY AFTERNOON",
    "category": "Coquette & Dreamy",
    "tags": [
      "vạt nắng chiều",
      "chống cằm mơ màng",
      "váy bèo tay bồng",
      "tường chữ nghệ thuật",
      "bánh ngọt"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Nắng Tự Nhiên",
      "Nàng Thơ"
    ],
    "description": "Ánh nắng chiều vạt chéo qua bức tường chữ làm nổi bật gương mặt thanh tú và nét mơ màng của Sulii bên bàn bánh ngọt.",
    "shootCode": "20260723",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sunlit-dreamy-afternoon-028.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false
  },
  {
    "id": "20",
    "indexNo": "020",
    "title": "SOFT ORIENTAL GRACE",
    "category": "Heritage & Muse",
    "tags": [
      "áo gấm hồng",
      "nội thất mộc",
      "tone hồng be",
      "ánh sáng ấm",
      "dịu dàng"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Sulii diện trang phục lụa gấm hồng trang nhã với nụ cười ngọt ngào trong bối cảnh nội thất mộc mạc ấm cúng.",
    "shootCode": "20260119",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-soft-oriental-grace-001.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false
  },
  {
    "id": "21",
    "indexNo": "021",
    "title": "PLAYFUL PINK CHARM",
    "category": "Heritage & Muse",
    "tags": [
      "áo gấm hồng",
      "nháy mắt duyên dáng",
      "tóc uốn sóng lọn",
      "nội thất mộc",
      "tone màu ấm"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Sulii diện áo gấm màu hồng phấn dịu dàng, tạo dáng nháy mắt tinh nghịch trong không gian nội thất mang phong cách mộc mạc ấm cúng.",
    "shootCode": "20260119",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-playful-pink-charm-002.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false
  },
  {
    "id": "22",
    "indexNo": "022",
    "title": "PLAYFUL PINK CHARM",
    "category": "Heritage & Muse",
    "tags": [
      "áo gấm hồng",
      "không gian ấm cúng",
      "tone hồng ấm",
      "ánh sáng dịu",
      "nháy mắt tinh nghịch"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Truyền Thống"
    ],
    "description": "Sulii diện áo gấm hồng duyên dáng, tinh nghịch nháy mắt chống cằm trong không gian ấm cúng dưới ánh sáng nhẹ nhàng.",
    "shootCode": "20260119",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-playful-pink-charm-006.webp",
    "layout": "tall",
    "featured": true,
    "isInterlude": false
  },
  {
    "id": "23",
    "indexNo": "023",
    "title": "STAIRWAY ELEGANCE",
    "category": "Heritage & Muse",
    "tags": [
      "áo dài cách tân",
      "cầu thang cổ",
      "hoa ly hồng",
      "ánh sáng tự nhiên",
      "dịu dàng"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Kiến Trúc Cổ",
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Sulii duyên dáng trong tà áo dài trắng kem ôm bó hoa ly hồng, đứng bên bậc cầu thang cổ điển đón ánh sáng trời.",
    "shootCode": "20261115",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-stairway-elegance-168.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "24",
    "indexNo": "024",
    "title": "GENTLE NOSTALGIA",
    "category": "Heritage & Muse",
    "tags": [
      "áo dài trắng",
      "ghế gỗ cổ",
      "nụ cười dịu dàng",
      "hoa ly hồng",
      "tone màu ấm"
    ],
    "agencyTags": [
      "Kiến Trúc Cổ",
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Sulii ngồi e ấp trên chiếc ghế gỗ khảm trai cổ kính, mỉm cười nhẹ nhàng khi ngắm nhìn bó hoa ly rực rỡ.",
    "shootCode": "20261115",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-gentle-nostalgia-169.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "25",
    "indexNo": "025",
    "title": "VINTAGE PORTRAIT",
    "category": "Heritage & Muse",
    "tags": [
      "phong cách vintage",
      "áo dài lụa",
      "thần thái mơ màng",
      "hoa ly hồng",
      "không gian xưa"
    ],
    "agencyTags": [
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Khoảnh khắc Sulii ngồi trầm tư trên ghế tựa gỗ truyền thống, tay nâng bó hoa tươi trong không gian hoài cổ tĩnh lặng.",
    "shootCode": "20261115",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-vintage-portrait-170.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "26",
    "indexNo": "026",
    "title": "WINDOW LIGHT SERENITY",
    "category": "Heritage & Muse",
    "tags": [
      "ngược sáng",
      "khung cửa sổ",
      "dáng thướt tha",
      "áo dài trắng",
      "sàn gạch bông"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Truyền Thống"
    ],
    "description": "Sulii đứng ngược sáng bên khung cửa sổ sổ chớp lớn ngập tràn ánh nắng, khoe vóc dáng thướt tha cùng tà áo dài trắng.",
    "shootCode": "20261115",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-window-light-serenity-171.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "27",
    "indexNo": "027",
    "title": "DOORWAY MEMORIES",
    "category": "Heritage & Muse",
    "tags": [
      "cửa chớp xanh",
      "áo dài trắng",
      "ánh nhìn e lệ",
      "hoa ly hồng",
      "tone màu pastel"
    ],
    "agencyTags": [
      "Kiến Trúc Cổ",
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Sulii xuất hiện dịu dàng qua cánh cửa chớp màu lam cổ kính, ánh mắt khẽ cúi nhìn bó hoa ly trên tay.",
    "shootCode": "20261115",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-doorway-memories-172.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "28",
    "indexNo": "028",
    "title": "SPIRAL STAIRS GRACE",
    "category": "Heritage & Muse",
    "tags": [
      "cầu thang xoắn",
      "kiến trúc cổ",
      "nụ cười tươi",
      "áo dài truyền thống",
      "bước đi thanh thoát"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Kiến Trúc Cổ",
      "Truyền Thống"
    ],
    "description": "Sulii bước xuống cầu thang xoắn ốc của công trình kiến trúc Pháp cổ, tay cầm hoa ly và mỉm cười nhẹ.",
    "shootCode": "20261115",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-spiral-stairs-grace-173.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "29",
    "indexNo": "029",
    "title": "TIMELESS ARCHITECTURE",
    "category": "Heritage & Muse",
    "tags": [
      "cột vòm cổ",
      "áo dài thanh lịch",
      "ánh nhìn trực diện",
      "hoa ly hồng",
      "tone vàng be"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Kiến Trúc Cổ",
      "Truyền Thống"
    ],
    "description": "Sulii đứng giữa không gian kiến trúc tráng lệ với các trụ cột vòm, ánh nhìn hướng về ống kính đầy cuốn hút.",
    "shootCode": "20261115",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-timeless-architecture-174.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "30",
    "indexNo": "030",
    "title": "SUNLIT GEOMETRY",
    "category": "Heritage & Muse",
    "tags": [
      "vệt nắng xiên",
      "góc chụp từ trên",
      "áo dài trắng",
      "bóng đổ nghệ thuật",
      "tĩnh lặng"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Kiến Trúc Cổ",
      "Truyền Thống"
    ],
    "description": "Sulii đứng trầm ngâm dưới mảng bóng đổ hình học sắc nét từ ánh nắng trưa chiếu qua ô cửa sổ bảo tàng cổ.",
    "shootCode": "20261115",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sunlit-geometry-176.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "31",
    "indexNo": "031",
    "title": "LIGHT AND SHADOW",
    "category": "Heritage & Muse",
    "tags": [
      "góc nghiêng",
      "ánh sáng tương phản",
      "vệt nắng mặt trời",
      "áo dài tinh khôi",
      "thần thái nghệ thuật"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Truyền Thống"
    ],
    "description": "Góc nghiêng thanh tú của Sulii khi vệt sáng mặt trời rọi qua khuôn mặt, tạo nên hiệu ứng thị giác tương phản đầy nghệ thuật.",
    "shootCode": "20261115",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-light-and-shadow-177.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "32",
    "indexNo": "032",
    "title": "SOLITARY THOUGHTS",
    "category": "Heritage & Muse",
    "tags": [
      "góc chụp cao",
      "mảng sáng tối",
      "áo dài lụa",
      "không gian vắng",
      "trầm mặc"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Truyền Thống"
    ],
    "description": "Góc chụp từ trên cao bắt trọn bóng dáng nhỏ nhắn của Sulii giữa mảng tường gờ nổi và sàn gỗ phủ vệt nắng rực rỡ.",
    "shootCode": "20261115",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-solitary-thoughts-178.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "33",
    "indexNo": "033",
    "title": "DESCENDING GRACE",
    "category": "Heritage & Muse",
    "tags": [
      "lan can đá",
      "cầu thang lượn",
      "bước chân uyển chuyển",
      "áo dài trắng",
      "hoa ly hồng"
    ],
    "agencyTags": [
      "Kiến Trúc Cổ",
      "Truyền Thống"
    ],
    "description": "Sulii nhẹ nhàng đặt tay lên lan can đá khi bước xuống chiếu nghỉ cầu thang tròn trong bộ áo dài trắng trang nhã.",
    "shootCode": "20261115",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-descending-grace-179.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "34",
    "indexNo": "034",
    "title": "HERITAGE STILLNESS",
    "category": "Heritage & Muse",
    "tags": [
      "dáng ngồi quỳ",
      "áo dài thướt tha",
      "sàn gạch bóng",
      "hoa ly hồng",
      "không gian bảo tàng"
    ],
    "agencyTags": [
      "Kiến Trúc Cổ",
      "Truyền Thống"
    ],
    "description": "Sulii quỳ gối tao nhã trên nền đá hoa cương bóng loáng, tà áo dài lụa mềm mại buông rủ bên bó hoa ly hồng.",
    "shootCode": "20261115",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-heritage-stillness-180.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "35",
    "indexNo": "035",
    "title": "LEOPARD CHIC CHILL",
    "category": "Coquette & Dreamy",
    "tags": [
      "set váy ren",
      "ghế da báo",
      "phòng ấm áp",
      "tone vàng nâu",
      "thư giãn"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm"
    ],
    "description": "Người mẫu diện set váy ren trắng hai mảnh gợi cảm, ngả lưng thư thái trên ghế sofa da báo trong không gian ánh đèn vàng ấm cúng.",
    "shootCode": "20261102",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-leopard-chic-chill-155.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "36",
    "indexNo": "036",
    "title": "SULTRY LOUNGE MOMENT",
    "category": "Coquette & Dreamy",
    "tags": [
      "áo ren trễ vai",
      "sofa da báo",
      "ánh sáng dịu",
      "gợi cảm",
      "góc cận trung"
    ],
    "agencyTags": [],
    "description": "Người mẫu trong trang phục ren trắng trễ vai khoe xương quai xanh tinh tế khi ngồi trên ghế sofa họa tiết báo đốm dưới ánh sáng trong nhà dịu nhẹ.",
    "shootCode": "20261102",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sultry-lounge-moment-156.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "37",
    "indexNo": "037",
    "title": "MINIMALIST BOUTIQUE MUSE",
    "category": "Coquette & Dreamy",
    "tags": [
      "váy ren trắng",
      "giày chấm bi",
      "hốc tường đèn",
      "nghệ thuật",
      "dáng thanh mảnh"
    ],
    "agencyTags": [],
    "description": "Người mẫu diện set ren trắng phối giày cao gót chấm bi, tạo dáng nhấc chân duyên dáng bên mảng tường hốc đèn nghệ thuật hiện đại.",
    "shootCode": "20261102",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-minimalist-boutique-muse-157.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "38",
    "indexNo": "038",
    "title": "PASTEL PURPLE CHARM",
    "category": "Coquette & Dreamy",
    "tags": [
      "áo ren tay bồng",
      "tường tím",
      "rèm denim",
      "góc nghiêng",
      "dịu dàng"
    ],
    "agencyTags": [
      "Cá Tính",
      "Nàng Thơ"
    ],
    "description": "Người mẫu tạo dáng nghiêng ngọt ngào trong trang phục ren trắng ngà bên phông nền tường tím nhạt và rèm jeans cá tính.",
    "shootCode": "20261102",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-pastel-purple-charm-158.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "39",
    "indexNo": "039",
    "title": "DREAMY MODERN INTERIOR",
    "category": "Coquette & Dreamy",
    "tags": [
      "set áo ngắn",
      "vách kim loại",
      "kỳ lân trắng",
      "tone trắng sáng",
      "nhìn nghiêng"
    ],
    "agencyTags": [],
    "description": "Người mẫu tựa lưng vào vách tường kim loại trong set đồ trắng ngắn, hướng ánh nhìn xa xăm về căn phòng trưng bày tượng kỳ lân trắng lung linh.",
    "shootCode": "20261102",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-dreamy-modern-interior-159.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "40",
    "indexNo": "040",
    "title": "WHIMSICAL GALLERY STROLL",
    "category": "Coquette & Dreamy",
    "tags": [
      "khoe eo thon",
      "ren hoa trắng",
      "không gian lãng mạn",
      "ánh đèn trần",
      "dáng đứng"
    ],
    "agencyTags": [
      "Toàn Thân"
    ],
    "description": "Người mẫu đứng nghiêng khoe eo thon trong set đồ ren hoa trắng, ánh nhìn tinh tế hướng về không gian sự kiện trang hoàng rèm lụa và tượng ngựa có cánh.",
    "shootCode": "20261102",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-whimsical-gallery-stroll-160.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "41",
    "indexNo": "041",
    "title": "MIRROR REFLECTION GLAM",
    "category": "Coquette & Dreamy",
    "tags": [
      "soi gương",
      "cười rạng rỡ",
      "váy trắng",
      "chậu cây xanh",
      "phản chiếu"
    ],
    "agencyTags": [],
    "description": "Người mẫu nhìn vào gương mỉm cười rạng rỡ khi vuốt tóc, nổi bật trong set váy ren trắng cạnh chậu cây xanh tươi mát.",
    "shootCode": "20261102",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-mirror-reflection-glam-161.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "42",
    "indexNo": "042",
    "title": "SOFT LAVENDER WHISPER",
    "category": "Coquette & Dreamy",
    "tags": [
      "tone tím pastel",
      "áo ren trắng",
      "nhìn lơ đãng",
      "nữ tính",
      "ánh sáng mềm"
    ],
    "agencyTags": [
      "Nàng Thơ"
    ],
    "description": "Người mẫu ngồi tạo dáng điệu đà trong trang phục ren trắng ngà, ánh mắt nhìn lơ đãng trước bức tường hoa văn tím pastel mộng mơ.",
    "shootCode": "20261102",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-soft-lavender-whisper-162.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "43",
    "indexNo": "043",
    "title": "FAIRYTALE UNICORN ENCOUNTER",
    "category": "Coquette & Dreamy",
    "tags": [
      "kỳ lân khổng lồ",
      "set váy ngắn",
      "rèm lụa vàng",
      "nụ cười e ấp",
      "cổ tích"
    ],
    "agencyTags": [
      "Nàng Thơ"
    ],
    "description": "Người mẫu đứng mỉm cười e ấp cạnh mô hình kỳ lân trắng khổng lồ dưới rèm lụa vàng sang trọng và ấm áp.",
    "shootCode": "20261102",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-fairytale-unicorn-encounter-163.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "44",
    "indexNo": "044",
    "title": "PLAYFUL MIRROR POSE",
    "category": "Coquette & Dreamy",
    "tags": [
      "tạo dáng trước gương",
      "chạm má",
      "nhí nhảnh",
      "khung gương sắt",
      "tone vàng kem"
    ],
    "agencyTags": [],
    "description": "Người mẫu nhắm hờ mắt và đặt ngón tay lên má tạo dáng nhí nhảnh trước gương uốn nghệ thuật trong trang phục ren trắng.",
    "shootCode": "20261102",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-playful-mirror-pose-164.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "45",
    "indexNo": "045",
    "title": "CASUAL ELEGANCE MOMENT",
    "category": "Coquette & Dreamy",
    "tags": [
      "chỉnh giày",
      "giày chấm bi",
      "gương lớn",
      "cây cảnh",
      "dáng đứng duyên"
    ],
    "agencyTags": [
      "Toàn Thân"
    ],
    "description": "Người mẫu cúi nhẹ chỉnh giày cao gót chấm bi trước tấm gương lớn, diện set ren trắng tôn dáng bên chậu cây xanh nội thất.",
    "shootCode": "20261102",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-casual-elegance-moment-165.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "46",
    "indexNo": "046",
    "title": "SWEET PURPLE BLUSH",
    "category": "Coquette & Dreamy",
    "tags": [
      "chân dung cận",
      "áp tay lên má",
      "nụ cười ngọt",
      "nền tím",
      "tóc đen dài"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Nàng Thơ"
    ],
    "description": "Cận cảnh người mẫu nở nụ cười ngọt ngào áp tay lên má trên nền hoa văn màu tím hoa cà lãng mạn.",
    "shootCode": "20261102",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sweet-purple-blush-166.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "47",
    "indexNo": "047",
    "title": "PHOTO BOOTH MOMENT",
    "category": "Coquette & Dreamy",
    "tags": [
      "buồng chụp ảnh",
      "áo trắng",
      "ảnh đời thường",
      "tóc dài đen",
      "gần gũi"
    ],
    "agencyTags": [],
    "description": "Sulii ngồi tạo dáng tự nhiên khi chạm tay vào màn hình chọn ảnh trong buồng chụp photobooth với ánh sáng dịu nhẹ.",
    "shootCode": "20261102",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-photo-booth-moment-167.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "48",
    "indexNo": "048",
    "title": "SPRING BLOSSOM SMILE",
    "category": "Heritage & Muse",
    "tags": [
      "áo dài xanh",
      "hoa lay ơn",
      "nụ cười ngọt ngào",
      "cận cảnh",
      "ánh sáng tự nhiên"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Nắng Tự Nhiên",
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Sulii diện áo dài xanh nhạt họa tiết hoa nhí, mỉm cười dịu dàng bên bình hoa lay ơn vàng rực rỡ và bộ ấm trà trước hiên nhà.",
    "shootCode": "20261012",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-spring-blossom-smile-137.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "49",
    "indexNo": "049",
    "title": "PEACEFUL SPRING MOMENT",
    "category": "Heritage & Muse",
    "tags": [
      "áo dài xanh",
      "nhắm mắt thư thái",
      "bình hoa vàng",
      "câu đối tết",
      "góc toàn cảnh"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Truyền Thống"
    ],
    "description": "Nàng mẫu nhắm mắt thư thái trong tà áo dài xanh ngọc, ngồi bên bàn trà và cành lay ơn vàng trước cửa sắt hoài niệm.",
    "shootCode": "20261012",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-peaceful-spring-moment-138.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "50",
    "indexNo": "050",
    "title": "GENTLE VINTAGE CHARM",
    "category": "Heritage & Muse",
    "tags": [
      "áo dài pastel",
      "nụ cười duyên",
      "ấm trà cổ",
      "hoa lay ơn",
      "ngồi duyên dáng"
    ],
    "agencyTags": [
      "Truyền Thống"
    ],
    "description": "Sulii mỉm cười thanh lịch trong bộ áo dài xanh pastel nhẹ nhàng, tạo dáng ngồi tự nhiên cạnh bình hoa lay ơn và bộ ấm chén xưa.",
    "shootCode": "20261012",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-gentle-vintage-charm-139.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "51",
    "indexNo": "051",
    "title": "ELEGANT TET NOSTALGIA",
    "category": "Heritage & Muse",
    "tags": [
      "dáng ngồi thanh thoát",
      "áo dài lụa xanh",
      "chạm ấm trà",
      "câu đối đỏ",
      "không gian tết"
    ],
    "agencyTags": [
      "Kiến Trúc Cổ",
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Người mẫu ngồi chạm tay vào ấm trà với nụ cười trong trẻo, khoe trọn vạt áo dài xanh mềm mại bên hiên nhà cổ kính.",
    "shootCode": "20261012",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-elegant-tet-nostalgia-140.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "52",
    "indexNo": "052",
    "title": "RETRO STREET GRACE",
    "category": "Heritage & Muse",
    "tags": [
      "dáng đứng e ấp",
      "toàn thân",
      "áo dài chấm bi",
      "cờ tổ quốc",
      "túi xách trắng"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Kiến Trúc Cổ",
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Sulii đứng khẽ cúi đầu e ấp trong tà áo dài thướt tha, tay cầm túi xách nhỏ giữa con phố rực rỡ cờ hoa ngày Tết.",
    "shootCode": "20261012",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-retro-street-grace-141.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "53",
    "indexNo": "053",
    "title": "SUNLIT MEMORIES AWAIT",
    "category": "Heritage & Muse",
    "tags": [
      "ngước nhìn mơ màng",
      "áo dài xanh ngọc",
      "dàn cây xanh",
      "dải cờ đỏ",
      "góc chụp đứng"
    ],
    "agencyTags": [
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Nàng thơ ngước nhìn vòm lá và những dải cờ đỏ thắm trên cao, toát lên vẻ mơ màng trong bộ áo dài xanh bồng bềnh.",
    "shootCode": "20261012",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sunlit-memories-await-142.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "54",
    "indexNo": "054",
    "title": "WALKING INTO SPRING",
    "category": "Heritage & Muse",
    "tags": [
      "bước đi uyển chuyển",
      "áo dài xanh",
      "quán cà phê cũ",
      "bình hoa vàng",
      "ánh sáng ban ngày"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Nắng Tự Nhiên",
      "Quán Cafe",
      "Truyền Thống"
    ],
    "description": "Sulii nhẹ nhàng bước đi với ánh nhìn dịu dàng, tà áo dài tung bay khẽ khàng trước quán cà phê đậm chất thời gian.",
    "shootCode": "20261012",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-walking-into-spring-143.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "55",
    "indexNo": "055",
    "title": "POETIC RETRO POSE",
    "category": "Heritage & Muse",
    "tags": [
      "góc nghiêng trầm tư",
      "đèn ông sao",
      "hoa anthurium",
      "két nước ngọt",
      "áo dài tha thướt"
    ],
    "agencyTags": [
      "Truyền Thống"
    ],
    "description": "Góc nghiêng suy tư của người mẫu khi ngắm nhìn đóa hoa trên tay bên góc trang trí mộc mạc với đèn ông sao và két nước ngọt.",
    "shootCode": "20261012",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-poetic-retro-pose-145.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "56",
    "indexNo": "056",
    "title": "PLAYFUL VINTAGE VIBES",
    "category": "Heritage & Muse",
    "tags": [
      "ảnh ghép đôi",
      "tạo dáng vui tươi",
      "không gian bao cấp",
      "áo dài tay rộng",
      "đồ chơi cổ"
    ],
    "agencyTags": [
      "Truyền Thống"
    ],
    "description": "Bức ảnh ghép hai khoảnh khắc tinh nghịch và duyên dáng của Sulii khi tạo dáng giữa không gian đồ chơi gian hàng tuổi thơ.",
    "shootCode": "20261012",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-playful-vintage-vibes-146.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "57",
    "indexNo": "057",
    "title": "WHIMSICAL EGG PLAY",
    "category": "Heritage & Muse",
    "tags": [
      "tạo dáng tinh nghịch",
      "quả trứng gà",
      "bếp đồ chơi",
      "biểu cảm dễ thương",
      "áo dài xanh lụa"
    ],
    "agencyTags": [
      "Truyền Thống"
    ],
    "description": "Sulii tạo dáng đáng yêu khi che một bên mắt bằng quả trứng gà nhỏ, ngồi trước căn bếp đồ chơi xưa cũ đầy hoài niệm.",
    "shootCode": "20261012",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-whimsical-egg-play-147.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "58",
    "indexNo": "058",
    "title": "CURIOUS CHILDHOOD WONDER",
    "category": "Heritage & Muse",
    "tags": [
      "cầm trứng tạo dáng",
      "ánh mắt trong veo",
      "góc chụp chính diện",
      "áo dài thướt tha",
      "bối cảnh tuổi thơ"
    ],
    "agencyTags": [
      "Truyền Thống"
    ],
    "description": "Người mẫu cầm quả trứng đưa ra phía trước với ánh nhìn tò mò, tạo nên khung hình ngộ nghĩnh bên góc trưng bày tuổi thơ.",
    "shootCode": "20261012",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-curious-childhood-wonder-148.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "59",
    "indexNo": "059",
    "title": "PURE INNOCENT GLANCE",
    "category": "Heritage & Muse",
    "tags": [
      "chân dung cận cảnh",
      "ánh nhìn trực diện",
      "gương mặt thanh tú",
      "tóc đen buông dài",
      "ánh sáng mềm"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Truyền Thống"
    ],
    "description": "Cận cảnh gương mặt mộc mạc thanh tú của Sulii với đôi mắt to tròn và nét đẹp ngây thơ trong tà áo dài truyền thống.",
    "shootCode": "20261012",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-pure-innocent-glance-149.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "60",
    "indexNo": "060",
    "title": "CONTEMPLATIVE SWEET ANGLE",
    "category": "Heritage & Muse",
    "tags": [
      "góc chụp từ trên",
      "nét mặt e ấp",
      "cúi đầu dịu dàng",
      "kiểu tóc tết",
      "áo dài xanh"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Khung hình chụp từ góc cao bắt trọn vẻ đẹp e ấp, dịu dàng khi Sulii khẽ cúi đầu trầm ngâm bên góc nhỏ thân thuộc.",
    "shootCode": "20261012",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-contemplative-sweet-angle-150.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "61",
    "indexNo": "061",
    "title": "FESTIVE LANTERN DELIGHT",
    "category": "Heritage & Muse",
    "tags": [
      "đèn lồng cá chép",
      "nụ cười rạng rỡ",
      "vòm cây xanh",
      "áo dài truyền thống",
      "không khí lễ hội"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm",
      "Truyền Thống"
    ],
    "description": "Sulii nở nụ cười rạng rỡ khi cầm chiếc đèn cá chép rực rỡ sắc màu, nổi bật giữa vòm cây xanh và không gian Tết xưa.",
    "shootCode": "20261012",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-festive-lantern-delight-151.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "62",
    "indexNo": "062",
    "title": "RETRO STREET BLOOM",
    "category": "Heritage & Muse",
    "tags": [
      "áo dài cách tân",
      "ngõ nhỏ",
      "hoa khổng lồ",
      "tone xanh đỏ",
      "ánh sáng tự nhiên"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Truyền Thống"
    ],
    "description": "Người mẫu diện áo dài cách tân xanh nhạt tay loe, tạo dáng chu môi đáng yêu với cành hoa hồng khổng lồ trong con ngõ nhỏ rợp cờ đỏ và tán cây xanh.",
    "shootCode": "20261012",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-retro-street-bloom-152.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "63",
    "indexNo": "063",
    "title": "ALLEYWAY CAFE VIBES",
    "category": "Heritage & Muse",
    "tags": [
      "ảnh ghép",
      "quán cà phê",
      "phố cổ",
      "hũ gốm",
      "tone mộc mạc"
    ],
    "agencyTags": [
      "Kiến Trúc Cổ",
      "Quán Cafe",
      "Truyền Thống"
    ],
    "description": "Khung hình ghép ghi lại khoảnh khắc người mẫu trong bộ áo dài xanh nhạt ngồi uống nước từ hũ gốm tại quán cà phê phố cổ với nét mặt tự nhiên, tươi tắn.",
    "shootCode": "20261012",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-alleyway-cafe-vibes-153.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "64",
    "indexNo": "064",
    "title": "MINIMALIST ZEN CORNER",
    "category": "Noir & Retro",
    "tags": [
      "phòng trà tối giản",
      "đèn lồng giấy",
      "váy đen ngắn",
      "ngồi quỳ seiza",
      "bàn gỗ thấp"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm",
      "Kiến Trúc Cổ"
    ],
    "description": "Sulii quỳ gối thanh lịch bên bàn trà gỗ mộc mạc và ngước nhìn chiếc đèn lồng giấy tròn ấm áp.",
    "shootCode": "20261003",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-minimalist-zen-corner-125.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "65",
    "indexNo": "065",
    "title": "SWEET EVENING TOAST",
    "category": "Noir & Retro",
    "tags": [
      "nụ cười ngọt ngào",
      "ly vẽ họa tiết",
      "váy đen",
      "bàn gỗ",
      "chính diện"
    ],
    "agencyTags": [
      "Nàng Thơ"
    ],
    "description": "Cô nàng nở nụ cười rạng rỡ khi cầm ly đồ uống họa tiết bắt mắt trong không gian quán trà ấm cúng.",
    "shootCode": "20261003",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sweet-evening-toast-126.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "66",
    "indexNo": "066",
    "title": "QUIET CONTEMPLATION MOOD",
    "category": "Noir & Retro",
    "tags": [
      "trầm ngâm",
      "váy đen hai dây",
      "đèn lồng tròn",
      "không gian gỗ",
      "gợi cảm nhẹ"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm"
    ],
    "description": "Sulii cúi nhẹ ánh nhìn trầm ngâm trong căn phòng gỗ tối giản tràn ngập ánh sáng đèn lồng dịu mắt.",
    "shootCode": "20261003",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-quiet-contemplation-mood-127.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "67",
    "indexNo": "067",
    "title": "CASUAL INTIMATE MOMENT",
    "category": "Noir & Retro",
    "tags": [
      "cận cảnh",
      "váy đen",
      "bàn trà",
      "cây bonsai",
      "ánh nhìn tự nhiên"
    ],
    "agencyTags": [
      "Cận Mặt"
    ],
    "description": "Sulii tạo dáng tự nhiên rướn người bên bàn trà với biểu cảm suy tư mộc mạc và gần gũi.",
    "shootCode": "20261003",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-casual-intimate-moment-128.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "68",
    "indexNo": "068",
    "title": "LUMINOUS STONE BACKDROP",
    "category": "Noir & Retro",
    "tags": [
      "tường đá",
      "đèn tròn",
      "tất trắng dài",
      "váy đen cúp ngực",
      "tạo dáng ngồi"
    ],
    "agencyTags": [],
    "description": "Sulii ngồi bệt duyên dáng bên mảng tường đá phủ cây xanh dưới vầng sáng tròn tựa mặt trăng nhân tạo.",
    "shootCode": "20261003",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-luminous-stone-backdrop-129.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "69",
    "indexNo": "069",
    "title": "DOUBLE PLAYFUL FRAMES",
    "category": "Noir & Retro",
    "tags": [
      "ảnh ghép",
      "váy đen ngắn",
      "tất cao cổ",
      "tạo dáng ngả lưng",
      "nụ cười tươi"
    ],
    "agencyTags": [],
    "description": "Khung hình ghép đôi ghi lại những khoảnh khắc tạo dáng thoải mái và tươi tắn bên tiểu cảnh cây lá xanh mát.",
    "shootCode": "20261003",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-double-playful-frames-130.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "70",
    "indexNo": "070",
    "title": "BAR COUNTER SILHOUETTE",
    "category": "Noir & Retro",
    "tags": [
      "quầy bar gỗ",
      "vai trần",
      "váy đen trễ vai",
      "kệ gốm sứ",
      "góc chụp nghiêng"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm"
    ],
    "description": "Người mẫu ngồi tựa lưng trên ghế quầy bar gỗ khoe vai trần gợi cảm trong ánh đèn nội thất ấm áp.",
    "shootCode": "20261003",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-bar-counter-silhouette-131.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "71",
    "indexNo": "071",
    "title": "OVERHEAD TEA DELIGHT",
    "category": "Noir & Retro",
    "tags": [
      "góc máy trên cao",
      "bàn gỗ thấp",
      "váy đen hở vai",
      "ly matcha",
      "dịu dàng"
    ],
    "agencyTags": [
      "Nàng Thơ"
    ],
    "description": "Góc máy từ trên cao bắt trọn nét đẹp dịu dàng của Sulii khi nhìn ngắm ly nước matcha trên bàn gỗ.",
    "shootCode": "20261003",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-overhead-tea-delight-132.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "72",
    "indexNo": "072",
    "title": "SHY LANTERN GLOW",
    "category": "Noir & Retro",
    "tags": [
      "đèn cầu khổng lồ",
      "nụ cười e ấp",
      "váy đen",
      "ly thủy tinh",
      "ngồi sàn gỗ"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm",
      "Nàng Thơ"
    ],
    "description": "Sulii mỉm cười bẽn lẽn cầm ly đồ uống bên dưới chiếc đèn lồng hình cầu khổng lồ tỏa sáng dịu êm.",
    "shootCode": "20261003",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-shy-lantern-glow-133.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "73",
    "indexNo": "073",
    "title": "SULTRY TEAHOUSE PROFILE",
    "category": "Noir & Retro",
    "tags": [
      "góc nghiêng",
      "quầy pha chế",
      "vai trần",
      "tóc đen dài",
      "váy đen"
    ],
    "agencyTags": [],
    "description": "Sulii khoe góc nghiêng quyến rũ với bờ vai trần và mái tóc đen dài bên quầy pha chế phong cách mộc.",
    "shootCode": "20261003",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sultry-teahouse-profile-134.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "74",
    "indexNo": "074",
    "title": "POUTY BAR CHARM",
    "category": "Noir & Retro",
    "tags": [
      "chu môi đáng yêu",
      "quầy bar gỗ",
      "váy đen cúp ngực",
      "bốt đùi",
      "nhìn thẳng"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm"
    ],
    "description": "Sulii chu môi tạo dáng đáng yêu khi ngồi đối diện ống kính trên ghế quầy bar cạnh kệ trưng bày cốc chén.",
    "shootCode": "20261003",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-pouty-bar-charm-135.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "75",
    "indexNo": "075",
    "title": "VINTAGE RAINY NOSTALGIA",
    "category": "Noir & Retro",
    "tags": [
      "ô trong suốt",
      "ảnh ghép retro",
      "dạo phố mưa",
      "túi xách đen",
      "váy ngắn đen"
    ],
    "agencyTags": [],
    "description": "Bộ ảnh ghép phong cách hoài niệm ghi lại khoảnh khắc Sulii che ô trong suốt dạo phố dưới cơn mưa rào.",
    "shootCode": "20261003",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-vintage-rainy-nostalgia-136.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "76",
    "indexNo": "076",
    "title": "KITSUNE MASK REFLECTION",
    "category": "Heritage & Muse",
    "tags": [
      "yukata truyền thống",
      "mặt nạ hồ ly",
      "hoa cài tóc",
      "trầm tư",
      "nét đẹp Á Đông"
    ],
    "agencyTags": [
      "Kiến Trúc Cổ",
      "Truyền Thống"
    ],
    "description": "Sulii nền nã trong tà yukata, búi tóc đính hoa trắng ngồi lặng lẽ bên chiếc mặt nạ cáo Kitsune dưới ánh sáng phòng ấm dịu.",
    "shootCode": "20260925",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-kitsune-mask-reflection-114.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "77",
    "indexNo": "077",
    "title": "GENTLE TRADITIONAL GAZE",
    "category": "Heritage & Muse",
    "tags": [
      "yukata xanh pastel",
      "mặt nạ cáo",
      "cười e ấp",
      "búi tóc hoa",
      "nét đằm thắm"
    ],
    "agencyTags": [
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Sulii nở nụ cười mỉm e ấp khi cúi nhìn chiếc mặt nạ truyền thống đặt trên bàn gỗ, toát lên vẻ đằm thắm trong bộ yukata.",
    "shootCode": "20260925",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-gentle-traditional-gaze-115.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "78",
    "indexNo": "078",
    "title": "SERENE JAPANESE PORCH",
    "category": "Heritage & Muse",
    "tags": [
      "yukata xanh ngọc",
      "dáng ngồi đoan trang",
      "cửa kính ô vuông",
      "phong cách Nhật",
      "ánh sáng dịu"
    ],
    "agencyTags": [
      "Truyền Thống"
    ],
    "description": "Sulii ngồi khép nép đoan trang trên ghế gỗ trước khung cửa kính ô vuông kiểu Nhật, diện yukata xanh điểm hoa văn đen tao nhã.",
    "shootCode": "20260925",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-serene-japanese-porch-116.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "79",
    "indexNo": "079",
    "title": "CONTEMPLATIVE WINDOW VIEW",
    "category": "Heritage & Muse",
    "tags": [
      "búi tóc cài hoa",
      "góc nhìn nghiêng",
      "yukata mềm mại",
      "khung cửa gỗ",
      "thanh tao"
    ],
    "agencyTags": [
      "Truyền Thống"
    ],
    "description": "Sulii khoe trọn búi tóc cài hoa rực rỡ và góc nghiêng thanh tú khi ngồi nhìn qua khung cửa kính lớn tràn ngập ánh sáng mờ ảo.",
    "shootCode": "20260925",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-contemplative-window-view-117.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "80",
    "indexNo": "080",
    "title": "VINTAGE FILM NOSTALGIA",
    "category": "Heritage & Muse",
    "tags": [
      "viền phim cổ điển",
      "hạt film",
      "yukata thanh lịch",
      "mỉm cười bẽn lẽn",
      "cửa kính ô"
    ],
    "agencyTags": [
      "Truyền Thống"
    ],
    "description": "Bức ảnh mang khung viền film cổ điển ghi lại nụ cười bẽn lẽn của Sulii trong bộ trang phục yukata truyền thống.",
    "shootCode": "20260925",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-vintage-film-nostalgia-118.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "81",
    "indexNo": "081",
    "title": "COZY INDOOR BOTANICAL",
    "category": "Heritage & Muse",
    "tags": [
      "đai obi đen",
      "yukata truyền thống",
      "kệ cây xanh",
      "rèm caro",
      "búi tóc hoa"
    ],
    "agencyTags": [
      "Truyền Thống"
    ],
    "description": "Sulii tạo dáng khoe vạt lưng yukata cùng đai obi đen sang trọng bên cạnh kệ gỗ bày cây xanh và rèm caro dịu mắt.",
    "shootCode": "20260925",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-cozy-indoor-botanical-120.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "82",
    "indexNo": "082",
    "title": "KOI POND SERENITY",
    "category": "Heritage & Muse",
    "tags": [
      "cầu gỗ",
      "hồ cá koi",
      "vuốt tóc duyên dáng",
      "yukata xanh",
      "vườn kiểu Nhật"
    ],
    "agencyTags": [
      "Truyền Thống"
    ],
    "description": "Sulii nhẹ nhàng đưa tay vuốt tóc khi ngồi trên cầu gỗ ngắm nhìn hồ cá koi bơi lội thanh bình giữa khu vườn phong cách Nhật.",
    "shootCode": "20260925",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-koi-pond-serenity-121.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "83",
    "indexNo": "083",
    "title": "TRADITIONAL GARDEN ELEGANCE",
    "category": "Heritage & Muse",
    "tags": [
      "yukata xanh",
      "cầu đỏ",
      "vườn Nhật",
      "cài hoa trắng",
      "chụp phía sau"
    ],
    "agencyTags": [
      "Kiến Trúc Cổ",
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Sulii duyên dáng trong bộ yukata xanh nhạt bên cây cầu đỏ tại khu vườn Nhật Bản với mái tóc cài hoa trắng thanh thoát.",
    "shootCode": "20260925",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-traditional-garden-elegance-122.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "84",
    "indexNo": "084",
    "title": "TRANQUIL KOI WATERS",
    "category": "Heritage & Muse",
    "tags": [
      "trang phục kimono",
      "hồ cá koi",
      "sàn gỗ",
      "ngồi bệt",
      "hoa cài tóc"
    ],
    "agencyTags": [
      "Truyền Thống"
    ],
    "description": "Người mẫu ngồi khép nép trên cầu gỗ cạnh hồ cá koi trong trang phục kimono cách điệu với ánh nhìn nhẹ nhàng.",
    "shootCode": "20260925",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-tranquil-koi-waters-123.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "85",
    "indexNo": "085",
    "title": "NIGHT WALK CHIC",
    "category": "Noir & Retro",
    "tags": [
      "áo khoác đen",
      "túi xách chấm bi",
      "ảnh ghép đôi",
      "phố đêm tĩnh lặng",
      "ánh đèn đường"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm"
    ],
    "description": "Bức ảnh ghép hai khung hình ghi lại phong thái dạo phố đêm đầy cuốn hút của Sulii trong trang phục đen thanh lịch kết hợp túi xách chấm bi.",
    "shootCode": "20260915",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-night-walk-chic-107.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "86",
    "indexNo": "086",
    "title": "STUDIO GEAR AESTHETICS",
    "category": "Noir & Retro",
    "tags": [
      "máy ảnh chuyên nghiệp",
      "chân váy chấm bi",
      "bánh răng công nghiệp",
      "bể cá rực rỡ",
      "kệ sách cao"
    ],
    "agencyTags": [],
    "description": "Sulii cầm máy ảnh ngắm góc chụp trong căn phòng vintage độc đáo có bức tường bánh răng cơ khí, bể cá phát sáng và kệ sách ngập tràn.",
    "shootCode": "20260915",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-studio-gear-aesthetics-110.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "87",
    "indexNo": "087",
    "title": "RETRO BOOK NOOK",
    "category": "Noir & Retro",
    "tags": [
      "áo nỉ đen",
      "quần chấm bi",
      "tiệm sách cũ",
      "bể cá thủy sinh",
      "ánh đèn vàng"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm"
    ],
    "description": "Sulii diện áo nỉ đen phối quần chấm bi, chăm chú cầm máy ảnh ngắm góc chụp cạnh bể cá thủy sinh và kệ sách cổ điển.",
    "shootCode": "20260915",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-retro-book-nook-111.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "88",
    "indexNo": "088",
    "title": "AQUARIUM VINTAGE CORNER",
    "category": "Noir & Retro",
    "tags": [
      "áo dài tay đen",
      "kiểm tra máy ảnh",
      "bể cá rực rỡ",
      "kệ sách cổ",
      "ánh đèn rọi"
    ],
    "agencyTags": [
      "Truyền Thống"
    ],
    "description": "Sulii mặc áo đen chăm chú xem lại ảnh trên máy ảnh bên cạnh hồ thủy sinh xanh mát và tường sách cao chạm trần.",
    "shootCode": "20260915",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-aquarium-vintage-corner-112.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "89",
    "indexNo": "089",
    "title": "SUMMER GARDEN BREEZE",
    "category": "Sunlit Lifestyle",
    "tags": [
      "váy xanh chấm bi",
      "cài hoa tóc",
      "vườn cúc vàng",
      "ngồi bãi cỏ",
      "ngây thơ"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Nàng Thơ"
    ],
    "description": "Sulii cài bông hoa cúc vàng lên mái tóc xoăn dài, diện váy chấm bi xanh ngồi giữa bạt ngàn hoa cúc cánh bướm trong trẻo.",
    "shootCode": "20260822",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-summer-garden-breeze-099.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "90",
    "indexNo": "090",
    "title": "DREAMY NATURE GAZE",
    "category": "Sunlit Lifestyle",
    "tags": [
      "váy xanh hai dây",
      "chống cằm",
      "thơ thẩn",
      "hoa vàng dại",
      "ngoài trời"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Nàng Thơ"
    ],
    "description": "Nàng thơ tựa tay lên má trầm ngâm giữa vườn hoa dại, làn da trắng sáng tương phản với màu xanh tươi mát của khu vườn.",
    "shootCode": "20260822",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-dreamy-nature-gaze-100.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "91",
    "indexNo": "091",
    "title": "GENTLE SUNLIT DAYS",
    "category": "Sunlit Lifestyle",
    "tags": [
      "váy xòe xanh",
      "ngồi giữa hoa",
      "e ấp",
      "khu vườn xanh",
      "nắng ban ngày"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Nàng Thơ"
    ],
    "description": "Sulii ngồi nép mình giữa cỏ cây hoa lá, tạo dáng e ấp tay chạm má với ánh nhìn mơ màng hướng nhẹ sang một bên.",
    "shootCode": "20260822",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-gentle-sunlit-days-101.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "92",
    "indexNo": "092",
    "title": "BLOSSOM BY ME",
    "category": "Sunlit Lifestyle",
    "tags": [
      "váy xanh chấm bi",
      "ngồi xổm",
      "vườn hoa cúc",
      "toàn thân",
      "tươi tắn"
    ],
    "agencyTags": [
      "Toàn Thân"
    ],
    "description": "Người mẫu ngồi xổm duyên dáng ngắm đóa cúc vàng nở rộ giữa thảm cỏ xanh mướt, trang phục năng động và tươi trẻ.",
    "shootCode": "20260822",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-blossom-by-me-102.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "93",
    "indexNo": "093",
    "title": "FLOWER FOR YOU",
    "category": "Sunlit Lifestyle",
    "tags": [
      "váy hoa nhí xanh",
      "chu môi đáng yêu",
      "tặng hoa",
      "công viên xanh",
      "trực diện"
    ],
    "agencyTags": [],
    "description": "Sulii chu môi tinh nghịch, đưa bông hoa vàng về phía ống kính trong chiếc váy xanh chấm bi hai dây giữa lối đi công viên rợp bóng mát.",
    "shootCode": "20260822",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-flower-for-you-103.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "94",
    "indexNo": "094",
    "title": "SWEET SUMMER SMILE",
    "category": "Sunlit Lifestyle",
    "tags": [
      "váy xanh chấm bi",
      "nụ cười tươi",
      "cài hoa lên tóc",
      "vườn cúc vàng",
      "đứng ngoài trời"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên"
    ],
    "description": "Nữ người mẫu đưa tay vuốt tóc cài hoa, nhắm nghiền mắt nở nụ cười duyên dáng ngập tràn năng lượng mùa hè.",
    "shootCode": "20260822",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sweet-summer-smile-104.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "95",
    "indexNo": "095",
    "title": "RUSTIC VINTAGE CAR",
    "category": "Sunlit Lifestyle",
    "tags": [
      "váy chấm bi ngắn",
      "xe hơi cổ",
      "phủ cỏ xanh",
      "ngồi xổm duyên dáng",
      "giày mary jane"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Nàng Thơ"
    ],
    "description": "Sulii ngồi tạo dáng dịu dàng trước chiếc xe cổ phủ đầy rêu phong giữa cánh rừng xanh ngắt hoang sơ.",
    "shootCode": "20260822",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-rustic-vintage-car-105.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "96",
    "indexNo": "096",
    "title": "GARDEN MIRROR SELFIE",
    "category": "Sunlit Lifestyle",
    "tags": [
      "chụp selfie",
      "ốp lưng điện thoại",
      "cận cảnh biểu cảm",
      "ngoài trời",
      "tự nhiên đời thường"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Nắng Tự Nhiên"
    ],
    "description": "Khoảnh khắc Sulii chỉnh tóc và chụp ảnh selfie bằng điện thoại giữa khung cảnh thiên nhiên xanh mát ngập tràn ánh sáng.",
    "shootCode": "20260822",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-garden-mirror-selfie-106.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "97",
    "indexNo": "097",
    "title": "VINTAGE VINYL LOUNGE",
    "category": "Noir & Retro",
    "tags": [
      "váy đen tay phồng",
      "kệ đĩa than",
      "đèn phi hành gia",
      "chống cằm suy tư",
      "ánh sáng ấm áp"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm"
    ],
    "description": "Sulii diện váy đen tay phồng, chống cằm lơ đãng trước bức tường ngập tràn đĩa than cổ điển cùng ánh đèn vàng ấm cúng.",
    "shootCode": "20260814",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-vintage-vinyl-lounge-084.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "98",
    "indexNo": "098",
    "title": "MELODIC RETRO VIBES",
    "category": "Noir & Retro",
    "tags": [
      "váy đen bồng",
      "khép mắt mỉm cười",
      "tường đĩa than",
      "chụp trực diện",
      "tone màu ấm"
    ],
    "agencyTags": [
      "Nàng Thơ"
    ],
    "description": "Sulii khép hờ mắt mỉm cười e ấp trong chiếc váy đen bồng bềnh, phía sau là background tường đĩa than cổ điển lung linh.",
    "shootCode": "20260814",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-melodic-retro-vibes-086.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "99",
    "indexNo": "099",
    "title": "RETRO RECORD CAFE",
    "category": "Noir & Retro",
    "tags": [
      "váy babydoll đen",
      "bàn gỗ mộc",
      "kệ đĩa than",
      "ánh đèn hắt vàng",
      "ánh nhìn mơ màng"
    ],
    "agencyTags": [
      "Quán Cafe",
      "Nàng Thơ"
    ],
    "description": "Sulii ngồi thư thái bên bàn gỗ, chống cằm nhìn thẳng với ánh mắt mơ màng trước giá trưng bày đĩa than cổ điển.",
    "shootCode": "20260814",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-retro-record-cafe-087.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "100",
    "indexNo": "100",
    "title": "NOSTALGIC MUSIC CORNER",
    "category": "Noir & Retro",
    "tags": [
      "đầm đen thanh lịch",
      "nhìn lơ đãng",
      "không gian hoài niệm",
      "ánh sáng lung linh",
      "kệ đĩa nhạc"
    ],
    "agencyTags": [
      "Quán Cafe"
    ],
    "description": "Sulii nghiêng đầu ngắm nhìn lơ đãng trong bộ váy đen thanh lịch, ngồi giữa không gian cà phê hoài niệm rực rỡ ánh đèn led.",
    "shootCode": "20260814",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-nostalgic-music-corner-088.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "101",
    "indexNo": "101",
    "title": "URBAN POSTER WALL",
    "category": "Noir & Retro",
    "tags": [
      "váy đen ngắn",
      "cầu thang gỗ",
      "tường tranh poster",
      "túi kẹp nách",
      "dáng đứng năng động"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Kiến Trúc Cổ",
      "Cá Tính"
    ],
    "description": "Sulii đứng bên bậc thang gỗ cạnh mảng tường tranh poster pop-art cá tính, diện váy đen ngắn khoe trọn vẻ trẻ trung.",
    "shootCode": "20260814",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-urban-poster-wall-089.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "102",
    "indexNo": "102",
    "title": "STAIRWAY CHIC MOMENT",
    "category": "Noir & Retro",
    "tags": [
      "ngồi cầu thang",
      "váy đen ngắn",
      "giày chấm bi",
      "tranh treo tường",
      "nụ cười duyên"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Kiến Trúc Cổ",
      "Cá Tính"
    ],
    "description": "Sulii ngồi thư thả trên bậc cầu thang gỗ, diện đầm xòe ngắn phối cùng giày búp bê chấm bi cá tính và nụ cười mỉm duyên dáng.",
    "shootCode": "20260814",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-stairway-chic-moment-090.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "103",
    "indexNo": "103",
    "title": "QUIET STAIRCASE POSE",
    "category": "Noir & Retro",
    "tags": [
      "ngồi bậc thang",
      "e ấp nhìn xuống",
      "váy ngắn đen",
      "chân thon",
      "tone màu ấm"
    ],
    "agencyTags": [
      "Kiến Trúc Cổ",
      "Nàng Thơ"
    ],
    "description": "Sulii ngồi khép nép trên cầu thang gỗ với ánh mắt e ấp nhìn xuống, khoe đôi chân thon thả trong bộ đầm đen tối giản.",
    "shootCode": "20260814",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-quiet-staircase-pose-091.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "104",
    "indexNo": "104",
    "title": "NIGHT CAFE STREET",
    "category": "Noir & Retro",
    "tags": [
      "đầm đen bồng",
      "tường gạch đỏ",
      "ô cửa kính bar",
      "ánh đèn flash đêm",
      "nhìn trực diện"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm"
    ],
    "description": "Sulii tạo dáng nhẹ nhàng bên bức tường gạch trước ô cửa kính lung linh chai rượu của quán bar buổi tối.",
    "shootCode": "20260814",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-night-cafe-street-092.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "105",
    "indexNo": "105",
    "title": "WOODEN BANISTER LEAN",
    "category": "Noir & Retro",
    "tags": [
      "tựa tay vịn",
      "cầu thang gỗ",
      "khép mắt thư thái",
      "váy ngắn đen",
      "tone màu vintage"
    ],
    "agencyTags": [
      "Kiến Trúc Cổ"
    ],
    "description": "Sulii tựa vào tay vịn cầu thang gỗ sẫm màu, khép mắt thư thái giữa không gian gallery tranh ảnh hoài cổ.",
    "shootCode": "20260814",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-wooden-banister-lean-093.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "106",
    "indexNo": "106",
    "title": "MONOCHROME BAR TOAST",
    "category": "Noir & Retro",
    "tags": [
      "ảnh đen trắng",
      "khung hình ghép đôi",
      "ly rượu vang",
      "chu môi tinh nghịch",
      "quầy bar cổ điển"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm"
    ],
    "description": "Khung hình đen trắng ghép đôi ghi lại khoảnh khắc Sulii cầm ly rượu tạo dáng chu môi và mỉm cười duyên dáng tại quầy bar.",
    "shootCode": "20260814",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-monochrome-bar-toast-094.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "107",
    "indexNo": "107",
    "title": "SHY RECORD SHELF",
    "category": "Noir & Retro",
    "tags": [
      "cúi đầu e thẹn",
      "giá đĩa nhạc",
      "váy đen phồng",
      "nụ cười chúm chím",
      "ánh sáng hắt vàng"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm"
    ],
    "description": "Sulii cúi nhìn e thẹn với nụ cười chúm chím khi đứng nép bên giá gỗ trưng bày đĩa nhạc rực sáng đèn vàng.",
    "shootCode": "20260814",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-shy-record-shelf-095.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "108",
    "indexNo": "108",
    "title": "RETRO RECORD VIBES",
    "category": "Noir & Retro",
    "tags": [
      "đầm xòe đen",
      "quán đĩa than",
      "ánh đèn vàng",
      "đèn neon",
      "nụ cười dịu dàng"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm",
      "Quán Cafe",
      "Nàng Thơ"
    ],
    "description": "Nữ người mẫu diện đầm phồng đen ngọt ngào, tạo dáng e ấp giữa không gian quán đĩa than ấm cúng ngập tràn ánh đèn vàng và neon.",
    "shootCode": "20260814",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-retro-record-vibes-096.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "109",
    "indexNo": "109",
    "title": "URBAN NIGHT OUT",
    "category": "Noir & Retro",
    "tags": [
      "váy đen babydoll",
      "quán cà phê đêm",
      "chụp flash",
      "túi xách đen",
      "thẹn thùng"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm",
      "Quán Cafe"
    ],
    "description": "Sulii diện váy phồng đen kết hợp túi xách da, tạo dáng ngại ngùng đáng yêu trước ô cửa kính quán cà phê ban đêm có ánh flash rọi sáng.",
    "shootCode": "20260814",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-urban-night-out-097.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "110",
    "indexNo": "110",
    "title": "RIVER CANOPY ESCAPE",
    "category": "Sunlit Lifestyle",
    "tags": [
      "váy hai dây",
      "nón lá xanh",
      "rừng dừa nước",
      "thuyền chèo",
      "góc nghiêng sau"
    ],
    "agencyTags": [
      "Truyền Thống"
    ],
    "description": "Góc chụp từ phía sau trên thuyền chèo, Sulii đội nón lá xanh ngọc che nghiêng mặt giữa rặng dừa rợp bóng thanh bình.",
    "shootCode": "20260807",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-river-canopy-escape-069.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "111",
    "indexNo": "111",
    "title": "PEACEFUL RIVER DRIFT",
    "category": "Sunlit Lifestyle",
    "tags": [
      "váy chấm bi nâu",
      "nón lá",
      "kênh rạch",
      "xuồng nhỏ",
      "dịu dàng"
    ],
    "agencyTags": [
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Sulii ngồi nghiêng duyên dáng trên chiếc xuồng nhỏ xuôi dòng kênh, ánh nhìn trầm lắng dưới vành nón lá mộc mạc.",
    "shootCode": "20260807",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-peaceful-river-drift-070.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "112",
    "indexNo": "112",
    "title": "RIVER BREEZE PROFILE",
    "category": "Sunlit Lifestyle",
    "tags": [
      "váy hở lưng",
      "góc nghiêng",
      "nón lá",
      "thuyền gỗ",
      "miệt vườn"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Truyền Thống"
    ],
    "description": "Góc nghiêng khoe bờ vai thon của Sulii trong bộ váy maxi chấm bi hở lưng, đội nón lá ngắm nhìn cảnh sắc sông nước.",
    "shootCode": "20260807",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-river-breeze-profile-071.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "113",
    "indexNo": "113",
    "title": "TROPICAL RIVER GLOW",
    "category": "Sunlit Lifestyle",
    "tags": [
      "váy chấm bi",
      "nón lá quai ngọc",
      "nụ cười mỉm",
      "sông nước",
      "tươi tắn"
    ],
    "agencyTags": [
      "Truyền Thống"
    ],
    "description": "Sulii mỉm cười nhẹ nhàng hướng ánh mắt nhìn nghiêng, đội nón lá trắng quai ngọc khi xuôi thuyền qua con rạch rợp bóng dừa.",
    "shootCode": "20260807",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-tropical-river-glow-072.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "114",
    "indexNo": "114",
    "title": "SERENE WATERWAY JOURNEY",
    "category": "Sunlit Lifestyle",
    "tags": [
      "nón lá",
      "váy chấm bi",
      "chạm vành nón",
      "dừa nước",
      "thư thái"
    ],
    "agencyTags": [
      "Truyền Thống"
    ],
    "description": "Người mẫu khẽ chạm tay vào vành nón lá, tận hưởng bầu không khí mát rượi giữa dòng kênh xanh ngắt.",
    "shootCode": "20260807",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-serene-waterway-journey-073.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "115",
    "indexNo": "115",
    "title": "GARDEN TRELLIS BREEZE",
    "category": "Sunlit Lifestyle",
    "tags": [
      "váy hai dây",
      "túi xách chấm bi",
      "giàn hoa giấy",
      "nón lá",
      "vòng tay ngọc"
    ],
    "agencyTags": [
      "Truyền Thống"
    ],
    "description": "Sulii tạo dáng duyên dáng dưới giàn hoa giấy rực rỡ, tay vịn nón lá và khoác túi xách chấm bi đồng điệu.",
    "shootCode": "20260807",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-garden-trellis-breeze-074.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "116",
    "indexNo": "116",
    "title": "SUNLIT FERRY RELAX",
    "category": "Sunlit Lifestyle",
    "tags": [
      "ghế mây",
      "tàu du lịch",
      "ngược sáng",
      "váy chấm bi",
      "rạng rỡ"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên"
    ],
    "description": "Sulii thả dáng thoải mái trên ghế mây tàu du lịch, ánh sáng rực rỡ từ cửa sổ hắt vào tôn lên nụ cười tươi tắn.",
    "shootCode": "20260807",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sunlit-ferry-relax-075.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "117",
    "indexNo": "117",
    "title": "RIVER BOAT PORTRAIT",
    "category": "Sunlit Lifestyle",
    "tags": [
      "khoang thuyền",
      "nón lá",
      "ánh nhìn cuốn hút",
      "rèm tím",
      "dịu dàng"
    ],
    "agencyTags": [
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Sulii ngồi trên khoang thuyền nhìn thẳng vào ống kính với nét mặt dịu dàng, tay nâng vành nón lá đón gió sông.",
    "shootCode": "20260807",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-river-boat-portrait-076.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "118",
    "indexNo": "118",
    "title": "JOYFUL SUMMER CRUISE",
    "category": "Sunlit Lifestyle",
    "tags": [
      "cười tươi",
      "nón lá quai ngọc",
      "khoang tàu",
      "hồn nhiên",
      "nắng hè"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Truyền Thống"
    ],
    "description": "Sulii cười tít mắt đầy sảng khoái khi ngồi hóng gió trên chiếc ghế mây trong khoang tàu du lịch miền sông nước.",
    "shootCode": "20260807",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-joyful-summer-cruise-077.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "119",
    "indexNo": "119",
    "title": "RUSTIC TEA TIME",
    "category": "Sunlit Lifestyle",
    "tags": [
      "chòi lá",
      "bàn trà thôn dã",
      "nón lá",
      "tinh nghịch",
      "váy chấm bi"
    ],
    "agencyTags": [
      "Truyền Thống"
    ],
    "description": "Sulii đưa cánh hoa đỏ lên môi tạo dáng ngộ nghĩnh tại chòi lá miệt vườn bên bàn trà và trái cây thôn dã.",
    "shootCode": "20260807",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-rustic-tea-time-078.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "120",
    "indexNo": "120",
    "title": "DREAMY SUNLIT PROFILE",
    "category": "Sunlit Lifestyle",
    "tags": [
      "nắng mơ màng",
      "góc nghiêng",
      "váy hở lưng",
      "nón lá",
      "khoang tàu"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Góc nghiêng mơ màng của Sulii dưới làn nắng trắng xóa ngoài mạn thuyền, nổi bật đường nét thanh mảnh và vành nón lá.",
    "shootCode": "20260807",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-dreamy-sunlit-profile-079.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "121",
    "indexNo": "121",
    "title": "VILLAGE CARRIAGE MOMENT",
    "category": "Sunlit Lifestyle",
    "tags": [
      "xe ngựa",
      "đường làng",
      "cây dừa",
      "nón lá",
      "váy chấm bi"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Truyền Thống"
    ],
    "description": "Sulii tạo dáng rạng rỡ bên cỗ xe ngựa mộc mạc trên con đường làng ngập nắng nhiệt đới rợp bóng dừa.",
    "shootCode": "20260807",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-village-carriage-moment-080.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "122",
    "indexNo": "122",
    "title": "RUSTIC VILLAGE STROLL",
    "category": "Sunlit Lifestyle",
    "tags": [
      "xe ngựa",
      "toàn thân",
      "nón lá",
      "làng quê",
      "giày búp bê"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Nắng Tự Nhiên",
      "Truyền Thống"
    ],
    "description": "Sulii trong trang phục váy chấm bi và nón lá đứng ngắm cỗ xe ngựa thôn quê dưới bóng cây dừa thanh bình.",
    "shootCode": "20260807",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-rustic-village-stroll-081.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "123",
    "indexNo": "123",
    "title": "SUNLIT STREET VIBES",
    "category": "Sunlit Lifestyle",
    "tags": [
      "ảnh ghép dọc",
      "áo trễ vai",
      "giàn hoa giấy",
      "nắng ban trưa",
      "tươi tắn"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Nàng Thơ"
    ],
    "description": "Sulii diện áo trắng trễ vai tay phồng dịu dàng dạo bước dưới vòm hoa giấy ngập tràn ánh nắng phố ban trưa.",
    "shootCode": "20260728",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sunlit-street-vibes-053.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "124",
    "indexNo": "124",
    "title": "URBAN CHIC SQUAT",
    "category": "Sunlit Lifestyle",
    "tags": [
      "dáng ngồi xổm",
      "bốt da cổ thấp",
      "set đồ trắng",
      "bức tường đá",
      "nữ tính cá tính"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Cá Tính"
    ],
    "description": "Sulii tạo dáng ngồi xổm tinh nghịch bên bậc thềm đá, kết hợp trang phục trắng nữ tính cùng bốt da cá tính.",
    "shootCode": "20260728",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-urban-chic-squat-054.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "125",
    "indexNo": "125",
    "title": "LIVE IN MOMENT",
    "category": "Sunlit Lifestyle",
    "tags": [
      "ảnh ghép đôi",
      "họa tiết doodle",
      "áo trắng tay phồng",
      "vòm lá xanh",
      "biểu cảm đáng yêu"
    ],
    "agencyTags": [
      "Cá Tính",
      "Nàng Thơ"
    ],
    "description": "Khung hình đôi trang trí nét vẽ doodle dễ thương, bắt trọn khoảnh khắc e ấp và duyên dáng bên vòm lá xanh.",
    "shootCode": "20260728",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-live-in-moment-056.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "126",
    "indexNo": "126",
    "title": "PLAYFUL SELFIE TIME",
    "category": "Sunlit Lifestyle",
    "tags": [
      "chụp selfie",
      "nhắm mắt mỉm cười",
      "áo trắng viền ren",
      "hoa giấy nở rộ",
      "tự nhiên"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên"
    ],
    "description": "Sulii mỉm cười nhắm mắt giơ điện thoại chụp ảnh selfie trước bức tường hoa giấy nở rộ dưới nắng hè.",
    "shootCode": "20260728",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-playful-selfie-time-057.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "127",
    "indexNo": "127",
    "title": "SWEET CHEEK POSE",
    "category": "Sunlit Lifestyle",
    "tags": [
      "ngồi bậc thềm",
      "ôm má tạo dáng",
      "set đồ trắng",
      "bốt da nâu",
      "dễ thương"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Quán Cafe",
      "Cá Tính",
      "Nàng Thơ"
    ],
    "description": "Sulii ngồi trên bậc thềm ôm má nụ cười e ấp, diện set trắng phối bốt da nâu bụi bặm trước cổng quán cà phê.",
    "shootCode": "20260728",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sweet-cheek-pose-058.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "128",
    "indexNo": "128",
    "title": "CASUAL PORCH SITTING",
    "category": "Sunlit Lifestyle",
    "tags": [
      "ngồi thư giãn",
      "nhìn thẳng ống kính",
      "áo trễ vai",
      "bậc thềm đá",
      "ánh sáng dịu"
    ],
    "agencyTags": [],
    "description": "Sulii ngồi thư thả trên bậc thềm gạch dưới tán hoa giấy, nhìn thẳng ống kính với ánh mắt trong veo thanh khiết.",
    "shootCode": "20260728",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-casual-porch-sitting-059.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "129",
    "indexNo": "129",
    "title": "SIDEWALK STROLL POSE",
    "category": "Sunlit Lifestyle",
    "tags": [
      "toàn thân",
      "dáng đi tự nhiên",
      "set quần áo trắng",
      "bốt da cổ thấp",
      "vỉa hè"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Cá Tính"
    ],
    "description": "Bức ảnh toàn thân bắt trọn vóc dáng thanh mảnh của Sulii khi dạo bước nhẹ nhàng trên hè phố lát gạch.",
    "shootCode": "20260728",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sidewalk-stroll-pose-060.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "130",
    "indexNo": "130",
    "title": "SUNNY GARDEN BENCH",
    "category": "Sunlit Lifestyle",
    "tags": [
      "ngồi ghế gỗ",
      "sân vườn quán cafe",
      "nắng rực rỡ",
      "vẻ đẹp thanh thuần",
      "trang phục trắng"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Quán Cafe"
    ],
    "description": "Sulii ngồi trên băng ghế gỗ dưới nắng trưa lung linh, nổi bật vẻ đẹp thanh thuần giữa không gian sân vườn quán cà phê.",
    "shootCode": "20260728",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sunny-garden-bench-061.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "131",
    "indexNo": "131",
    "title": "SERENE GREEN RETREAT",
    "category": "Sunlit Lifestyle",
    "tags": [
      "nhắm mắt mỉm cười",
      "tán cây râm mát",
      "quán cà phê ngoài trời",
      "bàn kim loại",
      "thư thái"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Quán Cafe",
      "Nàng Thơ"
    ],
    "description": "Người mẫu nhắm mắt thư giãn dưới vòm cây xanh mướt mát, toát lên cảm giác an yên và ngọt ngào bên bàn cà phê.",
    "shootCode": "20260728",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-serene-green-retreat-062.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "132",
    "indexNo": "132",
    "title": "PENSIVE GARDEN MOMENT",
    "category": "Sunlit Lifestyle",
    "tags": [
      "chạm môi ngẫm nghĩ",
      "góc nghiêng",
      "không gian xanh",
      "áo trễ vai trắng",
      "túi kẹp nách"
    ],
    "agencyTags": [
      "Quán Cafe",
      "Nàng Thơ"
    ],
    "description": "Sulii đưa ngón tay chạm môi với biểu cảm suy tư duyên dáng, ngồi bên bàn cà phê dưới bóng râm xanh mát.",
    "shootCode": "20260728",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-pensive-garden-moment-063.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "133",
    "indexNo": "133",
    "title": "PLAYFUL WINK CHARM",
    "category": "Sunlit Lifestyle",
    "tags": [
      "nháy mắt tinh nghịch",
      "nụ cười tươi",
      "ngồi bàn cafe",
      "tán cây xanh",
      "bốt da cá tính"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Quán Cafe",
      "Cá Tính"
    ],
    "description": "Sulii nháy mắt cười rạng rỡ đầy tinh nghịch khi ngồi tạo dáng tại góc bàn cà phê ngoài trời xanh mát mẻ.",
    "shootCode": "20260728",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-playful-wink-charm-064.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "134",
    "indexNo": "134",
    "title": "INDOOR MIRROR SELFIE",
    "category": "Sunlit Lifestyle",
    "tags": [
      "chụp gương selfie",
      "không gian trong nhà",
      "bảng vẽ doodle",
      "áo trắng bồng bềnh",
      "túi xách đen"
    ],
    "agencyTags": [
      "Quán Cafe"
    ],
    "description": "Sulii vén tóc tự chụp gương trong không gian quán cà phê ấm cúng với bảng trang trí kim loại độc đáo phía sau.",
    "shootCode": "20260728",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-indoor-mirror-selfie-065.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "135",
    "indexNo": "135",
    "title": "SHY STREET GLANCE",
    "category": "Sunlit Lifestyle",
    "tags": [
      "ngồi xổm e ấp",
      "che mặt ngại ngùng",
      "tường hoa giấy",
      "bốt da cổ lửng",
      "dạo phố"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Cá Tính",
      "Nàng Thơ"
    ],
    "description": "Sulii ngồi xổm e thẹn che mắt, diện trang phục màu trắng tươi tắn trên hè phố bên bức tường rực rỡ hoa giấy.",
    "shootCode": "20260728",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-shy-street-glance-066.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "136",
    "indexNo": "136",
    "title": "URBAN SUMMER CASUAL",
    "category": "Sunlit Lifestyle",
    "tags": [
      "set đồ trắng",
      "bốt da nâu",
      "giàn hoa giấy",
      "sải bước",
      "phố thị"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Nắng Tự Nhiên",
      "Cá Tính"
    ],
    "description": "Sulii diện set đồ trắng trẻ trung cùng bốt da nâu, sải bước tự nhiên trên vỉa hè trước ngôi nhà cổ điển ngập tràn giàn hoa giấy.",
    "shootCode": "20260728",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-urban-summer-casual-067.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "137",
    "indexNo": "137",
    "title": "FAIRYTALE BIRTHDAY REFLECTION",
    "category": "Coquette & Dreamy",
    "tags": [
      "phản chiếu qua gương",
      "vương miện công chúa",
      "bánh kem sinh nhật",
      "nụ cười ngọt ngào",
      "váy tay bồng"
    ],
    "agencyTags": [
      "Nàng Thơ"
    ],
    "description": "Hình ảnh phản chiếu qua gương ghi lại nụ cười rạng rỡ của Sulii khi đội vương miện hoa và nâng niu chiếc bánh sinh nhật.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-fairytale-birthday-reflection-035.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "138",
    "indexNo": "138",
    "title": "SWEET FLOOR WISH",
    "category": "Coquette & Dreamy",
    "tags": [
      "vương miện ren",
      "sàn gỗ",
      "thổi nến",
      "biểu cảm chu môi",
      "ngồi bệt"
    ],
    "agencyTags": [],
    "description": "Sulii đội vương miện ren ngồi bệt trên sàn gỗ bên cạnh chiếc bánh kem nhỏ, chuẩn bị thổi nến với nét mặt chu môi tinh nghịch.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sweet-floor-wish-038.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "139",
    "indexNo": "139",
    "title": "MIRROR REFLECTION CHARM",
    "category": "Coquette & Dreamy",
    "tags": [
      "chụp qua gương",
      "khung gương gỗ",
      "vương miện",
      "ánh sáng ban ngày",
      "dịu dàng"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Kiến Trúc Cổ",
      "Nàng Thơ"
    ],
    "description": "Bóng dáng Sulii đội vương miện bưng bánh kem được phản chiếu qua tấm gương gỗ cổ kính bên cạnh ô cửa sổ nhiều ánh sáng.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-mirror-reflection-charm-040.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "140",
    "indexNo": "140",
    "title": "PLAYFUL PRINCESS VIBE",
    "category": "Coquette & Dreamy",
    "tags": [
      "nụ cười tươi",
      "gặp gỡ sinh nhật",
      "váy babydoll",
      "góc chụp từ trên",
      "ngọt ngào"
    ],
    "agencyTags": [
      "Nàng Thơ"
    ],
    "description": "Sulii nở nụ cười tươi tắn khi ngồi bên bàn trà, tay cầm đĩa bánh sinh nhật và tay kia chạm nhẹ vương miện đội đầu.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-playful-princess-vibe-041.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "141",
    "indexNo": "141",
    "title": "SILENT BIRTHDAY PRAYER",
    "category": "Coquette & Dreamy",
    "tags": [
      "cận cảnh bánh kem",
      "chắp tay cầu nguyện",
      "nến pastel",
      "váy hoa bồng",
      "chi tiết ngọt ngào"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Nàng Thơ"
    ],
    "description": "Cận cảnh chiếc bánh kem pastel cắm nến nhiều màu và đôi bàn tay Sulii chắp lại ước nguyện đầy thành kính.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-silent-birthday-prayer-042.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "142",
    "indexNo": "142",
    "title": "STAIRWAY TOP VIEW",
    "category": "Coquette & Dreamy",
    "tags": [
      "góc chụp trên cao",
      "bậc cầu thang",
      "váy xòe ngắn",
      "bốt cổ thấp",
      "e ấp"
    ],
    "agencyTags": [
      "Kiến Trúc Cổ",
      "Nàng Thơ"
    ],
    "description": "Góc chụp từ trên cao xuống bậc thang tối màu khi Sulii cầm bánh sinh nhật, diện váy kem nhã nhặn với ánh mắt mỉm cười e ấp.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-stairway-top-view-043.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "143",
    "indexNo": "143",
    "title": "WARM ARTISTIC NOOK",
    "category": "Coquette & Dreamy",
    "tags": [
      "đèn vàng ấm",
      "tường vẽ tranh",
      "gương bầu dục",
      "dáng đứng đáng yêu",
      "phong cách retro"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Ánh Đèn Đêm"
    ],
    "description": "Sulii đứng cầm bánh kem trước bức tường vẽ tranh hoạt họa ấm cúng, ánh đèn vàng hắt nhẹ tạo nét đáng yêu, nhí nhảnh.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-warm-artistic-nook-044.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "144",
    "indexNo": "144",
    "title": "VINTAGE BAKERY CORNER",
    "category": "Coquette & Dreamy",
    "tags": [
      "toàn cảnh",
      "quầy bánh vintage",
      "cửa sổ kính lớn",
      "dáng co chân",
      "không gian quán cafe"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Quán Cafe"
    ],
    "description": "Toàn cảnh Sulii đứng tạo dáng co chân tinh nghịch tại quầy bánh vintage với những ô cửa sổ lớn nhìn ra khu vườn xanh mướt.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-vintage-bakery-corner-045.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "145",
    "indexNo": "145",
    "title": "DIGITAL NOSTALGIA FRAME",
    "category": "Coquette & Dreamy",
    "tags": [
      "máy ảnh kỹ thuật số",
      "góc nhìn thứ nhất",
      "ảnh lồng ảnh",
      "cầu nguyện",
      "tone màu hoài niệm"
    ],
    "agencyTags": [],
    "description": "Khung hình sáng tạo qua màn hình máy ảnh kỹ thuật số ghi lại khoảnh khắc Sulii chắp tay ước nguyện trước chiếc bánh sinh nhật.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-digital-nostalgia-frame-046.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "146",
    "indexNo": "146",
    "title": "DREAMY PASTEL WISH",
    "category": "Coquette & Dreamy",
    "tags": [
      "vương miện pastel",
      "ánh sáng êm dịu",
      "cúi đầu dịu dàng",
      "tranh tường mờ",
      "váy trắng bồng"
    ],
    "agencyTags": [
      "Nàng Thơ"
    ],
    "description": "Sulii cúi đầu ngắm nhìn chiếc bánh kem lung linh trên tay, đầu đội vương miện ren nổi bật trên phông nền tranh tường màu pastel mơ màng.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-dreamy-pastel-wish-047.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "147",
    "indexNo": "147",
    "title": "NIGHT CANDLE LIGHTING",
    "category": "Coquette & Dreamy",
    "tags": [
      "thắp nến",
      "ánh lửa bập bùng",
      "chụp đêm",
      "chuyển động mờ ảo",
      "không gian ngoài trời"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Ánh Đèn Đêm"
    ],
    "description": "Sulii dùng bật lửa thắp những ngọn nến sinh nhật trong không gian ban đêm mờ ảo, ánh lửa lung linh rọi sáng khuôn mặt thanh tú.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-night-candle-lighting-048.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "148",
    "indexNo": "148",
    "title": "CANDLELIT NIGHT WISH",
    "category": "Coquette & Dreamy",
    "tags": [
      "ánh nến rực rỡ",
      "chống cằm mỉm cười",
      "vương miện lấp lánh",
      "chụp cận ban đêm",
      "ấm áp"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm",
      "Nàng Thơ"
    ],
    "description": "Sulii tựa cằm mỉm cười dịu dàng ngắm nhìn ngọn nến sinh nhật đang cháy sáng rực rỡ trong đêm tĩnh mịch.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-candlelit-night-wish-049.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "149",
    "indexNo": "149",
    "title": "SWEET TILED NOOK",
    "category": "Coquette & Dreamy",
    "tags": [
      "tường gạch trắng",
      "ánh mắt mơ màng",
      "bánh kem pastel",
      "cửa sổ ngập sáng",
      "váy tay phồng"
    ],
    "agencyTags": [
      "Nàng Thơ"
    ],
    "description": "Sulii bưng chiếc bánh kem với ánh mắt mơ màng bên mảng tường ốp gạch men trắng cạnh khung cửa sổ đón ánh sáng chan hòa.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sweet-tiled-nook-050.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "150",
    "indexNo": "150",
    "title": "FAIRY TALE PROFILE",
    "category": "Coquette & Dreamy",
    "tags": [
      "góc nghiêng",
      "vương miện thủ công",
      "bánh kem sinh nhật",
      "bức tường ấm",
      "dáng vẻ công chúa"
    ],
    "agencyTags": [
      "Nàng Thơ"
    ],
    "description": "Sulii xuất hiện ở góc nghiêng đầy cuốn hút với vương miện ren cầu kỳ, hai tay nâng bánh kem trước bức tường ấm áp.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-fairy-tale-profile-051.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "151",
    "indexNo": "151",
    "title": "SWEET BIRTHDAY MEMORIES",
    "category": "Coquette & Dreamy",
    "tags": [
      "ảnh ghép polaroid",
      "tiệc sinh nhật",
      "bánh kem",
      "tone pastel",
      "dễ thương"
    ],
    "agencyTags": [
      "Nàng Thơ"
    ],
    "description": "Bức ảnh ghép phong cách polaroid ghi lại khoảnh khắc đón sinh nhật ngọt ngào của Sulii cùng bánh kem lung linh nến.",
    "shootCode": "20260725",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sweet-birthday-memories-052.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "152",
    "indexNo": "152",
    "title": "SWEET COTTAGECORE COLLAGE",
    "category": "Coquette & Dreamy",
    "tags": [
      "váy hoa tay phồng",
      "bánh ngọt",
      "khung ảnh máy ảnh",
      "phong cách vintage",
      "dịu dàng ngọt ngào"
    ],
    "agencyTags": [
      "Nàng Thơ"
    ],
    "description": "Sulii diện váy hoa tay phồng bồng bềnh, chăm chú cắt bánh ngọt trong khung hình ghép nghệ thuật phong cách vintage đáng yêu.",
    "shootCode": "20260723",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sweet-cottagecore-collage-026.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "153",
    "indexNo": "153",
    "title": "SWEET BAKERY DATE",
    "category": "Coquette & Dreamy",
    "tags": [
      "váy babydoll hoa",
      "tiệm bánh ngọt",
      "tông be ấm",
      "ánh sáng tự nhiên",
      "dịu dàng trong trẻo"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Quán Cafe",
      "Nàng Thơ"
    ],
    "description": "Sulii diện váy babydoll hoa nhí tay bồng tông kem đào, cầm khay kẹp bánh trong tiệm bánh ngọt ấm cúng với nét biểu cảm dịu dàng, trong trẻo.",
    "shootCode": "20260723",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-sweet-bakery-date-029.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "154",
    "indexNo": "154",
    "title": "PLAYFUL MIRROR LOOK",
    "category": "Coquette & Dreamy",
    "tags": [
      "selfie giấu mặt",
      "váy babydoll",
      "bốt cổ thấp",
      "túi kẹp nách",
      "tạo dáng nhấc chân"
    ],
    "agencyTags": [
      "Quán Cafe"
    ],
    "description": "Sulii che mặt chụp ảnh trước gương lớn trong quán cafe, tạo dáng nhấc chân nhí nhảnh cùng đầm xòe tay bồng và bốt cổ thấp.",
    "shootCode": "20260723",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-playful-mirror-look-030.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "155",
    "indexNo": "155",
    "title": "CAPTURING SWEET MOMENTS",
    "category": "Coquette & Dreamy",
    "tags": [
      "chụp ảnh điện thoại",
      "bánh kem nến",
      "váy hoa bồng bềnh",
      "chăm chú tập trung",
      "góc chụp cận"
    ],
    "agencyTags": [
      "Nàng Thơ"
    ],
    "description": "Sulii tập trung cầm điện thoại chụp lại chiếc bánh kem kỷ niệm xinh xắn với vẻ mặt chăm chú dịu dàng.",
    "shootCode": "20260723",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-capturing-sweet-moments-031.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "156",
    "indexNo": "156",
    "title": "COZY BAKERY MOMENT",
    "category": "Coquette & Dreamy",
    "tags": [
      "váy hoa nhí",
      "tiệm bánh cổ điển",
      "tone vàng ấm",
      "ánh sáng dịu",
      "khoảnh khắc tự nhiên"
    ],
    "agencyTags": [
      "Quán Cafe"
    ],
    "description": "Sulii diện váy hoa nhí nữ tính, tay cầm khay gắp bánh trong tiệm bánh phong cách cổ điển với ánh sáng vàng ấm áp và biểu cảm tự nhiên.",
    "shootCode": "20260723",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-cozy-bakery-moment-032.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "157",
    "indexNo": "157",
    "title": "PASTEL BIRTHDAY CELEBRATION",
    "category": "Coquette & Dreamy",
    "tags": [
      "bánh sinh nhật",
      "vương miện ren",
      "điện thoại khoe ảnh",
      "tone màu pastel",
      "tiệc cafe"
    ],
    "agencyTags": [
      "Quán Cafe",
      "Nàng Thơ"
    ],
    "description": "Không gian bàn tiệc ngọt ngào với bánh sinh nhật màu pastel và vương miện ren khi Sulii giơ điện thoại hướng về phía ống kính.",
    "shootCode": "20260723",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-pastel-birthday-celebration-033.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "158",
    "indexNo": "158",
    "title": "URBAN CAMO NIGHT",
    "category": "Sunlit Lifestyle",
    "tags": [
      "mũ rằn ri",
      "áo hai dây đen",
      "đèn flash đêm",
      "đường phố đêm",
      "phong cách bụi bặm"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm",
      "Cá Tính"
    ],
    "description": "Sulii diện áo hai dây đen phối cùng mũ lưỡi trai rằn ri cá tính, tạo dáng nửa mặt cuốn hút dưới ánh đèn flash ban đêm ngoài phố.",
    "shootCode": "20260716",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-urban-camo-night-018.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "159",
    "indexNo": "159",
    "title": "URBAN ALLEY CHIC",
    "category": "Sunlit Lifestyle",
    "tags": [
      "áo hở lưng",
      "quần ống rộng",
      "mũ rằn ri",
      "con ngõ",
      "phong cách đường phố"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Cá Tính"
    ],
    "description": "Sulii diện áo yếm hở lưng cùng quần ống rộng màu đen cá tính, ngoảnh đầu mỉm cười nhẹ nhàng giữa con ngõ ban ngày.",
    "shootCode": "20260716",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-urban-alley-chic-019.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "160",
    "indexNo": "160",
    "title": "CAFETERIA STREET VIBE",
    "category": "Sunlit Lifestyle",
    "tags": [
      "áo yếm đen",
      "mũ lưỡi trai",
      "poster cafe",
      "chu môi tinh nghịch",
      "ghế băng"
    ],
    "agencyTags": [
      "Quán Cafe",
      "Cá Tính"
    ],
    "description": "Nàng mẫu diện set đồ đen cá tính phối mũ lưỡi trai, ngồi chống cằm chu môi tinh nghịch trước poster cà phê graphic.",
    "shootCode": "20260716",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-cafeteria-street-vibe-020.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "161",
    "indexNo": "161",
    "title": "CASUAL STREET COOL",
    "category": "Sunlit Lifestyle",
    "tags": [
      "áo crop top",
      "quần suông đen",
      "mũ rằn ri",
      "ly cà phê",
      "đường phố"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Nắng Tự Nhiên",
      "Quán Cafe",
      "Cá Tính"
    ],
    "description": "Sulii diện áo crop top đen khoe eo thon cùng quần suông rộng và mũ camo, tay cầm ly nước tạo dáng sành điệu ngoài trời.",
    "shootCode": "20260716",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-casual-street-cool-022.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "162",
    "indexNo": "162",
    "title": "MIRROR SNAP MOMENT",
    "category": "Sunlit Lifestyle",
    "tags": [
      "selfie trước gương",
      "máy ảnh compact",
      "áo croptop đen",
      "đèn tròn lớn",
      "quán cafe"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Quán Cafe",
      "Cá Tính"
    ],
    "description": "Sulii chụp ảnh trước gương bằng máy ảnh compact nhỏ gọn, khoe vòng eo thon gọn trong không gian quán cà phê ấm cúng.",
    "shootCode": "20260716",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-mirror-snap-moment-023.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "163",
    "indexNo": "163",
    "title": "URBAN CAFE VIBES",
    "category": "Sunlit Lifestyle",
    "tags": [
      "trang phục đen",
      "quán cà phê",
      "tone đen trắng",
      "mũ lưỡi trai",
      "hiệu ứng chuyển động"
    ],
    "agencyTags": [
      "Quán Cafe",
      "Cá Tính"
    ],
    "description": "Sulii diện trang phục đen phong cách streetwear cùng mũ lưỡi trai, ngồi thư giãn trước poster quán cà phê với nụ cười tươi tắn trong khung hình hiệu ứng mờ chuyển động.",
    "shootCode": "20260716",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-urban-cafe-vibes-025.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "164",
    "indexNo": "164",
    "title": "PLAYFUL GINGHAM VIBES",
    "category": "Sunlit Lifestyle",
    "tags": [
      "áo hai dây caro",
      "cổng nhà phố",
      "xanh pastel",
      "ánh sáng tự nhiên",
      "nháy mắt tinh nghịch"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Nắng Tự Nhiên"
    ],
    "description": "Sulii diện áo hai dây caro xanh pastel nháy mắt tạo dáng tinh nghịch trước cổng nhà xanh mát dưới ánh sáng ban ngày tự nhiên.",
    "shootCode": "20260714",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-playful-gingham-vibes-007.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "165",
    "indexNo": "165",
    "title": "GARDEN BREEZE CASUAL",
    "category": "Sunlit Lifestyle",
    "tags": [
      "áo hai dây xanh",
      "chân váy chữ A",
      "sân vườn quán cafe",
      "ánh sáng tự nhiên",
      "thần thái dịu dàng"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Quán Cafe",
      "Nàng Thơ"
    ],
    "description": "Sulii diện áo hai dây xanh nhạt nữ tính cùng chân váy đen ngắn, mỉm cười e ấp giữa góc sân vườn ngập tràn cây xanh.",
    "shootCode": "20260714",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-garden-breeze-casual-008.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "166",
    "indexNo": "166",
    "title": "SUMMER CAFE CASUAL",
    "category": "Sunlit Lifestyle",
    "tags": [
      "áo hai dây",
      "kẻ ô xanh",
      "quán cà phê",
      "cây xanh",
      "nhắm mắt cười"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Quán Cafe"
    ],
    "description": "Sulii diện áo hai dây kẻ ô xanh kết hợp chân váy đen, biểu cảm nhắm mắt cười duyên dáng trong không gian quán cà phê ngoài trời ngập tràn cây xanh.",
    "shootCode": "20260714",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-summer-cafe-casual-009.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "167",
    "indexNo": "167",
    "title": "SUMMER BOUGAINVILLEA CHARM",
    "category": "Sunlit Lifestyle",
    "tags": [
      "áo hai dây caro",
      "chân váy ngắn",
      "giàn hoa giấy",
      "cổng sắt đen",
      "ánh sáng ban ngày"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Nàng Thơ"
    ],
    "description": "Sulii diện áo hai dây caro xanh pastel phối cùng chân váy denim ngắn, tạo dáng cầm hoa giấy duyên dáng trước cổng nhà rợp bóng cây dưới ánh sáng ban ngày dịu nhẹ.",
    "shootCode": "20260714",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-summer-bougainvillea-charm-010.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "168",
    "indexNo": "168",
    "title": "PLAYFUL SUMMER GARDEN",
    "category": "Sunlit Lifestyle",
    "tags": [
      "áo hai dây caro",
      "chân váy ngắn",
      "bối cảnh cây xanh",
      "nhắm mắt cười duyên",
      "đèn flash nhẹ"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm"
    ],
    "description": "Sulii diện áo hai dây caro xanh cùng chân váy ngắn đen, tạo dáng nhắm mắt mỉm cười đáng yêu trước hàng cây cảnh xanh mướt dưới ánh đèn flash nhẹ.",
    "shootCode": "20260714",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-playful-summer-garden-011.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "169",
    "indexNo": "169",
    "title": "PLAYFUL CAT MOMENT",
    "category": "Sunlit Lifestyle",
    "tags": [
      "áo hai dây xanh",
      "bế mèo mướp",
      "cổng nhà phố",
      "chu môi nhí nhảnh",
      "ánh sáng ban ngày"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên"
    ],
    "description": "Sulii diện áo hai dây màu xanh nhạt, tạo dáng chu môi tinh nghịch khi bế bổng một chú mèo vàng trước cổng nhà phong cách cổ điển.",
    "shootCode": "20260714",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-playful-cat-moment-013.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "170",
    "indexNo": "170",
    "title": "CASUAL STREET WALK",
    "category": "Sunlit Lifestyle",
    "tags": [
      "áo hai dây",
      "chân váy ngắn",
      "phố xá xanh mát",
      "túi kẹp nách",
      "ánh sáng tự nhiên"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Nắng Tự Nhiên"
    ],
    "description": "Sulii diện áo hai dây ca-rô xanh pastel phối cùng chân váy đen ngắn, thong thả sải bước bên hiên nhà rợp bóng cây dưới ánh sáng ban ngày dịu nhẹ.",
    "shootCode": "20260714",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-casual-street-walk-014.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "171",
    "indexNo": "171",
    "title": "CASUAL SCOOTER RIDE",
    "category": "Sunlit Lifestyle",
    "tags": [
      "áo hai dây xanh",
      "quần short đen",
      "ngồi trên xe máy",
      "sân nhà",
      "ánh sáng flash"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Ánh Đèn Đêm",
      "Nàng Thơ"
    ],
    "description": "Sulii diện áo hai dây xanh pastel và quần short đen ngồi tạo dáng trên xe máy trong sân nhà ngập tràn cây xanh với nụ cười e ấp dưới ánh đèn flash.",
    "shootCode": "20260714",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-casual-scooter-ride-015.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "172",
    "indexNo": "172",
    "title": "BLUE GINGHAM CANDID",
    "category": "Sunlit Lifestyle",
    "tags": [
      "áo hai dây kẻ",
      "tường gạch đỏ",
      "quán cà phê",
      "tone xanh pastel",
      "ánh sáng tự nhiên"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Quán Cafe",
      "Nàng Thơ"
    ],
    "description": "Sulii diện áo hai dây kẻ caro xanh nữ tính, tạo dáng e ấp bên bức tường gạch mộc mạc trong ánh sáng tự nhiên dịu mát.",
    "shootCode": "20260714",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-blue-gingham-candid-016.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "173",
    "indexNo": "173",
    "title": "CASUAL SUMMER STREET",
    "category": "Sunlit Lifestyle",
    "tags": [
      "áo hai dây ca-rô",
      "chân váy ngắn",
      "cổng gỗ xanh",
      "ánh sáng ban ngày",
      "tone xanh pastel"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Nắng Tự Nhiên",
      "Nàng Thơ"
    ],
    "description": "Sulii diện áo hai dây kẻ ca-rô xanh cùng chân váy ngắn đen, mỉm cười dịu dàng dưới ánh sáng ban ngày trước cổng rào xanh mộc mạc.",
    "shootCode": "20260714",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-casual-summer-street-017.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "174",
    "indexNo": "174",
    "title": "RUSTIC RETRO CHARM",
    "category": "Heritage & Muse",
    "tags": [
      "áo gấm hồng",
      "không gian gỗ",
      "tone ấm",
      "đèn vàng dịu",
      "nháy mắt duyên dáng"
    ],
    "agencyTags": [
      "Ánh Đèn Đêm",
      "Truyền Thống"
    ],
    "description": "Sulii diện áo gấm cách tân màu hồng nhạt, nháy mắt tinh nghịch trong không gian nội thất gỗ cổ điển ấm cúng.",
    "shootCode": "20260119",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-rustic-retro-charm-003.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "175",
    "indexNo": "175",
    "title": "RUSTIC SILK POETRY",
    "category": "Heritage & Muse",
    "tags": [
      "áo dài gấm",
      "ghế gỗ mộc",
      "tường xi măng",
      "hồng phấn trang nhã",
      "ánh sáng dịu"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên",
      "Truyền Thống",
      "Nàng Thơ"
    ],
    "description": "Sulii diện áo dài gấm lụa hồng phấn quý phái, ngồi e ấp che mặt trên băng ghế gỗ mộc mạc bên bức tường xi măng tối giản trong ánh sáng tự nhiên dịu êm.",
    "shootCode": "20260119",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-rustic-silk-poetry-005.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": false
  },
  {
    "id": "176",
    "indexNo": "176",
    "title": "COZY COFFEE TIME",
    "category": "Noir & Retro",
    "tags": [
      "cà phê latte",
      "matcha latte",
      "tĩnh vật cà phê",
      "khay thiếc",
      "ánh sáng trầm ấm"
    ],
    "agencyTags": [
      "Cận Mặt",
      "Quán Cafe"
    ],
    "description": "Góc tĩnh vật cận cảnh một ly cà phê latte art tỉ mỉ và một ly matcha latte mát lạnh đặt trên khay thiếc trong không gian quán cà phê ấm cúng.",
    "shootCode": "20260915",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-cozy-coffee-time-109.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": true
  },
  {
    "id": "177",
    "indexNo": "177",
    "title": "RUSTIC HORSE CARRIAGE",
    "category": "Sunlit Lifestyle",
    "tags": [
      "xe ngựa",
      "đường làng",
      "nắng tự nhiên",
      "rặng dừa",
      "mộc mạc"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Nắng Tự Nhiên"
    ],
    "description": "Cỗ xe ngựa mộc mạc kết hoa rực rỡ dừng trên đường làng rợp bóng dừa dưới ánh nắng chói chang.",
    "shootCode": "20260807",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-rustic-horse-carriage-082.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": true
  },
  {
    "id": "178",
    "indexNo": "178",
    "title": "MINIMALIST SCULPTURAL SPACE",
    "category": "Sunlit Lifestyle",
    "tags": [
      "nội thất kiến trúc",
      "cột xoắn điêu khắc",
      "gương tròn",
      "tone xám be",
      "không gian tối giản"
    ],
    "agencyTags": [
      "Kiến Trúc Cổ",
      "Cá Tính"
    ],
    "description": "Góc kiến trúc nội thất tối giản hiện đại với trụ cột xoắn tầng độc đáo và gương tròn trong ánh sáng êm dịu.",
    "shootCode": "20260716",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-minimalist-sculptural-space-021.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": true
  },
  {
    "id": "179",
    "indexNo": "179",
    "title": "URBAN GREENERY CORNER",
    "category": "Sunlit Lifestyle",
    "tags": [
      "ngoại cảnh phố",
      "giàn hoa giấy",
      "tông xanh vàng",
      "cổng sắt đen",
      "ánh sáng ban ngày"
    ],
    "agencyTags": [
      "Nắng Tự Nhiên"
    ],
    "description": "Khung cảnh trước cổng rào sắt đen rợp bóng giàn cây hoa giấy xanh mát bên cạnh bức tường vàng và thùng phuy trang trí trong ánh sáng tự nhiên.",
    "shootCode": "20260714",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-urban-greenery-corner-012.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": true
  },
  {
    "id": "180",
    "indexNo": "180",
    "title": "VINTAGE APOTHECARY CORNER",
    "category": "Heritage & Muse",
    "tags": [
      "không gian nội thất",
      "tủ thuốc gỗ",
      "phong cách vintage",
      "tone nâu trầm",
      "ánh sáng tự nhiên"
    ],
    "agencyTags": [
      "Toàn Thân",
      "Nắng Tự Nhiên",
      "Kiến Trúc Cổ"
    ],
    "description": "Không gian nội thất đậm chất mộc mạc và hoài niệm với hệ tủ thuốc đông y cổ điển, bàn ghế gỗ thô mộc, các bình thủy tinh lớn cùng cành hoa đón Tết trong ánh sáng tự nhiên dịu êm.",
    "shootCode": "20260119",
    "client": "Sulii Archive",
    "year": "2026",
    "imageUrl": "/images/portfolio/sulii-vintage-apothecary-corner-004.webp",
    "layout": "tall",
    "featured": false,
    "isInterlude": true
  }
];
// === AUTO-GENERATED PORTFOLIO END ===