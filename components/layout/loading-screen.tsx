"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 360 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              rotate: { duration: 1.5, ease: "easeInOut" }
            }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative">
              <motion.div
                className="h-20 w-20 rounded-full border-4 border-secondary"
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(212, 175, 55, 0.4)",
                    "0 0 0 20px rgba(212, 175, 55, 0)",
                  ]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">LI</span>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-sm tracking-[0.3em] text-primary-foreground uppercase"
            >
              Luxe Interiors
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
