"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useRef } from "react"
import { AnimatedFlipText } from "@/components/ui/animated-flip-text"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Black overlay opacity: 0 at start, 1 at end of hero section scroll
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1])

  // Content scale and opacity: shrink and fade as we scroll
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // Background parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section
      ref={containerRef}
      className="relative h-[120vh] w-full overflow-hidden"
    >
      {/* Sticky Background Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ y: bgY }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80')",
            }}
          />
          {/* Initial Dark Overlay */}
          <div className="absolute inset-0 bg-primary/40" />
        </motion.div>

        {/* Dynamic Black Overlay that appears on scroll */}
        <motion.div
          className="absolute inset-0 z-20 bg-black pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />

        {/* Content */}
        <motion.div
          style={{ scale: contentScale, opacity: contentOpacity }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance"
          >
            Transform Your Space Into Art
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-2xl text-lg text-white/90 sm:text-xl md:text-2xl"
          >
            Award-Winning Interior Design Solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-secondary px-8 py-4 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:bg-secondary-light"
              >
                <AnimatedFlipText text="Explore Our Work" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                <AnimatedFlipText text="Start Your Project" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ opacity: contentOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
