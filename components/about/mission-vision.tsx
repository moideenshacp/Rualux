"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function MissionVision() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section ref={ref} className="bg-background py-20 md:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sm font-medium uppercase tracking-widest text-secondary">
                            Our Mission
                        </span>
                        <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                            Delivering Bespoke <br className="hidden md:block" /> Design Experiences
                        </h2>
                        <div className="mt-8 space-y-6 text-lg font-light leading-relaxed text-muted-foreground">
                            <p>
                                Our mission is to create bespoke architectural and design experiences that seamlessly unite artistry, craftsmanship, and thoughtful innovation. Through meticulous attention to detail, disciplined execution, and a deeply personalized approach, we transform spaces into refined environments that reflect our clients’ lifestyles, values, and aspirations.
                            </p>
                            <p>
                                We believe great architecture is born from clarity of intent, respect for context, and integrity in execution. Every project is approached as a dialogue between space, light, material, and human experience—resulting in environments that feel calm, purposeful, and enduring long after they are built.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-end lg:pb-12"
                    >
                        <div className="relative rounded-2xl bg-card p-10 shadow-xl overflow-hidden group">
                            {/* Ambient Accent */}
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-full bg-secondary/10 blur-3xl transition-all duration-500 group-hover:bg-secondary/20" />

                            <span className="text-sm font-medium uppercase tracking-widest text-secondary">
                                Our Vision
                            </span>
                            <h3 className="mt-4 text-2xl font-semibold text-foreground italic">
                                "Where Our Mission Meets Our Dream"
                            </h3>
                            <p className="mt-6 text-lg font-light leading-relaxed text-muted-foreground italic">
                                Through meticulous attention to detail, personalized service, and a commitment to excellence, we transform ordinary spaces into extraordinary sanctuaries that reflect our clients’ unique lifestyles and aspirations.
                            </p>

                            <div className="mt-8 h-px w-24 bg-secondary/50" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
