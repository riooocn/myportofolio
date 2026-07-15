import { Card, CardContent } from "./ui/card"

interface SkillCardProps {
  name: string
  icon?: React.ReactNode
}

export function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-md transition-all hover:border-primary/50">
      <CardContent className="p-6 flex flex-col items-center justify-center gap-3">
        {icon && (
          <div className="text-muted-foreground group-hover:text-primary transition-colors">
            {icon}
          </div>
        )}
        <h3 className="font-medium text-center">{name}</h3>
      </CardContent>
    </Card>
  )
}
