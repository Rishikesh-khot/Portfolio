const skillCategories = [
  {
    title: "Tech",
    skills: [
      "Red Teaming",
      "VAPT",
      "OSINT",
      "Active Directory Exploitation",
      "Network Security",
      "OWASP",
      "CTF Challenges",
    ],
  },
  {
    title: "Code",
    skills: ["Python", "HTML", "CSS", "Shell Scripting"],
  },
  {
    title: "Tools",
    skills: [
      "Burpsuite",
      "Nessus",
      "Wireshark",
      "Nmap",
      "Metasploit",
      "Maltego",
      "Nikto",
      "OpenVPN",
      "Hydra",
      "Hashcat",
    ],
  },
  {
    title: "Linux",
    skills: ["Debian", "Fedora", "Arch Linux", "Raspberry Pi OS", "System Automation"],
  },
  {
    title: "Networking",
    skills: ["OSI", "TCP/IP", "DHCP", "VPNs", "802.1x", "NAT", "Firewalls"],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Problem-solving", "Teamwork", "Adaptability", "Attention to Detail"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">{category.title}</h3>
              <ul className="list-disc list-inside text-gray-300">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

