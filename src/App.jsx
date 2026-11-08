import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
