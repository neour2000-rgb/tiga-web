"use client"

import { motion } from "framer-motion"
import { CalendarDays } from "lucide-react"

const annualEvents = [
    { month: "4月", events: ["春季大会", "入団式", "お花見レクリエーション"] },
    { month: "5月", events: ["高円宮賜杯予選", "ゴールデンウィーク合宿"] },
    { month: "6月", events: ["市連盟会長杯", "スポ少交流大会"] },
    { month: "7月", events: ["県大会", "夏合宿", "バーベキュー大会"] },
    { month: "8月", events: ["福島県学童野球選手権", "夏休み遠征"] },
    { month: "9月", events: ["秋季大会（新人戦）", "芋煮会"] },
    { month: "10月", events: ["地区対抗戦", "6年生送別大会開始"] },
    { month: "11月", events: ["各種招待試合", "駅伝大会"] },
    { month: "12月", events: ["納会", "親子野球大会", "大掃除"] },
    { month: "1月", events: ["必勝祈願", "初練習", "雪遊びレクリエーション"] },
    { month: "2月", events: ["室内トレーニング強化月間"] },
    { month: "3月", events: ["卒団式", "春季遠征"] },
]

export function AnnualSchedule() {
    return (
        <section className="py-24 bg-tiger-navy text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-tiger-gold mb-4">ANNUAL SCHEDULE</h2>
                    <div className="h-1 w-20 bg-tiger-gold/50 mx-auto mb-6" />
                    <p className="text-lg text-white/80">年間行事</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {annualEvents.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-tiger-white/5 border border-tiger-white/10 rounded-xl overflow-hidden hover:bg-tiger-white/10 transition-colors"
                        >
                            <div className="bg-tiger-gold px-4 py-2 flex items-center justify-between">
                                <span className="text-xl font-bold text-tiger-navy">{item.month}</span>
                                <CalendarDays className="h-5 w-5 text-tiger-navy opacity-50" />
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {item.events.map((event, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-tiger-gold flex-shrink-0" />
                                            <span className="text-sm md:text-base font-medium">{event}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center text-sm text-white/60">
                    <p>※上記は例年の予定です。大会日程や天候により変更となる場合があります。</p>
                </div>
            </div>
        </section>
    )
}
