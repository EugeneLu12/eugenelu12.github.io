import { skillGroups } from '../data/skills'
import SkillCard from './SkillCard'

export default function Skills() {
  const skills = skillGroups.flatMap((group) => group.items)

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-orange">
        What I work with
      </p>
      <h2 className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">Skills</h2>
      <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  )
}
