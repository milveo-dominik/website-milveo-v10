import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeaderNav } from "@/components/header-nav";
import { Footer } from "@/components/footer/footer-section";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MILVEO - Dein Full Stack Growth Partner",
  description: "Performance Marketing. Tech. Content. Alles aus einer Hand. Alles auf Wachstum. Mit dem MILVEO® Framework skalieren wir DTC-Brands datengetrieben und nachhaltig.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <HeaderNav />
        <main>
        {children}
        </main>
        <footer>
          <Footer />
      </footer>
      </body>
    </html>
  );
}
