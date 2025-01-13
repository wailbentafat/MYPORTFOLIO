'use client'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header 
      className="p-5 flex justify-between items-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-4xl font-bold text-white"
        whileHover={{ scale: 1.1 }}
      >
        Wail Bentafat
      </motion.h1>
      <nav>
        <ul className="flex space-x-4">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <a href={`#${item.toLowerCase()}`} className="text-white hover:text-gray-200">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

