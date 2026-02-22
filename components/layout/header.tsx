"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, useScroll, useMotionValueEvent, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Us" },
]

// ── Custom variants: explicitly typed as Variants to fix index signature error ──
const itemVariants: Variants = {
  closed: (_i: number) => ({ opacity: 0, y: 40 }),
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.35 + i * 0.09, duration: 0.55, ease: [0.33, 1, 0.68, 1] },
  }),
}

const lineVariants: Variants = {
  closed: (_i: number) => ({ scaleX: 0, opacity: 0 }),
  open: (i: number) => ({
    scaleX: 1,
    opacity: 1,
    transition: { delay: 0.3 + i * 0.09, duration: 0.45, ease: "easeOut" },
  }),
}

// ── Overlay clip-path expand / collapse ──
const overlayVariants: Variants = {
  closed: {
    clipPath: "circle(0% at calc(100% - 44px) 44px)",
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
  },
  open: {
    clipPath: "circle(170% at calc(100% - 44px) 44px)",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (latest) => setIsScrolled(latest > 50))

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)
  const toggleMenu = () => setIsMenuOpen((p) => !p)

  return (
    <>
      {/* ════════════════ Header Bar ════════════════ */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent py-5"
        )}
      >
        <div className="mx-auto w-full px-6 md:px-12">
          <nav className="flex items-center justify-between">

            {/* Logo ── always above overlay (z-110) */}
            <Link
              href="/"
              onClick={closeMenu}
              className="relative z-110 flex items-center"
            >
              <div className="relative ml-2 h-10 w-32">
                <span
                  className="text-3xl font-extralight tracking-[0.2em] text-white"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  RUALUX
                </span>
              </div>
            </Link>

            {/* ── Hamburger / Close toggle ── */}
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="relative cursor-pointer z-110 flex h-10 w-10 flex-col items-center justify-center gap-0 focus:outline-none group"
            >
              {/* Top bar */}
              <motion.span
                animate={
                  isMenuOpen
                    ? { rotate: 45, y: 0, width: "28px", backgroundColor: "#ffffff" }
                    : { rotate: 0, y: -7, width: "28px", backgroundColor: "#ffffff" }
                }
                transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                className="absolute block h-0.5 rounded-full"
                style={{ transformOrigin: "center" }}
              />
              {/* Middle bar — fades out on open */}
              <motion.span
                animate={
                  isMenuOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1, width: "20px", backgroundColor: "#ffffff" }
                }
                transition={{ duration: 0.2 }}
                className="absolute block h-0.5 rounded-full"
                style={{ transformOrigin: "center" }}
              />
              {/* Bottom bar */}
              <motion.span
                animate={
                  isMenuOpen
                    ? { rotate: -45, y: 0, width: "28px", backgroundColor: "#ffffff" }
                    : { rotate: 0, y: 7, width: "28px", backgroundColor: "#ffffff" }
                }
                transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                className="absolute block h-0.5 rounded-full"
                style={{ transformOrigin: "center" }}
              />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* ════════════════ Fullscreen Overlay ════════════════ */}
      <motion.div
        variants={overlayVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        className="fixed inset-0 z-100 bg-[#0a0a0a]"
        style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
      >
        {/* Ambient glow accents */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(180,150,100,0.07)_0%,transparent_70%)]" />
          <div className="absolute bottom-[-5%] left-[-5%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(180,150,100,0.05)_0%,transparent_70%)]" />
        </div>

        {/* ── Top strip: "Menu" label  +  animated X close button ── */}
        <div className="relative z-10 flex items-center justify-between px-8 pt-6 sm:px-12">
          <motion.span
            animate={isMenuOpen ? { opacity: 1, transition: { delay: 0.45, duration: 0.4 } } : { opacity: 0 }}
            className="select-none font-light text-xs uppercase tracking-[0.35em] text-white/30"
          >

          </motion.span>

          {/* Animated X / close button inside overlay */}
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="group cursor-pointer relative flex h-10 w-10 items-center justify-center focus:outline-none"
          >
            {/* Spinning ring around X */}
            <motion.span
              animate={isMenuOpen
                ? { scale: 1, opacity: 1, rotate: 90, transition: { delay: 0.55, duration: 0.5, ease: "easeOut" } }
                : { scale: 0.6, opacity: 0, rotate: 0 }
              }
              className="absolute inset-0 rounded-full border transition-colors duration-300"
            />
            {/* X lines */}
            <motion.span
              animate={isMenuOpen
                ? { rotate: 45, opacity: 1, transition: { delay: 0.5, duration: 0.35, ease: [0.76, 0, 0.24, 1] } }
                : { rotate: 0, opacity: 0 }
              }
              className="absolute block h-0.5 w-5 rounded-full bg-white/70 group-hover:bg-white transition-colors duration-300"
            />
            <motion.span
              animate={isMenuOpen
                ? { rotate: -45, opacity: 1, transition: { delay: 0.5, duration: 0.35, ease: [0.76, 0, 0.24, 1] } }
                : { rotate: 0, opacity: 0 }
              }
              className="absolute block h-0.5 w-5 rounded-full bg-white/70 group-hover:bg-white transition-colors duration-300"
            />
          </button>
        </div>

        {/* ── Navigation links ── */}
        <div className="relative z-10 flex h-full flex-col items-start justify-center px-10 pb-24 sm:px-20 lg:px-32">
          <nav className="w-full max-w-2xl">

            {navLinks.map((link, i) => {
              const isActive = pathname === link.href
              return (
                <div key={link.href} className="overflow-hidden">
                  {/* Divider line */}
                  <motion.div
                    custom={i}
                    variants={lineVariants}
                    initial="closed"
                    animate={isMenuOpen ? "open" : "closed"}
                    className="h-px w-full origin-left bg-white/10"
                  />

                  {/* Nav item */}
                  <motion.div
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate={isMenuOpen ? "open" : "closed"}
                    className="group"
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-baseline gap-5 py-5 sm:py-6 select-none"
                    >
                      {/* Index / active dash */}
                      <span
                        className={cn(
                          "w-7 font-light text-sm transition-colors duration-300",
                          isActive
                            ? "text-[#c4a96a]"
                            : "text-white/20 group-hover:text-white/50"
                        )}
                      >
                        {"—"}
                      </span>

                      {/* Label */}
                      <span
                        className={cn(
                          "text-4xl font-extralight tracking-tight transition-all duration-300 sm:text-4xl",
                          "group-hover:translate-x-4 group-hover:text-[#c4a96a]",
                          isActive ? "text-[#c4a96a]" : "text-white/80"
                        )}
                      // style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                </div>
              )
            })}

            {/* Bottom divider */}
            <motion.div
              custom={navLinks.length}
              variants={lineVariants}
              initial="closed"
              animate={isMenuOpen ? "open" : "closed"}
              className="h-px w-full origin-left bg-white/10"
            />
          </nav>

        </div>
      </motion.div>
    </>
  )
}
