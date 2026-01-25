"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

import { scheduleData } from "@/components/activity/scheduleData"

export function MonthlySchedule() {
    // Group schedule by month (YYYY-MM)
    const groupedSchedule = scheduleData.reduce((acc, item) => {
        const monthKey = item.isoDate.substring(0, 7) // "2026-01"
        if (!acc[monthKey]) {
            acc[monthKey] = []
        }
        acc[monthKey].push(item)
        return acc
    }, {} as Record<string, typeof scheduleData>)

    // Sort months
    const sortedMonths = Object.keys(groupedSchedule).sort()

    const formatMonth = (monthKey: string) => {
        const [year, month] = monthKey.split('-')
        return `${year}年${parseInt(month)}月`
    }

    return (
        <section className="py-24 bg-white text-tiger-navy">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-tiger-navy mb-4">MONTHLY SCHEDULE</h2>
                    <div className="h-1 w-20 bg-tiger-gold mx-auto mb-6" />
                    <p className="text-lg text-muted-foreground">今後の予定</p>
                </div>

                <div className="max-w-4xl mx-auto space-y-16">
                    {sortedMonths.map((monthKey) => (
                        <div key={monthKey}>
                            <h3 className="text-2xl font-bold text-center mb-6 text-tiger-navy border-b-2 border-tiger-gold/30 inline-block px-8 pb-2">
                                {formatMonth(monthKey)}
                            </h3>
                            <div className="w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm">
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
                                            {groupedSchedule[monthKey].map((item, index) => (
                                                <motion.tr
                                                    key={index}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.05 }}
                                                    className={`hover:bg-gray-50 transition-colors ${item.day.includes("日") || item.day.includes("祝") ? "bg-red-50/30" :
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
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-sm text-muted-foreground bg-gray-50 p-4 rounded-lg max-w-2xl mx-auto">
                    <p>
                        ※天候等により、練習時間・場所が変更となる場合があります。<br />
                        ※見学・体験をご希望の方は、事前にお問い合わせいただくとスムーズです。
                    </p>
                </div>
            </div>
        </section>
    )
}
