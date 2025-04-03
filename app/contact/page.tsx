"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { ArrowLeft, Mail, Github, Linkedin, MessageSquare, Send } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

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

  return (
    <div className={`section-page ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
      <Link href="/" className="back-to-home">
        <ArrowLeft size={24} />
      </Link>

      <div className="section-page-header">
        <h1 className="section-page-title">Get In Touch</h1>
        <p className="section-page-subtitle">Have a question or want to work together? Reach out to me!</p>
      </div>

      <div className="section-page-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`p-8 rounded-xl shadow-xl ${isDark ? "bg-gray-800" : "bg-white"}`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
              <MessageSquare className="inline-block mr-2 mb-1" size={24} />
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block mb-2 font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white focus:border-cyan-400"
                      : "bg-gray-50 border-gray-300 text-gray-900 focus:border-[#25283B]"
                  } focus:ring-2 focus:outline-none`}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white focus:border-cyan-400"
                      : "bg-gray-50 border-gray-300 text-gray-900 focus:border-[#25283B]"
                  } focus:ring-2 focus:outline-none`}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block mb-2 font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full p-3 rounded-lg border ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white focus:border-cyan-400"
                      : "bg-gray-50 border-gray-300 text-gray-900 focus:border-[#25283B]"
                  } focus:ring-2 focus:outline-none`}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg flex items-center justify-center ${
                  isDark ? "bg-cyan-600 hover:bg-cyan-700 text-white" : "bg-[#25283B] hover:bg-[#38384f] text-white"
                } transition-colors font-medium`}
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
                <div className="mt-4 p-3 bg-green-100 border border-green-200 text-green-700 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`p-8 rounded-xl shadow-xl ${isDark ? "bg-gray-800" : "bg-white"}`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${isDark ? "bg-gray-700" : "bg-gray-100"} mr-4`}>
                  <Mail className={isDark ? "text-cyan-400" : "text-[#25283B]"} size={24} />
                </div>
                <div>
                  <h3 className={`text-lg font-medium mb-1 ${isDark ? "text-white" : "text-gray-800"}`}>Email</h3>
                  <a
                    href="mailto:rishikeshkhot26@gmail.com"
                    className={`${isDark ? "text-gray-300 hover:text-cyan-400" : "text-gray-600 hover:text-[#25283B]"} transition-colors`}
                  >
                    rishikeshkhot26@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className={`p-3 rounded-full ${isDark ? "bg-gray-700" : "bg-gray-100"} mr-4`}>
                  <Github className={isDark ? "text-cyan-400" : "text-[#25283B]"} size={24} />
                </div>
                <div>
                  <h3 className={`text-lg font-medium mb-1 ${isDark ? "text-white" : "text-gray-800"}`}>GitHub</h3>
                  <a
                    href="https://github.com/Rishikesh-khot/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${isDark ? "text-gray-300 hover:text-cyan-400" : "text-gray-600 hover:text-[#25283B]"} transition-colors`}
                  >
                    github.com/Rishikesh-khot
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className={`p-3 rounded-full ${isDark ? "bg-gray-700" : "bg-gray-100"} mr-4`}>
                  <Linkedin className={isDark ? "text-cyan-400" : "text-[#25283B]"} size={24} />
                </div>
                <div>
                  <h3 className={`text-lg font-medium mb-1 ${isDark ? "text-white" : "text-gray-800"}`}>LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/rishikeshkhot/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${isDark ? "text-gray-300 hover:text-cyan-400" : "text-gray-600 hover:text-[#25283B]"} transition-colors`}
                  >
                    linkedin.com/in/rishikeshkhot
                  </a>
                </div>
              </div>
            </div>

            <div className={`mt-8 p-6 rounded-lg ${isDark ? "bg-gray-700" : "bg-gray-100"}`}>
              <h3 className={`text-lg font-medium mb-3 ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
                Response Time
              </h3>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                I typically respond to messages within 24-48 hours. For urgent inquiries, please mention it in your
                message.
              </p>
            </div>

            <div
              className={`mt-6 p-4 rounded-lg border ${isDark ? "bg-gray-900/50 border-gray-700" : "bg-white border-gray-200"}`}
            >
              <p className={`font-mono text-sm ${isDark ? "text-cyan-400" : "text-[#25283B]"}`}>
                <span className={isDark ? "text-gray-400" : "text-gray-600"}>$</span> ssh user@rishikeshkhot.com
                <br />
                <span className={isDark ? "text-gray-400" : "text-gray-600"}>Password:</span> ********
                <br />
                <span className={isDark ? "text-gray-400" : "text-gray-600"}>Connection established...</span>
                <br />
                Welcome to my digital fortress! How can I help you today?
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

