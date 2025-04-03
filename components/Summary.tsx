"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Shield, Code, Terminal, Globe } from "lucide-react"

const summaryContent = `
Hey there! I'm Rishikesh Khot, a cybersecurity enthusiast, ethical hacker, and final-year B.Tech student specializing in offensive security, red teaming, and threat mitigation. From cracking CTF challenges to diving deep into OSINT and Active Directory exploitation, I thrive on solving complex security puzzles.

I've interned with top organizations, uncovering vulnerabilities, analyzing forensic evidence, and building security tools like my Log Analyzer, enhancing multi-OS security monitoring. My love for hacking extends beyond work—I actively share CTF walkthroughs on Medium and engage in industry discussions to stay ahead of evolving cyber threats.

Beyond cybersecurity, I've built Vāyu Linux, a profile-switchable Arch-based distro tailored for hacking, gaming, and development. Whether I'm exploiting web applications, optimizing Linux environments, or researching cutting-edge security techniques, my goal remains the same—breaking things ethically to make them stronger.

If you're into cybersecurity, Linux, or just tech in general, let's connect and geek out! 🚀
`

const skills = [
  { name: "Offensive Security", icon: Shield },
  { name: "Red Teaming", icon: Code },
  { name: "OSINT", icon: Globe },
  { name: "Linux", icon: Terminal },
]

export default function Summary() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 glitch" data-text="Who Am I?">
          Who Am I?
        </h2>
        <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg neon-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed relative z-10">{summaryContent}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center p-4 bg-gray-700 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ y: -5 }}
              >
                <skill.icon className="text-cyan-400 mb-2" size={32} />
                <h3 className="text-lg font-semibold text-gray-200">{skill.name}</h3>
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded shadow-lg text-sm"
                  >
                    Click to learn more
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

