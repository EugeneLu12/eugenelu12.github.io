export default function SkillCard({ name, icon: Icon, color }) {
  return (
    <div className="flex flex-col items-center gap-1.5 rounded-lg border border-gray-200 p-3 text-center hover:border-brand-green">
      <Icon className="h-5 w-5" style={{ color }} />
      <span className="text-xs font-medium text-gray-800">{name}</span>
    </div>
  )
}
