"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing...")
  const { theme } = useTheme()

  useEffect(() => {
    const texts = [
      "Initializing...",
      "Scanning perimeter...",
      "Establishing secure connection...",
      "System breach successful",
    ]

    let currentIndex = 0
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length
      setLoadingText(texts[currentIndex])
    }, 300)

    // Faster progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 4 // Faster increment
      })
    }, 25)

    return () => {
      clearInterval(interval)
      clearInterval(timer)
    }
  }, [])

  const isDark = theme === "dark"

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${isDark ? "bg-gray-900" : "bg-[#D2D2D2]"}`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <h1 className={`text-5xl font-bold mb-4 font-['ICA_Rubrik'] ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
          SYSTEM BOOT
        </h1>

        <div className={`w-64 h-2 ${isDark ? "bg-gray-700" : "bg-gray-300"} rounded-full mb-4 overflow-hidden`}>
          <motion.div
            className={`h-full ${isDark ? "bg-cyan-400" : "bg-[#25283B]"}`}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className={`font-mono mb-4 ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
          <span className="inline-block w-48 text-left">{loadingText}</span>
          <span className="animate-pulse"> |</span>
        </div>
      </motion.div>
    </div>
  )
}

