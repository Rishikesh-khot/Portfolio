"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Hero from "./Hero"
import About from "./About"
import Experience from "./Experience"
import Projects from "./Projects"
import Achievements from "./Achievements"
import Contact from "./Contact"
import ResumeButton from "./ResumeButton"
import CyberTerminal from "./CyberTerminal"

const sections = ["Home", "About", "Experience", "Projects", "Achievements", "Contact"]

export default function Content({
  activeSection,
}: {
  activeSection: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <motion.div
      className="relative z-10 w-full"
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ResumeButton />

      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/cyber-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY,
        }}
      />

      <div className="w-full">
        {sections.map((section, index) => (
          <motion.section
            key={section}
            id={section.toLowerCase()}
            className="min-h-screen py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {section === "Home" && <Hero />}
            {section === "About" && <About />}
            {section === "Experience" && <Experience />}
            {section === "Projects" && <Projects />}
            {section === "Achievements" && <Achievements />}
            {section === "Contact" && <Contact />}
          </motion.section>
        ))}

        <CyberTerminal />
      </div>
    </motion.div>
  )
}

