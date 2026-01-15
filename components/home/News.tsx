import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function News() {
    return (
        <section className="py-20 bg-tiger-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-tiger-navy">NEWS</h2>
                        <p className="text-tiger-navy mt-2">ティガファイターズからの最新情報</p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Link href="/join" className="block group">
                        <Card className="hover:shadow-md transition-shadow duration-300 border-t-4 border-t-tiger-gold">
                            <CardContent className="p-8 flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-sm text-tiger-navy font-mono">2026.01.10</span>
                                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-tiger-navy/10 text-tiger-navy">
                                            お知らせ
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-xl md:text-2xl leading-snug text-tiger-navy group-hover:text-tiger-gold transition-colors">
                                        2026年度　新入団員募集開始！
                                    </h3>
                                </div>
                                <ArrowRight className="h-6 w-6 text-tiger-navy group-hover:text-tiger-gold transition-colors" />
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            </div>
        </section>
    )
}
