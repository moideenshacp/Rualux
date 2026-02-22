"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Homeowner",
        content: "Rualux transformed our outdated living room into a modern masterpiece. Their attention to detail and creative vision exceeded all our expectations.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Business Owner",
        content: "The office design Rualux created for us has completely changed our team's productivity. It's sophisticated, functional, and truly reflects our brand.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80"
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Architect",
        content: "Working with Rualux is always a pleasure. Their ability to blend aesthetic beauty with structural integrity is rare in the interior design world.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&q=80"
    }
]

export function Testimonials() {
    const [index, setIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        if (isPaused) return

        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [isPaused])

    return (
        <section className="bg-background py-24 overflow-hidden">
            <div
                className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium uppercase tracking-widest text-secondary">
                        Testimonials
                    </span>
                    <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
                        Client Experiences
                    </h2>
                </motion.div>

                <div className="relative h-[400px] sm:h-[300px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={testimonials[index].id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                            className="absolute w-full px-8 py-12 rounded-3xl bg-card border border-border shadow-xl flex flex-col items-center text-center"
                        >
                            <motion.div
                                whileHover={{ rotate: 15, scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                                className="mb-6"
                            >
                                <Quote className="text-secondary/20 h-12 w-12" />
                            </motion.div>

                            <p className="text-lg md:text-xl text-muted-foreground italic mb-8 max-w-2xl">
                                "{testimonials[index].content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full overflow-hidden grayscale">
                                    <img
                                        src={testimonials[index].image}
                                        alt={testimonials[index].name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-foreground">{testimonials[index].name}</h4>
                                    <p className="text-sm text-muted-foreground">{testimonials[index].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-1.5 transition-all duration-300 rounded-full ${i === index ? "w-8 bg-secondary" : "w-1.5 bg-secondary/20"
                                }`}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
