"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Send, CheckCircle2 } from "lucide-react"
import { sendContactEmail } from "@/app/actions/contact"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

const formSchema = z.object({
    name: z.string().min(2, { message: "お名前は2文字以上で入力してください" }),
    email: z.string().email({ message: "正しいメールアドレスを入力してください" }),
    subject: z.string().min(1, { message: "件名を選択してください" }),
    message: z.string().min(10, { message: "お問い合わせ内容は10文字以上で入力してください" }),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
    const [isSubmitted, setIsSubmitted] = React.useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    })


    const onSubmit = async (data: FormData) => {
        try {
            const result = await sendContactEmail(data)

            if (result.success) {
                setIsSubmitted(true)
                reset()
            } else {
                alert(result.message || "送信に失敗しました")
            }
        } catch (e: any) {
            console.error(e)
            alert(`エラーが発生しました: ${e.message || e.toString()}`)
        }
    }

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
            >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-tiger-navy mb-4">送信完了</h3>
                <p className="text-muted-foreground mb-8">
                    お問い合わせを受け付けました。<br />
                    担当者より折り返しご連絡させていただきます。
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    フォームに戻る
                </Button>
            </motion.div>
        )
    }

    return (
        <Card className="max-w-2xl mx-auto border-t-4 border-t-tiger-gold shadow-lg">
            <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-tiger-navy">お名前 <span className="text-red-500">*</span></Label>
                        <Input id="name" placeholder="山田 太郎" {...register("name")} />
                        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-tiger-navy">メールアドレス <span className="text-red-500">*</span></Label>
                        <Input id="email" type="email" placeholder="example@tigafighters.com" {...register("email")} />
                        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="subject" className="text-tiger-navy">件名 <span className="text-red-500">*</span></Label>
                        <select
                            id="subject"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            {...register("subject")}
                        >
                            <option value="">選択してください</option>
                            <option value="入団・体験について">入団・体験について</option>
                            <option value="練習試合の申し込み">練習試合の申し込み</option>
                            <option value="その他のお問い合わせ">その他のお問い合わせ</option>
                        </select>
                        {errors.subject && <p className="text-sm text-red-500">{errors.subject.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-tiger-navy">お問い合わせ内容 <span className="text-red-500">*</span></Label>
                        <Textarea
                            id="message"
                            placeholder="ご質問やご相談内容をご記入ください"
                            className="min-h-[150px]"
                            {...register("message")}
                        />
                        {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
                    </div>

                    <Button type="submit" className="w-full bg-tiger-navy hover:bg-tiger-navy/90 text-white font-bold py-6" disabled={isSubmitting}>
                        {isSubmitting ? (
                            "送信中..."
                        ) : (
                            <span className="flex items-center gap-2">
                                送信する <Send className="h-4 w-4" />
                            </span>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
