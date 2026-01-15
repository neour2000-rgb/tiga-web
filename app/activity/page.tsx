import { PracticeInfo } from "@/components/activity/PracticeInfo"
import { MonthlySchedule } from "@/components/activity/MonthlySchedule"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "活動紹介 | 福島ティガファイターズ",
    description: "福島ティガファイターズの練習場所、時間、年間行事予定についてご紹介します。",
}

export default function ActivityPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="bg-tiger-navy py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-tiger-gold mb-4 tracking-wider">ACTIVITIES</h1>
                <p className="text-white text-lg">活動内容・スケジュール</p>
            </section>

            {/* Practice Info Section */}
            <PracticeInfo />

            {/* Monthly Schedule Section */}
            <MonthlySchedule />
        </div>
    )
}
