import { skillGroups } from '../data/skills'
import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-rule bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Skills</h2>
        <div className="mt-12 grid gap-12 sm:grid-cols-3 sm:gap-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="border-b-4 border-ink pb-2 font-extrabold">{group.category}</h3>
              <ul>
                {group.items.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
