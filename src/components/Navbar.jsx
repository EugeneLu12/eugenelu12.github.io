const sectionLinks = [
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
]

export default function Navbar() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-ink px-4 py-2 font-semibold text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur">
        <nav className="mx-auto flex h-nav max-w-5xl items-center justify-between px-6">
          <a href="#top" className="font-extrabold tracking-tight">
            Eugene Lu
          </a>
          <ul className="flex gap-5 text-[0.9375rem] text-muted sm:gap-7">
            {sectionLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="-my-2 inline-block py-2 transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
