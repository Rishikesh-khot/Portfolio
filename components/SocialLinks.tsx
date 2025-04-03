"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { useTheme } from "next-themes"

export default function SocialLinks() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="fixed bottom-8 left-8 z-40">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col space-y-4"
      >
        <a
          href="https://github.com/Rishikesh-khot/"
          target="_blank"
          rel="noopener noreferrer"
          className={`social-floating-link ${
            isDark ? "bg-gray-800 text-cyan-400 hover:bg-gray-700" : "bg-[#25283B] text-white hover:bg-[#38384f]"
          }`}
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/rishikeshkhot/"
          target="_blank"
          rel="noopener noreferrer"
          className={`social-floating-link ${
            isDark ? "bg-gray-800 text-cyan-400 hover:bg-gray-700" : "bg-[#25283B] text-white hover:bg-[#38384f]"
          }`}
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>

        <a
          href="https://medium.com/@rishikeshkhot26"
          target="_blank"
          rel="noopener noreferrer"
          className={`social-floating-link ${
            isDark ? "bg-gray-800 text-cyan-400 hover:bg-gray-700" : "bg-[#25283B] text-white hover:bg-[#38384f]"
          }`}
          aria-label="Medium"
        >
          <span className="font-bold text-lg">M</span>
        </a>

        <a
          href="mailto:rishikeshkhot26@gmail.com"
          className={`social-floating-link ${
            isDark ? "bg-gray-800 text-cyan-400 hover:bg-gray-700" : "bg-[#25283B] text-white hover:bg-[#38384f]"
          }`}
          aria-label="Email"
        >
          <Mail size={20} />
        </a>

        <div className={`w-px h-24 mx-auto ${isDark ? "bg-gray-700" : "bg-[#25283B]/30"}`}></div>
      </motion.div>
    </div>
  )
}

