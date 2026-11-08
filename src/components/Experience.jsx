import { experience } from '../data/experience'
import useInView from '../hooks/useInView'

// The career rendered as a transit line: newest stop at the top, dashed above it
// because the line is still running.
export default function Experience() {
  const [ref, drawn] = useInView({ threshold: 0.25 })

  return (
    <section id="experience" className="border-t border-rule bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Experience</h2>

        <ol ref={ref} className="relative mt-12 max-w-3xl pt-10">
          {/* Ongoing segment above the current stop */}
          <span
            aria-hidden="true"
            className="absolute top-0 left-[0.375rem] h-12 w-2 bg-[repeating-linear-gradient(to_bottom,var(--color-line)_0_8px,transparent_8px_14px)]"
          />
          {experience.map((job, i) => (
            <li
              key={job.company}
              className={`relative grid grid-cols-[1.25rem_1fr] gap-x-6 pb-14 transition-opacity duration-500 last:pb-0 motion-reduce:transition-none sm:gap-x-10 ${
                drawn ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: drawn ? `${i * 450}ms` : '0ms' }}
            >
              {i < experience.length - 1 && (
                // Segment from this stop to the next, drawn in sequence on first view
                <span
                  aria-hidden="true"
                  className={`absolute top-4 -bottom-2 left-[0.375rem] w-2 origin-top bg-line transition-transform duration-500 ease-[cubic-bezier(.6,0,.2,1)] motion-reduce:transition-none ${
                    drawn ? 'scale-y-100' : 'scale-y-0'
                  }`}
                  style={{ transitionDelay: drawn ? `${300 + i * 450}ms` : '0ms' }}
                />
              )}
              <span
                aria-hidden="true"
                className={`station relative mt-1 ${job.end === 'Present' ? 'bg-line!' : ''}`}
              />
              <div>
                <h3 className="text-2xl leading-tight font-extrabold tracking-tight">
                  {job.company}
                </h3>
                <p className="mt-1 font-semibold">
                  {job.role}
                  <span className="font-normal text-muted">, {job.location}</span>
                </p>
                <p className="mt-0.5 text-[0.9375rem] text-muted">
                  {job.start} to {job.end}
                </p>
                <p className="mt-3 max-w-[38rem]">{job.summary}</p>
                {job.highlights?.length > 0 && (
                  <>
                    <h4 className="mt-5 text-[0.9375rem] font-semibold">Highlights</h4>
                    <ul className="mt-2 max-w-[38rem] list-disc space-y-1.5 pl-5 text-muted marker:text-line">
                      {job.highlights.map((item) => (
                        <li key={item} className="pl-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
