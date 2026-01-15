import { ContactForm } from "@/components/contact/ContactForm"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "お問い合わせ | 福島ティガファイターズ",
    description: "福島ティガファイターズへの体験入団、練習試合のお申し込み、その他お問い合わせはこちらのお問い合わせフォームから受け付けております。",
}

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-tiger-white">
            {/* Page Header */}
            <section className="bg-tiger-navy py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-tiger-gold mb-4 tracking-wider">CONTACT</h1>
                <p className="text-white text-lg">お問い合わせ</p>
            </section>

            <div className="container mx-auto px-4 md:px-6 py-16">
                <div className="max-w-3xl mx-auto mb-12 text-center">
                    <p className="text-lg leading-relaxed text-gray-700">
                        体験入団の見学申し込み、練習試合の対戦依頼、その他チームに関するご質問など、<br className="hidden md:inline" />
                        下記フォームよりお気軽にお問い合わせください。<br />
                        内容を確認後、担当者よりご連絡させていただきます。
                    </p>
                    <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800 inline-block">
                        お急ぎの場合は、チーム関係者へ直接ご連絡いただくか、インスタDMよりメッセージをお送りください。
                    </div>
                </div>

                <ContactForm />
            </div>
        </div>
    )
}
