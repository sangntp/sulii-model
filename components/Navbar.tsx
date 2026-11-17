"use client";

import Link from "next/link";
import { MODEL_PROFILE } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F6]/85 backdrop-blur-md border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="#"
          className="font-display text-2xl font-extrabold tracking-tighter uppercase"
        >
          {MODEL_PROFILE.stageName}
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <a href="#portfolio" className="hover:text-[#141413] transition-colors">
            Portfolio
          </a>
          <a href="#comp-card" className="hover:text-[#141413] transition-colors">
            Comp Card
          </a>
          <a href="#about" className="hover:text-[#141413] transition-colors">
            About
          </a>
        </nav>

        <a
          href="#booking"
          className="px-5 py-2 rounded-full bg-[#141413] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-all"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}