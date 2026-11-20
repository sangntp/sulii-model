import { notFound } from "next/navigation";
import { getAllChapters, getChapterBySlug } from "@/lib/chapters";
import ChapterView from "@/components/ChapterView";

export function generateStaticParams() {
  return getAllChapters().map((chapter) => ({
    slug: chapter.slug,
  }));
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);

  if (!chapter) {
    notFound();
  }

  return <ChapterView chapter={chapter} allChapters={getAllChapters()} />;
}