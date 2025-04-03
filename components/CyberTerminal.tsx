"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const commands = {
  help: "Available commands: help, about, skills, contact, projects, achievements, clear, ls, cat",
  about: "Rishikesh Khot: Cybersecurity expert, ethical hacker, and CTF enthusiast.",
  skills: "Skills: Penetration Testing, Red Teaming, OSINT, Network Security, Python, Linux",
  contact: "Email: rishikeshkhot26@gmail.com | LinkedIn: linkedin.com/in/your-profile",
  projects: "Key Projects: VAYU LINUX, Advanced Log Analyzer Tool",
  achievements: "Achievements: 3rd in CyberHunt CTF, 36th in Zupee CTF, Top 3% on TryHackMe",
  clear: "CLEAR_COMMAND",
  ls: "about.txt  skills.md  projects/  achievements.log  contact.enc",
  cat: "Use 'cat [filename]' to view file contents",
  "cat about.txt": "Rishikesh Khot: Cybersecurity expert, ethical hacker, and CTF enthusiast.",
  "cat skills.md": "# Skills\n- Penetration Testing\n- Red Teaming\n- OSINT\n- Network Security\n- Python\n- Linux",
  "cat achievements.log": "[SUCCESS] 3rd in CyberHunt CTF\n[SUCCESS] 36th in Zupee CTF\n[SUCCESS] Top 3% on TryHackMe",
  "cat contact.enc":
    "Decrypting secure contact information...\nEmail: rishikeshkhot26@gmail.com\nLinkedIn: linkedin.com/in/your-profile",
}

export default function CyberTerminal() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState<string[]>([])
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    if (trimmedCmd === "") return

    // Add to history
    setHistory((prev) => [cmd, ...prev])
    setHistoryIndex(-1)

    if (trimmedCmd === "clear") {
      setOutput([])
    } else if (trimmedCmd.startsWith("cat ")) {
      const file = trimmedCmd.substring(4)
      const response = commands[trimmedCmd] || `File not found: ${file}`
      setOutput((prev) => [...prev, `$ ${cmd}`, response])
    } else {
      const response = commands[trimmedCmd] || "Command not recognized. Type 'help' for available commands."
      setOutput((prev) => [...prev, `$ ${cmd}`, response])
    }

    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (history.length > 0 && historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(history[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(history[newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    }
  }

  useEffect(() => {
    setOutput(["Welcome to the Cyber Terminal v2.0. Type 'help' for available commands."])
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [output])

  useEffect(() => {
    // Focus the input when the component mounts
    inputRef.current?.focus()

    // Add a click event listener to the terminal to focus the input
    const handleTerminalClick = () => {
      inputRef.current?.focus()
    }

    terminalRef.current?.addEventListener("click", handleTerminalClick)

    return () => {
      terminalRef.current?.removeEventListener("click", handleTerminalClick)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="cyber-card max-w-4xl mx-auto overflow-hidden"
    >
      <div className="flex items-center justify-between mb-2 border-b border-[#25283B]/30 pb-2">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-600">cyber@terminal:~</div>
        <div></div>
      </div>

      <div ref={terminalRef} className="mb-4 h-64 overflow-y-auto font-mono text-sm">
        {output.map((line, index) => (
          <div key={index} className={line.startsWith("$") ? "text-[#25283B]" : "text-green-700"}>
            {line}
          </div>
        ))}
      </div>

      <div className="flex items-center border-t border-[#25283B]/30 pt-2">
        <span className="text-[#25283B] mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent text-[#25283B] flex-grow outline-none font-mono"
          placeholder="Type a command..."
        />
      </div>
    </motion.div>
  )
}

