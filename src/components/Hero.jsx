import { socials } from '../data/socials'

const linkedin = socials.find((s) => s.name === 'LinkedIn')?.url

// The route is a map of this page: each stop is a link to a section.
const stops = [
  { label: 'Experience', note: "Where I've worked", href: '#experience' },
  { label: 'Projects', note: "What I've built", href: '#projects' },
  { label: 'Skills', note: 'What I use', href: '#skills' },
].map((stop, i, all) => ({ ...stop, at: (i / (all.length - 1)) * 76 })) // last stop at 76%

// Load sequence timing (ms): name, then the line draws, stops appear as it passes them.
const LINE_START = 250
const LINE_MS = 700
const stopDelay = (at) => LINE_START + LINE_MS * (at / 76)
const TEXT_START = LINE_START + LINE_MS - 100

const motion = 'motion-reduce:animate-none'
const delay = (ms) => ({ animationDelay: `${ms}ms` })

export default function Hero() {
  return (
    // Fills the screen below the navbar (and its 1px border); content sits centred.
    <section id="top" className="flex min-h-[calc(100svh-var(--spacing-nav)-1px)] flex-col">
      <div className="mx-auto my-auto w-full max-w-5xl px-6 py-16">
        <h1
          className={`-ml-[0.04em] animate-rise text-[3.5rem] leading-[0.95] font-extrabold tracking-[-0.035em] sm:text-[6rem] ${motion}`}
        >
          Eugene Lu
        </h1>

        {/* The route: bleeds in from the left edge, through each section, and keeps going. */}
        <div className="relative mt-10 mb-28 sm:mt-12">
          <div className="relative h-2" aria-hidden="true">
            <span
              className={`absolute inset-y-0 right-full -left-[100vw] animate-rise bg-line ${motion}`}
            />
            <span
              className={`absolute inset-y-0 left-0 w-[calc(76%+0.625rem)] origin-left animate-draw bg-line ${motion}`}
              style={delay(LINE_START)}
            />
            <span
              className={`absolute inset-y-0 right-0 left-[calc(76%+0.625rem)] animate-rise bg-[repeating-linear-gradient(to_right,var(--color-line)_0_10px,transparent_10px_18px)] ${motion}`}
              style={delay(LINE_START + LINE_MS)}
            />
          </div>

          {/* Stops are offset by half a marker so the first marker's edge, and every label, lines up with the text. */}
          <nav aria-label="Page sections">
            <ol className="absolute inset-x-0 top-1">
              {stops.map((stop) => (
                <li
                  key={stop.href}
                  className="absolute top-0 -translate-y-1/2"
                  style={{ left: `calc(${stop.at}% + 0.625rem)` }}
                >
                  <a href={stop.href} className="group -m-3 block rounded p-3">
                    <span
                      aria-hidden="true"
                      className={`station -ml-2.5 animate-pop transition-colors group-hover:bg-line! ${motion}`}
                      style={delay(stopDelay(stop.at))}
                    />
                    <span
                      className={`absolute top-8 -left-2.5 animate-rise whitespace-nowrap ${motion}`}
                      style={delay(stopDelay(stop.at) + 80)}
                    >
                      <span className="block leading-tight font-extrabold underline decoration-transparent decoration-2 underline-offset-4 transition-colors group-hover:decoration-line">
                        {stop.label}
                      </span>
                      <span className="block text-[0.9375rem] text-muted">{stop.note}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <p
          className={`max-w-[36rem] animate-rise text-xl leading-relaxed sm:text-[1.375rem] ${motion}`}
          style={delay(TEXT_START)}
        >
          Nice to meet you! I'm a software engineer based in Toronto. I currently work at Instacart,
          where I'm building the system and infrastructure used to provide you a seemless grocery
          experience at scale.
        </p>

        <div
          className={`mt-10 flex animate-rise flex-wrap items-center gap-x-8 gap-y-4 ${motion}`}
          style={delay(TEXT_START + 80)}
        >
          <a
            href="#projects"
            className="rounded-md bg-line px-5 py-3 font-semibold text-white transition-colors hover:bg-line-strong"
          >
            View my work
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="link-underline font-semibold"
          >
            Get in touch on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
