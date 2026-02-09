'use server'

import { cookies } from 'next/headers'

export async function verifyPassword(password: string) {
    const correctPassword = process.env.MAGAZINE_PASSWORD

    if (password === correctPassword) {
        // 認証成功時、クッキーをセット (有効期限: 1日)
        const cookieStore = await cookies()
        cookieStore.set('magazine_session', 'authenticated', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
        })
        return { success: true }
    }

    return { success: false, error: 'パスワードが正しくありません' }
}

export async function checkSession() {
    const cookieStore = await cookies()
    const session = cookieStore.get('magazine_session')
    return session?.value === 'authenticated'
}

export async function verifyAdminPassword(password: string) {
    const correctPassword = process.env.MAGAZINE_ADMIN_PASSWORD

    console.log('--- Debug: Verify Admin Password ---')
    // セキュリティのため、本番ログにはパスワードそのものは出さない方が安全ですが、デバッグ中は長さを確認
    console.log('Input Length:', password?.length)
    console.log('Correct (Env) Type:', typeof correctPassword)
    console.log('Correct (Env) Length:', correctPassword?.length)

    if (!correctPassword) {
        console.error('Error: MAGAZINE_ADMIN_PASSWORD is not set in environment variables.')
        return { success: false, error: 'システムエラー: 管理者パスワードがサーバーに設定されていません (MAGAZINE_ADMIN_PASSWORD)' }
    }

    if (password === correctPassword) {
        // 管理者認証成功時、クッキーをセット
        const cookieStore = await cookies()
        cookieStore.set('magazine_admin_session', 'authenticated', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
        })
        return { success: true }
    }

    return { success: false, error: '管理者パスワードが正しくありません' }
}

export async function checkAdminSession() {
    const cookieStore = await cookies()
    const session = cookieStore.get('magazine_admin_session')
    return session?.value === 'authenticated'
}
