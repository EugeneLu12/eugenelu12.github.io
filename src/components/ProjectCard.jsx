import { FaGithub } from 'react-icons/fa6'
import useInView from '../hooks/useInView'

// Subtle scroll reveal: short fade with a 12px rise, ease-out, played once.
// The image leads and the text follows 50ms behind.
const reveal = (shown) =>
  `transition-[opacity,translate] duration-[400ms] ease-out motion-reduce:transition-none ${
    shown ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
  }`

export default function ProjectCard({ title, description, tags, link, repo, image }) {
  const [ref, shown] = useInView({ rootMargin: '0px 0px -10% 0px' })

  return (
    <article
      ref={ref}
      className="grid items-start gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-12"
    >
      {image && (
        <img
          src={image.src}
          alt={`${title} screenshot`}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className={`h-auto w-full rounded-lg border border-rule bg-white shadow-[0_24px_48px_-24px_rgba(15,23,42,0.3)] ${reveal(shown)}`}
        />
      )}
      <div
        className={`md:pt-2 ${reveal(shown)}`}
        style={{ transitionDelay: shown ? '50ms' : '0ms' }}
      >
        <h3 className="text-2xl font-extrabold tracking-tight sm:text-[1.75rem]">{title}</h3>
        <p className="mt-3 text-muted">{description}</p>

        <p className="mt-6 text-[0.9375rem] font-semibold">Built with</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded border border-rule bg-white px-2.5 py-0.5 text-[0.875rem]"
            >
              {tag}
            </li>
          ))}
        </ul>

        {(link || repo) && (
          <div className="mt-8 flex items-center gap-6 font-semibold">
            {link && (
              <a href={link} className="link-underline">
                Open live demo
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-line"
              >
                <FaGithub className="h-5 w-5" aria-hidden="true" />
                View on GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
