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

            <div className="mt-6 space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                Rualux is a premium interior design studio specialising in high-end residential and commercial environments, delivering spaces of exceptional refinement and enduring elegance. We craft interiors defined by elevated materiality, measured luxury, and architectural precision, creating environments that feel both artfully composed and intuitively functional.
              </p>
              <p>
                At Rualux, design is more than an aesthetic pursuit—it is a philosophy rooted in clarity, craftsmanship, and the seamless integration of form and purpose. Every project is approached with a deep understanding of spatial flow, proportion, and sensory experience, ensuring that each interior is not only visually striking but deeply resonant. Our work embodies a balance of aesthetic purity, spatial intelligence, and bespoke detail, resulting in spaces that are meticulously tailored and profoundly distinctive.
              </p>
            </div>

            {/* Stats Grid from Screenshot */}
            <div className="mt-16 grid grid-cols-2 border-t border-white/10 pt-12">
              {/* Row 1, Col 1 */}
              <div className="border-r border-white/10 pb-12 pr-6">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4 font-light">Property deliver</p>
                <span className="text-5xl md:text-6xl font-medium text-white" style={{ fontFamily: "var(--font-cormorant), serif" }}>150+</span>
              </div>

              {/* Row 1, Col 2 */}
              <div className="pb-12 pl-10">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4 font-light">Clients served worldwide</p>
                <span className="text-5xl md:text-6xl font-medium text-white" style={{ fontFamily: "var(--font-cormorant), serif" }}>69+</span>
              </div>

              {/* Row 2, Col 1 */}
              <div className="border-t border-r border-white/10 py-12 pr-6">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4 font-light">Awards & Recognition</p>
                <span className="text-5xl md:text-6xl font-medium text-white" style={{ fontFamily: "var(--font-cormorant), serif" }}>5+</span>
              </div>

              {/* Row 2, Col 2 */}
              <div className="border-t border-white/10 py-12 pl-10">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4 font-light">Experience</p>
                <span className="text-5xl md:text-6xl font-medium text-white" style={{ fontFamily: "var(--font-cormorant), serif" }}>12+</span>
              </div>

              {/* Row 3, Col 1 */}
              <div className="border-t border-r border-white/10 pt-12 pr-6">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4 font-light">Ratings out of 5.0</p>
                <span className="text-5xl md:text-6xl font-medium text-white" style={{ fontFamily: "var(--font-cormorant), serif" }}>4.9</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
