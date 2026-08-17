import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
          Where I've worked
        </p>
        <h2 className="mb-10 text-2xl font-bold text-gray-900 sm:text-3xl">Experience</h2>

        <div className="relative max-w-3xl">
          <div className="absolute top-2 bottom-2 left-0 w-0.5 bg-blue-200" />
          <div className="flex flex-col gap-12">
            {experience.map((job) => (
              <div key={job.company} className="relative pl-10">
                <span className="absolute top-1.5 left-0 h-3 w-3 -translate-x-[5px] rounded-full border-2 border-white bg-blue-600 ring-2 ring-blue-600" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {job.role} · <span className="text-blue-600">{job.company}</span>
                  </h3>
                  <span className="text-sm text-gray-500">
                    {job.start} – {job.end}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{job.location}</p>
                <p className="mt-2 text-sm text-gray-600">{job.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
