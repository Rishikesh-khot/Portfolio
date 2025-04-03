"use client"

import { motion } from "framer-motion"
import { Award, Star, Trophy, BadgeCheck } from "lucide-react"

const achievements = [
  {
    title: "3rd Position - CyberHunt CTF",
    description:
      "Secured 3rd place in a national-level Capture The Flag competition, demonstrating advanced hacking skills.",
    icon: Trophy,
  },
  {
    title: "36th Position – Zupee CTF",
    description:
      "Ranked 36th out of 1000+ participants in the Zupee Capture The Flag event, showcasing problem-solving abilities.",
    icon: Star,
  },
  {
    title: "12th Position – ApoorvCTF",
    description:
      "Achieved 12th position in ApoorvCTF, a challenging competition focused on cryptography and web exploitation.",
    icon: Award,
  },
  {
    title: "112th Rank – NCIIPC-AICTE",
    description:
      "Secured 112th rank in the NCIIPC-AICTE National Cyber Security Awareness Test, demonstrating comprehensive knowledge.",
    icon: BadgeCheck,
  },
  {
    title: "Top 3% on TryHackMe",
    description: "Consistently ranked in the top 3% of users on TryHackMe, completing numerous rooms and challenges.",
    icon: Star,
  },
]

export default function Achievements() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title" data-content="ACHIEVEMENTS">
        ACHIEVEMENTS
      </h2>

      <div className="cyber-grid max-w-6xl mx-auto">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="cyber-card"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-[#25283B]/10 text-[#25283B]">
                <achievement.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#25283B] mb-3">{achievement.title}</h3>
              <p className="text-gray-700">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

