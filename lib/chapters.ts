import {
  EDITORIAL_CHAPTERS,
  PORTFOLIO_ITEMS,
  type EditorialChapter,
  type PortfolioItem,
} from "@/lib/data";

export interface ChapterMeta extends EditorialChapter {
  slug: string;
  items: PortfolioItem[];
  coverItem: PortfolioItem | undefined;
  shootCodes: string[];
  photoCount: number;
}

export function chapterIdToSlug(id: string): string {
  return id
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Danh sách các Chương chính (loại bỏ "All"), tự động mở rộng khi thêm chương mới
export function getAllChapters(): ChapterMeta[] {
  return EDITORIAL_CHAPTERS.filter((c) => c.id !== "All").map((chapter) => {
    const items = PORTFOLIO_ITEMS.filter((item) => item.category === chapter.id);
    const nonInterlude = items.filter((i) => !i.isInterlude);

    // Ưu tiên ảnh có heroRank -> featured -> ảnh chân dung đầu tiên làm ảnh bìa Chương
    const coverItem =
      nonInterlude.find((i) => i.heroRank !== undefined) ||
      nonInterlude.find((i) => i.featured) ||
      nonInterlude[0] ||
      items[0];

    const shootCodes = Array.from(
      new Set(items.map((i) => i.shootCode).filter(Boolean) as string[])
    ).sort((a, b) => b.localeCompare(a));

    return {
      ...chapter,
      slug: chapterIdToSlug(chapter.id),
      items,
      coverItem,
      shootCodes,
      photoCount: items.length,
    };
  });
}

export function getChapterBySlug(slug: string): ChapterMeta | undefined {
  return getAllChapters().find((c) => c.slug === slug);
}

// Bộ ảnh Profile nghệ thuật nhất cho Hero & Comp Card (mặc định AUTUMN GLOW PORTRAIT đứng đầu)
export function getHeroProfileFrames(): PortfolioItem[] {
  const ranked = PORTFOLIO_ITEMS.filter((i) => i.heroRank !== undefined).sort(
    (a, b) => (a.heroRank ?? 99) - (b.heroRank ?? 99)
  );
  if (ranked.length > 0) return ranked;
  return PORTFOLIO_ITEMS.filter((i) => !i.isInterlude).slice(0, 6);
}

export function getDefaultTheme(): EditorialChapter {
  return EDITORIAL_CHAPTERS[0];
}

// Đổi mã thư mục "20261115" thành "15.11.2026" cho dễ đọc
export function formatShootDate(shootCode?: string): string {
  if (!shootCode) return "";
  const match = shootCode.match(/^(\d{4})(\d{2})(\d{2})$/);
  if (!match) return shootCode;
  return `${match[3]}.${match[2]}.${match[1]}`;
}