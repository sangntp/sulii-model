"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Check,
  Copy,
  Heart,
  MapPin,
  Send,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import {
  CATEGORIES,
  ConceptCategory,
  MODEL_PROFILE,
  PORTFOLIO_ITEMS,
  PortfolioItem,
} from "@/lib/data";

// Bảng màu kẹo ngọt phối hợp với hồng cho từng danh mục & thẻ
const STAT_COLORS = [
  "bg-[#FFE0EC] border-[#FF8FB7] text-[#591C36]", // Hồng kẹo
  "bg-[#FFF4C2] border-[#F6D365] text-[#5C4500]", // Vàng bơ
  "bg-[#DCF4FF] border-[#7CCBFF] text-[#0F4466]", // Xanh trời pastel
  "bg-[#E3FCEB] border-[#7CE3A1] text-[#114D27]", // Xanh bạc hà
];

const CATEGORY_BADGES: Record<ConceptCategory, string> = {
  All: "bg-[#FF6B9E] text-white border-[#D94378]",
  Editorial: "bg-[#EFE4FF] text-[#4C2889] border-[#C5A8FF]",
  Streetwear: "bg-[#D8F3FF] text-[#0E4D6B] border-[#86D5FA]",
  Commercial: "bg-[#FFF2B2] text-[#664D00] border-[#F2D04E]",
  Beauty: "bg-[#FFD9E8] text-[#7A1840] border-[#FF94BD]",
};

export default function PlayfulSulliExperience() {
  const [selectedCategory, setSelectedCategory] = useState<ConceptCategory>("All");
  const [activePhoto, setActivePhoto] = useState<PortfolioItem | null>(null);
  const [copied, setCopied] = useState(false);
  const [bookingSent, setBookingSent] = useState(false);

  const filteredItems =
    selectedCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  const handleCopySpecs = () => {
    const specText = `MODEL: ${MODEL_PROFILE.stageName} ♡\nHeight: 168cm | Measurements: 80-60-88 | Shoes: 37 EU\nBooking: ${MODEL_PROFILE.socials.email} / Zalo: ${MODEL_PROFILE.socials.zalo}`;
    navigator.clipboard.writeText(specText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-cute-dots text-[#3B2332] font-sans pb-20 overflow-x-hidden">
      {/* 1. NAVBAR VIÊN THUỐC NỔI BẬT */}
      <header className="sticky top-3 z-40 px-4">
        <nav className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md border-2 border-[#FF9EC2] rounded-full px-5 py-2.5 shadow-[0_6px_0_#FFC2D9] flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#FF6B9E] text-white flex items-center justify-center font-bold">
              ♡
            </span>
            <span
              style={{ fontFamily: "var(--font-bubbly)" }}
              className="text-2xl font-bold tracking-wide text-[#FF4D8D]"
            >
              SULLI
            </span>
          </a>

          <div className="hidden sm:flex items-center gap-6 text-sm font-bold text-[#6E455B]">
            <a href="#about" className="hover:text-[#FF4D8D] transition-colors">
              About Me
            </a>
            <a href="#scrapbook" className="hover:text-[#FF4D8D] transition-colors">
              Photo Diary
            </a>
            <a href="#booking" className="hover:text-[#FF4D8D] transition-colors">
              Say Hi!
            </a>
          </div>

          <a
            href="#booking"
            style={{ fontFamily: "var(--font-bubbly)" }}
            className="px-5 py-2 rounded-full bg-[#FF6B9E] hover:bg-[#FF4D8D] text-white text-sm font-semibold border-2 border-[#3B2332] shadow-[2px_2px_0_#3B2332] active:translate-y-0.5 transition-all"
          >
            Book Sulli ✨
          </a>
        </nav>
      </header>

      {/* 2. HERO BENTO SCRAPBOOK (TRẺ TRUNG, NHÍ NHẢNH) */}
      <section id="about" className="max-w-5xl mx-auto px-4 pt-10 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
          {/* Cột trái: Khung giới thiệu & Sticker thông số */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white border-2 border-[#3B2332] rounded-[2rem] p-7 sm:p-9 shadow-[6px_6px_0_#FF9EC2] relative"
          >
            {/* Sticker góc trên */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF2B2] border-2 border-[#3B2332] text-xs font-bold text-[#3B2332] mb-4 -rotate-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF4D8D]" />
              <span>Freelance Model • TP. Hồ Chí Minh</span>
            </div>

            <h1
              style={{ fontFamily: "var(--font-bubbly)" }}
              className="text-4xl sm:text-6xl font-bold leading-tight text-[#3B2332]"
            >
              Hi, mình là{" "}
              <span className="text-[#FF5C97] underline decoration-wavy decoration-[#FFD166] underline-offset-8">
                Sulli!
              </span>{" "}
              🌸
            </h1>

            <p className="mt-5 text-base sm:text-lg font-semibold text-[#5E3D4F] leading-relaxed">
              {MODEL_PROFILE.bio}
            </p>

            {/* 4 thẻ thông số 4 màu pastel phối với hồng */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {MODEL_PROFILE.stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`p-3 rounded-2xl border-2 ${STAT_COLORS[idx % STAT_COLORS.length]} text-center`}
                >
                  <p className="text-[10px] font-extrabold uppercase opacity-75">
                    {stat.label}
                  </p>
                  <p
                    style={{ fontFamily: "var(--font-bubbly)" }}
                    className="text-base sm:text-lg font-bold mt-0.5"
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Nút hành động */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopySpecs}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#D8F3FF] hover:bg-[#BFEAFF] text-[#0F4466] border-2 border-[#3B2332] shadow-[3px_3px_0_#3B2332] text-xs font-extrabold cursor-pointer active:translate-y-0.5 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    Đã lưu thông số của Sulli!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Comp Card
                  </>
                )}
              </button>

              <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#F3E8FF] text-[#4C2889] text-xs font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Sẵn sàng đi job toàn quốc</span>
              </div>
            </div>
          </motion.div>

          {/* Cột phải: Khung ảnh Polaroid dán Sticker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 mx-auto w-full max-w-sm"
          >
            <div className="bg-white p-4 pb-6 rounded-[2rem] border-2 border-[#3B2332] shadow-[8px_8px_0_#FF6B9E] relative">
              {/* Miếng băng keo Washi Tape màu vàng bơ ở đỉnh ảnh */}
              <div className="w-28 h-6 bg-[#FFF2B2]/90 border border-[#E6C84C] mx-auto -mt-7 mb-3 -rotate-2 rounded-sm shadow-xs" />

              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border-2 border-[#3B2332]">
                <Image
                  src={MODEL_PROFILE.heroImage}
                  alt="Sulli Sweet Cover"
                  fill
                  priority
                  className="object-cover"
                />
                {/* Sticker nổi trên ảnh */}
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/95 border-2 border-[#3B2332] text-xs font-extrabold text-[#FF4D8D] flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 fill-[#FF4D8D]" />
                  <span>100% Positive Energy</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <p
                    style={{ fontFamily: "var(--font-bubbly)" }}
                    className="text-xl font-bold text-[#3B2332]"
                  >
                    Sulli’s Comp Card 🎀
                  </p>
                  <p className="text-xs font-bold text-[#8C5A73]">
                    {MODEL_PROFILE.socials.instagram} • {MODEL_PROFILE.socials.tiktok}
                  </p>
                </div>
                <span className="w-10 h-10 rounded-full bg-[#FFE0EC] border-2 border-[#3B2332] flex items-center justify-center text-[#FF4D8D]">
                  <Camera className="w-5 h-5" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. DẢI BĂNG CHỮ CHẠY KẸO NGỌT */}
      <div className="bg-[#FF6B9E] text-white border-y-2 border-[#3B2332] py-3 overflow-hidden select-none -rotate-1 my-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ fontFamily: "var(--font-bubbly)" }}
          className="flex whitespace-nowrap text-base sm:text-lg font-bold tracking-wide"
        >
          {Array.from({ length: 6 }).map((_, idx) => (
            <span key={idx} className="mx-5">
              🌸 SWEET & PLAYFUL ✦ STREETWEAR ✦ BEAUTY & SKINCARE ✦ LOOKBOOK ✦ COMMERCIAL ✦ SULLI 2026
            </span>
          ))}
        </motion.div>
      </div>

      {/* 4. PHOTO DIARY — BỘ SƯU TẬP ẢNH DÁN SỔ TAY */}
      <section id="scrapbook" className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E3FCEB] border-2 border-[#3B2332] text-xs font-extrabold text-[#114D27]">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>MY PHOTO DIARY</span>
          </span>
          <h2
            style={{ fontFamily: "var(--font-bubbly)" }}
            className="text-4xl sm:text-5xl font-bold text-[#3B2332] mt-3"
          >
            Biến hóa mọi Concept ✨
          </h2>
          <p className="text-sm font-semibold text-[#6E455B] mt-2">
            Bấm chọn từng màu bên dưới để xem Sulli trong các phong cách khác nhau nhé!
          </p>
        </div>

        {/* Bộ lọc nút kẹo nhiều màu pastel */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold border-2 transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#3B2332] text-white border-[#3B2332] scale-105 shadow-[3px_3px_0_#FF6B9E]"
                    : `${CATEGORY_BADGES[cat]} hover:-translate-y-0.5`
                }`}
              >
                {cat === "All" ? "🌈 Tất cả" : cat}
              </button>
            );
          })}
        </div>

        {/* Lưới ảnh kiểu thẻ bài Polaroid nghiêng nhẹ */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const tiltClass =
                idx % 3 === 0
                  ? "-rotate-1"
                  : idx % 3 === 1
                  ? "rotate-1"
                  : "-rotate-2";

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ rotate: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActivePhoto(item)}
                  className={`bg-white p-3.5 pb-5 rounded-3xl border-2 border-[#3B2332] shadow-[5px_5px_0_#FFC2D9] hover:shadow-[7px_7px_0_#FF6B9E] cursor-pointer transition-shadow ${tiltClass}`}
                >
                  {/* Băng keo trang trí */}
                  <div
                    className={`w-20 h-4 mx-auto -mt-5 mb-2.5 rounded-xs opacity-90 ${
                      idx % 2 === 0 ? "bg-[#D8F3FF]" : "bg-[#FFF2B2]"
                    }`}
                  />

                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-[#3B2332]/20">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span
                      className={`absolute top-2.5 right-2.5 px-3 py-1 rounded-full text-[11px] font-extrabold border ${
                        CATEGORY_BADGES[item.category]
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>

                  <div className="mt-3.5 px-1">
                    <h3
                      style={{ fontFamily: "var(--font-bubbly)" }}
                      className="text-xl font-bold text-[#3B2332]"
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-[#8C5A73] mt-0.5">
                      Brand: {item.client} • {item.year}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 5. FORM BOOKING ĐÁNG YÊU */}
      <section id="booking" className="max-w-4xl mx-auto px-4 pt-8">
        <div className="bg-[#FFE6F0] border-2 border-[#3B2332] rounded-[2.5rem] p-7 sm:p-12 shadow-[8px_8px_0_#3B2332]">
          <div className="text-center max-w-lg mx-auto mb-8">
            <span className="inline-block px-4 py-1 rounded-full bg-white border-2 border-[#3B2332] text-xs font-extrabold text-[#FF4D8D] mb-3">
              💌 WORK WITH SULLI
            </span>
            <h2
              style={{ fontFamily: "var(--font-bubbly)" }}
              className="text-3xl sm:text-5xl font-bold text-[#3B2332]"
            >
              Cùng tạo nên bộ ảnh thật xinh nhé!
            </h2>
            <p className="text-sm font-semibold text-[#5E3D4F] mt-2">
              Nhắn tin trực tiếp qua Zalo <b>{MODEL_PROFILE.socials.zalo}</b> hoặc điền nhanh chiếc form nhỏ bên dưới:
            </p>
          </div>

          {bookingSent ? (
            <div className="bg-white border-2 border-[#3B2332] rounded-3xl p-8 text-center space-y-3">
              <div className="text-4xl">🎉💖</div>
              <h3
                style={{ fontFamily: "var(--font-bubbly)" }}
                className="text-2xl font-bold text-[#FF4D8D]"
              >
                Sulli đã nhận được lời nhắn rồi!
              </h3>
              <p className="text-sm font-semibold text-[#5E3D4F]">
                Cảm ơn bạn rất nhiều, mình sẽ phản hồi lại trong vòng 24h nhé!
              </p>
              <button
                onClick={() => setBookingSent(false)}
                className="px-5 py-2 rounded-full bg-[#FFF2B2] border-2 border-[#3B2332] text-xs font-extrabold cursor-pointer"
              >
                Gửi thêm lời nhắn khác
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setBookingSent(true);
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Tên của bạn / Nhãn hàng *"
                  className="w-full px-5 py-3.5 rounded-2xl bg-white border-2 border-[#3B2332] text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FF6B9E]"
                />
                <input
                  type="text"
                  required
                  placeholder="Số Zalo hoặc Email liên hệ *"
                  className="w-full px-5 py-3.5 rounded-2xl bg-white border-2 border-[#3B2332] text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FF6B9E]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="w-full px-5 py-3.5 rounded-2xl bg-white border-2 border-[#3B2332] text-sm font-semibold focus:outline-none">
                  <option>👗 Chụp Lookbook / Thời trang</option>
                  <option>💄 Chụp Beauty / Mỹ phẩm</option>
                  <option>🎬 Quay TVC / Commercial</option>
                  <option>🎨 Concept Nghệ thuật / Editorial</option>
                </select>
                <input
                  type="date"
                  className="w-full px-5 py-3.5 rounded-2xl bg-white border-2 border-[#3B2332] text-sm font-semibold focus:outline-none"
                />
              </div>

              <textarea
                rows={3}
                required
                placeholder="Chia sẻ một chút về concept, địa điểm và thời gian chụp dự kiến nha *"
                className="w-full px-5 py-3.5 rounded-2xl bg-white border-2 border-[#3B2332] text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FF6B9E]"
              />

              <div className="text-center pt-2">
                <button
                  type="submit"
                  style={{ fontFamily: "var(--font-bubbly)" }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF6B9E] hover:bg-[#FF4D8D] text-white text-base font-bold border-2 border-[#3B2332] shadow-[4px_4px_0_#3B2332] active:translate-y-0.5 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Gửi lịch hẹn cho Sulli!
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* LIGHTBOX XEM ẢNH PHÓNG TO */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-[#3B2332]/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-4 rounded-3xl border-2 border-[#3B2332] max-w-md w-full relative"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#FF6B9E] text-white border-2 border-[#3B2332] flex items-center justify-center cursor-pointer shadow-md"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden">
                <Image
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <h4
                  style={{ fontFamily: "var(--font-bubbly)" }}
                  className="text-xl font-bold text-[#3B2332]"
                >
                  {activePhoto.title}
                </h4>
                <p className="text-xs font-bold text-[#FF4D8D]">
                  {activePhoto.category} • {activePhoto.client}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}