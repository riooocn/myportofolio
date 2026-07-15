import Image from "next/image"
import { ExternalLink, Code2 } from "lucide-react"
import { Card, CardContent, CardFooter } from "./ui/card"
import { buttonVariants } from "./ui/button"

export interface ProjectType {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

interface ProjectCardProps {
  project: ProjectType
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full group hover:shadow-lg transition-all border-border/50">
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="flex-1 p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-4">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "sm", className: "flex-1 gap-2" })}>
            <Code2 className="h-4 w-4" />
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "sm", className: "flex-1 gap-2" })}>
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        )}
      </CardFooter>
    </Card>
  )
}
