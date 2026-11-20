"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  EDITORIAL_CHAPTERS,
  PORTFOLIO_ITEMS,
  type EditorialChapter,
  type PortfolioItem,
} from "@/lib/data";
import { formatShootDate } from "@/lib/chapters";

const AGENCY_FILTERS = [
  "Tất Cả",
  "Cận Mặt",
  "Toàn Thân",
  "Nắng Tự Nhiên",
  "Ánh Đèn Đêm",
  "Kiến Trúc Cổ",
  "Quán Cafe",
  "Truyền Thống",
  "Nàng Thơ",
  "Cá Tính",
];

const INITIAL_BATCH = 24;
const LOAD_STEP = 24;

function getEditorialSlotClass(item: PortfolioItem, idx: number): string {
  if (item.isInterlude) {
    return "md:col-span-4 md:col-start-auto flex flex-col justify-center md:px-6";
  }
  if (idx === 0) return "md:col-span-7";
  if (idx === 1) return "md:col-span-5 md:mt-20";
  if (item.layout === "wide") return "md:col-span-8";

  const pattern = idx % 6;
  if (pattern === 2) return "md:col-span-4";
  if (pattern === 3) return "md:col-span-4 md:mt-14";
  if (pattern === 4) return "md:col-span-4";
  if (pattern === 5) return "md:col-span-6";
  return "md:col-span-6 md:mt-12";
}

export default function PortfolioGallery() {
  const [activeChapterId, setActiveChapterId] = useState<string>("All");
  const [activeTag, setActiveTag] = useState<string>("Tất Cả");
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_BATCH);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ch = params.get("chapter");
    const tag = params.get("tag");
    if (ch && EDITORIAL_CHAPTERS.some((c) => c.id === ch)) {
      setActiveChapterId(ch);
    }
    if (tag && AGENCY_FILTERS.includes(tag)) {
      setActiveTag(tag);
    }
  }, []);

  useEffect(() => {
    if (!selectedItem) return;
    const sameShoot = PORTFOLIO_ITEMS.filter(
      (p) => p.shootCode && p.shootCode === selectedItem.shootCode
    );

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
      if (sameShoot.length <= 1) return;
      const curIdx = sameShoot.findIndex((p) => p.id === selectedItem.id);
      if (e.key === "ArrowRight") {
        setSelectedItem(sameShoot[(curIdx + 1) % sameShoot.length]);
      } else if (e.key === "ArrowLeft") {
        setSelectedItem(
          sameShoot[(curIdx - 1 + sameShoot.length) % sameShoot.length]
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedItem]);

  const activeChapter: EditorialChapter = useMemo(() => {
    return (
      EDITORIAL_CHAPTERS.find((c) => c.id === activeChapterId) ||
      EDITORIAL_CHAPTERS[0]
    );
  }, [activeChapterId]);

  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      const matchChapter =
        activeChapterId === "All" || item.category === activeChapterId;
      const matchTag =
        activeTag === "Tất Cả" ||
        (item.agencyTags && item.agencyTags.includes(activeTag)) ||
        (item.tags &&
          item.tags.some((t) =>
            t.toLowerCase().includes(activeTag.toLowerCase())
          ));
      return matchChapter && matchTag;
    });
  }, [activeChapterId, activeTag]);

  const visibleItems = useMemo(
    () => filteredItems.slice(0, visibleCount),
    [filteredItems, visibleCount]
  );

  const sameShootSeries = useMemo(() => {
    if (!selectedItem?.shootCode) return [];
    return PORTFOLIO_ITEMS.filter(
      (item) => item.shootCode === selectedItem.shootCode
    );
  }, [selectedItem]);

  const handleSelectChapter = (chapterId: string) => {
    setActiveChapterId(chapterId);
    setVisibleCount(INITIAL_BATCH);
  };

  const handleSelectTag = (tag: string) => {
    setActiveTag(tag);
    setVisibleCount(INITIAL_BATCH);
  };

  const handleCopyBookingLink = async () => {
    const url = new URL(window.location.href);
    if (activeChapterId !== "All")
      url.searchParams.set("chapter", activeChapterId);
    else url.searchParams.delete("chapter");

    if (activeTag !== "Tất Cả") url.searchParams.set("tag", activeTag);
    else url.searchParams.delete("tag");

    try {
      await navigator.clipboard.writeText(url.toString());
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2400);
    } catch {
      window.history.replaceState({}, "", url.toString());
    }
  };

  const { theme } = activeChapter;

  return (
    <section
      id="portfolio"
      className="relative w-full py-16 md:py-24 transition-colors duration-700 ease-out"
      style={{
        backgroundColor: theme.bg,
        color: theme.ink,
      }}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {/* TIÊU ĐỀ & NÚT SAO CHÉP LINK LỌC */}
        <div
          className="flex flex-col gap-6 pb-8 md:flex-row md:items-end md:justify-between border-b"
          style={{ borderColor: theme.border }}
        >
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.2em] font-mono mb-3"
              style={{ color: theme.accent }}
            >
              KHO ẢNH TUYỂN CHỌN — CHƯƠNG {activeChapter.index} / 04
            </p>
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-none">
              {activeChapter.label}
            </h2>
            <p
              className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed"
              style={{ color: theme.muted }}
            >
              {activeChapter.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span
              className="font-mono text-xs tracking-wider uppercase"
              style={{ color: theme.muted }}
            >
              {String(filteredItems.length).padStart(3, "0")} ẢNH
            </span>
            <button
              type="button"
              onClick={handleCopyBookingLink}
              className="px-4 py-2.5 text-[11px] font-mono uppercase tracking-[0.14em] border transition-opacity hover:opacity-75 cursor-pointer"
              style={{
                borderColor: theme.ink,
                backgroundColor: copiedLink ? theme.ink : "transparent",
                color: copiedLink ? theme.bg : theme.ink,
              }}
            >
              {copiedLink ? "Đã sao chép ✓" : "Sao chép link lọc"}
            </button>
          </div>
        </div>

        {/* HÀNG LỌC 1: CÁC CHƯƠNG CHÍNH */}
        <nav
          aria-label="Bộ sưu tập theo chương"
          className="flex flex-wrap items-baseline gap-x-8 gap-y-4 py-6 border-b"
          style={{ borderColor: theme.border }}
        >
          {EDITORIAL_CHAPTERS.map((chapter) => {
            const isActive = chapter.id === activeChapterId;
            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => handleSelectChapter(chapter.id)}
                className="group relative flex items-baseline gap-2 pb-1 text-left transition-opacity cursor-pointer"
                style={{
                  opacity: isActive ? 1 : 0.48,
                }}
              >
                <span
                  className="font-mono text-[10px] tracking-widest"
                  style={{ color: isActive ? theme.accent : theme.muted }}
                >
                  {chapter.index}
                </span>
                <span className="font-serif text-lg md:text-xl tracking-wide">
                  {chapter.label}
                </span>
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 h-[1.5px] w-full"
                    style={{ backgroundColor: theme.accent }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* HÀNG LỌC 2: THẺ LỌC NHANH */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 py-5 mb-12">
          <span
            className="text-[11px] font-mono uppercase tracking-[0.16em] mr-2"
            style={{ color: theme.muted }}
          >
            Lọc nhanh:
          </span>
          {AGENCY_FILTERS.map((tag) => {
            const isSelected = activeTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => handleSelectTag(tag)}
                className="text-xs font-mono tracking-wide py-1 border-b transition-all cursor-pointer"
                style={{
                  color: isSelected ? theme.ink : theme.muted,
                  borderColor: isSelected ? theme.accent : "transparent",
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* LƯỚI ẢNH DÀN TRANG TẠP CHÍ */}
        {visibleItems.length === 0 ? (
          <div
            className="py-24 text-center border"
            style={{ borderColor: theme.border, color: theme.muted }}
          >
            <p className="font-serif text-2xl mb-3" style={{ color: theme.ink }}>
              Không có khung hình khớp đồng thời hai bộ lọc này.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveChapterId("All");
                setActiveTag("Tất Cả");
              }}
              className="mt-2 px-5 py-2 text-xs font-mono uppercase tracking-wider border cursor-pointer"
              style={{ borderColor: theme.ink, color: theme.ink }}
            >
              Đặt lại bộ lọc
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-14 md:gap-y-20 items-start">
            {visibleItems.map((item, idx) => (
              <article
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group cursor-pointer ${getEditorialSlotClass(item, idx)}`}
              >
                {item.isInterlude ? (
                  <div
                    className="p-6 md:p-8 border"
                    style={{
                      backgroundColor: theme.surface,
                      borderColor: theme.border,
                    }}
                  >
                    <p
                      className="text-[10px] font-mono uppercase tracking-[0.2em] mb-4"
                      style={{ color: theme.accent }}
                    >
                      KHÔNG GIAN · {formatShootDate(item.shootCode)}
                    </p>
                    <div className="overflow-hidden mb-5">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <h3 className="font-serif text-lg tracking-wide mb-2">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p
                        className="text-xs italic leading-relaxed"
                        style={{ color: theme.muted }}
                      >
                        “{item.description}”
                      </p>
                    )}
                  </div>
                ) : (
                  <div>
                    <div
                      className="relative overflow-hidden"
                      style={{ backgroundColor: theme.surface }}
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        loading={idx < 4 ? "eager" : "lazy"}
                        className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      {item.heroRank && (
                        <span
                          className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.16em]"
                          style={{
                            backgroundColor: theme.bg,
                            color: theme.ink,
                          }}
                        >
                          NỔI BẬT · 0{item.heroRank}
                        </span>
                      )}
                    </div>

                    <div
                      className="mt-3.5 pt-3 border-t flex items-baseline justify-between gap-4"
                      style={{ borderColor: theme.border }}
                    >
                      <div>
                        <div className="flex items-center gap-2.5">
                          <span
                            className="font-mono text-[10px] tracking-widest"
                            style={{ color: theme.accent }}
                          >
                            #{item.indexNo}
                          </span>
                          <h3 className="font-serif text-base md:text-lg tracking-wide leading-snug">
                            {item.title}
                          </h3>
                        </div>
                        <p
                          className="mt-1 text-[11px] font-mono tracking-wide"
                          style={{ color: theme.muted }}
                        >
                          {item.category}
                          {item.shootCode
                            ? ` · ${formatShootDate(item.shootCode)}`
                            : ""}
                        </p>
                      </div>

                      <span
                        className="text-[10px] font-mono uppercase tracking-[0.14em] opacity-0 transition-opacity duration-300 group-hover:opacity-100 shrink-0"
                        style={{ color: theme.accent }}
                      >
                        Xem lớn ↗
                      </span>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}

        {/* NÚT XEM THÊM ẢNH */}
        {visibleCount < filteredItems.length && (
          <div className="mt-20 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + LOAD_STEP)}
              className="px-8 py-4 text-xs font-mono uppercase tracking-[0.18em] border transition-all hover:opacity-75 cursor-pointer"
              style={{
                borderColor: theme.ink,
                color: theme.ink,
              }}
            >
              Xem thêm ảnh (còn {filteredItems.length - visibleCount} ảnh)
            </button>
          </div>
        )}
      </div>

      {/* LIGHTBOX XEM CHI TIẾT & CÙNG BUỔI CHỤP */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-between p-4 md:p-8 overflow-y-auto"
          style={{
            backgroundColor: "rgba(12, 11, 10, 0.96)",
            color: "#F3EFE8",
          }}
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="mx-auto w-full max-w-[1360px] flex items-center justify-between pb-4 border-b border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-mono text-xs tracking-wide text-white/70">
              {selectedItem.category} · {formatShootDate(selectedItem.shootCode)} · #{selectedItem.indexNo}
            </div>
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

            <div className="lg:col-span-4 flex flex-col gap-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C89B54] mb-2">
                  Chi tiết khung hình
                </p>
                <h3 className="font-serif text-3xl md:text-4xl tracking-wide">
                  {selectedItem.title}
                </h3>
              </div>

              {selectedItem.description && (
                <p className="text-sm leading-relaxed text-white/80">
                  {selectedItem.description}
                </p>
              )}

              {selectedItem.tags && selectedItem.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono border border-white/20 text-white/75"
                    >
                      #{tag}
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
                {sameShootSeries.map((sibling) => {
                  const isCurrent = sibling.id === selectedItem.id;
                  return (
                    <button
                      key={sibling.id}
                      type="button"
                      onClick={() => setSelectedItem(sibling)}
                      className="relative shrink-0 h-20 w-16 overflow-hidden border transition-all cursor-pointer"
                      style={{
                        borderColor: isCurrent
                          ? "#C89B54"
                          : "rgba(255,255,255,0.18)",
                        opacity: isCurrent ? 1 : 0.55,
                      }}
                    >
                      <img
                        src={sibling.imageUrl}
                        alt={sibling.title}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}