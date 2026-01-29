"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { team } from "@/lib/data/team"

export function TeamSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-secondary">
            Our Team
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Meet the Experts
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our talented team of designers, architects, and project managers 
            bring diverse expertise and shared passion to every project.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl">
                <div className="aspect-[3/4]">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={533}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm leading-relaxed text-primary-foreground/90">
                    {member.bio}
                  </p>
                </div>
              </div>
              
              {/* Info */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-secondary">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
