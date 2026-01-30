"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { projects } from "@/lib/data/projects"
import { AnimatedFlipText } from "@/components/ui/animated-flip-text"

export function FeaturedProjects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const featuredProjects = projects.slice(0, 4)

  return (
    <section ref={ref} className="bg-muted py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        {/* Projects Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: (index % 4) * 0.1,
                ease: "easeOut"
              }}
              whileHover={{
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden rounded-xl bg-card shadow-lg"
            >
              <div className="aspect-3/4 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={533}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
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

              {/* Always visible title (only on desktop where overlay is hidden) */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-primary/80 to-transparent p-4 transition-opacity duration-300 opacity-0 lg:opacity-100 lg:group-hover:opacity-0">
                <h3 className="text-lg font-semibold text-primary-foreground">
                  {project.title}
                </h3>
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
            className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
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
