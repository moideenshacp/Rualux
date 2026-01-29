"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Lightbulb, Leaf, Users } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue the highest standards in every detail, ensuring each project exceeds expectations and stands the test of time."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new ideas, technologies, and approaches to push the boundaries of what's possible in interior design."
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We're committed to environmentally responsible design, sourcing sustainable materials and minimizing our ecological footprint."
  },
  {
    icon: Users,
    title: "Client-Focus",
    description: "Your vision drives our work. We listen, collaborate, and create spaces that reflect your unique personality and needs."
  }
]

export function ValuesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="bg-muted py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-secondary">
            Our Values
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            What Drives Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our core values guide every decision we make and every space we create.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-xl bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary"
              >
                <value.icon size={32} />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
