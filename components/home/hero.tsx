"use client"

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { AnimatedFlipText } from "@/components/ui/animated-flip-text"

const heroImages = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80",
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentImage, setCurrentImage] = useState(0)

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Tighter scroll transformations
  const overlayOpacity = useTransform(scrollYProgress, [0.5, 0.9], [0, 1])
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section
      ref={containerRef}
      className="relative h-[120vh] w-full overflow-hidden"
    >
      {/* Sticky Background Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Animated Background Images */}
        <div className="absolute inset-0">
          <AnimatePresence>
            <motion.div
              key={currentImage}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1.05, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              style={{ y: bgY }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${heroImages[currentImage]}')`,
                }}
              />
              {/* Luxury Gradient Overlays */}
              <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-black/60" />
              <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/40" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scroll Progress Guard Overlay */}
        <motion.div
          className="absolute inset-0 z-20 bg-black pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />

        {/* Content Section */}
        <motion.div
          style={{ scale: contentScale, opacity: contentOpacity }}
          className="relative z-30 flex h-full flex-col items-center justify-center px-4 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <span className="text-sm font-medium uppercase tracking-[0.5em] text-secondary">
              Luxury Architecture & Design
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="max-w-5xl text-4xl font-bold leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-balance"
          >
            Crafting Spaces That <br />
            <span className="text-secondary italic">Define You.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 max-w-2xl text-lg text-white/80 sm:text-xl md:text-2xl font-light"
          >
            Award-winning interior design and architecture studio specializing in
            bespoke residential and commercial transformations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 flex flex-col gap-6 sm:flex-row items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-secondary px-10 py-5 text-sm font-semibold text-secondary-foreground transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <AnimatedFlipText text="Discovery Our Portfolio" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-full border border-white/40 px-10 py-5 text-sm font-semibold text-white transition-all duration-500 hover:bg-white hover:text-black hover:border-white"
              >
                <AnimatedFlipText text="Book a Consultation" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Luxury Pagination Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-40 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className="group relative h-1 w-12 bg-white/20 transition-all duration-300"
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.div
                className="absolute inset-0 bg-secondary"
                initial={false}
                animate={{ width: currentImage === index ? "100%" : "0%" }}
                transition={{ duration: currentImage === index ? 6 : 0.3 }}
              />
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={{ opacity: contentOpacity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 text-white/50"
          >
            <span className="text-[10px] uppercase tracking-[0.4em]">Discover More</span>
            <ChevronDown size={20} className="text-secondary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
