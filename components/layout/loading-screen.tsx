"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

// Use a global variable to track if the loading screen has been shown in the current session
// This persists across client-side navigation but resets on full page reload
let hasShownLoading = false

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (hasShownLoading) {
      setIsLoading(false)
    } else {
      setShouldRender(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
        hasShownLoading = true
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!shouldRender && hasShownLoading) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-primary"
          style={{ height: '100dvh' }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                className="h-24 w-24 rounded-full border-2 border-secondary/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute h-16 w-16 rounded-full border-4 border-secondary"
                animate={{
                  rotate: 360,
                  boxShadow: [
                    "0 0 0 0 rgba(90, 5, 5, 0.4)",
                    "0 0 20px 0 rgba(90, 5, 5, 0.2)",
                    "0 0 0 0 rgba(90, 5, 5, 0.4)",
                  ]
                }}
                transition={{
                  rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              <div className="absolute flex items-center justify-center">
                <span className="text-2xl font-bold tracking-tighter text-secondary">LI</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-xl font-bold tracking-[0.2em] text-white uppercase"
              >
                Luxe Interiors
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                className="h-[1px] bg-secondary/50"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-[10px] tracking-[0.4em] text-white/50 uppercase"
              >
                Design & Build
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
