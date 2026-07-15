"use client"

import { Globe, Link as LinkIcon, Mail, ArrowUp } from "lucide-react"
import { Container } from "./Container"
import { Button, buttonVariants } from "./ui/button"

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t bg-muted/40 py-8 mt-auto">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} David Rio. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={buttonVariants({ variant: "ghost", size: "icon" })}>
              <Globe className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={buttonVariants({ variant: "ghost", size: "icon" })}>
              <LinkIcon className="h-5 w-5" />
            </a>
            <a href="mailto:contact@example.com" aria-label="Email" className={buttonVariants({ variant: "ghost", size: "icon" })}>
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div>
            <Button variant="outline" size="sm" onClick={scrollToTop} className="gap-2">
              <ArrowUp className="h-4 w-4" />
              Back to Top
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  )
}
