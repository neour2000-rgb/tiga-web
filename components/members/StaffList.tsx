"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const staffMembers = [
    {
        role: "監督",
        name: "磯 祐介",
        description: "城西大学出身 野球歴：25年以上。大学時代は投手だった経験を活かし、練習ではバッテリーを中心にコーチングを展開します。2026シーズンより背番号30を背負い、子どもたちと一緒に戦います！！"
    },
    {
        role: "ヘッドコーチ",
        name: "丹治 龍太",
        description: "現在も現役選手として活躍中 野球歴：30年以上。主体は常に子どもに任せ、自身は隣で寄り添うコーチングを展開します。"
    },
    {
        role: "チームアドバイザー",
        name: "難波",
        description: "※学童野球公認コーチ。現在も現役選手として活躍中 野球歴：30年以上。押しつけず選手に考えてもらう余白を残すコーチングを実演。主に高学年を中心とした練習では（通称：難波塾）一気に伸びる選手も珍しくありません。"
    },
    {
        role: "コーチ",
        name: "野田 尚幸",
        description: "※学童野球公認コーチ。城西大学出身 野球歴：25年以上。2022年にチームを立ち上げた発起人。「子ども達へ野球の楽しさを伝える！」その思いは設立後決してブレることなく、今日のチーム運営を根幹から支えています！"
    },
    {
        role: "コーチ",
        name: "小野寺 祥一",
        description: "聖光学院出身 甲子園出場経験有。キャッチャーとして甲子園に出場しており、その経験から主にバッテリーコーチとしてコーチングしています。"
    },
    {
        role: "コーチ",
        name: "藤原 朋弘",
        description: "現在も現役選手として活躍中。現役投手としても活動しており、その経験を活かし主にピッチング、投球フォームをメインとしてコーチングしています。"
    },
    {
        role: "コーチ",
        name: "野地 忠行",
        description: "※学童野球公認コーチ。野球未経験という異色！？のコーチ。ISIA取得の経験を活かし、主に低学年向のコーチングを担当します。"
    },
]

export function StaffList() {
    return (
        <section className="py-24 bg-tiger-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-tiger-navy mb-4">STAFF</h2>
                    <div className="h-1 w-20 bg-tiger-gold mx-auto mb-6" />
                    <p className="text-lg text-black font-medium">指導者紹介</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {staffMembers.map((staff, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex"
                        >
                            <Card className="flex-1 hover:shadow-lg transition-shadow border-t-4 border-t-tiger-navy overflow-hidden">
                                <CardContent className="p-6 text-center flex flex-col h-full">

                                    <p className="text-sm font-bold text-tiger-gold uppercase tracking-wider mb-2">{staff.role}</p>
                                    <h3 className="text-xl font-bold text-tiger-navy mb-4">{staff.name}</h3>
                                    <div className="text-sm text-gray-900 text-left leading-relaxed flex-grow">
                                        {staff.description}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
