interface SkillCardProps {
  name: string
  icon?: React.ReactNode
}

export function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-alt border border-border shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:bg-surface hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(15,23,42,0.06)] transition-all duration-300 group cursor-default">
      {icon && (
        <div className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0">
          {icon}
        </div>
      )}
      <span className="text-[14px] font-medium text-foreground">{name}</span>
    </div>
  )
}
