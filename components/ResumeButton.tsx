"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Lock, FileText } from "lucide-react"
import { useState } from "react"

export default function ResumeButton() {
  const [isLocked, setIsLocked] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const handleUnlock = () => {
    setIsLocked(false)
    setTimeout(() => setIsLocked(true), 5000)
  }

  const handleResumeDownload = (e: React.MouseEvent) => {
    e.preventDefault()

    // Create a link element
    const link = document.createElement("a")
    link.href = "/Rishikesh_Khot_Resume.pdf"
    link.download = "Rishikesh_Khot_Resume.pdf"

    // Append to the document, click it, and remove it
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.div
      className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40"
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.div className="relative" onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
        {isLocked ? (
          <motion.button
            onClick={handleUnlock}
            className="flex items-center gap-2 bg-gradient-to-l from-[#25283B] to-[#1e2130] text-white px-4 py-3 rounded-l-xl group relative overflow-hidden"
            whileHover={{ x: -10 }}
          >
            <Lock className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={isHovered ? { opacity: 1, width: "auto" } : { opacity: 0, width: 0 }}
              className="whitespace-nowrap overflow-hidden"
            >
              Unlock Resume
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        ) : (
          <motion.a
            href="/Rishikesh_Khot_Resume.pdf"
            onClick={handleResumeDownload}
            className="flex items-center gap-2 bg-gradient-to-l from-[#25283B] to-[#1e2130] text-white px-4 py-3 rounded-l-xl group relative overflow-hidden"
            whileHover={{ x: -10 }}
          >
            <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={isHovered ? { opacity: 1, width: "auto" } : { opacity: 0, width: 0 }}
              className="whitespace-nowrap overflow-hidden"
            >
              Download Resume
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  )
}

