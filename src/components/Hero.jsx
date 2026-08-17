const scrollTo = (id) => (e) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="bg-brand-green">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24">
        <h1 className="text-5xl font-bold text-white sm:text-7xl">Eugene Lu</h1>
        <p className="max-w-2xl text-lg text-white/90">
          Nice to meet you, I'm a software engineer based in Toronto. I currently work at Instacart
          where I build the tooling and infrastructure used to deliver your groceries.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            onClick={scrollTo('projects')}
            className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-brand-green hover:bg-gray-100"
          >
            View my work
          </a>
          <a
            href="#contact"
            onClick={scrollTo('contact')}
            className="rounded-md bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-orange-dark"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
