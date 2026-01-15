"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SkipForward } from "lucide-react"

interface OpeningVideoProps {
    onComplete: () => void
}

export function OpeningVideo({ onComplete }: OpeningVideoProps) {
    const [isVisible, setIsVisible] = useState(true)
    const videoRef = useRef<HTMLVideoElement>(null)

    const handleComplete = () => {
        setIsVisible(false)
        setTimeout(onComplete, 500) // Wait for exit animation
    }

    // Ensure video plays
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.log("Auto-play was prevented:", error)
                // If autoplay is blocked, maybe just show the button or skip?
                // For now, let's just let it be.
            })
        }
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                >
                    <video
                        ref={videoRef}
                        className="h-full w-full object-cover"
                        playsInline
                        muted
                        onEnded={handleComplete}
                    >
                        <source src="/videos/hero-movie.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute bottom-8 right-8 z-10">
                        <Button
                            variant="outline"
                            onClick={handleComplete}
                            className="bg-black/50 text-white border-white/50 hover:bg-black/70 hover:text-tiger-gold transition-colors backdrop-blur-sm"
                        >
                            <span className="mr-2">SKIP</span>
                            <SkipForward className="h-4 w-4" />
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
