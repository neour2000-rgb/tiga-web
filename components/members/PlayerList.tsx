"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

// ダミーデータ生成関数
const generatePlayers = (grade: number, count: number, startNum: number) => {
    return Array.from({ length: count }).map((_, i) => ({
        number: startNum + i,
        name: `選手 ${String.fromCharCode(65 + i)}`, // 選手A, 選手B...
        position: i === 0 ? "キャプテン" : "選手",
    }))
}

const players = {
    grade6: generatePlayers(6, 8, 1),
    grade5: generatePlayers(5, 6, 11),
    grade4: generatePlayers(4, 5, 21),
    grade3: generatePlayers(3, 4, 31),
}

const PlayerCard = ({ player }: { player: { number: number; name: string; position: string } }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group"
    >
        <div className="aspect-[4/5] bg-gray-100 relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold text-4xl group-hover:text-tiger-gold/50 transition-colors">
                {player.number}
            </div>
            <div className="absolute top-2 left-2 bg-tiger-navy text-white text-xs font-bold px-2 py-1 rounded">
                No.{player.number}
            </div>
        </div>
        <div className="p-4 text-center">
            <h3 className="font-bold text-lg text-tiger-navy mb-1">{player.name}</h3>
            <p className="text-sm text-tiger-gold font-medium">{player.position}</p>
        </div>
    </motion.div>
)

export function PlayerList() {
    return (
        <section className="py-24 bg-tiger-navy text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-tiger-gold mb-4">MEMBERS</h2>
                    <div className="h-1 w-20 bg-tiger-gold/50 mx-auto mb-6" />
                    <p className="text-lg text-white/80">選手紹介</p>
                </div>

                <Tabs defaultValue="grade6" className="w-full max-w-5xl mx-auto">
                    <TabsList className="grid w-full grid-cols-4 bg-tiger-navy/50 border border-tiger-gold/20 p-1 rounded-full mb-12 h-auto">
                        {/* Note: TabsTrigger customization usually requires modifying the component or using classes. 
                 Using default styling but wrapped for responsive layout if needed. */}
                        <TabsTrigger value="grade6" className="rounded-full py-3 data-[state=active]:bg-tiger-gold data-[state=active]:text-tiger-navy text-white/70">6年生</TabsTrigger>
                        <TabsTrigger value="grade5" className="rounded-full py-3 data-[state=active]:bg-tiger-gold data-[state=active]:text-tiger-navy text-white/70">5年生</TabsTrigger>
                        <TabsTrigger value="grade4" className="rounded-full py-3 data-[state=active]:bg-tiger-gold data-[state=active]:text-tiger-navy text-white/70">4年生</TabsTrigger>
                        <TabsTrigger value="grade3" className="rounded-full py-3 data-[state=active]:bg-tiger-gold data-[state=active]:text-tiger-navy text-white/70">3年生以下</TabsTrigger>
                    </TabsList>

                    <TabsContent value="grade6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {players.grade6.map((player) => <PlayerCard key={player.number} player={player} />)}
                        </div>
                    </TabsContent>
                    <TabsContent value="grade5">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {players.grade5.map((player) => <PlayerCard key={player.number} player={player} />)}
                        </div>
                    </TabsContent>
                    <TabsContent value="grade4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {players.grade4.map((player) => <PlayerCard key={player.number} player={player} />)}
                        </div>
                    </TabsContent>
                    <TabsContent value="grade3">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {players.grade3.map((player) => <PlayerCard key={player.number} player={player} />)}
                        </div>
                    </TabsContent>
                </Tabs>

                <div className="mt-16 text-center">
                    <p className="text-white/80 mb-6">一緒に野球を楽しむ仲間を募集しています！</p>
                    <a href="/join" className="inline-block bg-tiger-gold text-tiger-navy font-bold py-3 px-8 rounded-full hover:bg-white transition-colors duration-300 shadow-lg">
                        入団について詳しく見る
                    </a>
                </div>
            </div>
        </section>
    )
}
