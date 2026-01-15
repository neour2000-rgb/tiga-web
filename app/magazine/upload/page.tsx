"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, Upload, FileText, Calendar } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { verifyAdminPassword, checkAdminSession } from "@/app/actions/auth"

type Magazine = {
    id: string
    title: string
    public_date: string
    pdf_url: string
}

export default function MagazineUploadPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isUploading, setIsUploading] = useState(false)
    const router = useRouter()

    const [formData, setFormData] = useState({
        title: "",
        publicDate: "",
    })
    const [file, setFile] = useState<File | null>(null)
    const [magazines, setMagazines] = useState<Magazine[]>([])

    // 初期ロード時にセッションチェック
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
        const initSession = async () => {
            const hasSession = await checkAdminSession()
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
        const { data, error } = await supabase
            .from('magazines')
            .select('*')
            .order('public_date', { ascending: false })

        if (!error && data) {
            setMagazines(data)
        }
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        const result = await verifyAdminPassword(password)

        if (result.success) {
            setIsAuthenticated(true)
        } else {
            setError(result.error || "管理者パスワードが正しくありません")
        }
    }

    const handleUpload = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!file || !formData.title || !formData.publicDate) {
            setError("すべての項目を入力してください")
            return
        }

        setIsUploading(true)
        setError("")

        try {
            // 1. Upload PDF to Storage
            const fileExt = file.name.split('.').pop()
            const fileName = `${Date.now()}.${fileExt}`
            const { data: storageData, error: storageError } = await supabase.storage
                .from('magazines')
                .upload(fileName, file)

            if (storageError) throw storageError

            // Get Public URL
            const { data: { publicUrl } } = supabase.storage
                .from('magazines')
                .getPublicUrl(fileName)

            // 2. Insert record into Database
            const { error: dbError } = await supabase
                .from('magazines')
                .insert([
                    {
                        title: formData.title,
                        public_date: formData.publicDate,
                        pdf_url: publicUrl,
                    }
                ])

            if (dbError) throw dbError

            alert("アップロードが完了しました")
            setFormData({ title: "", publicDate: "" })
            setFile(null)
            fetchMagazines() // リストを更新

        } catch (err: any) {
            console.error(err)
            setError(err.message || "アップロードに失敗しました")
        } finally {
            setIsUploading(false)
        }
    }

    const handleDelete = async (id: string, pdfUrl: string) => {
        if (!window.confirm("本当に削除しますか？\nこの操作は取り消せません。")) return

        try {
            // 1. Delete from Storage
            const fileName = pdfUrl.split('/').pop()
            if (fileName) {
                const { error: storageError } = await supabase.storage
                    .from('magazines')
                    .remove([fileName])

                if (storageError) console.error('Storage delete error:', storageError)
            }

            // 2. Delete from Database
            const { error: dbError } = await supabase
                .from('magazines')
                .delete()
                .eq('id', id)

            if (dbError) throw dbError

            alert("削除しました")
            fetchMagazines()

        } catch (err: any) {
            console.error(err)
            alert("削除に失敗しました: " + err.message)
        }
    }

    if (!mounted) return null // Hydration mismatch prevention

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen pt-24 bg-tiger-navy flex items-center justify-center px-4">
                <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full text-center space-y-6">
                    <div className="flex justify-center mb-4">
                        <div className="p-4 bg-tiger-navy/10 rounded-full">
                            <Lock className="w-8 h-8 text-tiger-navy" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-tiger-navy">管理者専用ページ</h1>
                    <p className="text-gray-600 text-sm">
                        マガジンをアップロードするには<br />
                        管理者パスワードを入力してください。
                    </p>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                type="password"
                                placeholder="管理者パスワード"
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
        <div className="min-h-screen pt-24 bg-tiger-white pb-20 px-4">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Upload Form */}
                <div className="bg-white p-8 rounded-xl shadow-xl w-full space-y-6">
                    <div className="text-center border-b pb-6">
                        <h1 className="text-2xl font-bold text-tiger-navy">マガジン登録</h1>
                        <p className="text-gray-500 text-sm mt-2">新しい月間ティガマガジンをアップロードします</p>
                    </div>

                    <form onSubmit={handleUpload} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                <FileText className="w-4 h-4" /> タイトル
                            </label>
                            <Input
                                placeholder="例：2026年8月号"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> 発行日
                            </label>
                            <Input
                                type="date"
                                value={formData.publicDate}
                                onChange={(e) => setFormData({ ...formData, publicDate: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                <Upload className="w-4 h-4" /> PDFファイル
                            </label>
                            <Input
                                type="file"
                                accept="application/pdf"
                                onChange={(e) => setFile(e.target.files?.[0] || null)}
                                className="cursor-pointer"
                            />
                        </div>

                        {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md">{error}</div>}

                        <Button
                            type="submit"
                            disabled={isUploading}
                            className="w-full bg-tiger-navy hover:bg-tiger-navy/90 text-white font-bold h-12"
                        >
                            {isUploading ? "アップロード中..." : "アップロードする"}
                        </Button>
                    </form>
                </div>

                {/* Magazine List */}
                <div className="bg-white p-8 rounded-xl shadow-xl w-full space-y-6">
                    <div className="border-b pb-4">
                        <h2 className="text-xl font-bold text-tiger-navy">登録済みマガジン一覧</h2>
                    </div>

                    {magazines.length === 0 ? (
                        <p className="text-gray-500 text-center py-4">登録されているマガジンはありません</p>
                    ) : (
                        <div className="space-y-4">
                            {magazines.map((mag) => (
                                <div key={mag.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                                    <div className="flex-1">
                                        <h3 className="font-bold text-tiger-navy">{mag.title}</h3>
                                        <p className="text-sm text-gray-500">{new Date(mag.public_date).toLocaleDateString('ja-JP')} 発行</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <a
                                            href={mag.pdf_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-tiger-navy hover:underline text-sm"
                                        >
                                            確認
                                        </a>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => handleDelete(mag.id, mag.pdf_url)}
                                            className="bg-red-500 hover:bg-red-600"
                                        >
                                            削除
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
