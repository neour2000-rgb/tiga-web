import { StaffList } from "@/components/members/StaffList"
import { PlayerList } from "@/components/members/PlayerList"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "選手・スタッフ紹介 | 福島ティガファイターズ",
    description: "福島ティガファイターズの指導者スタッフと所属選手をご紹介します。",
}

export default function MembersPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="bg-tiger-navy py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-tiger-gold mb-4 tracking-wider">MEMBERS</h1>
                <p className="text-white text-lg">選手・スタッフ紹介</p>
            </section>

            {/* Staff Section */}
            <StaffList />

            {/* Players Section */}
            <PlayerList />
        </div>
    )
}
