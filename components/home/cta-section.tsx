"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { AnimatedFlipText } from "@/components/ui/animated-flip-text"

export function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 md:py-32"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-primary/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium uppercase tracking-widest text-secondary"
        >
          Start Your Journey
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl text-balance"
        >
          Ready to Transform Your Space?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80"
        >
          Let&apos;s bring your vision to life. Schedule a consultation with our
          design team and take the first step towards your dream space.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-4 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:bg-secondary-light"
            >
              <AnimatedFlipText text="Start Your Project" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/30 px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              <AnimatedFlipText text="View Our Work" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
