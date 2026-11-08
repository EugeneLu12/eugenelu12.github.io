import { socials } from '../data/socials'

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-2xl font-extrabold tracking-tight">Eugene Lu</p>
        </div>
        <ul className="flex gap-6">
          {socials.map(({ name, url, icon: Icon }) => (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold hover:text-line-light focus-visible:outline-paper"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
