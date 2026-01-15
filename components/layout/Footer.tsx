import Link from "next/link"
import { QRCodeSVG } from "qrcode.react"

export function Footer() {
    return (
        <footer className="bg-tiger-navy py-12 text-tiger-white border-t-4 border-tiger-gold">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                            <h3 className="text-xl font-bold text-tiger-gold">TIGA FIGHTERS</h3>
                        </Link>
                        <p className="text-sm text-tiger-white/80">
                            福島市の学童野球チーム<br />
                            挑戦を楽しみ、野球を愉しむ。
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-tiger-gold/80">
                            メニュー
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-tiger-gold transition-colors">チームについて</Link></li>
                            <li><Link href="/activity" className="hover:text-tiger-gold transition-colors">活動紹介</Link></li>
                            <li><Link href="/members" className="hover:text-tiger-gold transition-colors">選手・スタッフ</Link></li>
                            <li><Link href="https://baseball-stats-app-7cda.bolt.host" className="hover:text-tiger-gold transition-colors">チーム成績・選手成績</Link></li>
                            <li><Link href="/magazine" className="hover:text-tiger-gold transition-colors">月間ティガマガジン</Link></li>
                            <li><Link href="/join" className="hover:text-tiger-gold transition-colors">入団案内</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-tiger-gold/80">
                            お問い合わせ
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/contact" className="hover:text-tiger-gold transition-colors">お問い合わせフォーム</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-tiger-gold/80">
                            ソーシャル
                        </h4>
                        {/* Social Icons Placeholder */}
                        <div className="flex flex-col space-y-4">
                            <a
                                href="https://www.instagram.com/fukushimatigafighters?igsh=MWh6Nml4bzZiNDQ0bA=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-3 group"
                            >
                                <span className="p-2 bg-tiger-white/10 rounded-full group-hover:bg-tiger-gold group-hover:text-tiger-black transition-all">
                                    Instagram
                                </span>
                                <span className="text-sm group-hover:text-tiger-gold transition-colors">
                                    公式インスタグラム
                                </span>
                            </a>
                            <div className="bg-white/90 p-3 rounded-lg w-fit">
                                <QRCodeSVG
                                    value="https://www.instagram.com/fukushimatigafighters?igsh=MWh6Nml4bzZiNDQ0bA=="
                                    size={120}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-tiger-white/10 pt-8 text-center text-xs text-tiger-white/60">
                    <p>&copy; {new Date().getFullYear()} Tiga Fighters Baseball Club. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
