import type { Metadata } from "next";
import {
  Playfair_Display,
  Be_Vietnam_Pro,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sulii (@_sulii_04) — Model Portfolio & Comp Card",
  description:
    "Hồ sơ hình ảnh người mẫu tự do Sulii tại TP. Hồ Chí Minh — Lookbook, Editorial và Quảng cáo. Liên hệ hợp tác qua Instagram @_sulii_04.",
  openGraph: {
    title: "Sulii — Model Portfolio & Comp Card",
    description:
      "Hồ sơ hình ảnh người mẫu tự do Sulii tại TP. Hồ Chí Minh. Liên hệ booking: Instagram @_sulii_04.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${beVietnam.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}