"use client"

import { motion } from "framer-motion"

export function Greeting() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Representative Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/3"
                    >
                        <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl bg-gray-200 relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/team_logo.png"
                                alt="福島ティガファイターズ チームロゴ"
                                className="w-full h-full object-contain bg-tiger-navy"
                            />
                        </div>
                    </motion.div>

                    {/* Message Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full md:w-2/3"
                    >
                        <h2 className="text-3xl font-bold text-tiger-navy mb-2">チームからのメッセージ</h2>
                        <p className="text-lg text-tiger-gold mb-6 font-semibold">子供たちの未来のために、野球を通じて人間形成を。</p>

                        <div className="space-y-4 leading-relaxed">
                            <p>
                                福島ティガファイターズのウェブサイトをご覧いただき、誠にありがとうございます。
                                当チームは、野球の技術向上だけでなく、挨拶や礼儀、仲間を思いやる心の育成を大切に活動しています。
                            </p>
                            <p>
                                野球というスポーツを通じて、子供たちが努力することの楽しさや、チームワークの重要性を学び、
                                将来社会に出たときにも活躍できる人材に育ってくれることを願っています。
                            </p>
                            <p>
                                勝利を目指すことはもちろんですが、それ以上に「野球が楽しい」「もっと上手くなりたい」と
                                子供たちが自ら思えるような環境づくりを心がけております。
                            </p>
                            <p>
                                地域の皆様、保護者の皆様のご協力のもと、温かく、時に熱く、子供たちを見守っていきたいと考えています。
                                今後とも福島ティガファイターズをよろしくお願いいたします。
                            </p>
                        </div>

                        <div className="mt-8 text-right">
                            <p className="text-lg font-bold text-tiger-navy">福島ティガファイターズ</p>
                            {/* <p className="text-gray-600">代表　○○ ○○</p> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
