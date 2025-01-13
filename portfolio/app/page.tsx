import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

