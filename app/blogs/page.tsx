"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

const blogs = [
  {
    slug: "buffer-overflow-exploits",
    title: "Cracking the Code: A Deep Dive into Buffer Overflow Exploits",
    description: "Explore the intricacies of buffer overflow vulnerabilities and learn how to exploit them ethically.",
    date: "2023-05-15",
    readTime: "10 min read",
    tags: ["Buffer Overflow", "Exploit Development", "Ethical Hacking"],
    link: "/blog/buffer-overflow-exploits",
    content: `
    Buffer overflow vulnerabilities have been a cornerstone of exploit development for decades. In this comprehensive guide, we'll explore how these vulnerabilities work at a low level, examining memory layout, stack operations, and exploitation techniques.

    We'll start by understanding the basics of memory allocation and how programs manage their stack frames. Then, we'll dive into practical examples using C programs to demonstrate how overflowing a buffer can lead to arbitrary code execution.

    Key topics covered:
    - Stack memory organization
    - Function call mechanics
    - Overwriting the return address
    - Shellcode development and execution
    - Modern protection mechanisms (ASLR, DEP, Stack Canaries)
    - Bypass techniques for security controls

    By the end of this article, you'll have a solid understanding of buffer overflow vulnerabilities and the skills to identify and exploit them in controlled environments.
  `,
  },
  {
    slug: "advanced-osint-techniques",
    title: "Mastering OSINT: Advanced Techniques for Cybersecurity Professionals",
    description:
      "Discover powerful Open Source Intelligence (OSINT) methods to enhance your cybersecurity investigations.",
    date: "2023-06-02",
    readTime: "15 min read",
    tags: ["OSINT", "Cybersecurity", "Investigation Techniques"],
    link: "/blog/advanced-osint-techniques",
    content: `
    Open Source Intelligence (OSINT) is a critical skill for modern cybersecurity professionals. This article explores advanced OSINT techniques that go beyond basic Google searches to uncover valuable information for security investigations.

    We'll cover specialized tools and methodologies for:
    - Advanced social media reconnaissance
    - Domain and IP intelligence gathering
    - Geolocation tracking and verification
    - Dark web monitoring and analysis
    - Corporate infrastructure mapping
    - Metadata extraction and analysis

    Each section includes practical examples, tool recommendations, and ethical considerations for responsible intelligence gathering. Whether you're conducting penetration tests, threat hunting, or security research, these OSINT techniques will significantly enhance your capabilities.
  `,
  },
  {
    slug: "aws-security-best-practices",
    title: "Securing the Cloud: Best Practices for AWS Infrastructure",
    description:
      "Learn essential strategies to protect your AWS cloud infrastructure from common vulnerabilities and attacks.",
    date: "2023-06-20",
    readTime: "12 min read",
    tags: ["Cloud Security", "AWS", "Best Practices"],
    link: "/blog/aws-security-best-practices",
    content: `
    As organizations continue to migrate to AWS, securing cloud infrastructure has become a critical priority. This comprehensive guide outlines essential security best practices for AWS environments, focusing on practical implementation strategies.

    Key areas covered:
    - Identity and Access Management (IAM) configuration
    - Network security with VPCs and Security Groups
    - Data encryption at rest and in transit
    - Logging and monitoring with CloudTrail and CloudWatch
    - Automated compliance checking with AWS Config
    - Incident response in cloud environments
    - Serverless security considerations

    Each section provides actionable recommendations, code examples, and configuration guidelines to help you implement a robust security posture for your AWS infrastructure. Whether you're just starting with AWS or looking to enhance existing security controls, this guide will help you protect your cloud resources from common threats and vulnerabilities.
  `,
  },
]

export default function Blogs() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [expandedBlog, setExpandedBlog] = useState<number | null>(null)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same structure to avoid layout shift
    return (
      <div className="min-h-screen blog-page">
        <div className="max-w-4xl mx-auto p-8">
          <div className="h-10 mb-8"></div>
          <div className="h-12 mb-12"></div>
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const isDark = theme === "dark"

  return (
    <div className="min-h-screen blog-page">
      <Link href="/" className="back-to-home">
        <ArrowLeft size={24} />
      </Link>

      <div className="max-w-4xl mx-auto p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:opacity-80 transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl font-bold text-primary mb-12">Cybersecurity Insights</h1>
          <div className="space-y-8">
            {blogs.map((blog, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Subtle glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/20 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

                <div className="relative blog-card">
                  <div
                    className="cursor-pointer p-6"
                    onClick={() => setExpandedBlog(expandedBlog === index ? null : index)}
                  >
                    <h2 className="text-2xl font-semibold blog-title mb-2 hover:opacity-80 transition-colors duration-300">
                      {blog.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{blog.description}</p>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span className="mr-4">{blog.date}</span>
                      <Clock size={16} className="mr-2" />
                      <span>{blog.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="blog-tag flex items-center">
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedBlog === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="mt-2 pt-6 border-t border-gray-200 dark:border-gray-700 px-6 pb-6"
                      >
                        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{blog.content}</p>
                        <div className="mt-4 text-right">
                          <Link
                            href={`/blog/${blog.slug}`}
                            className="text-primary hover:opacity-80 transition-colors duration-300 inline-flex items-center"
                          >
                            Read full article
                            <ExternalLink className="ml-2" size={16} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

