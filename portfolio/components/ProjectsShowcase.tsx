'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'E-commerce Frontend',
    image: '/placeholder.svg?height=300&width=400',
    link: '#'
  },
  {
    title: 'Portfolio Website',
    image: '/placeholder.svg?height=300&width=400',
    link: '#'
  },
  {
    title: 'Blog Platform',
    image: '/placeholder.svg?height=300&width=400',
    link: '#'
  }
]

export default function ProjectsShowcase() {
  return (
    <motion.section 
      className="py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Featured Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Image src={project.image} alt={project.title} width={400} height={300} className="object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <a href={project.link} className="text-blue-300 hover:text-blue-100 transition-colors">View Project</a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

