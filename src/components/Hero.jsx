import { socials } from '../data/socials'

const scrollTo = (id) => (e) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const linkedin = socials.find((s) => s.name === 'LinkedIn')?.url

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24">
        <h1 className="-ml-1 text-5xl font-bold text-gray-900 sm:text-7xl">Eugene Lu</h1>
        <p className="max-w-2xl text-lg text-gray-600">
          Nice to meet you, I'm a software engineer based in{' '}
          <span className="font-semibold text-blue-600">Toronto</span>. I currently work at{' '}
          <span className="font-semibold text-blue-600">Instacart</span> where I build the tooling
          and infrastructure used to deliver your groceries.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            onClick={scrollTo('projects')}
            className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            View my work
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
