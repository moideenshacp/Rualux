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
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-6 left-6 z-40 hidden lg:block"
                >
                    <Link
                        href="/contact"
                        className="group flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-2xl transition-all duration-300 hover:bg-secondary-light hover:scale-105"
                    >
                        <AnimatedFlipText text="Get a Free Quote" />
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
