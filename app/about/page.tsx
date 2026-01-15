import { Greeting } from "@/components/about/Greeting"
import { Philosophy } from "@/components/about/Philosophy"
import { History } from "@/components/about/History"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "チームについて | 福島ティガファイターズ",
    description: "福島ティガファイターズのチーム理念、代表挨拶、これまでの歩みをご紹介します。",
}

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="bg-tiger-navy py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-tiger-gold mb-4 tracking-wider">ABOUT US</h1>
                <p className="text-white text-lg">チームについて</p>
            </section>

            {/* Greeting Section */}
            <Greeting />

            {/* Philosophy Section */}
            <Philosophy />

            {/* History Section */}
            <History />
        </div>
    )
}
