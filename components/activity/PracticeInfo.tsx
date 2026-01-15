"use client"

import { Clock, MapPin, Sun, CloudRain } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const practiceLocations = [
    {
        name: "兎田公園",
        address: "福島市蓬莱町３丁目１３−３４−１５９",
        mapLink: "https://www.google.com/maps/search/?api=1&query=福島市蓬莱町３丁目１３−３４−１５９",
    },
    {
        name: "平石小",
        address: "福島市平石長屋敷１−１",
        mapLink: "https://www.google.com/maps/search/?api=1&query=福島市平石長屋敷１−１",
    },
]

export function PracticeInfo() {
    return (
        <section className="py-24 bg-tiger-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-tiger-navy mb-4">PRACTICE</h2>
                    <div className="h-1 w-20 bg-tiger-gold mx-auto mb-6" />
                    <p className="text-lg text-tiger-navy">練習について</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Time & Schedule */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-tiger-navy flex items-center gap-2">
                            <Clock className="h-6 w-6 text-tiger-gold" />
                            練習時間
                        </h3>

                        <Card className="border-l-4 border-l-tiger-gold">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg text-tiger-navy">
                                    <Sun className="h-5 w-5 text-orange-500" />
                                    土曜日・日曜日・祝日
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-bold text-2xl mb-2 text-tiger-navy">9:00 - 16:00</p>
                                <p className="text-sm text-gray-700">
                                    ※季節やグラウンド確保状況により変更になる場合があります。<br />
                                    ※低学年は午前中のみの場合もあります。
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-tiger-navy">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg text-tiger-navy">
                                    <CloudRain className="h-5 w-5 text-blue-500" />
                                    雨天時・冬季
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-bold text-xl mb-2 text-tiger-navy">室内練習場 または 体育館</p>
                                <p className="text-sm text-gray-700">
                                    ※時間は確保できた施設の使用枠に準じます。
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Locations */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-tiger-navy flex items-center gap-2">
                            <MapPin className="h-6 w-6 text-tiger-gold" />
                            主な練習場所
                        </h3>

                        <div className="space-y-4">
                            {practiceLocations.map((loc, index) => (
                                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                                    <div>
                                        <p className="font-bold text-lg text-tiger-navy">{loc.name}</p>
                                        <p className="text-sm text-black">{loc.address}</p>
                                    </div>
                                    <Button variant="outline" size="sm" className="mt-3 sm:mt-0" asChild>
                                        <a href={loc.mapLink} target="_blank" rel="noopener noreferrer">地図を見る</a>
                                    </Button>
                                </div>
                            ))}
                        </div>

                        <div className="bg-tiger-navy/5 p-6 rounded-xl border border-tiger-navy/10 mt-6">
                            <p className="text-sm font-medium text-tiger-navy text-center">
                                見学・体験はどのグラウンドでも随時受け付けています。<br />
                                スケジュールの詳細はカレンダーをご確認ください。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
