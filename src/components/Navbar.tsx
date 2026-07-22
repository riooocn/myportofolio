"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Briefcase, Mail, Moon, Sun, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/contact", label: "Contact", icon: Mail },
]

export default function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [time, setTime] = React.useState("")

  React.useEffect(() => {
    setMounted(true)
    const updateClock = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }
    updateClock()
    const timer = setInterval(updateClock, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Top persistent chrome (hidden on mobile) */}
      <div className="fixed top-4 left-6 z-40 hidden md:flex items-center text-[13px] font-medium text-muted-foreground tracking-wide">
        Asia/Jakarta
      </div>
      <div className="fixed top-4 right-6 z-40 hidden md:flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground tracking-wide">
        <Clock className="h-3.5 w-3.5" />
        {time}
      </div>

      {/* Floating Pill Nav */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="flex items-center gap-1 rounded-full border border-border bg-card p-2 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_rgba(15,23,42,0.06)]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            const Icon = link.icon
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center gap-2 rounded-full transition-colors ${
                  isActive 
                    ? "text-foreground p-1.5" 
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground px-3 py-1.5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full border border-border bg-background shadow-sm"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center">
                  <Icon className="h-4 w-4" strokeWidth={isActive ? 2 : 1.5} />
                </span>
                {!isActive && <span className="relative z-10 text-sm font-medium">{link.label}</span>}
              </Link>
            )
          })}
          
          <div className="ml-1 pl-2 border-l border-border flex items-center">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center justify-center rounded-full p-1.5 text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-4 w-4" strokeWidth={1.5} />
              ) : (
                <Moon className="h-4 w-4" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}
