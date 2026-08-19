import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Lora({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "HelgaHome&Style | Авторские вязаные изделия для дома",
  description:
    "Уютные handmade игрушки, сумки, сервировочные наборы и корзинки от HelgaHome&Style — тепло и стиль для вашего дома.",
  openGraph: {
    title: "HelgaHome&Style",
    description:
      "Авторские вязаные изделия, созданные с заботой и изяществом.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${display.variable} ${body.variable} bg-cream-50 font-body text-espresso-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
