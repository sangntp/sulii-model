"use client";

import { useState } from "react";
import { CheckCircle2, Mail, Phone, Send } from "lucide-react";
import { MODEL_PROFILE } from "@/lib/data";

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="max-w-7xl mx-auto px-6 py-20 border-t border-neutral-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
            Work Inquiries
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Let&apos;s Create Together.
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Gửi thông tin concept, lịch trình dự kiến hoặc yêu cầu báo giá. Sulli sẽ phản hồi trong vòng 24 giờ.
          </p>

          <div className="pt-4 space-y-3 text-sm">
            <div className="flex items-center gap-3 text-neutral-800">
              <Mail className="w-4 h-4 text-neutral-500" />
              <span>{MODEL_PROFILE.socials.email}</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-800">
              <Phone className="w-4 h-4 text-neutral-500" />
              <span>Zalo / Hotline: {MODEL_PROFILE.socials.zalo}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          {submitted ? (
            <div className="p-8 rounded-2xl bg-neutral-100 border border-neutral-200 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-600" />
              <h3 className="font-display text-2xl font-bold">Đã ghi nhận yêu cầu Booking!</h3>
              <p className="text-sm text-neutral-600">
                Cảm ơn bạn đã liên hệ với {MODEL_PROFILE.stageName}. Chúng tôi sẽ phản hồi sớm nhất.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs font-semibold underline cursor-pointer"
              >
                Gửi một yêu cầu khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                    Tên / Nhãn hàng *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="VD: Studio X / Brand Y"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#141413]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                    Email hoặc Số Zalo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="contact@brand.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#141413]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                    Loại hình Booking
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#141413]">
                    <option>Lookbook / Fashion Shoot</option>
                    <option>Commercial / TVC</option>
                    <option>Beauty / Cosmetics</option>
                    <option>Editorial / Art Concept</option>
                    <option>Event / KOL Appearance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                    Ngày dự kiến (Shooting Date)
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#141413]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-2">
                  Mô tả Concept & Thời lượng chụp *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Chia sẻ ngắn gọn về phong cách, địa điểm và thời gian dự kiến..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#141413]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#141413] text-[#FAF9F6] text-sm font-semibold hover:bg-neutral-800 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Gửi yêu cầu Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}