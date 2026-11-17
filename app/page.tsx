"use client";

import { useState } from "react";
import PlayfulSulliExperience from "@/components/PlayfulSulliExperience";
import SulliExperience from "@/components/SulliExperience";

export default function Home() {
  const [styleMode, setStyleMode] = useState<"sweet" | "tech">("sweet");

  return (
    <>
      {styleMode === "sweet" ? <PlayfulSulliExperience /> : <SulliExperience />}

      {/* Nút chuyển đổi qua lại giữa Bản Hồng Dễ Thương và Bản Tech (3 Theme cũ) */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setStyleMode(styleMode === "sweet" ? "tech" : "sweet")}
          className="px-4 py-2.5 rounded-full bg-[#141413] text-white text-xs font-bold shadow-xl border border-white/20 hover:scale-105 transition-transform cursor-pointer"
        >
          {styleMode === "sweet"
            ? "⚡ Đổi sang Giao diện Tech (3 Theme)"
            : "🌸 Quay về Giao diện Hồng Dễ Thương"}
        </button>
      </div>
    </>
  );
}