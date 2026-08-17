import { Link, useLocation, useNavigate } from 'react-router-dom'

const sectionLinks = [
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const goToSection = (id) => (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-semibold text-brand-green">
          Eugene Lu
        </Link>
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          {sectionLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={goToSection(link.id)} className="hover:text-brand-orange">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link to="/experience" className="hover:text-brand-orange">
              Experience
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
