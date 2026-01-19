import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://tiga-web.vercel.app'),
  title: {
    default: "福島ティガファイターズ | 挑戦を楽しみ、野球を愉しむ学童野球チーム",
    template: "%s | 福島ティガファイターズ",
  },
  description: "福島市の学童野球チーム、ティガファイターズの公式サイトです。新入団員募集中！「挑戦を楽しみ、野球を愉しむ」をモットーに活動しています。",
  keywords: ["福島ティガファイターズ", "ティガファイターズ", "福島市", "学童野球", "少年野球", "野球チーム", "スポーツ少年団", "福島市 学童野球", "福島 スポ少"],
  authors: [{ name: "福島ティガファイターズ" }],
  creator: "福島ティガファイターズ",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://tiga-web.vercel.app",
    title: "福島ティガファイターズ | 挑戦を楽しみ、野球を愉しむ学童野球チーム",
    description: "福島市の学童野球チーム、ティガファイターズの公式サイトです。新入団員募集中！",
    siteName: "福島ティガファイターズ 公式サイト",
  },
  twitter: {
    card: "summary_large_image",
    title: "福島ティガファイターズ",
    description: "福島市の学童野球チーム、ティガファイターズの公式サイトです。",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "9hjjIKNrHREo_Cb75UlWQ9tSr2z6z_RqToUY8cB8wQc",
  },
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

