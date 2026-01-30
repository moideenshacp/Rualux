"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export function StorySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="bg-background py-0 md:py-6 mb-20! overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
                alt="Rualux"
                width={600}
                height={750}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Accent Box */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 md:h-48 md:w-48 rounded-xl bg-secondary/20" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-secondary">
              Our Story
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              A Legacy of Design Excellence
            </h2>

            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Founded in 2005 by Alexandra Chen, Rualux began as a small
                studio with a big vision: to create spaces that not only look
                beautiful but truly enhance the lives of those who inhabit them.
              </p>
              <p>
                Over nearly two decades, we&apos;ve grown from a team of three passionate
                designers to an award-winning firm with over 500 completed projects
                spanning residential, commercial, and hospitality sectors across
                North America and Europe.
              </p>
              <p>
                Our approach combines timeless design principles with innovative
                techniques, always keeping our clients&apos; unique needs and
                aspirations at the heart of every project. We believe that great
                design should be both beautiful and functional, creating spaces
                that inspire and endure.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-10">
              <div>
                <span className="text-3xl font-bold text-secondary">500+</span>
                <p className="mt-1 text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-secondary">20+</span>
                <p className="mt-1 text-sm text-muted-foreground">Design Awards</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-secondary">50+</span>
                <p className="mt-1 text-sm text-muted-foreground">Team Members</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
