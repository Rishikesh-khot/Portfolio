"use client"

import { useTheme } from "next-themes"

export default function Footer() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <footer className={`footer ${isDark ? "bg-gray-900 text-white" : "bg-[#25283B] text-white"}`} id="contact">
      <div className="container mx-auto px-4">
        <p>© 2025 Rishikesh Khot. All rights reserved.</p>
      </div>
    </footer>
  )
}

