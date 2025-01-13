'use client'

import { motion } from 'framer-motion'
import { FaReact, FaJs, FaHtml5, FaCss3, FaGitAlt } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiVercel, SiPostman, SiTypescript } from 'react-icons/si'

interface Skill {
  name: string;
  icon: React.ElementType;
}

const skills: Skill[] = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: FaJs },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3 },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Postman', icon: SiPostman },
]

export default function Skills() {
  return (
    <motion.section 
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-3xl font-bold mb-12 text-white"
        whileHover={{ scale: 1.1 }}
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <skill.icon className="text-5xl mb-2 text-blue-300" />
            <span className="text-white">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

