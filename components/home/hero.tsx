"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

const HERO_IMAGE = "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80"
// https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80
// https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80
// https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80
// https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1920&q=80

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
          // style={{ scale }}
          className="absolute inset-0 h-full w-full"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          />
          {/* Base cinematic overlays */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />


        </motion.div>
      </div>

      <div
        className="relative z-20 flex h-full flex-col items-center justify-end px-6 text-center pb-24"
      >
        <div className="flex flex-col items-center gap-4 max-w-4xl">
          <div
            className="text-[10px] uppercase tracking-[0.5em] text-white/70 font-light drop-shadow-md"
          >
            Architecture • Interiors • Lifestyle
          </div>

          <p
            className="max-w-3xl text-sm md:text-xl font-light tracking-[0.02em] text-white leading-relaxed italic drop-shadow-md"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            &quot;Transforming the ephemeral into the enduring, crafting sanctuaries where architectural precision meets the quiet soul of interior storytelling.&quot;
          </p>
        </div>
      </div>

      {/* ── Scroll prompt ── */}
      {/* <motion.div
        style={{ opacity: contentOpacity }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.6em] text-white/30 font-light translate-x-[0.3em]">Scroll</span>
        <div className="relative h-12 w-px bg-white/10 overflow-hidden">
          <motion.div
            animate={{
              y: ["-100%", "100%"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 h-full w-full bg-linear-to-b from-transparent via-white/40 to-transparent"
          />
        </div>
      </motion.div> */}
    </section>
  )
}
