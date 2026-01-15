import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export default function JoinPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto space-y-12 text-center">
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-tiger-navy border-b-4 border-tiger-gold inline-block pb-2">
                        新入団員募集中！
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        私たちと一緒に野球を楽しみませんか？<br className="hidden md:inline" />
                        見学・体験はいつでも大歓迎です！
                    </p>
                </div>

                <div className="flex justify-center">
                    <Image
                        src="/images/recruitment_flyer_2026.jpg"
                        alt="新入団員募集チラシ"
                        width={800}
                        height={1131}
                        className="rounded-lg shadow-xl h-auto"
                        priority
                    />
                </div>

                <div className="p-8 bg-tiger-white/5 rounded-2xl border border-tiger-gold/20">
                    <p className="text-xl font-bold text-tiger-navy mb-6">
                        まずは体験・見学にお越しください
                    </p>
                    <Button asChild size="lg" className="bg-tiger-navy hover:bg-tiger-navy/90 text-white font-bold py-8 px-12 text-xl shadow-lg hover:shadow-xl transition-all h-auto">
                        <Link href="/contact" className="flex items-center gap-3">
                            体験・見学のお申し込みはこちら
                            <Send className="w-6 h-6" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
