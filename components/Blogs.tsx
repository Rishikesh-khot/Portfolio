"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Link from "next/link"

const blogs = [
  {
    title: "Cracking the Code: A Deep Dive into Buffer Overflow Exploits",
    description: "Explore the intricacies of buffer overflow vulnerabilities and learn how to exploit them ethically.",
    date: "2023-05-15",
    readTime: "10 min read",
    link: "/blog/buffer-overflow-exploits",
  },
  {
    title: "Mastering OSINT: Advanced Techniques for Cybersecurity Professionals",
    description:
      "Discover powerful Open Source Intelligence (OSINT) methods to enhance your cybersecurity investigations.",
    date: "2023-06-02",
    readTime: "15 min read",
    link: "/blog/advanced-osint-techniques",
  },
  {
    title: "Securing the Cloud: Best Practices for AWS Infrastructure",
    description:
      "Learn essential strategies to protect your AWS cloud infrastructure from common vulnerabilities and attacks.",
    date: "2023-06-20",
    readTime: "12 min read",
    link: "/blog/aws-security-best-practices",
  },
]

export default function Blogs() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl relative z-10"
      >
        <Link
          href="/"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Portfolio
        </Link>
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">Cybersecurity Insights</h2>
        <div className="grid gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={blog.link} className="block">
                <h3 className="text-2xl font-semibold text-cyan-300 mb-2 hover:text-cyan-200 transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-300 mb-4">{blog.description}</p>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{blog.date}</span>
                  <Clock size={16} className="mr-2" />
                  <span>{blog.readTime}</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

