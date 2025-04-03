import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rishikesh Khot - Cybersecurity Portfolio",
  description: "Journey through the digital universe of a cybersecurity expert.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.cdnfonts.com/css/ica-rubrik-black" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'