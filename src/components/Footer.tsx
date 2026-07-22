"use client"

import { Container } from "./Container"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function Footer() {
  return (
    <footer className="py-24 mt-auto border-t border-border bg-background">
      <Container>
        <div className="max-w-[560px] mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-3 text-foreground">Subscribe to David&apos;s Newsletter</h2>
          <p className="text-muted-foreground mb-8 text-[16px]">Get the latest articles, tutorials, and updates delivered to your inbox.</p>
          
          <div className="w-full flex items-center bg-card rounded-full border border-border p-1.5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] focus-within:ring-2 focus-within:ring-primary/50 transition-all">
            <Input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 bg-transparent border-0 focus-visible:ring-0 shadow-none px-4 text-[16px]"
            />
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-6 font-medium h-10">
              Subscribe
            </Button>
          </div>
          
          <div className="mt-16 flex items-center justify-between w-full text-[13px] text-muted-foreground font-medium">
            <span>&copy; {new Date().getFullYear()} David Rio.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
              <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-foreground transition-colors">X</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
