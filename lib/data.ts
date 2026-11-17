export type VibeMode = "street" | "editorial" | "commercial";
export type ConceptCategory = "All" | "Editorial" | "Streetwear" | "Commercial" | "Beauty";

export interface PortfolioItem {
  id: string;
  indexNo: string;
  title: string;
  category: Exclude<ConceptCategory, "All">;
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

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    indexNo: "01",
    title: "URBAN PULSE",
    category: "Streetwear",
    client: "Saigon Street Lab",
    year: "2026",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1100&q=85",
    layout: "wide",
  },
  {
    id: "2",
    indexNo: "02",
    title: "RAW SILHOUETTE",
    category: "Editorial",
    client: "Noir Studio",
    year: "2026",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=85",
    layout: "offset",
  },
  {
    id: "3",
    indexNo: "03",
    title: "GOLDEN HOUR SKIN",
    category: "Beauty",
    client: "Lumina Cosmetics",
    year: "2026",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=85",
    layout: "tall",
  },
  {
    id: "4",
    indexNo: "04",
    title: "RESORT DAYDREAM",
    category: "Commercial",
    client: "Atelier Sun",
    year: "2026",
    imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1100&q=85",
    layout: "wide",
  },
  {
    id: "5",
    indexNo: "05",
    title: "KINETIC DENIM",
    category: "Streetwear",
    client: "District 1 Archive",
    year: "2026",
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1100&q=85",
    layout: "offset",
  },
];