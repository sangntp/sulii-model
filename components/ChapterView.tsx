"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { PortfolioItem } from "@/lib/data";
import { formatShootDate, type ChapterMeta } from "@/lib/chapters";

interface ChapterViewProps {
  chapter: ChapterMeta;
  allChapters: ChapterMeta[];
}

export default function ChapterView({ chapter, allChapters }: ChapterViewProps) {
  const [selectedShoot, setSelectedShoot] = useState<string>("ALL");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const { theme } = chapter;

  const displayedItems = useMemo(() => {
    if (selectedShoot === "ALL") return chapter.items;
    return chapter.items.filter((i) => i.shootCode === selectedShoot);
  }, [chapter.items, selectedShoot]);

  const sameShootSeries = useMemo(() => {
    if (!selectedItem?.shootCode) return [];
    return chapter.items.filter((i) => i.shootCode === selectedItem.shootCode);
  }, [chapter.items, selectedItem]);

  const nextChapter = useMemo(() => {
    const idx = allChapters.findIndex((c) => c.slug === chapter.slug);
    return allChapters[(idx + 1) % allChapters.length];
  }, [allChapters, chapter.slug]);

  useEffect(() => {
    if (!selectedItem) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
      if (sameShootSeries.length <= 1) return;
      const idx = sameShootSeries.findIndex((p) => p.id === selectedItem.id);
      if (e.key === "ArrowRight") {
        setSelectedItem(sameShootSeries[(idx + 1) % sameShootSeries.length]);
      } else if (e.key === "ArrowLeft") {
        setSelectedItem(
          sameShootSeries[(idx - 1 + sameShootSeries.length) % sameShootSeries.length]
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedItem, sameShootSeries]);

  const handleCopyChapterLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    } catch {}
  };

  return (
    <div
      className="min-h-screen w-full transition-colors duration-500"
      style={{ backgroundColor: theme.bg, color: theme.ink }}
    >
      <header
        className="sticky top-0 z-40 border-b backdrop-blur-md"
        style={{
          backgroundColor: `${theme.bg}E6`,
          borderColor: theme.border,
        }}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10">
          <Link
            href="/"
            className="text-[11px] font-mono uppercase tracking-[0.16em] hover:opacity-65 transition-opacity"
          >
            ← Trang chủ
          </Link>

          <Link
            href="/"
            className="font-serif text-lg md:text-xl tracking-[0.22em] uppercase"
          >
            SULII
          </Link>

          <button
            type="button"
            onClick={handleCopyChapterLink}
            className="px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-[0.14em] border cursor-pointer transition-opacity hover:opacity-75"
            style={{
              borderColor: theme.ink,
              backgroundColor: copiedLink ? theme.ink : "transparent",
              color: copiedLink ? theme.bg : theme.ink,
            }}
          >
            {copiedLink ? "Đã sao chép ✓" : "Sao chép link"}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-20">
        <div
          className="pb-10 border-b flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          style={{ borderColor: theme.border }}
        >
          <div>
            <p
              className="text-[11px] font-mono uppercase tracking-[0.18em] mb-3"
              style={{ color: theme.accent }}
            >
              CHƯƠNG {chapter.index} · {chapter.shootCodes.length} BUỔI CHỤP ·{" "}
              {chapter.photoCount} ẢNH
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight">
              {chapter.label}
            </h1>
            <p
              className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed"
              style={{ color: theme.muted }}
            >
              {chapter.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {allChapters.map((c) => {
              const isCurrent = c.slug === chapter.slug;
              return (
                <Link
                  key={c.slug}
                  href={`/chapters/${c.slug}`}
                  className="px-3 py-1.5 text-[11px] font-mono tracking-wide border transition-opacity hover:opacity-80"
                  style={{
                    borderColor: isCurrent ? theme.accent : theme.border,
                    backgroundColor: isCurrent ? theme.ink : "transparent",
                    color: isCurrent ? theme.bg : theme.muted,
                  }}
                >
                  {c.index}. {c.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bộ lọc theo từng buổi chụp */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-6 mb-10">
          <span
            className="text-[10px] font-mono uppercase tracking-[0.18em]"
            style={{ color: theme.muted }}
          >
            Buổi chụp:
          </span>

          <button
            type="button"
            onClick={() => setSelectedShoot("ALL")}
            className="text-xs font-mono py-1 border-b cursor-pointer"
            style={{
              color: selectedShoot === "ALL" ? theme.ink : theme.muted,
              borderColor: selectedShoot === "ALL" ? theme.accent : "transparent",
            }}
          >
            Tất cả ({chapter.photoCount})
          </button>

          {chapter.shootCodes.map((code) => {
            const count = chapter.items.filter((i) => i.shootCode === code).length;
            const isSelected = selectedShoot === code;
            return (
              <button
                key={code}
                type="button"
                onClick={() => setSelectedShoot(code)}
                className="text-xs font-mono py-1 border-b cursor-pointer"
                style={{
                  color: isSelected ? theme.ink : theme.muted,
                  borderColor: isSelected ? theme.accent : "transparent",
                }}
              >
                {formatShootDate(code)} ({count})
              </button>
            );
          })}
        </div>

        {/* Lưới dàn trang tạp chí */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-14 md:gap-y-20 items-start">
          {displayedItems.map((item, idx) => {
            const spanClass = item.isInterlude
              ? "md:col-span-4 md:px-4"
              : item.layout === "wide"
              ? "md:col-span-8"
              : idx % 5 === 0
              ? "md:col-span-7"
              : idx % 5 === 1
              ? "md:col-span-5 md:mt-16"
              : "md:col-span-4";

            return (
              <article
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group cursor-pointer ${spanClass}`}
              >
                <div
                  className="overflow-hidden border"
                  style={{
                    backgroundColor: theme.surface,
                    borderColor: theme.border,
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading={idx < 4 ? "eager" : "lazy"}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div
                  className="mt-3 pt-2.5 border-t flex items-baseline justify-between gap-4"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <h3 className="font-serif text-base md:text-lg tracking-wide">
                      {item.title}
                    </h3>
                    <p
                      className="text-[11px] font-mono mt-0.5"
                      style={{ color: theme.muted }}
                    >
                      {formatShootDate(item.shootCode)} · #{item.indexNo}
                    </p>
                  </div>
                  <span
                    className="text-[10px] font-mono uppercase tracking-[0.14em] opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    style={{ color: theme.accent }}
                  >
                    Xem lớn ↗
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Chuyển sang chương kế tiếp */}
        {nextChapter && (
          <div
            className="mt-24 pt-12 border-t flex flex-col sm:flex-row sm:items-end justify-between gap-6"
            style={{ borderColor: theme.border }}
          >
            <div>
              <p
                className="text-[10px] font-mono uppercase tracking-[0.2em] mb-2"
                style={{ color: theme.muted }}
              >
                CHƯƠNG TIẾP THEO
              </p>
              <Link
                href={`/chapters/${nextChapter.slug}`}
                className="font-serif text-3xl md:text-5xl hover:opacity-70 transition-opacity"
              >
                {nextChapter.index}. {nextChapter.label} →
              </Link>
            </div>

            <Link
              href="/archive"
              className="text-xs font-mono uppercase tracking-[0.14em] border-b pb-1"
              style={{ borderColor: theme.ink }}
            >
              Xem toàn bộ kho ảnh ↗
            </Link>
          </div>
        )}
      </main>

      {/* Lightbox xem chi tiết & cùng buổi chụp */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-between p-4 md:p-8 overflow-y-auto"
          style={{ backgroundColor: "rgba(12, 11, 10, 0.96)", color: "#F3EFE8" }}
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="mx-auto w-full max-w-[1360px] flex items-center justify-between pb-4 border-b border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="font-mono text-xs tracking-wide text-white/70">
              {chapter.label} · {formatShootDate(selectedItem.shootCode)} · #{selectedItem.indexNo}
            </span>
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider border border-white/30 hover:bg-white hover:text-black transition-colors cursor-pointer"
            >
              Đóng [ESC]
            </button>
          </div>

          <div
            className="mx-auto my-6 w-full max-w-[1360px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lg:col-span-8 flex justify-center">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="max-h-[68vh] w-auto object-contain"
              />
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C89B54]">
                Chi tiết khung hình
              </p>
              <h3 className="font-serif text-3xl tracking-wide">
                {selectedItem.title}
              </h3>
              {selectedItem.description && (
                <p className="text-sm leading-relaxed text-white/80">
                  {selectedItem.description}
                </p>
              )}
              {selectedItem.tags && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedItem.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-mono border border-white/20 text-white/75"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {sameShootSeries.length > 1 && (
            <div
              className="mx-auto w-full max-w-[1360px] pt-4 border-t border-white/15"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/60 mb-3">
                Cùng buổi chụp {formatShootDate(selectedItem.shootCode)} ({sameShootSeries.length} ảnh)
              </p>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {sameShootSeries.map((sibling) => (
                  <button
                    key={sibling.id}
                    type="button"
                    onClick={() => setSelectedItem(sibling)}
                    className="shrink-0 h-20 w-16 overflow-hidden border cursor-pointer"
                    style={{
                      borderColor:
                        sibling.id === selectedItem.id
                          ? "#C89B54"
                          : "rgba(255,255,255,0.2)",
                      opacity: sibling.id === selectedItem.id ? 1 : 0.55,
                    }}
                  >
                    <img
                      src={sibling.imageUrl}
                      alt={sibling.title}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}