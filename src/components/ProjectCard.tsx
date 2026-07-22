import Image from "next/image"
import { ExternalLink, Code2 } from "lucide-react"

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
    <div className="flex flex-col group w-full">
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_rgba(15,23,42,0.06)] mb-6 border border-border">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex-1 flex flex-col px-1">
        <h3 className="text-[24px] font-semibold tracking-tight text-foreground mb-3">{project.title}</h3>
        <p className="text-muted-foreground text-[16px] leading-relaxed mb-5 font-normal">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-[13px] font-medium px-3 py-1 rounded-full bg-secondary text-foreground border border-border">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-6 mt-auto">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4 decoration-2 transition-all">
              <Code2 className="h-4 w-4" />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4 decoration-2 transition-all">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
