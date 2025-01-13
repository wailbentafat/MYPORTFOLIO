'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

interface ContactLink {
  href: string;
  icon: React.ElementType;
  label: string;
}

const contactLinks: ContactLink[] = [
  { href: "https://github.com/yourusername", icon: FaGithub, label: "GitHub" },
  { href: "https://linkedin.com/in/yourusername", icon: FaLinkedin, label: "LinkedIn" },
  { href: "mailto:your.email@example.com", icon: FaEnvelope, label: "Email" },
]

export default function Contact() {
  return (
    <motion.section 
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-3xl font-bold mb-12 text-white"
        whileHover={{ scale: 1.1 }}
      >
        Contact
      </motion.h2>
      <div className="flex space-x-6">
        {contactLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-white text-4xl"
          >
            <link.icon />
            <span className="sr-only">{link.label}</span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}

