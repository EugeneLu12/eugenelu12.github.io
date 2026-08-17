import { socials } from '../data/socials'

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-ink-light">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Eugene Lu. All rights reserved.
        </p>
        <div className="flex gap-5">
          {socials.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              className="text-white/60 hover:text-brand-orange"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
