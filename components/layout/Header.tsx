"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Facebook, Instagram } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
    { name: "ホーム", href: "/" },
    { name: "チームについて", href: "/about" },
    { name: "活動紹介", href: "/activity" },
    { name: "選手・スタッフ", href: "/members" },
    { name: "チーム成績・選手成績", href: "https://baseball-stats-app-7cda.bolt.host" },
    { name: "月間ティガマガジン", href: "/magazine" },
    { name: "入団案内", href: "/join" },
    { name: "お問い合わせ", href: "/contact" },
]

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    // ページ遷移時にメニューを閉じる
    React.useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <header className="sticky top-0 z-50 w-full border-b border-tiger-gold/20 bg-tiger-navy/95 backdrop-blur supports-[backdrop-filter]:bg-tiger-navy/80">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 relative group">
                    <span className="text-xl font-bold text-tiger-white group-hover:text-tiger-gold transition-colors duration-300">
                        TIGA FIGHTERS
                    </span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tiger-gold transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-tiger-gold relative py-1 whitespace-nowrap",
                                pathname === item.href
                                    ? "text-tiger-gold font-bold"
                                    : "text-tiger-white/90"
                            )}
                        >
                            {item.name}
                            {pathname === item.href && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 bottom-0 block h-[2px] w-full bg-tiger-gold"
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA / Social */}
                <div className="hidden lg:flex items-center space-x-4">
                    <Button variant="premium" size="sm" asChild>
                        <Link href="/join">団員募集中</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="flex items-center justify-center p-2 lg:hidden text-tiger-white hover:text-tiger-gold"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="メニューを開く"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-b border-tiger-gold/10 bg-tiger-navy"
                    >
                        <div className="flex flex-col space-y-4 p-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-base font-medium transition-colors hover:text-tiger-gold p-2 rounded-md hover:bg-tiger-white/5",
                                        pathname === item.href
                                            ? "text-tiger-gold bg-tiger-white/10"
                                            : "text-tiger-white/90"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-tiger-white/10">
                                <Button variant="premium" className="w-full" asChild>
                                    <Link href="/join">団員募集中！</Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
