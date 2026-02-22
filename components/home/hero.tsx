"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

const HERO_IMAGE = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"

export function Hero() {
  // We track the scroll of the window to animate the fixed hero
  const { scrollYProgress } = useScroll()

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // FADE OUT HERO CONTENT FAST: It should be fully invisible by 20% of the page scroll
  const contentOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0])
  const contentY = useTransform(smoothProgress, [0, 0.2], ["0%", "-10%"])

  // Subtle scaling and parallax on the background image
  const scale = useTransform(smoothProgress, [0, 0.5], [1.05, 0.9])
  const y = useTransform(smoothProgress, [0, 0.5], ["0%", "5%"])

  // Dynamic shadow deepening as user scrolls
  const shadowOpacity = useTransform(smoothProgress, [0, 0.4], [0.2, 0.95]);

  return (
    /* 
     * By using 'fixed', the hero will never move from the viewport.
     * We give it a low z-index so everything else (z-10+) slides over it.
     */
    <section
      className="fixed top-0 left-0 z-0 h-screen w-full overflow-hidden bg-black"
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0">
        <motion.div
          style={{ scale, y }}
          className="absolute inset-0 h-full w-full"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          />
          {/* Base cinematic overlays */}
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />

          {/* Dynamic Shadow Overlay that deepens on scroll */}
          <motion.div
            style={{ opacity: shadowOpacity }}
            className="absolute inset-0 bg-black z-10"
          />
        </motion.div>
      </div>

      {/* ── Hero content (fades away quickly on scroll) ── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <div className="flex flex-col items-center gap-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] font-light uppercase tracking-[0.6em] text-white/50"
          >
            Design • Build • Transform
          </motion.span>
          <h1
            className="text-4xl font-extralight tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Crafting Spaces.<br />Telling Stories.
          </h1>
        </div>
      </motion.div>

      {/* ── Scroll prompt ── */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-12 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">Scroll</span>
        <div className="h-10 w-px bg-white/20" />
      </motion.div>
    </section>
  )
}
