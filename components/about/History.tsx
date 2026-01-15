"use client"

import { motion } from "framer-motion"

const historyEvents = [
    { year: "2023年", title: "設立", description: "福島ティガファイターズ発足。" },
    { year: "2024年", title: "県大会初出場", description: "チーム結成からわずか1年で県大会への出場を果たす。" },
    { year: "2024年", title: "東北学童軟式野球新人大会", description: "第22回福島県大会 第３位" },
    { year: "2025年", title: "高円宮賜杯全日本学童軟式野球大会", description: "第45回マクドナルド・トーナメント県大会 第３位" },
    { year: "2025年", title: "第３回HANERUカップ", description: "準優勝" },
    { year: "2026年", title: "新体制スタート", description: "新監督就任" },
]

export function History() {
    return (
        <section className="py-24 bg-tiger-navy text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-tiger-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-tiger-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-tiger-gold mb-4"
                    >
                        HISTORY
                    </motion.h2>
                    <p className="text-lg text-white/80">チームの歩み</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="relative border-l-2 border-tiger-gold/30 ml-4 md:ml-0 md:pl-8 space-y-12">
                        {historyEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 md:pl-0"
                            >
                                {/* Timeline dot */}
                                <div className="absolute -left-[9px] top-1 md:-left-[41px] w-4 h-4 rounded-full bg-tiger-gold border-4 border-tiger-navy" />

                                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                                    <span className="text-2xl font-bold text-tiger-gold shrink-0 w-24">{event.year}</span>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                        <p className="text-gray-300 leading-relaxed">{event.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
