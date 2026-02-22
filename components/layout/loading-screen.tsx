"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

// Use a global variable to track if the loading screen has been shown in the current session
// This persists across client-side navigation but resets on full page reload
let hasShownLoading = false

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [shouldRender, setShouldRender] = useState(false)
  const [phase, setPhase] = useState(0) // 0: Logo, 1: Pause, 2: Name

  useEffect(() => {
    if (hasShownLoading) {
      setIsLoading(false)
    } else {
      setShouldRender(true)

      // Phase 0: Logo (0s - 2s)
      const phase1Timer = setTimeout(() => setPhase(1), 2200)

      // Phase 1: Silent Pause (2.2s - 2.8s)
      const phase2Timer = setTimeout(() => setPhase(2), 2800)

      // End Loading (5.8s)
      const endTimer = setTimeout(() => {
        setIsLoading(false)
        hasShownLoading = true
      }, 5800)

      return () => {
        clearTimeout(phase1Timer)
        clearTimeout(phase2Timer)
        clearTimeout(endTimer)
      }
    }
  }, [])

  if (!shouldRender && hasShownLoading) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-primary"
        >
          <div className="relative flex items-center justify-center h-48 w-full">
            <AnimatePresence mode="wait">
              {phase === 0 && (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute"
                >
                  <Image
                    src="/rualux-letter.png"
                    alt="Rualux Letter"
                    width={150}
                    height={150}
                    className="object-contain brightness-0 invert"
                  />
                </motion.div>
              )}

              {phase === 2 && (
                <motion.div
                  key="name"
                  className="flex items-center justify-center"
                >
                  {"RUALUX".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.1,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="text-4xl md:text-7xl tracking-[0.2em] font-extralight text-white"
                      style={{ fontFamily: "var(--font-cormorant), serif" }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
