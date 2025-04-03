"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed right-8 bottom-24 z-50 p-3 rounded-full transition-colors duration-200 focus:outline-none bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-lg"
      aria-label="Toggle Dark Mode"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6 text-yellow-300 hover:text-yellow-200 transition-colors" />
      ) : (
        <Moon className="h-6 w-6 text-white hover:text-gray-200 transition-colors" />
      )}
    </motion.button>
  )
}

