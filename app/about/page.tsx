"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { ArrowLeft, Shield, Code, Network, Terminal, Globe, Lock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const aboutContent = `
Hey there! I'm Rishikesh Khot, a cybersecurity enthusiast, ethical hacker, and final-year B.Tech student specializing in offensive security, red teaming, and threat mitigation. From cracking CTF challenges to diving deep into OSINT and Active Directory exploitation, I thrive on solving complex security puzzles.

I've interned with top organizations, uncovering vulnerabilities, analyzing forensic evidence, and building security tools like my Log Analyzer, enhancing multi-OS security monitoring. My love for hacking extends beyond work—I actively share CTF walkthroughs on Medium and engage in industry discussions to stay ahead of evolving cyber threats.

Beyond cybersecurity, I've built Vāyu Linux, a profile-switchable Arch-based distro tailored for hacking, gaming, and development. Whether I'm exploiting web applications, optimizing Linux environments, or researching cutting-edge security techniques, my goal remains the same—breaking things ethically to make them stronger.
`

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

const skillCategories = [
  {
    title: "Tech",
    skills: [
      "Red Teaming",
      "VAPT",
      "OSINT",
      "Active Directory Exploitation",
      "Network Security",
      "OWASP",
      "CTF Challenges",
    ],
  },
  {
    title: "Code",
    skills: ["Python", "HTML", "CSS", "Shell Scripting"],
  },
  {
    title: "Tools",
    skills: [
      "Burpsuite",
      "Nessus",
      "Wireshark",
      "Nmap",
      "Metasploit",
      "Maltego",
      "Nikto",
      "OpenVPN",
      "Hydra",
      "Hashcat",
    ],
  },
  {
    title: "Linux",
    skills: ["Debian", "Fedora", "Arch Linux", "Raspberry Pi OS", "System Automation"],
  },
  {
    title: "Networking",
    skills: ["OSI", "TCP/IP", "DHCP", "VPNs", "802.1x", "NAT", "Firewalls"],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Problem-solving", "Teamwork", "Adaptability", "Attention to Detail"],
  },
]

export default function AboutPage() {
  const { theme } = useTheme()
  const [resumeProgress, setResumeProgress] = useState(0)
  const [resumeDecrypting, setResumeDecrypting] = useState(false)
  const [resumeDecrypted, setResumeDecrypted] = useState(false)
  const [resumeHovered, setResumeHovered] = useState(false)

  const isDark = theme === "dark"

  const unlockResume = () => {
    if (resumeDecrypted) return

    setResumeDecrypting(true)

    const interval = setInterval(() => {
      setResumeProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setResumeDecrypted(true)
          return 100
        }
        return prev + 2
      })
    }, 30)
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
    <div className={`section-page ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
      <Link href="/" className="back-to-home">
        <ArrowLeft size={24} />
      </Link>

      <div className="section-page-header">
        <h1 className="section-page-title">About Me</h1>
        <p className="section-page-subtitle">Learn more about my background, skills, and passion for cybersecurity</p>
      </div>

      <div className="section-page-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`p-8 rounded-xl shadow-xl mb-12 ${isDark ? "bg-gray-800" : "bg-white"}`}
        >
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>My Story</h2>
          <p className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>{aboutContent}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl shadow-lg ${isDark ? "bg-gray-800" : "bg-white"}`}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`p-4 rounded-full ${isDark ? "bg-gray-700" : "bg-gray-100"} w-16 h-16 flex items-center justify-center mb-4`}
                >
                  <skill.icon className={`w-8 h-8 ${isDark ? "text-cyan-400" : "text-[#25283B]"}`} />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
                  {skill.name}
                </h3>
                <p className={isDark ? "text-gray-300" : "text-gray-700"}>{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>Technical Skills</h2>
          <div className="skills-grid mb-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="skills-category"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3>{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="skill-item"
                      whileHover={{ y: -5, backgroundColor: isDark ? "#0ea5e9" : "#25283B", color: "white" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>Resume</h2>
          <div className="resume-container mb-12">
            <div
              className={`resume-terminal ${resumeDecrypting ? "decrypting" : ""} ${resumeDecrypted ? "decrypted" : ""}`}
              onClick={unlockResume}
              onMouseEnter={() => setResumeHovered(true)}
              onMouseLeave={() => setResumeHovered(false)}
            >
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="terminal-button red"></span>
                  <span className="terminal-button yellow"></span>
                  <span className="terminal-button green"></span>
                </div>
                <div className="terminal-title">secure-vault.sh</div>
              </div>

              <div className="terminal-body">
                {!resumeDecrypting && !resumeDecrypted && (
                  <>
                    <div className="terminal-line">$ ./access_resume.sh</div>
                    <div className="terminal-line">Secure document detected. Decryption required.</div>
                    <div className="terminal-line blink">
                      {resumeHovered ? "Click to initiate decryption sequence..." : "Awaiting authorization..."}
                    </div>
                  </>
                )}

                {resumeDecrypting && !resumeDecrypted && (
                  <>
                    <div className="terminal-line">$ ./decrypt_resume.sh</div>
                    <div className="terminal-line">Decryption sequence initiated...</div>
                    <div className="terminal-line">Bypassing security protocols...</div>
                    <div className="terminal-line">
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${resumeProgress}%` }}></div>
                      </div>
                      <span>{resumeProgress}% complete</span>
                    </div>
                  </>
                )}

                {resumeDecrypted && (
                  <>
                    <div className="terminal-line">$ ./decrypt_resume.sh</div>
                    <div className="terminal-line">Decryption complete. Access granted.</div>
                    <div className="terminal-line success">Resume successfully decrypted!</div>
                    <div className="terminal-line">
                      <button className="download-link" onClick={handleResumeDownload}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Download Resume
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

