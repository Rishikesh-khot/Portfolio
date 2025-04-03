"use client"

import { motion } from "framer-motion"

const aboutContent = `
Hey there! I'm Rishikesh Khot, a cybersecurity enthusiast, ethical hacker, and final-year B.Tech student specializing in offensive security, red teaming, and threat mitigation. From cracking CTF challenges to diving deep into OSINT and Active Directory exploitation, I thrive on solving complex security puzzles.

I've interned with top organizations, uncovering vulnerabilities, analyzing forensic evidence, and building security tools like my Log Analyzer, enhancing multi-OS security monitoring. My love for hacking extends beyond work—I actively share CTF walkthroughs on Medium and engage in industry discussions to stay ahead of evolving cyber threats.

Beyond cybersecurity, I've built Vāyu Linux, a profile-switchable Arch-based distro tailored for hacking, gaming, and development. Whether I'm exploiting web applications, optimizing Linux environments, or researching cutting-edge security techniques, my goal remains the same—breaking things ethically to make them stronger.
`

const skills = [
  "Red Teaming",
  "VAPT",
  "OSINT",
  "Active Directory",
  "Network Security",
  "Python",
  "Shell Scripting",
  "Linux",
]

export default function QuickIntel() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-8">
          Quick Intel Report
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm"
          >
            <p className="text-gray-300 leading-relaxed">{aboutContent}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Core Capabilities</h3>
            <div className="grid gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 p-3 rounded-lg border border-gray-700/30 backdrop-blur-sm hover:border-cyan-500/50 transition-colors duration-300"
                >
                  <span className="text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

