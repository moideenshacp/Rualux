"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/data/services"

export function ServicesPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const previewServices = services.slice(0, 6)

  return (
    <section ref={ref} className="bg-background py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-secondary">
            What We Offer
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From concept to completion, we offer comprehensive interior design
            services tailored to your unique vision and needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {previewServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                x: index % 3 === 0 ? -100 : index % 3 === 1 ? 0 : 100,
                y: index % 3 === 1 ? 50 : 0
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: (index % 3) * 0.1,
                ease: "easeOut"
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group rounded-xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-2xl"
            >
              {/* Icon */}
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-secondary/10 text-secondary"
              >
                <service.icon size={28} />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.shortDescription}
              </p>

              {/* Link */}
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
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
            href="/services"
            className="inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-4 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:bg-secondary-light hover:scale-105"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
