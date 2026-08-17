import { FaGithub } from 'react-icons/fa6'

export default function ProjectCard({ title, description, tags, link, repo, image }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border-2 border-blue-300 bg-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg">
      {image && <img src={image} alt={`${title} screenshot`} className="w-full h-auto" />}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>
        {(link || repo) && (
          <div className="mt-auto flex items-center gap-4 text-sm font-semibold">
            {link && (
              <a href={link} className="text-blue-600 hover:text-blue-700">
                Live demo →
              </a>
            )}
            {repo && (
              <a
                href={repo}
                aria-label="View source on GitHub"
                className="text-gray-700 hover:text-gray-900"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
