import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="bg-brand-orange">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-10 text-2xl font-bold text-white sm:text-3xl">Projects</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
