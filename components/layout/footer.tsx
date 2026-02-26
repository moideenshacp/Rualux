"use client"

import React from "react"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Send
} from "lucide-react"
import { useState } from "react"
import { BsTwitterX } from "react-icons/bs";


const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Us" },
]

const services = [
  "Consultancy",
  "Visualisation",
  "Architecture",
  "Interior And Exterior",
  "Landscape",
]

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/61583463612949/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/rualux?igsh=MWJvZGt6eTBjZW42bA%3D%3D&utm_source=qr", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/rualux/", label: "LinkedIn" },
  { icon: BsTwitterX, href: "https://x.com/rualux", label: "Twitter" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer ref={ref} className="bg-background text-foreground border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative -ml-3 ">
                <Image
                  src="/rualux-letter.png"
                  alt="Rualux Letter"
                  width={60}
                  height={60}
                  className="object-contain brightness-0 invert"
                />
              </div>
              {/* <span className="text-xl font-bold tracking-tight text-white">
                Rualux
              </span> */}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
              A premium interior design studio specialising in high-end
              residential and commercial environments, delivering spaces of
              exceptional refinement and enduring elegance.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-all hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  <motion.div
                    whileHover={{ rotate: 12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <social.icon size={18} />
                  </motion.div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-primary-foreground/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin size={18} className="mt-1 shrink-0 text-secondary" />
                <span className="leading-relaxed">
                  RUALUX - DESIGN AND BUILD<br />
                  Door No. 2406, 4th Floor, Phase 2,<br />
                  Hi Lite Business Park, Palazhi,<br />
                  Kozhikode, Kerala, India - 673014
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <Phone size={18} className="mt-1 shrink-0 text-secondary" />
                <span className="leading-relaxed">
                  +91 9656919676<br />
                  +91 9567967696
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <Mail size={18} className="mt-1 shrink-0 text-secondary" />
                <span className="leading-relaxed whitespace-nowrap">
                  rualuxdesigner@gmail.com<br />
                  info@rualux.com
                </span>
              </li>
            </ul>


          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Rualux. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
