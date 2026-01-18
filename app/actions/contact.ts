"use server"

import { Resend } from "resend"

export type ContactFormData = {
    name: string
    email: string
    subject: string
    message: string
}

export type ContactResponse = {
    success: boolean
    message?: string
}

export async function sendContactEmail(data: ContactFormData): Promise<ContactResponse> {
    const { name, email, subject, message } = data

    if (!process.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not set")
        return { success: false, message: "システムエラー: APIキーが設定されていません" }
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    try {
        const { error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "neour2000@gmail.com",
            subject: `[HPお問い合わせ] ${subject}`,
            text: `
ウェブサイトのお問い合わせフォームより新しいメッセージがありました。

--------------------------------------------------
【お名前】
${name}

【メールアドレス】
${email}

【件名】
${subject}

【お問い合わせ内容】
${message}
--------------------------------------------------
`,
        })

        if (error) {
            console.error("Resend Error:", error)
            return { success: false, message: "メール送信に失敗しました" }
        }

        return { success: true, message: "お問い合わせを受け付けました" }

    } catch (e) {
        console.error("Server Error:", e)
        return { success: false, message: "サーバーエラーが発生しました" }
    }
}
