"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

const scheduleData = [
    {
        date: "1月10日",
        day: "土",
        time: "13:45 集合 / 16:00-18:00 練習",
        location: "鹿島神社 → あづま球場 → 室内練習場",
        details: "14:00 必勝祈願 / 室内練習 & 保護者の集まり"
    },
    {
        date: "1月11日",
        day: "日",
        time: "10:00-12:00 / 13:00-16:00",
        location: "平石小 体育館 / 平石小 校庭",
        details: "ティガスタ現状確認"
    },
    {
        date: "1月12日",
        day: "月・祝",
        time: "10:00-12:00 / 9:00-16:00",
        location: "平石小 体育館 / 平石小 校庭",
        details: "※体育館使用時間は要確認"
    },
    {
        date: "1月17日",
        day: "土",
        time: "13:00-16:00",
        location: "平石小 校庭",
        details: ""
    },
    {
        date: "1月18日",
        day: "日",
        time: "13:00-16:00",
        location: "平石小 校庭",
        details: ""
    },
    {
        date: "1月24日",
        day: "土",
        time: "10:00-12:00 / 13:00-16:00",
        location: "平石小 体育館 / 平石小 校庭",
        details: ""
    },
    {
        date: "1月25日",
        day: "日",
        time: "10:00-12:00 / 13:00-16:00",
        location: "平石小 体育館 / 平石小 校庭",
        details: ""
    },
    {
        date: "1月31日",
        day: "土",
        time: "13:00-16:00",
        location: "平石小 校庭",
        details: ""
    },
]

export function MonthlySchedule() {
    return (
        <section className="py-24 bg-white text-tiger-navy">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-tiger-navy mb-4">MONTHLY SCHEDULE</h2>
                    <div className="h-1 w-20 bg-tiger-gold mx-auto mb-6" />
                    <p className="text-lg text-muted-foreground">今月の予定 (2026年1月)</p>
                </div>

                <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm md:text-base">
                            <thead className="bg-tiger-navy text-white">
                                <tr>
                                    <th className="px-4 py-4 md:px-6 whitespace-nowrap">日付</th>
                                    <th className="px-4 py-4 md:px-6 whitespace-nowrap">場所・時間</th>
                                    <th className="px-4 py-4 md:px-6 min-w-[200px]">詳細・備考</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {scheduleData.map((item, index) => (
                                    <motion.tr
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className={`hover:bg-gray-50 transition-colors ${
                                            // Highlight Sundays and Holidays in light red/pink background if needed, 
                                            // or just color the day text. Here we highlight the day text color.
                                            item.day.includes("日") || item.day.includes("祝") ? "bg-red-50/30" :
                                                item.day.includes("土") ? "bg-blue-50/30" : ""
                                            }`}
                                    >
                                        <td className="px-4 py-4 md:px-6 whitespace-nowrap align-top">
                                            <div className="font-bold flex flex-col md:flex-row md:gap-2">
                                                <span>{item.date}</span>
                                                <span className={`${item.day.includes("日") || item.day.includes("祝") ? "text-red-500" :
                                                        item.day.includes("土") ? "text-blue-500" : "text-gray-500"
                                                    }`}>({item.day})</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 md:px-6 align-top">
                                            <div className="space-y-1">
                                                <div className="font-semibold text-tiger-navy">{item.time}</div>
                                                <div className="text-sm text-muted-foreground flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {item.location}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 md:px-6 align-top text-gray-600">
                                            {item.details}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm text-muted-foreground bg-gray-50 p-4 rounded-lg max-w-2xl mx-auto">
                    <p>
                        ※天候等により、練習時間・場所が変更となる場合があります。<br />
                        ※見学・体験をご希望の方は、事前にお問い合わせいただくとスムーズです。
                    </p>
                </div>
            </div>
        </section>
    )
}
