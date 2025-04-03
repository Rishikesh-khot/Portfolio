"use client"

import { motion } from "framer-motion"
import { Shield, Code, Network, Terminal, Globe, Lock } from "lucide-react"

const skills = [
  {
    name: "Red Teaming",
    icon: Shield,
    description: "Expertise in simulating real-world attacks to identify vulnerabilities in systems and networks.",
  },
  {
    name: "VAPT",
    icon: Lock,
    description: "Skilled in Vulnerability Assessment and Penetration Testing to evaluate security posture.",
  },
  {
    name: "OSINT",
    icon: Globe,
    description: "Proficient in Open Source Intelligence gathering for cybersecurity investigations.",
  },
  {
    name: "Network Security",
    icon: Network,
    description: "In-depth knowledge of network protocols, firewalls, and intrusion detection/prevention systems.",
  },
  {
    name: "Programming",
    icon: Code,
    description: "Skilled in Python, Shell Scripting, and other languages for security tool development.",
  },
  {
    name: "Linux",
    icon: Terminal,
    description: "Advanced knowledge of Linux systems, including Debian, Fedora, and Arch Linux.",
  },
]

const aboutContent = `
Hey there! I'm Rishikesh Khot, a cybersecurity enthusiast, ethical hacker, and final-year B.Tech student specializing in offensive security, red teaming, and threat mitigation. From cracking CTF challenges to diving deep into OSINT and Active Directory exploitation, I thrive on solving complex security puzzles.

I've interned with top organizations, uncovering vulnerabilities, analyzing forensic evidence, and building security tools like my Log Analyzer, enhancing multi-OS security monitoring. My love for hacking extends beyond work—I actively share CTF walkthroughs on Medium and engage in industry discussions to stay ahead of evolving cyber threats.

Beyond cybersecurity, I've built Vāyu Linux, a profile-switchable Arch-based distro tailored for hacking, gaming, and development. Whether I'm exploiting web applications, optimizing Linux environments, or researching cutting-edge security techniques, my goal remains the same—breaking things ethically to make them stronger.
`

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title" data-content="ABOUT">
        ABOUT
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="cyber-card mb-16 max-w-4xl mx-auto"
      >
        <p className="text-gray-800 text-lg leading-relaxed">{aboutContent}</p>
      </motion.div>

      <div className="cyber-grid max-w-6xl mx-auto">
        {skills.map((skill, index) => (
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
                <skill.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#25283B] mb-3">{skill.name}</h3>
              <p className="text-gray-700">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

