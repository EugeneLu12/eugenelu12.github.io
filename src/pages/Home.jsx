import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.state])

  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
