import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
});

const jetbrains = localFont({
  src: [
    {
      path: "../public/fonts/JetBrainsMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/JetBrainsMono-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rudraksh Ramekar | Product Designer & Developer",
  description:
    "Exploring the intersection of product design, technology, and thoughtful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
