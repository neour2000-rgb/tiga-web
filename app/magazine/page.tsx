"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, FileText, Download, ExternalLink } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { verifyPassword, checkSession } from "@/app/actions/auth"

type Magazine = {
    id: string
    title: string
    public_date: string
    pdf_url: string
}

export default function MagazinePage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [magazines, setMagazines] = useState<Magazine[]>([])
    const [isLoading, setIsLoading] = useState(true)

    // セッションチェック (クッキーがあれば自動ログイン)
    useEffect(() => {
        const initSession = async () => {
            const hasSession = await checkSession()
            if (hasSession) {
                setIsAuthenticated(true)
            }
        }
        initSession()
    }, [])

    useEffect(() => {
        if (isAuthenticated) {
            fetchMagazines()
        }
    }, [isAuthenticated])

    const fetchMagazines = async () => {
        try {
            const { data, error } = await supabase
                .from('magazines')
                .select('*')
                .order('public_date', { ascending: false })

            if (error) throw error
            setMagazines(data || [])
        } catch (err) {
            console.error('Error fetching magazines:', err)
        } finally {
            setIsLoading(false)
        }
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        const result = await verifyPassword(password)

        if (result.success) {
            setIsAuthenticated(true)
        } else {
            setError(result.error || "エラーが発生しました")
        }
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen pt-24 bg-tiger-navy flex items-center justify-center px-4">
                <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full text-center space-y-6">
                    <div className="flex justify-center mb-4">
                        <div className="p-4 bg-tiger-navy/10 rounded-full">
                            <Lock className="w-8 h-8 text-tiger-navy" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-tiger-navy">団員専用ページ</h1>
                    <p className="text-gray-600 text-sm">
                        月間ティガマガジンをご覧いただくには<br />
                        パスワードを入力してください。
                    </p>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                type="password"
                                placeholder="パスワードを入力"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="text-center text-lg"
                            />
                            {error && <p className="text-red-500 text-xs font-bold">{error}</p>}
                        </div>
                        <Button type="submit" className="w-full bg-tiger-gold hover:bg-tiger-gold/90 text-tiger-navy font-bold">
                            認証する
                        </Button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-24 bg-tiger-white pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-tiger-navy mb-4">月間ティガマガジン</h1>
                    <div className="h-1 w-20 bg-tiger-gold mx-auto" />
                    <p className="text-gray-600 mt-4">団員向けの活動報告・お知らせを掲載しています</p>
                </div>

                {isLoading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tiger-navy"></div>
                    </div>
                ) : magazines.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-xl shadow-sm max-w-2xl mx-auto">
                        <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">現在公開されているマガジンはありません</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {magazines.map((mag) => (
                            <div key={mag.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 group">
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 bg-tiger-gold/10 rounded-lg group-hover:bg-tiger-gold/20 transition-colors">
                                            <FileText className="w-8 h-8 text-tiger-navy" />
                                        </div>
                                        <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                                            {new Date(mag.public_date).toLocaleDateString('ja-JP')}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-tiger-navy mb-2 line-clamp-2">
                                        {mag.title}
                                    </h3>
                                    <div className="mt-6 flex gap-3">
                                        <a
                                            href={mag.pdf_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1"
                                        >
                                            <Button className="w-full bg-tiger-navy hover:bg-tiger-navy/90 text-white gap-2">
                                                <ExternalLink className="w-4 h-4" />
                                                閲覧する
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
