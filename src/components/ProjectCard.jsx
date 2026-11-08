import { FaGithub } from 'react-icons/fa6'
import useInView from '../hooks/useInView'

// Subtle scroll reveal: short fade with a 12px rise, ease-out, played once.
const reveal = (shown) =>
  `transition-[opacity,translate] duration-[400ms] ease-out motion-reduce:transition-none ${
    shown ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
  }`

// The whole card opens the repo: the GitHub link stretches over the card,
// so there is one focusable element and no nested links.
export default function ProjectCard({ title, description, tags, link, repo, image, index = 0 }) {
  const [ref, shown] = useInView({ rootMargin: '0px 0px -10% 0px' })
  const href = repo || link

  return (
    <div
      ref={ref}
      className={`flex ${reveal(shown)}`}
      style={{ transitionDelay: shown ? `${index * 50}ms` : '0ms' }}
    >
      <article
        className={`group relative flex flex-1 flex-col overflow-hidden rounded-xl border border-rule bg-white transition-[border-color,box-shadow] duration-200 ${
          href
            ? 'hover:border-line hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.35)] has-[a:focus-visible]:outline-3 has-[a:focus-visible]:outline-offset-3 has-[a:focus-visible]:outline-ink'
            : ''
        }`}
      >
        {image && (
          <div className="aspect-[16/9] overflow-hidden border-b border-rule bg-paper">
            <img
              src={image.src}
              alt={`${title} screenshot`}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-left-top"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="text-2xl font-extrabold tracking-tight transition-colors group-hover:text-line">
            {title}
          </h3>
          <p className="mt-2 text-muted">{description}</p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Built with">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded border border-rule bg-paper px-2.5 py-0.5 text-[0.875rem]"
              >
                {tag}
              </li>
            ))}
          </ul>

          {href && (
            <div className="mt-auto pt-6">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold focus-visible:outline-none after:absolute after:inset-0 after:content-['']"
              >
                {repo && <FaGithub className="h-5 w-5" aria-hidden="true" />}
                {repo ? 'View on GitHub' : 'Open live demo'}
              </a>
            </div>
          )}
        </div>
      </article>
    </div>
  )
}
