"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, Upload, FileText, Calendar } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

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

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        // Using the same password as the main page for simplicity, or we could use a specific admin one.
        // Let's use a slightly different one or the same. The user didn't specify, so let's stick to the same one for now or a variation.
        // Actually, for "upload", it should probably be stricter, but the prompt didn't specify.
        // Let's use "admin2026" to be safe and separate.
        if (password === "admin2026") {
            setIsAuthenticated(true)
            setError("")
        } else {
            setError("管理者パスワードが正しくありません")
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
            router.push("/magazine")

        } catch (err: any) {
            console.error(err)
            setError(err.message || "アップロードに失敗しました")
        } finally {
            setIsUploading(false)
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
        <div className="min-h-screen pt-24 bg-tiger-white flex items-center justify-center px-4">
            <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg w-full space-y-6">
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
        </div>
    )
}
