"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Container } from "./Container"

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const item = {
    hidden: { opacity: 0, filter: "blur(12px)", y: 10 },
    show: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32">
      <Container className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center w-full"
        >
          {/* Chip Badge */}
          <motion.div variants={item} className="mb-6">
            <div className="inline-flex items-center rounded-full bg-[var(--accent-soft)] border border-primary/30 h-8 px-3.5 gap-2">
              <span className="text-[13px] font-bold text-foreground">David Rio</span>
              <div className="w-[1px] h-3 bg-primary/40"></div>
              <span className="text-[13px] text-primary">Full Stack Developer</span>
            </div>
          </motion.div>

          {/* Giant H1 */}
          <motion.h1 
            variants={item}
            className="text-5xl md:text-[68px] font-bold leading-[1.05] tracking-[-0.02em] text-foreground mb-6"
          >
            Building bridges between <br className="hidden md:block" /> design and code.
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-muted-foreground font-normal mb-8 max-w-2xl"
          >
            I build responsive websites and modern web applications using JavaScript, React, Next.js, Laravel, and modern web technologies.
          </motion.p>

          {/* Avatar Chip */}
          <motion.div variants={item} className="mb-16">
            <Link href="/about" className="group inline-flex items-center p-1 pr-4 rounded-full border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(15,23,42,0.08)] transition-all duration-300">
              <div className="relative w-7 h-7 rounded-full overflow-hidden mr-3">
                <Image src="/photo.png" alt="David Rio" fill className="object-cover" />
              </div>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">About – David Rio</span>
            </Link>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  )
}
