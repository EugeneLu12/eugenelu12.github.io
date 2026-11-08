import { socials } from '../data/socials'

const linkedin = socials.find((s) => s.name === 'LinkedIn')?.url

export default function Hero() {
  return (
    // Fills the screen below the navbar (and its 1px border); content sits centred.
    <section id="top" className="flex min-h-[calc(100svh-var(--spacing-nav)-1px)] flex-col">
      <div className="mx-auto my-auto w-full max-w-5xl px-6 py-16">
        <h1 className="-ml-[0.04em] text-[3.5rem] leading-[0.95] font-extrabold tracking-[-0.035em] sm:text-[6rem]">
          Eugene Lu
        </h1>

        {/* The route line: bleeds off the left edge and stops at a station. */}
        <div className="relative mt-7 mb-10 flex h-2 w-56 items-center sm:w-80" aria-hidden="true">
          <span className="absolute inset-y-0 right-2 -left-[100vw] bg-line" />
          <span className="station absolute right-0 translate-x-1/2" />
        </div>

        <p className="max-w-[36rem] text-xl leading-relaxed sm:text-[1.375rem]">
          Nice to meet you! I'm a software engineer based in Toronto. I currently work at Instacart,
          where I'm building the system and infrastructure used to provide you a seemless grocery
          experience at scale.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
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
