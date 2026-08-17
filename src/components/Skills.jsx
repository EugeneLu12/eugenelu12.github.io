import { useState } from 'react'
import { skillGroups } from '../data/skills'
import SkillCard from './SkillCard'

const categories = ['All', ...skillGroups.map((group) => group.category)]

export default function Skills() {
  const [active, setActive] = useState('All')

  const skills =
    active === 'All'
      ? skillGroups.flatMap((group) => group.items)
      : skillGroups.find((group) => group.category === active)?.items ?? []

  return (
    <section id="skills" className="bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
          What I work with
        </p>
        <h2 className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">Skills</h2>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active === category
                  ? 'bg-blue-600 text-white'
                  : 'border border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
