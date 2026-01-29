"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Send, Loader2, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactForm() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-card p-6 shadow-lg md:p-8"
    >
      <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 flex flex-col items-center justify-center rounded-xl border border-white/20 bg-white/5 py-12 text-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-white">
            Message Sent Successfully!
          </h3>
          <p className="mt-2 text-white/70">
            Thank you for reaching out. We&apos;ll be in touch soon.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground"
            >
              Full Name <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={cn(
                "mt-2 w-full rounded-lg border bg-background px-4 py-3 text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-secondary",
                errors.name ? "border-destructive" : "border-border"
              )}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-destructive">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground"
            >
              Email Address <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={cn(
                "mt-2 w-full rounded-lg border bg-background px-4 py-3 text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-secondary",
                errors.email ? "border-destructive" : "border-border"
              )}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-destructive">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-foreground"
            >
              Phone Number <span className="text-muted-foreground">(Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground"
            >
              Message <span className="text-destructive">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={cn(
                "mt-2 w-full resize-none rounded-lg border bg-background px-4 py-3 text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-secondary",
                errors.message ? "border-destructive" : "border-border"
              )}
              placeholder="Tell us about your project..."
            />
            {errors.message && (
              <p className="mt-1 text-xs text-destructive">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-4 font-semibold text-secondary-foreground transition-all hover:bg-secondary-light disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={20} />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  )
}
