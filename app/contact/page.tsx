"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { MapSection } from "@/components/contact/map-section"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        
        {/* Contact Form & Info Section */}
        <section className="bg-background py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
        
        <MapSection />
      </main>
      <Footer />
    </>
  )
}
