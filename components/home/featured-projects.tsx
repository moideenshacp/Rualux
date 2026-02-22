"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { projects } from "@/lib/data/projects"
import { AnimatedFlipText } from "@/components/ui/animated-flip-text"

export function FeaturedProjects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isPaused, setIsPaused] = useState(false)
  // Double the projects to create a seamless loop
  const featuredProjects = [...projects.slice(0, 4), ...projects.slice(0, 4)]

  // Fade in the foggy overlap very quickly as user scrolls
  const { scrollYProgress } = useScroll()
  const fogOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  return (
    <section
      ref={ref}
      className="relative z-10 bg-black"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 200px)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 200px)',
      }}
    >
      {/* ── Massive soft foggy overlap (Melt effect) ── */}
      <motion.div
        style={{ opacity: fogOpacity, zIndex: 10 }}
        className="absolute bottom-full left-0 w-full h-[35vh] bg-linear-to-t from-black to-transparent pointer-events-none"
      />

      {/* Subtle black overlay for texture */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="mx-auto max-w-[1450px] px-4 pt-64 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-secondary">
            Our Portfolio
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Discover our latest interior design transformations that showcase our
            commitment to excellence and innovative design solutions.
          </p>
        </motion.div>

        {/* Desktop Slider (Hidden on Mobile) */}
        <div className="mt-16 relative w-full overflow-hidden hidden md:block">
          {/* Fading Edges Overlay */}
          <div className="absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-muted to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-muted to-transparent pointer-events-none" />

          <div
            className={cn(
              "flex gap-8 py-4 animate-marquee-right pause-hover",
              isPaused && "paused"
            )}
            onClick={() => setIsPaused(!isPaused)}
            style={{
              width: "max-content",
            }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${index}`}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group relative h-[400px] w-[400px] shrink-0 overflow-hidden rounded-xl bg-card shadow-lg cursor-pointer transition-transform"
              >
                <div className="h-full w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={533}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-primary/90 via-primary/40 to-transparent p-6 opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium uppercase tracking-wider text-secondary">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-primary-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-primary-foreground/80">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Grid (Hidden on Desktop) */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:hidden">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card shadow-lg"
            >
              <div className="aspect-3/4 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={533}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-primary/90 via-primary/40 to-transparent p-6 opacity-100 lg:opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100">
                <span className="text-xs font-medium uppercase tracking-wider text-secondary">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-primary-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-primary-foreground/80">
                  {project.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-secondary px-8 py-4 text-sm font-semibold text-secondary-foreground transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <AnimatedFlipText text="View All Projects" />
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
