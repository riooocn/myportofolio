"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

export function Hero() {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 relative w-40 h-40 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl"
      >
        <Image
          src="/photo.png"
          alt="David Rio"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
      >
        Hi, I&apos;m <span className="text-primary">David Rio Christian</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl md:text-2xl font-medium text-muted-foreground mb-6"
      >
        Full Stack Developer | Web Developer | Data Scientist
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-2xl text-base md:text-lg text-muted-foreground mb-10"
      >
        I build responsive websites and modern web applications using JavaScript, React, Next.js, Laravel, and modern web technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link href="/projects" className={buttonVariants({ size: "lg", className: "rounded-full shadow-lg hover:shadow-primary/25 transition-all" })}>
          View Projects
        </Link>
        <Link href="/contact" className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full" })}>
          Contact Me
        </Link>
      </motion.div>
    </section>
  )
}
