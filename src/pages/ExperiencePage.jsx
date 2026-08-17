import { experience } from '../data/experience'

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-orange">
        Where I've worked
      </p>
      <h1 className="mb-16 text-2xl font-bold text-gray-900 sm:text-3xl">Experience</h1>

      <div className="relative">
        <div className="absolute top-1 bottom-1 left-0 w-0.5 bg-brand-green" />
        <div className="flex flex-col gap-12">
          {experience.map((job) => (
            <div key={job.company} className="relative pl-10">
              <span className="absolute top-1.5 left-0 h-3 w-3 -translate-x-[5px] rounded-full bg-brand-orange" />
              <span className="absolute top-2.5 left-0 h-0.5 w-8 bg-brand-green" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h2 className="text-lg font-semibold text-gray-900">
                  {job.role} · <span className="text-brand-green">{job.company}</span>
                </h2>
                <span className="text-sm text-gray-500">
                  {job.start} – {job.end}
                </span>
              </div>
              <p className="text-sm text-gray-500">{job.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
