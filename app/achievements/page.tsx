"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { ArrowLeft, Award, Star, Trophy, BadgeCheck } from "lucide-react"
import Link from "next/link"

const achievements = [
  {
    title: "3rd Position - CyberHunt CTF",
    description:
      "Secured 3rd place in a national-level Capture The Flag competition, demonstrating advanced hacking skills.",
    icon: Trophy,
    color: "from-yellow-500 to-amber-600",
    bgColor: "bg-gradient-to-r from-yellow-500/10 to-amber-600/10",
    borderColor: "border-yellow-500/30",
  },
  {
    title: "36th Position – Zupee CTF",
    description:
      "Ranked 36th out of 1000+ participants in the Zupee Capture The Flag event, showcasing problem-solving abilities.",
    icon: Star,
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-gradient-to-r from-blue-500/10 to-cyan-600/10",
    borderColor: "border-blue-500/30",
  },
  {
    title: "92nd Rank - Hackfinity CTF",
    description:
      "Our team secured 92nd position out of 4200+ teams in the Hackfinity CTF hosted by TryHackMe, demonstrating exceptional problem-solving and hacking skills in a highly competitive environment.",
    icon: Award,
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-gradient-to-r from-purple-500/10 to-indigo-600/10",
    borderColor: "border-purple-500/30",
  },
  {
    title: "12th Position – ApoorvCTF",
    description:
      "Achieved 12th position in ApoorvCTF, a challenging competition focused on cryptography and web exploitation.",
    icon: Award,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-gradient-to-r from-green-500/10 to-emerald-600/10",
    borderColor: "border-green-500/30",
  },
  {
    title: "112th Rank – NCIIPC-AICTE",
    description:
      "Secured 112th rank in the NCIIPC-AICTE National Cyber Security Awareness Test, demonstrating comprehensive knowledge.",
    icon: BadgeCheck,
    color: "from-red-500 to-rose-600",
    bgColor: "bg-gradient-to-r from-red-500/10 to-rose-600/10",
    borderColor: "border-red-500/30",
  },
  {
    title: "Top 3% on TryHackMe",
    description: "Consistently ranked in the top 3% of users on TryHackMe, completing numerous rooms and challenges.",
    icon: Star,
    color: "from-pink-500 to-fuchsia-600",
    bgColor: "bg-gradient-to-r from-pink-500/10 to-fuchsia-600/10",
    borderColor: "border-pink-500/30",
  },
]

export default function AchievementsPage() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className={`section-page ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
      <Link href="/" className="back-to-home">
        <ArrowLeft size={24} />
      </Link>

      <div className="section-page-header">
        <h1 className="section-page-title">Achievements</h1>
        <p className="section-page-subtitle">Awards, recognitions, and milestones in my cybersecurity journey</p>
      </div>

      <div className="section-page-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${achievement.bgColor} border ${achievement.borderColor} rounded-xl shadow-xl overflow-hidden ${isDark ? "bg-gray-800/50" : "bg-white/90"}`}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className={`p-6 bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
                <achievement.icon className="w-10 h-10 text-white" />
              </div>

              <div className="p-6 text-center">
                <h3 className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>
                  {achievement.title}
                </h3>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`mt-12 p-6 rounded-xl shadow-xl ${isDark ? "bg-gray-800" : "bg-white"}`}
        >
          <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
            Continuous Growth
          </h3>
          <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            Beyond these formal achievements, I'm constantly challenging myself through ongoing participation in CTF
            competitions, bug bounty programs, and open-source contributions. Each challenge is an opportunity to learn
            and grow as a cybersecurity professional. My goal is to continuously expand my knowledge and skills to stay
            at the forefront of the rapidly evolving cybersecurity landscape.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

