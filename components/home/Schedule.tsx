import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { scheduleData } from "@/components/activity/scheduleData"

export function Schedule() {
    // Filter for future events
    // Assuming we want to show today's events as well.
    // Using simple string comparison 'YYYY-MM-DD' works for ISO dates.
    const today = new Date().toISOString().split('T')[0]
    const upcomingEvents = scheduleData
        .filter(item => item.isoDate >= today)
        .slice(0, 3)

    return (
        <section className="py-20 bg-tiger-navy text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Calendar/Image placeholder side */}
                    <div className="w-full md:w-1/3">
                        <div className="bg-tiger-gold p-8 rounded-2xl shadow-xl text-tiger-navy text-center">
                            <Calendar className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-2">SCHEDULE</h3>
                            <p className="font-bold opacity-80 mb-6">活動予定</p>
                            <p className="text-sm mb-6">
                                土日祝日を中心に活動しています。<br />
                                見学・体験はいつでも歓迎です！
                            </p>
                            <Button className="w-full bg-tiger-navy text-white hover:bg-tiger-navy/90" asChild>
                                <Link href="/activity">月間予定を見る</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Schedule List */}
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-bold mb-8 text-tiger-gold text-center md:text-left">UPCOMING EVENTS</h2>
                        <div className="space-y-4">
                            {upcomingEvents.map((item, index) => (
                                <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 bg-tiger-navy border border-tiger-gold rounded-lg">
                                        {/* Parse date "1月10日" to display nicely if needed, or just display as is */}
                                        <span className="text-sm font-bold text-tiger-gold">{item.date}</span>
                                        <span className="text-xs text-white">({item.day})</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                        <div className="flex items-center gap-4 text-sm text-gray-300 mt-1">
                                            <span>{item.time}</span>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />
                                                <span>{item.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center md:text-right">
                            <Link href="/activity" className="text-tiger-gold hover:text-white transition-colors text-sm underline-offset-4 hover:underline">
                                すべての予定を確認する &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
