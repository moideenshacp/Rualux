"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronDown, Check } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { services } from "@/lib/data/services"
import { cn } from "@/lib/utils"

export function ServicesList() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section ref={ref} className="bg-background py-0 md:py-2 mb-20!">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Header */}
              <Button
                variant="ghost"
                onClick={() => toggleExpanded(service.id)}
                className="flex w-full h-auto min-h-20 items-center justify-between p-6 text-left whitespace-normal hover:bg-transparent focus-visible:ring-0"
              >
                <div className="flex items-center gap-4 mr-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <service.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground font-normal">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  size={24}
                  className={cn(
                    "shrink-0 text-muted-foreground transition-transform duration-300",
                    expandedId === service.id && "rotate-180"
                  )}
                />
              </Button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border px-6 pb-6 pt-4">
                      <p className="text-muted-foreground">
                        {service.fullDescription}
                      </p>

                      <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-foreground">
                        What&apos;s Included
                      </h4>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <Check
                              size={18}
                              className="mt-0.5 shrink-0 text-secondary"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact"
                        className="mt-6 inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:bg-secondary-light"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 rounded-2xl bg-muted p-8 text-center md:p-12"
        >
          <h3 className="text-2xl font-bold text-foreground">
            Not sure which service you need?
          </h3>
          <p className="mt-3 text-muted-foreground">
            Schedule a free consultation and let us help you determine the best
            approach for your project.
          </p>
          <div className="mt-6">
            <Button asChild size="lg">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
