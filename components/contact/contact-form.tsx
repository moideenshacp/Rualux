"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Send, Loader2, CheckCircle } from "lucide-react"
import emailjs from '@emailjs/browser'
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
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

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          name: formData.name, // To match {{name}} in your template content
          from_name: formData.name, // To match {{from_name}} in your template sender
          from_email: formData.email, // To match {{from_email}} in Reply-To
          phone: formData.phone,
          message: formData.message,
          time: new Date().toLocaleString(), // To match {{time}} in your template
          title: "New Inquiry from Website", // To match {{title}} in your Subject
          to_email: 'rualuxdesigner@gmail.com',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )

      if (result.status === 200) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
        toast.success("Message sent successfully!")
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }

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
          <div className="space-y-2">
            <Label htmlFor="name">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={cn(
                "h-12",
                errors.name ? "border-destructive focus-visible:ring-destructive" : ""
              )}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-destructive">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={cn(
                "h-12",
                errors.email ? "border-destructive focus-visible:ring-destructive" : ""
              )}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-destructive">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone Number <span className="text-muted-foreground">(Optional)</span>
            </Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="h-12"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={cn(
                "resize-none",
                errors.message ? "border-destructive focus-visible:ring-destructive" : ""
              )}
              placeholder="Tell us about your project..."
            />
            {errors.message && (
              <p className="mt-1 text-xs text-destructive">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-14 w-full cursor-pointer text-base font-semibold"
            variant="secondary"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={20} className="mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      )}
    </motion.div>
  )
}
