"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Our Studio",
    details: ["123 Design Avenue", "New York, NY 10001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@luxeinteriors.com", "projects@luxeinteriors.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
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
