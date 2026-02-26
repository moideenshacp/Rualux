"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function MapSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-secondary">
            Our Location
          </span>
          <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
            Visit Our Studio
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            We&apos;d love to meet you in person. Schedule an appointment to visit
            our design studio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 overflow-hidden rounded-2xl shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.626458535188!2d75.833501675048!3d11.251912688924036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6593a3a69a081%3A0xe542a2082269c5e0!2sHiLITE%20Business%20Park!5e0!3m2!1sen!2sin!4v1740572621000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Rualux Location"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
