export default function SkillCard({ name, icon: Icon, color }) {
  return (
    <li className="flex items-center gap-3 border-b border-rule py-2.5">
      <Icon className="h-[1.125rem] w-[1.125rem] shrink-0" style={{ color }} aria-hidden="true" />
      <span>{name}</span>
    </li>
  )
}
