"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/home/Hero"
import { News } from "@/components/home/News"
import { Schedule } from "@/components/home/Schedule"
import { OpeningVideo } from "@/components/home/OpeningVideo"
import { AnimatePresence, motion } from "framer-motion"

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  // Prevent hydration mismatch by only showing logic after mount
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    const hasSeen = sessionStorage.getItem("hasSeenOpeningVideo")
    if (hasSeen) {
      setShowContent(true)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen">
      {!showContent && (
        <OpeningVideo
          onComplete={() => {
            sessionStorage.setItem("hasSeenOpeningVideo", "true")
            setShowContent(true)
          }}
        />
      )}

      {/* 
         Video background in Hero is separate. 
         We might want to fade in the main content or just have it appear.
         Since OpeningVideo fades out, the content underneath will be revealed.
      */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen"
          >
            <Hero />
            <News />
            <Schedule />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
