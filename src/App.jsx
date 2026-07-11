import { useState } from 'react'
import useScrollReveal from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompetitiveProgramming from './components/CompetitiveProgramming'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [menuOpen, setMenuOpen] = useState(false)
  useScrollReveal()

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar theme={theme} toggleTheme={toggleTheme} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <div className="divider" />
      <CompetitiveProgramming />
      <div className="divider" />
      <Education />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Certificates />
      <div className="divider" />
      <Contact />
      <Footer />
    </>
  )
}
