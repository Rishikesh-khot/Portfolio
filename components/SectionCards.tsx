"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  Shield,
  Code,
  Network,
  Terminal,
  Globe,
  Lock,
  Github,
  Award,
  Star,
  Trophy,
  BadgeCheck,
  Send,
  Mail,
  Linkedin,
  Download,
  BookOpen,
  Briefcase,
  Medal,
  MessageSquare,
  Youtube,
  GraduationCap,
  BadgeIcon as Certificate,
  ExternalLink,
} from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

// About section content
const aboutContent = `
Hey there! I'm Rishikesh Khot, a cybersecurity enthusiast, ethical hacker, and final-year B.Tech student specializing in offensive security, red teaming, and threat mitigation. From cracking CTF challenges to diving deep into OSINT and Active Directory exploitation, I thrive on solving complex security puzzles.

I've interned with top organizations, uncovering vulnerabilities, analyzing forensic evidence, and building security tools like my Log Analyzer, enhancing multi-OS security monitoring. My love for hacking extends beyond work—I actively share CTF walkthroughs on Medium and engage in industry discussions to stay ahead of evolving cyber threats.

Beyond cybersecurity, I've built Vāyu Linux, a profile-switchable Arch-based distro tailored for hacking, gaming, and development. Whether I'm exploiting web applications, optimizing Linux environments, or researching cutting-edge security techniques, my goal remains the same—breaking things ethically to make them stronger.
`

// Skills section content
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

// Experience section content
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
  },
]

// Certifications section content
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
  },
  {
    provider: "NPTEL",
    courses: ["Enhancing Soft Skills and Personality"],
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-gradient-to-r from-blue-500/10 to-cyan-600/10",
    borderColor: "border-blue-500/30",
  },
]

// Projects section content
const projects = [
  {
    title: "VAYU LINUX",
    description:
      "Vāyu Linux is a profile-manageable Arch-based OS that enables seamless switching between Default, Gaming, and Hacking environments. Using Btrfs subvolumes, it ensures isolated configurations and data for stability and efficiency. With KDE Plasma on Wayland, it delivers a secure, high-performance experience for professionals, gamers, and security enthusiasts.",
    tags: ["BTRFS", "KDE", "Wayland", "Pacman"],
    icon: Terminal,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/archlinux-logo-1TSd2Glj6P9APsqNgwqTii9V2FdifW.png",
    github: "https://github.com/Vayu-Linux/vayu-archiso",
    youtube: "https://www.youtube.com/watch?v=W-EP_Sw9WA4",
  },
  {
    title: "Advanced Log Analyzer Tool",
    description:
      "A powerful tool that scans log files to detect security threats like data breaches, malware, unauthorized access, phishing, and APTs using pattern-based detection. It provides automated analysis, detailed reports, visual insights, and supports custom regex patterns for enhanced threat monitoring. Built with Tkinter & Matplotlib, it simplifies log analysis for security professionals.",
    tags: ["Python", "Tkinter", "Matplotlib", "Regex"],
    icon: Code,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/log.jpg-kvcuIwuwsNaJmn9jYQJ6EhC3WdDjoT.png",
    github: "https://github.com/Rishikesh-khot/Log_analyzer",
  },
]

// Achievements section content
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
    title: "92nd Rank - Hackfinity CTF",
    description:
      "Our team secured 92nd position out of 4200+ teams in the Hackfinity CTF hosted by TryHackMe, demonstrating exceptional problem-solving and hacking skills in a highly competitive environment.",
    icon: Award,
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

export default function SectionCards() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [resumeUnlocked, setResumeUnlocked] = useState(false)
  const [resumeProgress, setResumeProgress] = useState(0)
  const [resumeDecrypting, setResumeDecrypting] = useState(false)
  const [resumeDecrypted, setResumeDecrypted] = useState(false)
  const [resumeHovered, setResumeHovered] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const { theme } = useTheme()

  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const certificationsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const achievementsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Format message for WhatsApp
      const message = `New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`

      // Encode the message for WhatsApp URL
      const encodedMessage = encodeURIComponent(message)

      // Open WhatsApp with the pre-filled message
      window.open(`https://wa.me/917208652120?text=${encodedMessage}`, "_blank")

      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResumeDownload = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    // Create a link element
    const link = document.createElement("a")
    link.href = "/Rishikesh_Khot_Resume.pdf"
    link.download = "Rishikesh_Khot_Resume.pdf"

    // Append to the document, click it, and remove it
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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

  useEffect(() => {
    // Set up section refs for navigation
    const sections = [
      { id: "about", ref: aboutRef },
      { id: "experience", ref: experienceRef },
      { id: "certifications", ref: certificationsRef },
      { id: "projects", ref: projectsRef },
      { id: "achievements", ref: achievementsRef },
      { id: "contact", ref: contactRef },
    ]

    sections.forEach((section) => {
      if (section.ref.current) {
        section.ref.current.id = section.id
      }
    })

    // Check if we need to open a specific section based on URL hash
    const hash = window.location.hash
    if (hash) {
      const sectionName = hash.replace("#", "")
      if (sectionName === "contact") {
        setTimeout(() => {
          setExpandedCard("contact")
        }, 500)
      }
    }
  }, [])

  const isDark = theme === "dark"

  // Update the card expansion animation for smoother transitions
  const handleCardClick = (cardName: string) => {
    if (expandedCard !== cardName) {
      // First close any open card with a smooth animation
      if (expandedCard) {
        setExpandedCard(null)
        // Add a small delay before opening the new card for smoother transition
        setTimeout(() => {
          setExpandedCard(cardName)
        }, 300)
      } else {
        setExpandedCard(cardName)
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="card-grid max-w-6xl mx-auto">
        {/* About Card */}
        <div
          ref={aboutRef}
          className={`interactive-card ${expandedCard === "about" ? "expanded" : ""}`}
          onClick={() => handleCardClick("about")}
        >
          <div className="card-image">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-4NHNATDqCdHl3xMatU1DOt1qkOODik.png"
              alt="About"
              className="w-full h-full object-cover card-img-bright"
            />
          </div>
          <div className={`card-overlay ${isDark ? "bg-gray-900/70" : "bg-[#25283B]/70"}`}>
            <BookOpen className="card-icon" />
            <h3 className="card-title">About Me</h3>
            <p className="card-description">Learn about my background and skills</p>
          </div>

          <AnimatePresence>
            {expandedCard === "about" && (
              <motion.div
                className={`card-expanded-content ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className={`expanded-header ${isDark ? "bg-gray-900" : "bg-[#25283B]"}`}>
                  <h3>About Me</h3>
                  <div className="flex items-center gap-4">
                    <Link
                      href="/about"
                      className="text-white hover:text-cyan-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </Link>
                    <button
                      className="close-button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedCard(null)
                      }}
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>
                <div className="expanded-body">
                  <p className={`text-lg leading-relaxed mb-8 ${isDark ? "text-gray-300" : "text-gray-800"}`}>
                    {aboutContent}
                  </p>

                  <h4 className={`text-xl font-semibold mb-6 ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
                    My Skills
                  </h4>

                  <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                      <div key={index} className="skills-category">
                        <h3>{category.title}</h3>
                        <div className="skills-list">
                          {category.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="skill-item">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Resume Decryption Experience */}
                  <div className="resume-container mt-8">
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
                                <Download size={16} className="mr-2" />
                                Download Resume
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Experience Card */}
        <div
          ref={experienceRef}
          className={`interactive-card ${expandedCard === "experience" ? "expanded" : ""}`}
          onClick={() => handleCardClick("experience")}
        >
          <div className="card-image">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-Q5dnWxZydJn1VwVfRJ4WNzEvcG45wY.png"
              alt="Experience"
              className="w-full h-full object-cover card-img-bright"
            />
          </div>
          <div className={`card-overlay ${isDark ? "bg-gray-900/70" : "bg-[#25283B]/70"}`}>
            <Briefcase className="card-icon" />
            <h3 className="card-title">Experience</h3>
            <p className="card-description">My professional journey</p>
          </div>

          <AnimatePresence>
            {expandedCard === "experience" && (
              <motion.div
                className={`card-expanded-content ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className={`expanded-header ${isDark ? "bg-gray-900" : "bg-[#25283B]"}`}>
                  <h3>Professional Experience</h3>
                  <div className="flex items-center gap-4">
                    <Link
                      href="/experience"
                      className="text-white hover:text-cyan-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </Link>
                    <button
                      className="close-button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedCard(null)
                      }}
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>
                <div className="expanded-body">
                  <div className="space-y-8">
                    {experiences.map((exp, index) => (
                      <div key={index} className="cyber-timeline-item">
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-3 rounded-full ${isDark ? "bg-gray-700 text-cyan-400" : "bg-[#25283B]/10 text-[#25283B]"}`}
                          >
                            <exp.icon size={24} />
                          </div>
                          <div>
                            <h3 className={`text-xl font-semibold ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
                              {exp.title}
                            </h3>
                            <p className={`text-sm mb-2 ${isDark ? "text-gray-400" : "text-[#25283B]/80"}`}>
                              {exp.company} | {exp.location} | {exp.date}
                            </p>
                            <div className="experience-details">
                              {exp.description.map((detail, detailIndex) => (
                                <div key={detailIndex} className="experience-detail-item">
                                  {detail}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Certifications Card */}
        <div
          ref={certificationsRef}
          className={`interactive-card ${expandedCard === "certifications" ? "expanded" : ""}`}
          onClick={() => handleCardClick("certifications")}
        >
          <div className="card-image">
            <img
              src="/images/certification-bg.png"
              alt="Certifications"
              className="w-full h-full object-cover card-img-bright"
            />
          </div>
          <div className={`card-overlay ${isDark ? "bg-gray-900/70" : "bg-[#25283B]/70"}`}>
            <Certificate className="card-icon" />
            <h3 className="card-title">Certifications</h3>
            <p className="card-description">Professional qualifications and courses</p>
          </div>

          <AnimatePresence>
            {expandedCard === "certifications" && (
              <motion.div
                className={`card-expanded-content ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className={`expanded-header ${isDark ? "bg-gray-900" : "bg-[#25283B]"}`}>
                  <h3>Certifications & Courses</h3>
                  <div className="flex items-center gap-4">
                    <Link
                      href="/certifications"
                      className="text-white hover:text-cyan-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </Link>
                    <button
                      className="close-button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedCard(null)
                      }}
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>
                <div className="expanded-body">
                  <div className="certifications-container">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        className={`certification-card ${cert.bgColor} border ${cert.borderColor}`}
                        whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="certification-header">
                          <div className={`certification-icon-container bg-gradient-to-r ${cert.color}`}>
                            <cert.icon size={24} className="certification-icon-svg" />
                          </div>
                          <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-[#25283B]"}`}>
                            {cert.provider}
                          </h3>
                        </div>
                        <div className="certification-courses">
                          {cert.courses.map((course, courseIndex) => (
                            <motion.div
                              key={courseIndex}
                              className={`certification-course ${isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                              whileHover={{
                                x: 10,
                                backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className={`certification-badge bg-gradient-to-r ${cert.color}`}></div>
                              <span>{course}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Projects Card */}
        <div
          ref={projectsRef}
          className={`interactive-card ${expandedCard === "projects" ? "expanded" : ""}`}
          onClick={() => handleCardClick("projects")}
        >
          <div className="card-image">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-hqojsd4F9QBkr5VtNRxdEl6I36iPVC.jpeg"
              alt="Projects"
              className="w-full h-full object-cover card-img-bright"
            />
          </div>
          <div className={`card-overlay ${isDark ? "bg-gray-900/70" : "bg-[#25283B]/70"}`}>
            <Code className="card-icon" />
            <h3 className="card-title">Projects</h3>
            <p className="card-description">Explore my technical work</p>
          </div>

          <AnimatePresence>
            {expandedCard === "projects" && (
              <motion.div
                className={`card-expanded-content ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className={`expanded-header ${isDark ? "bg-gray-900" : "bg-[#25283B]"}`}>
                  <h3>Featured Projects</h3>
                  <div className="flex items-center gap-4">
                    <Link
                      href="/projects"
                      className="text-white hover:text-cyan-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </Link>
                    <button
                      className="close-button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedCard(null)
                      }}
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>
                <div className="expanded-body">
                  <div className="projects-grid">
                    {projects.map((project, index) => (
                      <div key={index} className={`project-card ${isDark ? "bg-gray-700" : "bg-white"}`}>
                        <div className={`project-header flex items-center ${isDark ? "bg-gray-900" : "bg-[#25283B]"}`}>
                          <div className="p-2 rounded-full bg-white/10 text-white mr-3">
                            <project.icon size={20} />
                          </div>
                          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                        </div>
                        <div className="project-content">
                          {project.image && (
                            <div className="project-image">
                              <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full h-auto object-cover"
                              />
                            </div>
                          )}
                          <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>{project.description}</p>

                          <div className="project-tags">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className={`project-tag ${
                                  isDark ? "bg-gray-600 text-cyan-400" : "bg-[#25283B]/10 text-[#25283B]"
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="project-links mt-4">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`project-link ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}
                              aria-label="GitHub Repository"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github size={20} />
                              <span>GitHub</span>
                            </a>
                            {project.youtube && (
                              <a
                                href={project.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`project-link ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}
                                aria-label="YouTube Demo"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Youtube size={20} />
                                <span>YouTube</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Achievements Card */}
        <div
          ref={achievementsRef}
          className={`interactive-card ${expandedCard === "achievements" ? "expanded" : ""}`}
          onClick={() => handleCardClick("achievements")}
        >
          <div className="card-image">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-h1mKyGdav16fOqtqtau1oCSSdgZ0o7.png"
              alt="Achievements"
              className="w-full h-full object-cover card-img-bright"
            />
          </div>
          <div className={`card-overlay ${isDark ? "bg-gray-900/70" : "bg-[#25283B]/70"}`}>
            <Medal className="card-icon" />
            <h3 className="card-title">Achievements</h3>
            <p className="card-description">Awards and recognitions</p>
          </div>

          <AnimatePresence>
            {expandedCard === "achievements" && (
              <motion.div
                className={`card-expanded-content ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className={`expanded-header ${isDark ? "bg-gray-900" : "bg-[#25283B]"}`}>
                  <h3>Awards & Recognition</h3>
                  <div className="flex items-center gap-4">
                    <Link
                      href="/achievements"
                      className="text-white hover:text-cyan-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </Link>
                    <button
                      className="close-button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedCard(null)
                      }}
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>
                <div className="expanded-body">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className={`achievement-card ${isDark ? "bg-gray-700" : "bg-white"}`}>
                        <div
                          className={`achievement-icon ${
                            isDark ? "bg-gray-600 text-cyan-400" : "bg-[#25283B]/10 text-[#25283B]"
                          }`}
                        >
                          <achievement.icon size={28} />
                        </div>
                        <h3 className={`text-lg font-semibold mb-2 ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
                          {achievement.title}
                        </h3>
                        <p className={isDark ? "text-gray-300" : "text-gray-700"}>{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contact Card */}
        <div
          ref={contactRef}
          className={`interactive-card ${expandedCard === "contact" ? "expanded" : ""}`}
          onClick={() => handleCardClick("contact")}
        >
          <div className="card-image">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.1.jpg-DTiS92aKRiXnNHr1ukmhX0LPBKtqJK.png"
              alt="Contact"
              className="w-full h-full object-cover card-img-bright"
            />
          </div>
          <div className={`card-overlay ${isDark ? "bg-gray-900/70" : "bg-[#25283B]/70"}`}>
            <MessageSquare className="card-icon" />
            <h3 className="card-title">Contact</h3>
            <p className="card-description">Get in touch with me</p>
          </div>

          <AnimatePresence>
            {expandedCard === "contact" && (
              <motion.div
                className={`card-expanded-content ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className={`expanded-header ${isDark ? "bg-gray-900" : "bg-[#25283B]"}`}>
                  <h3>Get In Touch</h3>
                  <div className="flex items-center gap-4">
                    <Link
                      href="/contact"
                      className="text-white hover:text-cyan-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </Link>
                    <button
                      className="close-button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedCard(null)
                      }}
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>
                <div className="expanded-body">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <form onSubmit={handleSubmit} className={`contact-form ${isDark ? "bg-gray-700" : "bg-white"}`}>
                        <div className="form-group">
                          <label htmlFor="name" className={`form-label ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`form-input ${
                              isDark
                                ? "bg-gray-800 border-gray-600 text-white"
                                : "bg-white border-[#25283B]/20 text-gray-800"
                            }`}
                            required
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>

                        <div className="form-group">
                          <label
                            htmlFor="email"
                            className={`form-label ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`form-input ${
                              isDark
                                ? "bg-gray-800 border-gray-600 text-white"
                                : "bg-white border-[#25283B]/20 text-gray-800"
                            }`}
                            required
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>

                        <div className="form-group">
                          <label
                            htmlFor="message"
                            className={`form-label ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`form-textarea ${
                              isDark
                                ? "bg-gray-800 border-gray-600 text-white"
                                : "bg-white border-[#25283B]/20 text-gray-800"
                            }`}
                            required
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>

                        <button
                          type="submit"
                          className={`flex items-center justify-center w-full py-2 px-4 rounded-md ${
                            isDark
                              ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                              : "bg-[#25283B] hover:bg-[#38384f] text-white"
                          }`}
                          onClick={(e) => e.stopPropagation()}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              <Send className="mr-2" size={18} />
                              Send Message
                            </>
                          )}
                        </button>

                        {submitSuccess && (
                          <p className="mt-4 text-green-500 text-center">
                            Message sent successfully! I'll get back to you soon.
                          </p>
                        )}
                      </form>
                    </div>

                    <div>
                      <div className={`contact-info ${isDark ? "bg-gray-700" : "bg-white"}`}>
                        <h3 className={`text-xl font-semibold mb-6 ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
                          Contact Information
                        </h3>

                        <div className="contact-item">
                          <div
                            className={`contact-icon ${
                              isDark ? "bg-gray-600 text-cyan-400" : "bg-[#25283B]/10 text-[#25283B]"
                            }`}
                          >
                            <Mail size={20} />
                          </div>
                          <div className={`contact-text ${isDark ? "text-white" : "text-[#25283B]"}`}>
                            <a href="mailto:rishikeshkhot26@gmail.com" onClick={(e) => e.stopPropagation()}>
                              rishikeshkhot26@gmail.com
                            </a>
                          </div>
                        </div>

                        <div className="contact-item">
                          <div
                            className={`contact-icon ${
                              isDark ? "bg-gray-600 text-cyan-400" : "bg-[#25283B]/10 text-[#25283B]"
                            }`}
                          >
                            <Github size={20} />
                          </div>
                          <div className={`contact-text ${isDark ? "text-white" : "text-[#25283B]"}`}>
                            <a
                              href="https://github.com/Rishikesh-khot/"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              github.com/Rishikesh-khot
                            </a>
                          </div>
                        </div>

                        <div className="contact-item">
                          <div
                            className={`contact-icon ${
                              isDark ? "bg-gray-600 text-cyan-400" : "bg-[#25283B]/10 text-[#25283B]"
                            }`}
                          >
                            <Linkedin size={20} />
                          </div>
                          <div className={`contact-text ${isDark ? "text-white" : "text-[#25283B]"}`}>
                            <a
                              href="https://www.linkedin.com/in/rishikeshkhot/"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              linkedin.com/in/rishikeshkhot
                            </a>
                          </div>
                        </div>

                        <div className={`mt-8 p-4 rounded-lg ${isDark ? "bg-gray-800" : "bg-[#25283B]/10"}`}>
                          <p className={`font-mono text-sm ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
                            <span className={isDark ? "text-gray-400" : "text-gray-600"}>$</span> ssh
                            user@rishikeshkhot.com
                            <br />
                            <span className={isDark ? "text-gray-400" : "text-gray-600"}>Password:</span> ********
                            <br />
                            <span className={isDark ? "text-gray-400" : "text-gray-600"}>
                              Connection established...
                            </span>
                            <br />
                            Welcome to my digital fortress! How can I help you today?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

