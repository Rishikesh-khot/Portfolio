"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { ArrowLeft, Shield, Lock, GraduationCap, Award, ExternalLink } from "lucide-react"
import Link from "next/link"

const certifications = [
  {
    provider: "TCM SECURITY",
    courses: [
      "Linux 101",
      "OSINT Fundamental",
      "Practical Ethical Hacking",
      "Practical Bug Bounty",
      "Mobile Application Penetration Testing",
      "Linux Privilege Escalation for Beginners",
      "Pursuing PNPT (Practical Network Penetration Tester)",
      "Pursuing eJPT",
    ],
    icon: Shield,
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-gradient-to-r from-purple-500/10 to-indigo-600/10",
    borderColor: "border-purple-500/30",
    website: "https://tcm-sec.com/",
  },
  {
    provider: "THE SECOPS GROUP",
    courses: [
      "Pursuing CNSP (Certified Network Security Professional)",
      "Pursuing Certified AppSec Practitioner (CAP)",
    ],
    icon: Lock,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-gradient-to-r from-pink-500/10 to-rose-600/10",
    borderColor: "border-pink-500/30",
    website: "https://www.thesecopsgroup.com/",
  },
  {
    provider: "NPTEL",
    courses: ["Enhancing Soft Skills and Personality"],
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-gradient-to-r from-blue-500/10 to-cyan-600/10",
    borderColor: "border-blue-500/30",
    website: "https://nptel.ac.in/",
  },
]

export default function CertificationsPage() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className={`section-page ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
      <Link href="/" className="back-to-home">
        <ArrowLeft size={24} />
      </Link>

      <div className="section-page-header">
        <h1 className="section-page-title">Certifications & Courses</h1>
        <p className="section-page-subtitle">Professional qualifications and continuous learning journey</p>
      </div>

      <div className="section-page-content">
        <div
          className="relative w-full h-64 mb-12 rounded-xl overflow-hidden shadow-xl"
          style={{
            backgroundImage: "url('/images/certification-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-fuchsia-800/60 to-indigo-900/70 flex items-center justify-center">
            <div className="text-center">
              <Award className="w-16 h-16 text-white mb-4 mx-auto" />
              <h2 className="text-3xl font-bold text-white">Professional Development</h2>
              <p className="text-white/80 mt-2">Continuous learning to stay at the cutting edge of cybersecurity</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${cert.bgColor} border ${cert.borderColor} rounded-xl shadow-xl overflow-hidden ${isDark ? "bg-gray-800/50" : "bg-white/90"}`}
            >
              <div className={`p-6 bg-gradient-to-r ${cert.color} flex items-center justify-between`}>
                <div className="flex items-center">
                  <cert.icon className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">{cert.provider}</h3>
                </div>
                {cert.website && (
                  <a
                    href={cert.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              <div className="p-6">
                <div className="space-y-3">
                  {cert.courses.map((course, courseIndex) => (
                    <motion.div
                      key={courseIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + courseIndex * 0.05 }}
                      className={`p-3 rounded-lg flex items-center gap-3 ${
                        isDark ? "bg-gray-700/50 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"
                      } transition-colors`}
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${cert.color}`}></div>
                      <p className={isDark ? "text-gray-200" : "text-gray-800"}>{course}</p>
                    </motion.div>
                  ))}
                </div>
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
            Continuous Learning
          </h3>
          <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            In the rapidly evolving field of cybersecurity, I believe in continuous learning and skill development.
            Beyond formal certifications, I regularly participate in CTF competitions, follow security blogs, and engage
            with the cybersecurity community to stay updated with the latest threats, vulnerabilities, and defense
            techniques.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

