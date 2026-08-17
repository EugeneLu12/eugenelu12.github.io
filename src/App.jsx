import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExperiencePage from './pages/ExperiencePage'

export default function App() {
  return (
    <HashRouter>
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<ExperiencePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
