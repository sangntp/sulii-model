import Link from "next/link";
import PortfolioGallery from "@/components/PortfolioGallery";

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#151412]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#F6F4EF]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10">
          <Link
            href="/"
            className="text-[11px] font-mono uppercase tracking-[0.22em] hover:opacity-65 transition-opacity"
          >
            ← TRANG CHỦ
          </Link>
          <Link
            href="/"
            className="font-serif text-lg md:text-xl tracking-[0.22em] uppercase"
          >
            SULII ARCHIVE
          </Link>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-60">
            AGENCY INDEX
          </span>
        </div>
      </header>

      <PortfolioGallery />
    </div>
  );
}