"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, MapPin, Sparkles } from "lucide-react";
import { MODEL_PROFILE } from "@/lib/data";

export default function HeroCompCard() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-20 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Cột trái: Định vị thương hiệu & Comp Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-200/70 text-xs font-medium text-neutral-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{MODEL_PROFILE.availability}</span>
          </div>

          <div>
            <h1 className="font-display text-6xl sm:text-8xl font-extrabold tracking-tight leading-[0.95] uppercase">
              {MODEL_PROFILE.stageName}
            </h1>
            <p className="mt-4 text-lg sm:text-xl font-medium text-neutral-600">
              {MODEL_PROFILE.tagline}
            </p>
          </div>

          <p id="about" className="text-neutral-700 leading-relaxed max-w-2xl">
            {MODEL_PROFILE.bio}
          </p>

          {/* Bảng thông số Comp Card */}
          <div
            id="comp-card"
            className="pt-6 border-t border-neutral-300/80 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {MODEL_PROFILE.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xs uppercase tracking-widest text-neutral-500">
                  {stat.label}
                </p>
                <p className="mt-1 font-display text-xl font-bold text-[#141413]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#141413] text-[#FAF9F6] text-sm font-semibold hover:bg-neutral-800 transition-all"
            >
              Khám phá Lookbook
              <ArrowDownRight className="w-4 h-4" />
            </a>
            <div className="inline-flex items-center gap-1.5 text-sm text-neutral-600 px-3">
              <MapPin className="w-4 h-4" />
              <span>{MODEL_PROFILE.location}</span>
            </div>
          </div>
        </motion.div>

        {/* Cột phải: Ảnh chân dung chủ đạo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-200 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&q=85"
              alt={MODEL_PROFILE.stageName}
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}