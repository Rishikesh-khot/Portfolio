"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Send, Github, Linkedin, Mail, MessageSquare } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title" data-content="CONTACT">
        CONTACT
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="cyber-card"
        >
          <h3 className="text-2xl font-semibold text-[#25283B] mb-6 flex items-center">
            <MessageSquare className="mr-2" size={24} />
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-[#25283B]/10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25283B] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-[#25283B]/10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25283B] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 bg-[#25283B]/10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25283B] focus:border-transparent resize-none"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="cyber-button w-full flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="mr-2" size={18} />
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="cyber-card flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-semibold text-[#25283B] mb-6">Connect With Me</h3>

            <p className="text-gray-700 mb-8">
              Feel free to reach out for collaborations or just a chat about cybersecurity and ethical hacking. I'm
              always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:rishikeshkhot26@gmail.com"
                className="flex items-center text-gray-700 hover:text-[#25283B] transition-colors duration-300"
              >
                <Mail className="mr-3" size={20} />
                rishikeshkhot26@gmail.com
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-[#25283B] transition-colors duration-300"
              >
                <Github className="mr-3" size={20} />
                github.com/yourusername
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-[#25283B] transition-colors duration-300"
              >
                <Linkedin className="mr-3" size={20} />
                linkedin.com/in/yourusername
              </a>
            </div>
          </div>

          <div className="p-4 bg-[#25283B]/10 rounded-lg border border-[#25283B]/30">
            <p className="text-[#25283B] font-mono text-sm">
              <span className="text-gray-600">$</span> ssh user@rishikeshkhot.com
              <br />
              <span className="text-gray-600">Password:</span> ********
              <br />
              <span className="text-gray-600">Connection established...</span>
              <br />
              Welcome to my digital fortress! How can I help you today?
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

