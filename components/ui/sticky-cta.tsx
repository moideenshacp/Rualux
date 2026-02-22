"use client"

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { AnimatedFlipText } from "./animated-flip-text"

export function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Show after scrolling past hero (approx 800px or based on actual height)
        if (latest > 600) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    })

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed bottom-6 left-6 z-40 hidden lg:block"
                >
                    <Link
                        href="/contact"
                        className="group relative flex items-center gap-4 bg-black/40 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:bg-white hover:border-white"
                    >
                        <span
                            className="text-white text-base tracking-widest font-light transition-colors duration-500 group-hover:text-black"
                            style={{ fontFamily: "var(--font-cormorant), serif" }}
                        >
                            Get a Free Quote
                        </span>

                        <motion.div
                            className="text-white/60 group-hover:text-black transition-colors duration-500"
                            whileHover={{ x: 3 }}
                        >
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.div>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
