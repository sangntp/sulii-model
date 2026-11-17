"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  CATEGORIES,
  ConceptCategory,
  PORTFOLIO_ITEMS,
  PortfolioItem,
} from "@/lib/data";

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState<ConceptCategory>("All");
  const [activePhoto, setActivePhoto] = useState<PortfolioItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-6 py-20 border-t border-neutral-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
            Selected Works
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mt-2">
            Versatile Concepts
          </h2>
        </div>

        {/* Bộ lọc phong cách */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#141413] text-[#FAF9F6]"
                    : "bg-neutral-200/70 text-neutral-700 hover:bg-neutral-300/70"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lưới hiển thị ảnh */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              onClick={() => setActivePhoto(item)}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-200 cursor-pointer"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] uppercase tracking-widest text-neutral-300">
                  {item.category} • {item.year}
                </span>
                <h3 className="font-display text-xl font-bold mt-1">{item.title}</h3>
                {item.client && (
                  <p className="text-xs text-neutral-300 mt-0.5">Client: {item.client}</p>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox xem ảnh phóng to */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-7 h-7" />
            </button>
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl aspect-[3/4] max-h-[85vh] overflow-hidden rounded-lg"
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
    </section>
  );
}