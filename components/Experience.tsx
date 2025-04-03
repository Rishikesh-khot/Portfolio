"use client"

import { motion } from "framer-motion"
import { Shield, Terminal, Globe, Server } from "lucide-react"

const experiences = [
  {
    title: "Cybersecurity Intern",
    company: "GPCSSI'24",
    date: "May 2024 – June 2024",
    description:
      "Performed forensic analysis in cybercrime cases, ranked in the top 10% in Zupee CTF, and developed a Python-based Log Analyzer Tool, improving multi-OS security monitoring by 20%.",
    icon: Terminal,
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/50",
  },
  {
    title: "Junior Analyst",
    company: "Allcargo Logistics",
    date: "Feb 2023 – Apr 2023",
    description:
      "Executed comprehensive security audits and vulnerability assessments using Panorays and CloudSek, reducing cybersecurity threats by 15%. Gained hands-on experience in DMARC-based email authentication.",
    icon: Globe,
    color: "from-green-500/20 to-green-600/20",
    borderColor: "border-green-500/50",
  },
  {
    title: "Cybersecurity Intern",
    company: "Cyber Secured India",
    date: "Dec 2022 – Feb 2023",
    description:
      "Orchestrated penetration testing and OSINT using BurpSuite and Nessus in TryHackMe labs, identifying and remediating 50+ vulnerabilities across systems. Secured 89.54% in training, applying DFIR and mobile security techniques.",
    icon: Server,
    color: "from-yellow-500/20 to-yellow-600/20",
    borderColor: "border-yellow-500/50",
  },
  {
    title: "Cybersecurity Intern",
    company: "Cyber Crime Branch Pune",
    date: "June 2022 - August 2022",
    description:
      "Gained hands-on experience in cybercrime mitigation, addressing issues such as fraud detection, cryptocurrency fraud, and sextortion. Developed practical skills in prevention, investigation, and mitigation of cybercrimes.",
    icon: Shield,
    color: "from-red-500/20 to-red-600/20",
    borderColor: "border-red-500/50",
  },
]

export default function Experience() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title" data-content="EXPERIENCE">
        EXPERIENCE
      </h2>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cyber-timeline-item"
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${exp.color}`}>
                  <exp.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#25283B] mb-1">{exp.title}</h3>
                  <p className="text-[#25283B] text-sm mb-2">
                    {exp.company} | {exp.date}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

