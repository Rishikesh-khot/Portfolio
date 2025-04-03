"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

const roles = ["CTF Player", "Red Teamer", "Penetration Tester"]
const TYPING_SPEED = 100
const DISPLAY_DURATION = 3000
const DELETING_SPEED = 50

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const updateText = () => {
      const currentRole = roles[roleIndex]

      if (isWaiting) {
        timeout = setTimeout(() => {
          setIsWaiting(false)
          setIsDeleting(true)
        }, DISPLAY_DURATION)
        return
      }

      if (!isDeleting && displayText === currentRole) {
        setIsWaiting(true)
        return
      }

      if (isDeleting && displayText === "") {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
        return
      }

      timeout = setTimeout(
        () => {
          setDisplayText((prev) => {
            if (isDeleting) {
              return prev.slice(0, -1)
            }
            return currentRole.slice(0, prev.length + 1)
          })
        },
        isDeleting ? DELETING_SPEED : TYPING_SPEED,
      )
    }

    timeout = setTimeout(updateText, 100)
    return () => clearTimeout(timeout)
  }, [roleIndex, displayText, isDeleting, isWaiting])

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl px-4 mb-16"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400">
          Rishikesh Khot
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-300">Cybersecurity Expert</h2>
        <div className="h-20 flex items-center justify-center mb-4">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl md:text-2xl text-gray-400">
            I&apos;m a{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {displayText}
            </span>
            <span className="animate-blink">|</span>
          </motion.span>
        </div>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Exploring the depths of cybersecurity, breaking and securing digital frontiers one challenge at a time.
        </p>

        <motion.button
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Universe
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <ArrowDown className="text-cyan-400 animate-bounce" size={32} />
      </motion.div>
    </div>
  )
}

