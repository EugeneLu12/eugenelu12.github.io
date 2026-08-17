const sectionLinks = [
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
]

export default function Navbar() {
  const goToSection = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-end px-6 py-4">
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          {sectionLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={goToSection(link.id)} className="hover:text-gray-900">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
