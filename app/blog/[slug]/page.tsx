"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const blogs = [
  {
    slug: "buffer-overflow-exploits",
    title: "Cracking the Code: A Deep Dive into Buffer Overflow Exploits",
    description: "Explore the intricacies of buffer overflow vulnerabilities and learn how to exploit them ethically.",
    date: "2023-05-15",
    readTime: "10 min read",
    tags: ["Buffer Overflow", "Exploit Development", "Ethical Hacking"],
    content: `
      # Cracking the Code: A Deep Dive into Buffer Overflow Exploits

      Buffer overflow vulnerabilities have been a cornerstone of exploit development for decades. In this comprehensive guide, we'll explore how these vulnerabilities work at a low level, examining memory layout, stack operations, and exploitation techniques.

      ## Understanding the Basics

      At its core, a buffer overflow occurs when a program writes data beyond the allocated memory buffer. This happens because many programming languages, particularly C and C++, don't automatically check boundaries when writing to memory locations.

      Consider this simple C code:

      \`\`\`c
      void vulnerable_function(char *input) {
          char buffer[64];
          strcpy(buffer, input); // No bounds checking!
      }
      \`\`\`

      If the input string is longer than 64 bytes, it will overflow the buffer and overwrite adjacent memory, potentially including the return address stored on the stack.

      ## Stack Memory Organization

      To understand buffer overflows, we need to understand how the stack works:

      1. When a function is called, a "stack frame" is created
      2. The stack frame contains:
         - The function's parameters
         - The return address (where to go after the function completes)
         - Local variables (including our buffer)
      3. The stack grows downward in memory (from higher to lower addresses)

      ## Exploiting Buffer Overflows

      The basic steps to exploit a buffer overflow are:

      1. **Identify the vulnerability**: Find a program that accepts input without proper bounds checking
      2. **Determine the buffer size**: Figure out how many bytes you need to write before you reach the return address
      3. **Craft your payload**: Create an input that includes:
         - Enough bytes to fill the buffer
         - The address of your shellcode (to overwrite the return address)
         - Your shellcode (the malicious code you want to execute)
      4. **Deliver the exploit**: Send your crafted payload to the vulnerable program

      ## Modern Protection Mechanisms

      Over the years, several protection mechanisms have been developed to prevent buffer overflow exploits:

      - **Address Space Layout Randomization (ASLR)**: Randomizes memory addresses to make it harder to predict where your shellcode will be
      - **Data Execution Prevention (DEP)**: Marks memory regions as non-executable to prevent shellcode execution
      - **Stack Canaries**: Places a value before the return address that's checked before the function returns
      - **Bounds Checking**: Modern languages and compilers implement automatic bounds checking

      ## Bypass Techniques

      For each protection, attackers have developed bypass techniques:

      - **ASLR Bypass**: Memory leaks, brute force, or relative addressing
      - **DEP Bypass**: Return-oriented programming (ROP) chains
      - **Stack Canaries**: Information leaks or brute force

      ## Ethical Considerations

      It's crucial to emphasize that buffer overflow exploitation should only be performed:

      - On systems you own or have explicit permission to test
      - In controlled environments like labs or CTF competitions
      - For educational purposes or legitimate security testing

      ## Conclusion

      Buffer overflow vulnerabilities remain relevant today, especially in legacy systems and IoT devices. Understanding how they work is essential for both offensive security professionals and developers who want to write secure code.

      By mastering the concepts in this article, you'll be better equipped to identify, exploit, and most importantly, prevent buffer overflow vulnerabilities in your own systems.
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
    content: `
      # Mastering OSINT: Advanced Techniques for Cybersecurity Professionals

      Open Source Intelligence (OSINT) is a critical skill for modern cybersecurity professionals. This article explores advanced OSINT techniques that go beyond basic Google searches to uncover valuable information for security investigations.

      ## What is OSINT?

      OSINT refers to the collection and analysis of information from publicly available sources. For cybersecurity professionals, OSINT is invaluable for:

      - Threat intelligence gathering
      - Vulnerability assessment
      - Social engineering defense
      - Incident response
      - Digital forensics

      ## Advanced Social Media Reconnaissance

      Social media platforms contain vast amounts of information that can be leveraged for security investigations:

      ### LinkedIn Techniques

      - Use Boolean search operators to find specific employees
      - Analyze company connections to map organizational structures
      - Track job postings to identify technologies in use

      ### Twitter Analysis

      - Use advanced search operators (from:, to:, since:, until:)
      - Analyze hashtags and engagement patterns
      - Leverage tools like Twint for historical data

      ### Instagram and Facebook

      - Geolocation analysis from posted images
      - Relationship mapping through tagged photos
      - Metadata extraction from downloaded images

      ## Domain and IP Intelligence

      Understanding an organization's digital footprint is crucial for security assessments:

      ### Domain Reconnaissance

      - WHOIS history analysis
      - Subdomain enumeration using tools like Sublist3r
      - Certificate transparency logs for discovering subdomains
      - DNS record analysis for infrastructure insights

      ### IP Space Mapping

      - ASN lookup to identify IP ranges
      - Shodan queries for exposed services
      - Historical IP data from passive DNS

      ## Geolocation Tracking and Verification

      Location data can provide critical context in investigations:

      - Reverse image searching for location verification
      - EXIF data analysis from photographs
      - Satellite imagery comparison
      - Street view confirmation of physical locations

      ## Dark Web Monitoring and Analysis

      The dark web often contains leaked data and criminal activities:

      - Tor network navigation strategies
      - Specialized dark web search engines
      - Forum monitoring for data breach information
      - Marketplace analysis for stolen credentials

      ## Corporate Infrastructure Mapping

      Understanding an organization's technology stack helps identify potential vulnerabilities:

      - Technology stack identification through job postings
      - GitHub repository analysis for code insights
      - Cloud infrastructure discovery
      - Third-party service provider identification

      ## Metadata Extraction and Analysis

      Files often contain hidden information in their metadata:

      - Document metadata analysis (author, creation date, software used)
      - Image EXIF data extraction
      - PDF metadata examination
      - Email header analysis

      ## Ethical Considerations

      OSINT practitioners must adhere to ethical guidelines:

      - Respect privacy boundaries
      - Follow legal requirements
      - Document sources and methods
      - Maintain confidentiality of findings
      - Obtain proper authorization before investigations

      ## Conclusion

      Advanced OSINT techniques provide cybersecurity professionals with powerful tools for gathering intelligence, identifying threats, and enhancing security postures. By mastering these methods, you can significantly improve your investigative capabilities while maintaining ethical standards.

      Remember that the most effective OSINT practitioners combine technical tools with critical thinking and analytical skills. The tools may change, but the methodical approach to information gathering and analysis remains constant.
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
    content: `
      # Securing the Cloud: Best Practices for AWS Infrastructure

      As organizations continue to migrate to AWS, securing cloud infrastructure has become a critical priority. This comprehensive guide outlines essential security best practices for AWS environments, focusing on practical implementation strategies.

      ## Identity and Access Management (IAM)

      IAM is the foundation of AWS security:

      - Implement the principle of least privilege
      - Use IAM roles instead of long-term access keys
      - Enable MFA for all users, especially privileged accounts
      - Regularly audit and rotate credentials
      - Implement strong password policies

      ### Example IAM Policy (Least Privilege)

      \`\`\`json
      {
        "Version": "2012-10-17",
        "Statement": [
          {
            "Effect": "Allow",
            "Action": [
              "s3:GetObject",
              "s3:ListBucket"
            ],
            "Resource": [
              "arn:aws:s3:::example-bucket",
              "arn:aws:s3:::example-bucket/*"
            ],
            "Condition": {
              "IpAddress": {
                "aws:SourceIp": "192.0.2.0/24"
              }
            }
          }
        ]
      }
      \`\`\`

      ## Network Security

      Properly configured network controls are essential:

      - Use VPCs with private subnets for sensitive resources
      - Implement security groups as instance-level firewalls
      - Configure Network ACLs for subnet-level security
      - Use AWS PrivateLink for private service access
      - Implement VPN or Direct Connect for secure on-premises connectivity

      ## Data Encryption

      Protect data at rest and in transit:

      - Enable encryption for all storage services (S3, EBS, RDS)
      - Use AWS KMS for key management
      - Implement SSL/TLS for all public endpoints
      - Consider using AWS Certificate Manager for SSL/TLS certificates
      - Enable encryption for data in transit between services

      ## Logging and Monitoring

      Comprehensive visibility is crucial for security:

      - Enable CloudTrail for API activity logging
      - Configure CloudWatch for resource monitoring
      - Set up GuardDuty for threat detection
      - Implement Config for compliance monitoring
      - Use Security Hub to aggregate security findings

      ### CloudTrail Configuration Example

      \`\`\`yaml
      Resources:
        CloudTrail:
          Type: 'AWS::CloudTrail::Trail'
          Properties:
            IsLogging: true
            IsMultiRegionTrail: true
            EnableLogFileValidation: true
            IncludeGlobalServiceEvents: true
            S3BucketName: !Ref CloudTrailBucket
            CloudWatchLogsLogGroupArn: !GetAtt CloudTrailLogGroup.Arn
            CloudWatchLogsRoleArn: !GetAtt CloudTrailRole.Arn
            KMSKeyId: !Ref CloudTrailKMSKey
      \`\`\`

      ## Automated Compliance Checking

      Ensure continuous compliance:

      - Use AWS Config Rules for automated compliance checks
      - Implement Security Hub standards (CIS, PCI DSS, etc.)
      - Set up automated remediation for non-compliant resources
      - Schedule regular compliance reports
      - Integrate with third-party compliance tools if needed

      ## Incident Response

      Prepare for security incidents:

      - Develop an AWS-specific incident response plan
      - Create automation for common incident types
      - Implement forensic-ready logging
      - Practice incident response scenarios
      - Maintain secure baselines for comparison

      ## Serverless Security Considerations

      Serverless architectures require specific security approaches:

      - Implement function-level IAM roles
      - Minimize function permissions
      - Validate all inputs
      - Set appropriate timeouts
      - Scan dependencies for vulnerabilities

      ## Conclusion

      Securing AWS infrastructure requires a comprehensive approach that addresses identity, network, data, and operational security. By implementing these best practices, organizations can significantly reduce their risk exposure while maintaining the agility and scalability benefits of cloud computing.

      Remember that cloud security is a shared responsibility between AWS and the customer. While AWS secures the underlying infrastructure, customers are responsible for securing their data, applications, and access controls within the cloud.

      Regular security assessments, continuous monitoring, and staying updated with AWS security features are essential components of a robust cloud security strategy.
    `,
  },
]

export default function BlogPostPage() {
  const { theme } = useTheme()
  const { slug } = useParams()
  const isDark = theme === "dark"

  const blogPost = blogs.find((blog) => blog.slug === slug)

  if (!blogPost) {
    return (
      <div className={`blog-post-page ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
        <div className="blog-post-content">
          <div className="text-center">
            <h1 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>
              Blog post not found
            </h1>
            <Link
              href="/blogs"
              className={`inline-flex items-center ${isDark ? "text-cyan-400 hover:text-cyan-300" : "text-blue-600 hover:text-blue-800"}`}
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to blogs
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Convert markdown-like content to HTML (simple version)
  const formatContent = (content: string) => {
    let formattedContent = content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\n- (.*)/g, '<li class="ml-6 list-disc">$1</li>')

    // Handle code blocks
    formattedContent = formattedContent.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, language, code) => {
      return `<pre class="bg-gray-800 text-gray-200 p-4 rounded-md my-4 overflow-x-auto"><code>${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`
    })

    // Handle paragraphs (must be after other replacements)
    formattedContent = formattedContent.replace(/^(?!<[hl\d]|<li|<pre)(.+$)/gm, '<p class="my-4">$1</p>')

    // Handle lists
    formattedContent = formattedContent.replace(
      /<li class="ml-6 list-disc">(.*?)<\/li>\n<li class="ml-6 list-disc">/g,
      '<li class="ml-6 list-disc">$1</li><li class="ml-6 list-disc">',
    )
    formattedContent = formattedContent.replace(/(<li class="ml-6 list-disc">.*?<\/li>)+/g, '<ul class="my-4">$&</ul>')

    return formattedContent
  }

  return (
    <div className={`blog-post-page ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
      <Link href="/" className="back-to-home">
        <ArrowLeft size={24} />
      </Link>

      <div className="blog-post-header">
        <Link
          href="/blogs"
          className={`inline-flex items-center ${isDark ? "text-cyan-400 hover:text-cyan-300" : "text-blue-600 hover:text-blue-800"} mb-6`}
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to blogs
        </Link>

        <h1 className={`blog-post-title ${isDark ? "text-white" : "text-gray-800"}`}>{blogPost.title}</h1>

        <div className="blog-post-meta">
          <div className="blog-post-meta-item">
            <Calendar size={18} />
            <span>{blogPost.date}</span>
          </div>
          <div className="blog-post-meta-item">
            <Clock size={18} />
            <span>{blogPost.readTime}</span>
          </div>
        </div>

        <div className="blog-post-tags">
          {blogPost.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm ${
                isDark ? "bg-gray-700 text-cyan-400" : "bg-gray-200 text-gray-800"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`blog-post-content ${isDark ? "text-gray-200" : "text-gray-800"}`}
      >
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: formatContent(blogPost.content) }}
        />
      </motion.div>
    </div>
  )
}

