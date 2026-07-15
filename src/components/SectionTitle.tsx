import * as React from "react"
import { cn } from "@/lib/utils"

export function SectionTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <div className="mb-12">
      <h2
        className={cn("text-3xl font-bold tracking-tight sm:text-4xl relative inline-block", className)}
        {...props}
      >
        {children}
        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
      </h2>
    </div>
  )
}
