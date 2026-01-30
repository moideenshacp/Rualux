"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Us" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0

    // Set scrolled state for background change
    if (latest > 50 && !isScrolled) setIsScrolled(true)
    if (latest <= 50 && isScrolled) setIsScrolled(false)

    // Handle hide/show on scroll
    if (latest > previous && latest > 150) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  })

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        // animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 transition-all duration-500",
          isMobileMenuOpen ? "z-70" : "z-50",
          isScrolled
            ? "bg-background/70 backdrop-blur-xl shadow-lg py-3"
            : "bg-transparent py-6"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link href="/" className="group flex items-center gap-2">
                <div className="relative h-10 w-32">
                  <Image
                    src="/Rualux-logo.png"
                    alt="Rualux Logo"
                    fill
                    className={cn(
                      "object-contain transition-all duration-300",
                      !isScrolled && !isMobileMenuOpen && "brightness-0 invert"
                    )}
                    priority
                  />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <Link
                    href={link.href}
                    className="relative px-3 py-2 text-sm font-medium transition-colors"
                  >
                    <span className={cn(
                      "relative z-10 transition-colors duration-300",
                      isScrolled
                        ? "text-muted-foreground hover:text-foreground"
                        : "text-white/70 hover:text-white",
                      pathname === link.href && (isScrolled ? "text-foreground" : "text-white")
                    )}>
                      {link.label}
                    </span>

                    {/* Active Indicator */}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-x-0 -bottom-2 h-0.5 bg-secondary"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "relative z-[80] flex h-12 w-12 items-center justify-center rounded-full md:hidden transition-all duration-300",
                  isMobileMenuOpen
                    ? "text-white bg-white/10"
                    : isScrolled
                      ? "text-foreground bg-black/5"
                      : "text-white bg-black/40 shadow-lg"
                )}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <div className="relative h-6 w-6">
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                    className="absolute left-0 top-1/2 block h-0.5 w-6 bg-current transition-transform"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="absolute left-0 top-1/2 block h-0.5 w-6 bg-current transition-all"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                    className="absolute left-0 top-1/2 block h-0.5 w-6 bg-current transition-transform"
                  />
                </div>
              </Button>
            </motion.div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black md:hidden"
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(90,5,5,0.4)_0%,_transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_rgba(90,5,5,0.3)_0%,_transparent_40%)]" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center gap-10 px-6 text-center"
            >
              <div className="flex flex-col gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "relative text-2xl font-semibold transition-colors hover:text-secondary",
                        pathname === link.href ? "text-secondary" : "text-foreground"
                      )}
                    >
                      {link.label}
                      {pathname === link.href && (
                        <motion.div
                          layoutId="mobileActive"
                          className="absolute -bottom-2 left-0 right-0 mx-auto h-1 w-12 rounded-full bg-secondary"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10"
              >
                <div className="flex h-12 w-12 items-center justify-center">
                  <Image
                    src="/rualux-letter.png"
                    alt="R"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
