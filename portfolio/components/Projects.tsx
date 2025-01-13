'use client'

import { motion } from 'framer-motion'

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: 'E-commerce Frontend',
    description: 'An e-commerce frontend built with React and Next.js, featuring product listings, cart functionality, and checkout process.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/ecommerce-frontend'
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with React and Tailwind CSS, showcasing my projects and skills.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://github.com/yourusername/portfolio-website'
  },
  {
    title: 'Weather App',
    description: 'A weather application that provides real-time weather information for any location, using a third-party weather API.',
    tech: ['React', 'TypeScript', 'API Integration'],
    link: 'https://github.com/yourusername/weather-app'
  },
  {
    title: 'Task Management System',
    description: 'A full-stack task management application with user authentication, task creation, assignment, and tracking features.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/task-management-system'
  },
  {
    title: 'Blog Platform',
    description: 'A blog platform allowing users to create, read, update, and delete blog posts, with a comment system and user profiles.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/yourusername/blog-platform'
  }
]

export default function Projects() {
  return (
    <motion.section 
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-3xl font-bold mb-12 text-white"
        whileHover={{ scale: 1.1 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold mb-2 text-blue-300">{project.title}</h3>
            <p className="mb-4 text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-blue-900 bg-opacity-50 px-2 py-1 rounded text-sm text-blue-200">
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-300 hover:text-blue-100 transition-colors"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

