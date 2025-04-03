"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Code, Terminal, Shield } from "lucide-react"

const projects = [
  {
    title: "VAYU LINUX",
    description:
      "A profile-switchable Arch-based Linux distribution tailored for hacking, gaming, and development. Features custom scripts and optimizations for enhanced performance and flexibility.",
    tags: ["Linux", "Bash", "System Administration"],
    icon: Terminal,
    github: "https://github.com/yourusername/vayu-linux",
    demo: "https://vayulinux.org",
  },
  {
    title: "Advanced Log Analyzer Tool",
    description:
      "Python-based tool for enhanced log analysis and security monitoring. Utilizes machine learning algorithms to detect anomalies and potential security threats in system logs.",
    tags: ["Python", "Machine Learning", "Security"],
    icon: Code,
    github: "https://github.com/yourusername/log-analyzer",
  },
  {
    title: "CTF Challenge Platform",
    description:
      "A web-based platform for hosting and participating in Capture The Flag (CTF) challenges. Includes real-time scoring, team management, and dynamic challenge deployment.",
    tags: ["React", "Node.js", "Docker"],
    icon: Shield,
    github: "https://github.com/yourusername/ctf-platform",
    demo: "https://ctf.yourdomain.com",
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title" data-content="PROJECTS">
        PROJECTS
      </h2>

      <div className="cyber-grid max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="cyber-card h-full flex flex-col"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-[#25283B]/10 text-[#25283B] mr-3">
                <project.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#25283B]">{project.title}</h3>
            </div>

            <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="bg-[#25283B]/10 text-[#25283B] px-2 py-1 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-start space-x-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#25283B] transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#25283B] transition-colors duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

