"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { EDITORIAL_CHAPTERS, PORTFOLIO_ITEMS } from "@/lib/data";
import { getAllChapters, getHeroProfileFrames } from "@/lib/chapters";

// TODO: Kiểm tra lại đúng thông số thực tế của Sulii tại đây
const MODEL_STATS = [
  { label: "CHIỀU CAO", value: "168 cm" },
  { label: "SỐ ĐO 3 VÒNG", value: "80 · 60 · 88" },
  { label: "CỠ GIÀY", value: "37 EU" },
  { label: "TÓC / MẮT", value: "Đen / Nâu trầm" },
];

const INSTAGRAM_HANDLE = "@_sulii_04";
const INSTAGRAM_URL = "https://www.instagram.com/_sulii_04/";

export default function SuliiEditorialHome() {
  const chapters = useMemo(() => getAllChapters(), []);
  const heroFrames = useMemo(() => getHeroProfileFrames(), []);

  const [activeThemeId, setActiveThemeId] = useState<string>("All");
  const [heroIdx, setHeroIdx] = useState<number>(0);

  const activeThemeChapter = useMemo(() => {
    return (
      EDITORIAL_CHAPTERS.find((c) => c.id === activeThemeId) ||
      EDITORIAL_CHAPTERS[0]
    );
  }, [activeThemeId]);

  const { theme } = activeThemeChapter;
  const currentProfile = heroFrames[heroIdx] || PORTFOLIO_ITEMS[0];

  const handleNextProfile = () => {
    if (heroFrames.length <= 1) return;
    setHeroIdx((prev) => (prev + 1) % heroFrames.length);
  };

  return (
    <div
      className="min-h-screen w-full transition-colors duration-700 ease-out"
      style={{
        backgroundColor: theme.bg,
        color: theme.ink,
      }}
    >
      {/* THANH ĐIỀU HƯỚNG */}
      <header
        className="sticky top-0 z-40 border-b backdrop-blur-md transition-colors duration-700"
        style={{
          backgroundColor: `${theme.bg}E6`,
          borderColor: theme.border,
        }}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10">
          <Link
            href="/"
            className="font-serif text-xl md:text-2xl tracking-[0.22em] uppercase"
          >
            SULII
          </Link>

          <nav className="hidden md:flex items-center gap-9 text-[11px] font-mono uppercase tracking-[0.16em]">
            <a href="#chapters" className="hover:opacity-65 transition-opacity">
              Bộ sưu tập ({chapters.length})
            </a>
            <Link href="/archive" className="hover:opacity-65 transition-opacity">
              Kho ảnh ({PORTFOLIO_ITEMS.length})
            </Link>
            <a href="#booking" className="hover:opacity-65 transition-opacity">
              Liên hệ
            </a>
          </nav>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-[11px] font-mono uppercase tracking-[0.14em] border transition-all hover:opacity-75"
            style={{
              borderColor: theme.ink,
              backgroundColor: theme.ink,
              color: theme.bg,
            }}
          >
            Đặt lịch · IG ↗
          </a>
        </div>
      </header>

      {/* HERO & COMP CARD */}
      <section className="mx-auto max-w-[1440px] px-5 pt-12 pb-20 md:px-10 md:pt-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p
                className="text-[11px] font-mono uppercase tracking-[0.2em] mb-5"
                style={{ color: theme.accent }}
              >
                NGƯỜI MẪU TỰ DO · TP. HỒ CHÍ MINH · 2026
              </p>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight">
                Sulii.
                <span
                  className="block mt-3 italic font-normal text-2xl sm:text-3xl md:text-4xl leading-snug"
                  style={{ color: theme.muted }}
                >
                  Đa sắc diện trong từng khung hình.
                </span>
              </h1>

              <p
                className="mt-7 max-w-xl text-sm md:text-base leading-relaxed"
                style={{ color: theme.muted }}
              >
                Không giới hạn trong một phong cách cố định, Sulii biến hóa linh
                hoạt theo tinh thần từng nhãn hàng — từ nét Á Đông thanh tao,
                chiều sâu điện ảnh về đêm đến nguồn năng lượng trẻ trung ngoài
                phố.
              </p>
            </div>

            {/* Bảng thông số Comp Card */}
            <div
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 border-t border-b"
              style={{ borderColor: theme.border }}
            >
              {MODEL_STATS.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`py-5 pr-4 ${
                    idx > 0 ? "sm:pl-5 sm:border-l" : ""
                  }`}
                  style={{ borderColor: theme.border }}
                >
                  <p
                    className="text-[10px] font-mono uppercase tracking-[0.16em]"
                    style={{ color: theme.muted }}
                  >
                    {stat.label}
                  </p>
                  <p className="mt-1.5 font-serif text-base md:text-lg">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#chapters"
                className="px-6 py-3.5 text-xs font-mono uppercase tracking-[0.16em] border transition-opacity hover:opacity-80"
                style={{
                  borderColor: theme.ink,
                  backgroundColor: theme.ink,
                  color: theme.bg,
                }}
              >
                Xem {chapters.length} chủ đề chính ↓
              </a>
              <Link
                href="/archive"
                className="px-6 py-3.5 text-xs font-mono uppercase tracking-[0.16em] border transition-opacity hover:opacity-70"
                style={{
                  borderColor: theme.border,
                  color: theme.ink,
                }}
              >
                Tra cứu toàn bộ {PORTFOLIO_ITEMS.length} ảnh ↗
              </Link>
            </div>
          </div>

          {/* Cột phải: Ảnh Profile nghệ thuật */}
          <div className="lg:col-span-5">
            {currentProfile && (
              <div
                className="border p-4 md:p-5 transition-colors duration-700"
                style={{
                  backgroundColor: theme.surface,
                  borderColor: theme.border,
                }}
              >
                <div
                  onClick={handleNextProfile}
                  title="Bấm để xem khung hình chân dung tiếp theo"
                  className="group relative aspect-[3/4] w-full overflow-hidden cursor-pointer"
                  style={{ backgroundColor: theme.bg }}
                >
                  <img
                    src={currentProfile.imageUrl}
                    alt={currentProfile.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.16em]"
                    style={{
                      backgroundColor: theme.bg,
                      color: theme.ink,
                    }}
                  >
                    ẢNH ĐẠI DIỆN 0{heroIdx + 1} / 0{heroFrames.length}
                  </span>
                </div>

                <div
                  className="mt-4 pt-3.5 border-t flex items-center justify-between gap-4"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <p className="font-serif text-base tracking-wide">
                      {currentProfile.title}
                    </p>
                    <p
                      className="text-[11px] font-mono mt-0.5"
                      style={{ color: theme.muted }}
                    >
                      {currentProfile.category} · {INSTAGRAM_HANDLE}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleNextProfile}
                    className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.12em] border transition-opacity hover:opacity-70 cursor-pointer shrink-0"
                    style={{
                      borderColor: theme.ink,
                      color: theme.ink,
                    }}
                  >
                    Ảnh tiếp →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4 BÌA CHƯƠNG CHÍNH */}
      <section
        id="chapters"
        className="border-t py-20 md:py-28"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p
                className="text-[11px] font-mono uppercase tracking-[0.2em] mb-3"
                style={{ color: theme.accent }}
              >
                BỘ SƯU TẬP CHỌN LỌC
              </p>
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
                4 Sắc Thái Hình Ảnh
              </h2>
            </div>
            <p
              className="max-w-md text-sm leading-relaxed"
              style={{ color: theme.muted }}
            >
              Mỗi chủ đề mang một bảng màu và không khí riêng. Di chuột qua từng
              bìa để xem sự chuyển sắc, hoặc bấm vào để khám phá trọn bộ ảnh bên
              trong.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {chapters.map((chapter, idx) => (
              <Link
                key={chapter.id}
                href={`/chapters/${chapter.slug}`}
                onMouseEnter={() => setActiveThemeId(chapter.id)}
                className={`group block ${idx % 2 === 1 ? "md:mt-16" : ""}`}
              >
                <div
                  className="relative aspect-[4/5] w-full overflow-hidden border"
                  style={{
                    backgroundColor: theme.surface,
                    borderColor: theme.border,
                  }}
                >
                  {chapter.coverItem && (
                    <img
                      src={chapter.coverItem.imageUrl}
                      alt={chapter.label}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  )}

                  <div
                    className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.16em]"
                    style={{
                      backgroundColor: chapter.theme.bg,
                      color: chapter.theme.ink,
                      border: `1px solid ${chapter.theme.border}`,
                    }}
                  >
                    <span
                      className="inline-block h-2 w-2"
                      style={{ backgroundColor: chapter.theme.accent }}
                    />
                    CHƯƠNG {chapter.index}
                  </div>
                </div>

                <div
                  className="mt-5 pt-4 border-t flex items-start justify-between gap-6"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl tracking-tight group-hover:opacity-75 transition-opacity">
                      {chapter.label}
                    </h3>
                    <p
                      className="mt-2 text-sm leading-relaxed max-w-lg"
                      style={{ color: theme.muted }}
                    >
                      {chapter.subtitle}
                    </p>
                    <p
                      className="mt-3 text-[11px] font-mono uppercase tracking-[0.14em]"
                      style={{ color: theme.accent }}
                    >
                      {chapter.shootCodes.length} buổi chụp ·{" "}
                      {String(chapter.photoCount).padStart(2, "0")} ảnh
                    </p>
                  </div>

                  <span
                    className="font-mono text-xs uppercase tracking-[0.14em] shrink-0 pt-1 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: theme.ink }}
                  >
                    Xem bộ →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LIÊN HỆ BOOKING QUA INSTAGRAM */}
      <footer
        id="booking"
        className="border-t py-20"
        style={{
          borderColor: theme.border,
          backgroundColor: theme.surface,
        }}
      >
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p
              className="text-[11px] font-mono uppercase tracking-[0.2em] mb-3"
              style={{ color: theme.accent }}
            >
              LIÊN HỆ HỢP TÁC · INSTAGRAM {INSTAGRAM_HANDLE}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              Nhận đặt lịch chụp ảnh Lookbook, Editorial và Quảng cáo.
            </h2>
          </div>

          <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-4">
            <div className="flex flex-wrap gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs font-mono uppercase tracking-[0.14em] border transition-opacity hover:opacity-80"
                style={{
                  borderColor: theme.ink,
                  backgroundColor: theme.ink,
                  color: theme.bg,
                }}
              >
                Nhắn tin Instagram ({INSTAGRAM_HANDLE}) ↗
              </a>
              <Link
                href="/archive"
                className="px-5 py-3 text-xs font-mono uppercase tracking-[0.14em] border transition-opacity hover:opacity-75"
                style={{
                  borderColor: theme.ink,
                  color: theme.ink,
                }}
              >
                Mở toàn bộ kho ảnh
              </Link>
            </div>
            <p
              className="text-[11px] font-mono uppercase tracking-[0.14em]"
              style={{ color: theme.muted }}
            >
              © 2026 SULII PORTFOLIO · TP. HỒ CHÍ MINH
            </p>
          </div>
        </div>
      </footer>

      {/* THANH CHUYỂN CHAMELEON MODE */}
      <div
        className="fixed bottom-4 right-4 z-50 flex items-center gap-1.5 border p-1.5 shadow-lg backdrop-blur-md"
        style={{
          backgroundColor: `${theme.bg}F2`,
          borderColor: theme.border,
        }}
      >
        <span
          className="hidden sm:inline px-2 text-[10px] font-mono uppercase tracking-[0.16em]"
          style={{ color: theme.muted }}
        >
          Sắc độ:
        </span>
        {EDITORIAL_CHAPTERS.map((ch) => {
          const isActive = ch.id === activeThemeId;
          return (
            <button
              key={ch.id}
              type="button"
              onClick={() => setActiveThemeId(ch.id)}
              title={`Chuyển sắc độ: ${ch.label}`}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-wider border transition-all cursor-pointer"
              style={{
                backgroundColor: isActive ? ch.theme.bg : "transparent",
                color: isActive ? ch.theme.ink : theme.muted,
                borderColor: isActive ? ch.theme.accent : "transparent",
              }}
            >
              <span
                className="inline-block h-2.5 w-2.5 border"
                style={{
                  backgroundColor: ch.theme.bg,
                  borderColor: ch.theme.accent,
                }}
              />
              <span className="hidden md:inline">{ch.index}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}