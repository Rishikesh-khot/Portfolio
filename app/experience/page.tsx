"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { ArrowLeft, Shield, Terminal, Globe, Network } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    title: "CYBERSECURITY INTERN",
    company: "GPCSSI'24",
    location: "Gurugram",
    date: "MAY 2024 – JUNE 2024",
    description: [
      "Performed forensic analysis in cybercrime cases, identifying critical evidence for CSAM and deepfake investigations.",
      "Ranked in the top 10% in Zupee CTF (out of 500+ participants) by demonstrating advanced VAPT skills and web exploitation.",
      "Developed and deployed a Python-based Log Analyzer Tool, improving multi-OS security monitoring by 20%.",
    ],
    icon: Terminal,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-gradient-to-r from-blue-500/10 to-blue-600/10",
    borderColor: "border-blue-500/30",
  },
  {
    title: "JUNIOR ANALYST",
    company: "Allcargo Logistics",
    location: "Mumbai",
    date: "FEB 2023 – APR 2023",
    description: [
      "Executed comprehensive security audits and vulnerability assessments using Panorays and CloudSek, reducing cybersecurity threats by 15% and strengthening overall data integrity.",
      "Gained hands-on experience in DMARC-based email authentication, contributing to phishing risk reduction and assisting in the development of security strategies.",
    ],
    icon: Globe,
    color: "from-green-500 to-green-600",
    bgColor: "bg-gradient-to-r from-green-500/10 to-green-600/10",
    borderColor: "border-green-500/30",
  },
  {
    title: "CYBERSECURITY INTERN",
    company: "Cyber Secured India",
    location: "Remote",
    date: "DEC 2022 – FEB 2023",
    description: [
      "Orchestrated penetration testing and OSINT using BurpSuite and Nessus in TryHackMe labs, identifying and remediating 50+ vulnerabilities across systems.",
      "Secured 89.54% in training, applying DFIR and mobile security techniques to real-world scenarios under mentor guidance.",
    ],
    icon: Network,
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-gradient-to-r from-yellow-500/10 to-yellow-600/10",
    borderColor: "border-yellow-500/30",
  },
  {
    title: "CYBERSECURITY INTERN",
    company: "Cyber Crime Branch Pune",
    location: "Pune, Maharashtra",
    date: "MAY 2022 - JUNE 2022",
    description: [
      "Assisted in investigations into cybercrimes, including mobile tracing, phishing attacks, and cryptocurrency fraud.",
      "Managed cases involving identity theft, sextortion, and social media fraud, contributing to ethical investigations and preventative measures.",
      "Worked closely with law enforcement officials to develop strategies for combatting emerging threats, including fraud on platforms like Telegram.",
    ],
    icon: Shield,
    color: "from-red-500 to-red-600",
    bgColor: "bg-gradient-to-r from-red-500/10 to-red-600/10",
    borderColor: "border-red-500/30",
  },
]

export default function ExperiencePage() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className={`section-page ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
      <Link href="/" className="back-to-home">
        <ArrowLeft size={24} />
      </Link>

      <div className="section-page-header">
        <h1 className="section-page-title">Professional Experience</h1>
        <p className="section-page-subtitle">
          My journey in the cybersecurity industry and the skills I've developed along the way
        </p>
      </div>

      <div className="section-page-content">
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-16 p-6 rounded-xl shadow-xl ${exp.bgColor} border ${exp.borderColor} ${isDark ? "bg-gray-800/50" : "bg-white/90"}`}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-full bg-gradient-to-r ${exp.color} text-white`}>
                  <exp.icon size={28} />
                </div>

                <div className="flex-1">
                  <h2 className={`text-2xl font-bold mb-1 ${isDark ? "text-white" : "text-[#25283B]"}`}>{exp.title}</h2>
                  <p className={`text-lg mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    <span className="font-semibold">{exp.company}</span> | {exp.location} | {exp.date}
                  </p>

                  <div className={`p-4 rounded-lg ${isDark ? "bg-gray-700/50" : "bg-gray-100"}`}>
                    <h3 className={`text-lg font-semibold mb-3 ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
                      Key Responsibilities & Achievements
                    </h3>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <div
                            className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`}
                          ></div>
                          <p className={isDark ? "text-gray-300" : "text-gray-700"}>{item}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

