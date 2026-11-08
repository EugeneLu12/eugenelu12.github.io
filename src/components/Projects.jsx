import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="border-t border-rule">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Projects</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} index={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
