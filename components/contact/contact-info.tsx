"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { BsTwitterX } from "react-icons/bs"

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Our Studio",
    details: ["RUALUX - DESIGN AND BUILD", "Door No. 2406, 4th Floor, Phase 2,", "Hi Lite Business Park, Palazhi,", "Kozhikode, Kerala, India - 673014"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 9656919676", "+91 9567967696"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["rualuxdesigner@gmail.com", "info@rualux.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sat: 9:30 AM - 5:30 PM"],
  },
]

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/61583463612949/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/rualux?igsh=MWJvZGt6eTBjZW42bA%3D%3D&utm_source=qr", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/rualux/", label: "LinkedIn" },
  { icon: BsTwitterX, href: "https://x.com/rualux", label: "Twitter" },
]

export function ContactInfo() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      {/* Contact Cards */}
      {contactDetails.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex gap-4 rounded-xl bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
            <item.icon size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{item.title}</h3>
            {item.details.map((detail) => (
              <p key={detail} className="mt-1 text-sm text-muted-foreground">
                {detail}
              </p>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="rounded-xl bg-card p-6 shadow-sm"
      >
        <h3 className="font-semibold text-foreground">Follow Us</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Stay connected for design inspiration and updates.
        </p>
        <div className="mt-4 flex gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-secondary hover:text-secondary-foreground"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
