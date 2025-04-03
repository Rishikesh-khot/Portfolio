"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { ArrowLeft, Github, Code, Terminal, Youtube } from "lucide-react"
import Link from "next/link"

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
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Advanced Log Analyzer Tool",
    description:
      "A powerful tool that scans log files to detect security threats like data breaches, malware, unauthorized access, phishing, and APTs using pattern-based detection. It provides automated analysis, detailed reports, visual insights, and supports custom regex patterns for enhanced threat monitoring. Built with Tkinter & Matplotlib, it simplifies log analysis for security professionals.",
    tags: ["Python", "Tkinter", "Matplotlib", "Regex"],
    icon: Code,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/log.jpg-kvcuIwuwsNaJmn9jYQJ6EhC3WdDjoT.png",
    github: "https://github.com/Rishikesh-khot/Log_analyzer",
    color: "from-purple-500 to-purple-600",
  },
]

export default function ProjectsPage() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className={`section-page ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
      <Link href="/" className="back-to-home">
        <ArrowLeft size={24} />
      </Link>

      <div className="section-page-header">
        <h1 className="section-page-title">Projects</h1>
        <p className="section-page-subtitle">Explore my technical work and open-source contributions</p>
      </div>

      <div className="section-page-content">
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl shadow-xl overflow-hidden ${isDark ? "bg-gray-800" : "bg-white"}`}
            >
              <div className={`p-6 bg-gradient-to-r ${project.color} flex items-center`}>
                <project.icon className="w-8 h-8 text-white mr-3" />
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    {project.image && (
                      <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            isDark ? "bg-gray-700 text-cyan-400" : "bg-gray-200 text-[#25283B]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                          isDark
                            ? "bg-gray-700 text-white hover:bg-gray-600"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        } transition-colors`}
                      >
                        <Github size={18} />
                        <span>GitHub</span>
                      </a>

                      {project.youtube && (
                        <a
                          href={project.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                            isDark ? "bg-red-700 text-white hover:bg-red-600" : "bg-red-500 text-white hover:bg-red-600"
                          } transition-colors`}
                        >
                          <Youtube size={18} />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className={`text-xl font-semibold mb-4 ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
                      Project Overview
                    </h4>
                    <p className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      {project.description}
                    </p>

                    {project.title === "VAYU LINUX" && (
                      <div className={`mt-6 p-4 rounded-lg ${isDark ? "bg-gray-700" : "bg-gray-100"}`}>
                        <h5 className={`text-lg font-semibold mb-2 ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
                          Key Features
                        </h5>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div
                              className={`mt-1.5 w-2 h-2 rounded-full ${isDark ? "bg-cyan-400" : "bg-[#25283B]"} flex-shrink-0`}
                            ></div>
                            <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                              Profile switching between Default, Gaming, and Hacking environments
                            </p>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`mt-1.5 w-2 h-2 rounded-full ${isDark ? "bg-cyan-400" : "bg-[#25283B]"} flex-shrink-0`}
                            ></div>
                            <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                              BTRFS subvolumes for isolated configurations and data
                            </p>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`mt-1.5 w-2 h-2 rounded-full ${isDark ? "bg-cyan-400" : "bg-[#25283B]"} flex-shrink-0`}
                            ></div>
                            <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                              KDE Plasma on Wayland for a secure, high-performance desktop experience
                            </p>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`mt-1.5 w-2 h-2 rounded-full ${isDark ? "bg-cyan-400" : "bg-[#25283B]"} flex-shrink-0`}
                            ></div>
                            <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                              Customized for professionals, gamers, and security enthusiasts
                            </p>
                          </li>
                        </ul>
                      </div>
                    )}

                    {project.title === "Advanced Log Analyzer Tool" && (
                      <div className={`mt-6 p-4 rounded-lg ${isDark ? "bg-gray-700" : "bg-gray-100"}`}>
                        <h5 className={`text-lg font-semibold mb-2 ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
                          Key Features
                        </h5>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div
                              className={`mt-1.5 w-2 h-2 rounded-full ${isDark ? "bg-cyan-400" : "bg-[#25283B]"} flex-shrink-0`}
                            ></div>
                            <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                              Pattern-based detection for security threats
                            </p>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`mt-1.5 w-2 h-2 rounded-full ${isDark ? "bg-cyan-400" : "bg-[#25283B]"} flex-shrink-0`}
                            ></div>
                            <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                              Automated analysis and detailed reporting
                            </p>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`mt-1.5 w-2 h-2 rounded-full ${isDark ? "bg-cyan-400" : "bg-[#25283B]"} flex-shrink-0`}
                            ></div>
                            <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                              Visual insights with Matplotlib integration
                            </p>
                          </li>
                          <li className="flex items-start gap-2">
                            <div
                              className={`mt-1.5 w-2 h-2 rounded-full ${isDark ? "bg-cyan-400" : "bg-[#25283B]"} flex-shrink-0`}
                            ></div>
                            <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                              Custom regex pattern support for enhanced threat detection
                            </p>
                          </li>
                        </ul>
                      </div>
                    )}
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

