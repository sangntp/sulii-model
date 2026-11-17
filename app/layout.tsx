import type { Metadata } from "next";
import { Baloo_2, Quicksand, Unbounded } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700", "800"],
  variable: "--font-fredoka", // Giữ nguyên tên biến để tự động áp dụng cho bản Hồng Dễ Thương
});

const quicksand = Quicksand({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-quicksand",
});

const unbounded = Unbounded({
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700", "800"],
  variable: "--font-syne", // Giữ nguyên tên biến để tự động áp dụng cho bản Tech / Editorial
});

export const metadata: Metadata = {
  title: "SULLI ♡ Freelance Model & Sweet Portfolio",
  description: "Portfolio chính thức của Sulli — Trẻ trung, năng động & biến hóa đa phong cách.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${baloo.variable} ${quicksand.variable} ${unbounded.variable} scroll-smooth`}
    >
      <body className="antialiased selection:bg-[#FF6B9E] selection:text-white">
        {children}
      </body>
    </html>
  );
}