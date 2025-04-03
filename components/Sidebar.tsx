import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/your-github", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/your-linkedin", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rishikeshkhot26@gmail.com", label: "Email" },
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-gray-800 text-white">
      <div className="flex h-full flex-col justify-between p-4">
        <div>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold">Rishikesh Khot</h2>
            <p className="text-sm text-gray-400">Cybersecurity Expert</p>
          </div>
          <nav>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block rounded px-4 py-2 hover:bg-gray-700 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex justify-center space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label={link.label}
            >
              <link.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}

