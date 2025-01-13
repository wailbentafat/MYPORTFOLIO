'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <motion.section 
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl flex flex-col md:flex-row items-center gap-8">
        <motion.div
          className="w-64 h-64 rounded-full overflow-hidden"
          whileHover={{ scale: 1.1 }}
        >
          <Image src="/photo.jpg" alt="Wail Bentafat" width={256} height={256} className="object-cover" />
        </motion.div>
        <div className="text-center md:text-left">
          <motion.h2 
            className="text-3xl font-bold mb-4 text-white"
            whileHover={{ scale: 1.1 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Frontend developer with 3 months of experience in React, Next.js, and TypeScript, focused on delivering elegant and efficient web solutions. I'm passionate about creating responsive and user-friendly interfaces that provide great user experiences.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on web development.
          </motion.p>
        </div>
      </div>
    </motion.section>
  )
}

