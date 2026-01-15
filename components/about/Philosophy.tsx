"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const guidelines = [
    "挨拶・返事・整理整頓を徹底し、礼儀正しい選手を育てます。",
    "チームワークを重視し、仲間を思いやる心を育てます。",
    "失敗を恐れず挑戦する気持ちを大切にします。",
    "感謝の気持ちを忘れず、道具やグラウンドを大切にします。",
    "最後まで諦めない強い心を育てます。",
]

export function Philosophy() {
    return (
        <section className="py-24 bg-tiger-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-tiger-navy mb-4"
                        >
                            TEAM PHILOSOPHY
                        </motion.h2>
                        <div className="h-1 w-20 bg-tiger-gold mx-auto mb-6" />
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-muted-foreground"
                        >
                            チーム理念・指導方針
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="aspect-square bg-tiger-navy rounded-2xl overflow-hidden relative shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-br from-tiger-navy to-black opacity-80" />
                                <div className="absolute inset-0 flex items-center justify-center text-tiger-gold p-8 text-center bg-[url('https://images.unsplash.com/photo-1589579234233-722a4c6a6d34?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center">
                                    <div className="bg-tiger-navy/80 p-6 rounded-xl backdrop-blur-sm border border-tiger-gold/30">
                                        <h3 className="text-2xl font-bold mb-2 text-white">スローガン</h3>
                                        <p className="text-3xl font-extrabold text-tiger-gold leading-tight">
                                            挑戦を楽しみ、<br />野球を愉しむ。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-tiger-navy mb-6">指導方針</h3>
                            <ul className="space-y-4">
                                {guidelines.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="h-6 w-6 text-tiger-gold shrink-0 mt-0.5" />
                                        <span className="text-lg text-gray-700">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
