"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  RotateCw,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import {
  CATEGORIES,
  ConceptCategory,
  MODEL_PROFILE,
  PORTFOLIO_ITEMS,
  PortfolioItem,
  VIBE_THEMES,
  VibeMode,
} from "@/lib/data";

export default function SulliExperience() {
  const [vibe, setVibe] = useState<VibeMode>("street");
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ConceptCategory>("All");
  const [activePhoto, setActivePhoto] = useState<PortfolioItem | null>(null);
  const [bookingSent, setBookingSent] = useState(false);

  const theme = VIBE_THEMES[vibe];

  const filteredItems =
    selectedCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  const handleCopySpecs = (e: React.MouseEvent) => {
    e.stopPropagation();
    const specText = `MODEL: ${MODEL_PROFILE.stageName} (${MODEL_PROFILE.location})\nHeight: 168cm | Measurements: 80-60-88 | Shoes: 37 EU\nContact: ${MODEL_PROFILE.socials.email} / Zalo: ${MODEL_PROFILE.socials.zalo}`;
    navigator.clipboard.writeText(specText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
      }}
      className="min-h-screen transition-colors duration-500 overflow-x-hidden"
    >
      {/* 1. TOP BAR TỐI GIẢN KIỂU TẠP CHÍ */}
      <header
        style={{ borderColor: theme.border }}
        className="sticky top-0 z-40 border-b backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-extrabold tracking-tighter">
              {MODEL_PROFILE.stageName}®
            </span>
            <span
              style={{ color: theme.muted }}
              className="hidden sm:inline text-[11px] font-mono tracking-widest"
            >
              {MODEL_PROFILE.code}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#lookbook"
              className="hidden md:inline text-xs font-semibold uppercase tracking-widest hover:opacity-60 transition-opacity"
            >
              Lookbook
            </a>
            <a
              href="#casting"
              style={{
                backgroundColor: theme.accent,
                color: theme.accentText,
              }}
              className="px-4 py-2 text-xs font-bold uppercase tracking-widest transition-transform active:scale-95"
            >
              Book Casting ↗
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO EDITORIAL + CHAMELEON SWITCHER + 3D FLIP COMP CARD */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-8 pb-16">
        {/* Thanh chuyển đổi khí chất (Chameleon Mode) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CHAMELEON MODE — BẤM ĐỂ THỬ KHÍ CHẤT:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(VIBE_THEMES) as VibeMode[]).map((modeKey) => {
              const isSelected = vibe === modeKey;
              return (
                <button
                  key={modeKey}
                  onClick={() => setVibe(modeKey)}
                  style={{
                    backgroundColor: isSelected ? theme.accent : "transparent",
                    color: isSelected ? theme.accentText : theme.text,
                    borderColor: theme.border,
                  }}
                  className="px-3.5 py-1.5 border text-[11px] font-bold tracking-wider uppercase transition-all cursor-pointer"
                >
                  {VIBE_THEMES[modeKey].label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tiêu đề bìa tạp chí khổng lồ */}
        <div className="relative">
          <motion.h1
            key={vibe}
            initial={{ opacity: 0.7, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-display text-[19vw] lg:text-[15.5rem] font-extrabold leading-[0.82] tracking-tighter uppercase select-none"
          >
            {MODEL_PROFILE.stageName}
          </motion.h1>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-widest">
            <span>{theme.subtitle}</span>
            <span
              style={{ backgroundColor: theme.accent, color: theme.accentText }}
              className="px-2.5 py-0.5 font-bold"
            >
              {MODEL_PROFILE.availability}
            </span>
          </div>
        </div>

        {/* Khu vực nội dung chia bất đối xứng: Bio bên trái + Thẻ Comp Card 3D lật mặt bên phải */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-8 pt-2">
            <p className="text-xl sm:text-2xl font-medium leading-snug">
              {MODEL_PROFILE.bio}
            </p>

            {/* Bảng thông số nhanh kiểu Editorial */}
            <div
              style={{ borderColor: theme.border }}
              className="border-t border-b py-6 grid grid-cols-2 gap-y-6 gap-x-4"
            >
              {MODEL_PROFILE.stats.map((item) => (
                <div key={item.label}>
                  <p
                    style={{ color: theme.muted }}
                    className="text-[11px] font-mono tracking-widest"
                  >
                    {item.label}
                  </p>
                  <p className="font-display text-2xl font-bold mt-1">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleCopySpecs}
                style={{
                  borderColor: theme.border,
                  backgroundColor: theme.cardBg,
                }}
                className="inline-flex items-center gap-2 px-5 py-3 border text-xs font-bold uppercase tracking-widest cursor-pointer hover:opacity-80 transition-opacity"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    Đã copy thông số Casting!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Comp Card Specs
                  </>
                )}
              </button>
              <a
                href="#lookbook"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest underline underline-offset-4"
              >
                Xem Lookbook bên dưới <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* THẺ COMP CARD 3D LẬT 2 MẶT */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end">
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="relative w-full max-w-md aspect-[3/4] cursor-pointer group"
              style={{ perspective: "1200px" }}
            >
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.65, type: "spring", stiffness: 120 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full h-full"
              >
                {/* MẶT TRƯỚC: COVER SHOT */}
                <div
                  style={{ backfaceVisibility: "hidden" }}
                  className="absolute inset-0 overflow-hidden shadow-2xl"
                >
                  <Image
                    src={MODEL_PROFILE.heroImage}
                    alt="Sulli Cover"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 p-6 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-center text-[11px] font-mono tracking-widest">
                      <span>FRONT COVER</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/50 backdrop-blur-sm">
                        <RotateCw className="w-3 h-3" /> Bấm để lật mặt sau
                      </span>
                    </div>
                    <div>
                      <p className="font-display text-3xl font-extrabold tracking-tight">
                        {MODEL_PROFILE.stageName}
                      </p>
                      <p className="text-xs font-mono text-white/80">
                        {MODEL_PROFILE.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* MẶT SAU: DIGITAL POLAROID & CASTING SHEET */}
                <div
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    backgroundColor: theme.cardBg,
                    borderColor: theme.border,
                  }}
                  className="absolute inset-0 border p-6 flex flex-col justify-between shadow-2xl"
                >
                  <div className="flex justify-between items-center text-[11px] font-mono tracking-widest">
                    <span>DIGITAL POLAROID / CASTING</span>
                    <span className="inline-flex items-center gap-1">
                      <RotateCw className="w-3 h-3" /> Lật lại
                    </span>
                  </div>

                  <div className="relative w-full h-3/5 my-3 overflow-hidden">
                    <Image
                      src={MODEL_PROFILE.polaroidImage}
                      alt="Sulli Polaroid"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between border-b pb-1" style={{ borderColor: theme.border }}>
                      <span>HEIGHT / MEASUREMENTS</span>
                      <span className="font-bold">168CM • 80-60-88</span>
                    </div>
                    <div className="flex justify-between border-b pb-1" style={{ borderColor: theme.border }}>
                      <span>INSTAGRAM / TIKTOK</span>
                      <span className="font-bold">{MODEL_PROFILE.socials.instagram}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>DIRECT BOOKING</span>
                      <span className="font-bold">{MODEL_PROFILE.socials.zalo}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DẢI CHỮ CHẠY VÔ TẬN (KINETIC MARQUEE) */}
      <div
        style={{
          backgroundColor: theme.accent,
          color: theme.accentText,
        }}
        className="py-3.5 overflow-hidden select-none border-y border-black/10"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="flex whitespace-nowrap font-display text-sm sm:text-base font-extrabold tracking-widest uppercase"
        >
          {Array.from({ length: 6 }).map((_, idx) => (
            <span key={idx} className="mx-6">
              CHAMELEON SPIRIT ✦ EDITORIAL ✦ STREETWEAR ✦ COMMERCIAL ✦ BEAUTY ✦ SULLI PORTFOLIO 2026
            </span>
          ))}
        </motion.div>
      </div>

      {/* 4. BỐ CỤC TẠP CHÍ BẤT ĐỐI XỨNG (ASYMMETRIC EDITORIAL LOOKBOOK) */}
      <section id="lookbook" className="max-w-7xl mx-auto px-5 sm:px-8 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p
              style={{ color: theme.muted }}
              className="text-xs font-mono uppercase tracking-widest"
            >
              CURATED ARCHIVE
            </p>
            <h2 className="font-display text-5xl sm:text-7xl font-extrabold tracking-tighter uppercase mt-1">
              LOOKBOOK
            </h2>
          </div>

          {/* Bộ lọc Concept */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    backgroundColor: active ? theme.accent : "transparent",
                    color: active ? theme.accentText : theme.text,
                    borderColor: theme.border,
                  }}
                  className="px-4 py-2 border text-xs font-bold uppercase tracking-wider cursor-pointer transition-all"
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dàn trang lệch nhịp kiểu Tạp chí */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-10 items-start">
          {filteredItems.map((item, idx) => {
            const isOdd = idx % 2 === 1;
            const colSpan =
              item.layout === "wide"
                ? "md:col-span-7"
                : item.layout === "offset"
                ? "md:col-span-5 md:mt-24"
                : "md:col-span-6";

            return (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={() => setActivePhoto(item)}
                className={`${colSpan} ${isOdd ? "md:ml-auto" : ""} w-full group cursor-pointer`}
              >
                <div className="flex items-baseline justify-between mb-3 font-mono text-xs">
                  <span className="font-bold">({item.indexNo})</span>
                  <span style={{ color: theme.muted }}>
                    {item.category.toUpperCase()} — {item.year}
                  </span>
                </div>

                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-800">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                      {item.title}
                    </h3>
                    <p style={{ color: theme.muted }} className="text-xs font-mono mt-0.5">
                      CLIENT: {item.client}
                    </p>
                  </div>
                  <span
                    style={{ borderColor: theme.border }}
                    className="w-10 h-10 border flex items-center justify-center group-hover:rotate-45 transition-transform"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* 5. PHIẾU HẸN CASTING / BOOKING */}
      <section
        id="casting"
        style={{ borderColor: theme.border }}
        className="border-t max-w-7xl mx-auto px-5 sm:px-8 py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <p
              style={{ color: theme.muted }}
              className="text-xs font-mono uppercase tracking-widest"
            >
              DIRECT CASTING & COLLABORATION
            </p>
            <h2 className="font-display text-5xl sm:text-6xl font-extrabold tracking-tighter uppercase leading-[0.95]">
              BOOK SULLI FOR YOUR NEXT SHOOT.
            </h2>
            <p style={{ color: theme.muted }} className="text-sm leading-relaxed">
              Để lại thông tin concept, lịch chụp dự kiến hoặc yêu cầu báo giá. Phản hồi trực tiếp trong vòng 24 giờ.
            </p>
            <div className="pt-4 space-y-2 font-mono text-xs">
              <p>EMAIL: {MODEL_PROFILE.socials.email}</p>
              <p>ZALO / HOTLINE: {MODEL_PROFILE.socials.zalo}</p>
              <p>INSTAGRAM: {MODEL_PROFILE.socials.instagram}</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            {bookingSent ? (
              <div
                style={{ backgroundColor: theme.cardBg, borderColor: theme.border }}
                className="p-10 border space-y-4"
              >
                <p className="font-display text-3xl font-extrabold">
                  ĐÃ NHẬN LỊCH HẸN CASTING!
                </p>
                <p style={{ color: theme.muted }} className="text-sm">
                  Cảm ơn bạn đã gửi thông tin. Sulli sẽ liên hệ lại qua Email/Zalo trong thời gian sớm nhất.
                </p>
                <button
                  onClick={() => setBookingSent(false)}
                  className="text-xs font-mono underline uppercase cursor-pointer"
                >
                  Gửi thêm yêu cầu khác
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    required
                    placeholder="TÊN BẠN / NHÃN HÀNG *"
                    style={{ borderColor: theme.border }}
                    className="w-full px-4 py-3.5 bg-transparent border text-xs font-mono focus:outline-none"
                  />
                  <input
                    type="text"
                    required
                    placeholder="EMAIL HOẶC SỐ ZALO *"
                    style={{ borderColor: theme.border }}
                    className="w-full px-4 py-3.5 bg-transparent border text-xs font-mono focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <select
                    style={{ borderColor: theme.border, backgroundColor: theme.bg }}
                    className="w-full px-4 py-3.5 border text-xs font-mono focus:outline-none"
                  >
                    <option>CONCEPT: LOOKBOOK / FASHION</option>
                    <option>CONCEPT: COMMERCIAL / TVC</option>
                    <option>CONCEPT: BEAUTY / SKINCARE</option>
                    <option>CONCEPT: EDITORIAL / ART</option>
                  </select>
                  <input
                    type="date"
                    style={{ borderColor: theme.border }}
                    className="w-full px-4 py-3.5 bg-transparent border text-xs font-mono focus:outline-none"
                  />
                </div>

                <textarea
                  rows={4}
                  required
                  placeholder="MÔ TẢ NGẮN GỌN CONCEPT, ĐỊA ĐIỂM & THỜI LƯỢNG CHỤP *"
                  style={{ borderColor: theme.border }}
                  className="w-full px-4 py-3.5 bg-transparent border text-xs font-mono focus:outline-none"
                />

                <button
                  type="submit"
                  style={{
                    backgroundColor: theme.accent,
                    color: theme.accentText,
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 text-xs font-extrabold uppercase tracking-widest cursor-pointer transition-transform active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  GỬI YÊU CẦU BOOKING
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* LIGHTBOX PHÓNG TO ẢNH */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 text-white p-2 cursor-pointer"
            >
              <X className="w-8 h-8" />
            </button>
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl aspect-[3/4] max-h-[85vh]"
            >
              <Image
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}