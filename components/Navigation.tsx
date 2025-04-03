"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme } = useTheme()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50)

        // Throttle the active section detection to improve performance
        if (!window.scrollThrottleTimeout) {
          window.scrollThrottleTimeout = setTimeout(() => {
            // Update active section based on scroll position
            const sections = ["home", "about", "experience", "projects", "achievements", "contact"]
            const scrollPosition = window.scrollY + window.innerHeight / 3

            for (const section of sections) {
              const element = document.getElementById(section)
              if (
                element &&
                scrollPosition >= element.offsetTop &&
                scrollPosition < element.offsetTop + element.offsetHeight
              ) {
                if (activeSection !== section) {
                  setActiveSection(section)
                }
                break
              }
            }
            delete window.scrollThrottleTimeout
          }, 100) // Throttle to 100ms
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (window.scrollThrottleTimeout) {
        clearTimeout(window.scrollThrottleTimeout)
      }
    }
  }, [activeSection])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)

    if (sectionId === "contact") {
      // Set the hash to trigger the contact section to open
      window.location.hash = "contact"
      // Find the contact section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        // Trigger click on the contact card after scrolling
        setTimeout(() => {
          const contactCard = document.querySelector('[id="contact"]')
          if (contactCard) {
            const clickEvent = new MouseEvent("click", {
              view: window,
              bubbles: true,
              cancelable: true,
            })
            contactCard.dispatchEvent(clickEvent)
          }
        }, 800)
      }
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }

    setIsMobileMenuOpen(false)
  }

  const handleBlogClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push("/blogs")
  }

  const isDark = theme === "dark"

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isDark
              ? "bg-gray-900/90 backdrop-blur-md py-2"
              : "bg-[#D2D2D2]/90 backdrop-blur-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-2xl font-bold font-['ICA_Rubrik'] ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}
            >
              RK
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-sm transition-colors duration-300 ${
                  activeSection === "home"
                    ? isDark
                      ? "text-cyan-400 font-semibold"
                      : "text-[#25283B] font-semibold"
                    : isDark
                      ? "text-gray-400 hover:text-cyan-400"
                      : "text-gray-600 hover:text-[#25283B]"
                }`}
              >
                Home
                {activeSection === "home" && (
                  <motion.div
                    layoutId="activeSection"
                    className={`h-0.5 mt-1 ${isDark ? "bg-cyan-400" : "bg-[#25283B]"}`}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className={`text-sm transition-colors duration-300 ${
                  activeSection === "about"
                    ? isDark
                      ? "text-cyan-400 font-semibold"
                      : "text-[#25283B] font-semibold"
                    : isDark
                      ? "text-gray-400 hover:text-cyan-400"
                      : "text-gray-600 hover:text-[#25283B]"
                }`}
              >
                About
                {activeSection === "about" && (
                  <motion.div
                    layoutId="activeSection"
                    className={`h-0.5 mt-1 ${isDark ? "bg-cyan-400" : "bg-[#25283B]"}`}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className={`text-sm transition-colors duration-300 ${
                  activeSection === "contact"
                    ? isDark
                      ? "text-cyan-400 font-semibold"
                      : "text-[#25283B] font-semibold"
                    : isDark
                      ? "text-gray-400 hover:text-cyan-400"
                      : "text-gray-600 hover:text-[#25283B]"
                }`}
              >
                Contact
                {activeSection === "contact" && (
                  <motion.div
                    layoutId="activeSection"
                    className={`h-0.5 mt-1 ${isDark ? "bg-cyan-400" : "bg-[#25283B]"}`}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>

              <a
                href="/blogs"
                onClick={handleBlogClick}
                className={`text-sm ${isDark ? "text-gray-400 hover:text-cyan-400" : "text-gray-600 hover:text-[#25283B]"} transition-colors duration-300`}
              >
                Blogs
              </a>
            </div>

            <button
              className={`md:hidden ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-50 p-4 md:hidden ${isDark ? "bg-gray-900" : "bg-[#D2D2D2]"}`}
          >
            <div className="flex justify-end">
              <button
                className={isDark ? "text-cyan-400" : "text-[#25283B]"}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center h-full">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <button
                  onClick={() => scrollToSection("home")}
                  className={`text-xl py-4 block ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}
                >
                  Home
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <button
                  onClick={() => scrollToSection("about")}
                  className={`text-xl py-4 block ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}
                >
                  About
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`text-xl py-4 block ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}
                >
                  Contact
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <a
                  href="/blogs"
                  onClick={handleBlogClick}
                  className={`text-xl py-4 block ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}
                >
                  Blogs
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

