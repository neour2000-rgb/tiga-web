import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "福島ティガファイターズ | 挑戦を楽しみ、野球を愉しむ学童野球チーム",
  description: "福島市の学童野球チーム、ティガファイターズの公式サイトです。新入団員募集中！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className="antialiased flex flex-col min-h-screen bg-tiger-white text-tiger-black"
      >
        <Header />
        <main className="flex-grow pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

