import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "RAJHAVEL V S - AI/ML Engineer",
  description: "Rajhavel V S — AI/ML Engineer. Building intelligent systems across Machine Learning, Computer Vision, and scalable web architecture.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "RAJHAVEL V S - AI/ML Engineer",
    description: "Building intelligent systems across Machine Learning, Computer Vision, and scalable web architecture.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAJHAVEL V S - AI/ML Engineer",
    description: "Building intelligent systems across Machine Learning, Computer Vision, and scalable web architecture.",
  },
};

import ClientAnimations from "@/components/ClientAnimations";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-black text-[var(--color-on-surface)] font-body antialiased selection:bg-[#3B82F6]/30 selection:text-[#3B82F6] overflow-x-hidden">
        <SmoothScroll>
          <ClientAnimations />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
