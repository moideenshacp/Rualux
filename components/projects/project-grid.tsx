"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { X, MapPin, Calendar, User } from "lucide-react"
import { projects, type Project } from "@/lib/data/projects"
import { ProjectFilter } from "./project-filter"

export function ProjectGrid() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section ref={ref} className="bg-background py-0 md:py-2 mb-20!">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <ProjectFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <div className="aspect-[4/3]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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

                  {/* Always visible info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/70 to-transparent p-4 transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="text-lg font-semibold text-primary-foreground">
                      {project.title}
                    </h3>
                    <span className="text-xs text-primary-foreground/80">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.2 }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl bg-card"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary/80 text-primary-foreground transition-colors hover:bg-primary"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Image */}
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <span className="text-sm font-medium uppercase tracking-wider text-secondary">
                  {selectedProject.category}
                </span>
                <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
                  {selectedProject.title}
                </h2>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  {selectedProject.location && (
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-secondary" />
                      {selectedProject.location}
                    </div>
                  )}
                  {selectedProject.date && (
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-secondary" />
                      {selectedProject.date}
                    </div>
                  )}
                  {selectedProject.client && (
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-secondary" />
                      {selectedProject.client}
                    </div>
                  )}
                </div>

                <p className="mt-6 leading-relaxed text-muted-foreground">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
