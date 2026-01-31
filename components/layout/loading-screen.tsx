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
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            {/* Rualux Letter Logo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/rualux-letter.png"
                alt="Rualux Letter"
                width={80}
                height={80}
                className="object-contain"
              />
            </motion.div>

            {/* Horizontal Line below Letter Image */}
            <div className="w-24 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
                className="h-[1.5px] bg-secondary mx-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
