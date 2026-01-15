"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-tiger-navy flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
                    style={{ backgroundImage: "url('/images/hero_bg.jpg')" }}
                />
                {/* Overlays for readability */}
                <div className="absolute inset-0 bg-tiger-navy/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-tiger-navy via-transparent to-transparent opacity-90" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="mb-4 text-xl md:text-2xl font-bold text-tiger-gold tracking-widest uppercase">
                        FUKUSHIMA TIGA FIGHTERS
                    </h2>
                    <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
                        挑戦を楽しみ、<br className="md:hidden" />
                        野球を愉しむ。
                    </h1>
                    <p className="mb-8 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
                        福島市の学童野球チーム、ティガファイターズ。<br />
                        仲間と共に成長し、全員で勝利を目指す熱い日々がここにあります。
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="premium" size="lg" className="w-full sm:w-auto text-lg px-8 py-6" asChild>
                            <Link href="/join">体験入団・見学 申込</Link>
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white/10" asChild>
                            <Link href="/about">チームについて知る</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
