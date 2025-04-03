"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Loading from "@/components/Loading"
import Navigation from "@/components/Navigation"
import SectionCards from "@/components/SectionCards"
import Footer from "@/components/Footer"
import SocialLinks from "@/components/SocialLinks"
import ThemeToggle from "@/components/ThemeToggle"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Shorter loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Optimized scroll animation observer
  useEffect(() => {
    if (isLoading) return

    // Use Intersection Observer API for better scroll performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    // Defer non-critical work to improve initial load and scrolling
    const deferredObserve = () => {
      const animatedElements = document.querySelectorAll(
        ".fade-in, .fade-in-left, .fade-in-right, .scale-in, .stagger-item",
      )

      // Observe in batches to avoid layout thrashing
      const batchSize = 10
      let index = 0

      function observeBatch() {
        const end = Math.min(index + batchSize, animatedElements.length)
        for (let i = index; i < end; i++) {
          observer.observe(animatedElements[i])
        }
        index = end

        if (index < animatedElements.length) {
          requestAnimationFrame(observeBatch)
        }
      }

      requestAnimationFrame(observeBatch)
    }

    // Use requestIdleCallback if available, otherwise setTimeout
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      // @ts-ignore
      window.requestIdleCallback(deferredObserve)
    } else {
      setTimeout(deferredObserve, 200)
    }

    return () => {
      observer.disconnect()
    }
  }, [isLoading])

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <div className="relative min-h-screen dark:bg-gray-900">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loading key="loading" />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Navigation />
              <ThemeToggle />

              <main>
                <section id="home" className="banner">
                  <div className="slider" style={{ "--quantity": "7" } as any}>
                    <div className="item" style={{ "--position": "1" } as any}>
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-4NHNATDqCdHl3xMatU1DOt1qkOODik.png"
                        alt="Cybersecurity Cube"
                      />
                    </div>
                    <div className="item" style={{ "--position": "2" } as any}>
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-Q5dnWxZydJn1VwVfRJ4WNzEvcG45wY.png"
                        alt="Cybersecurity Workspace"
                      />
                    </div>
                    <div className="item" style={{ "--position": "3" } as any}>
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-hqojsd4F9QBkr5VtNRxdEl6I36iPVC.jpeg"
                        alt="Security Lock"
                      />
                    </div>
                    <div className="item" style={{ "--position": "4" } as any}>
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-QA9pvwVIlRQUDLJBzv2iiOKhzVxkaW.png"
                        alt="Digital Security Cube"
                      />
                    </div>
                    <div className="item" style={{ "--position": "5" } as any}>
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.1.jpg-DTiS92aKRiXnNHr1ukmhX0LPBKtqJK.png"
                        alt="Cybersecurity Shield"
                      />
                    </div>
                    <div className="item" style={{ "--position": "6" } as any}>
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-EMFXozsufXjV2BcolqOPy4cId96Kyc.png"
                        alt="Hacker Workspace"
                      />
                    </div>
                    <div className="item" style={{ "--position": "7" } as any}>
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-m0LyxC31TOOSRajDVkDJICNXZNpfgy.png"
                        alt="Security Shield"
                      />
                    </div>
                  </div>
                  <div className="content">
                    <div className="title-container">
                      <h1 className="cyber-text">
                        <span className="solid-part">CYB</span>
                        <span className="outline-part">ER</span>
                      </h1>
                      <h1 className="cyber-text security-title">
                        <span className="solid-part">SECU</span>
                        <span className="outline-part">RITY</span>
                      </h1>
                    </div>
                    <div className="author-info">
                      <h2>Rishikesh Khot</h2>
                      <p className="role">Cybersecurity Professional</p>
                      <p className="tagline">Red Teaming | CTF Player | Penetration Tester</p>
                    </div>
                    <div className="model">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/model-2y347XCNHFvPymL0L9sSG9KNhTEpLx.png"
                        alt="Cybersecurity Model"
                        className="center-image"
                      />
                    </div>
                  </div>
                </section>

                <SectionCards />

                <SocialLinks />

                <Footer />
              </main>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}

