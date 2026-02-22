"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/home/hero"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { ServicesPreview } from "@/components/home/services-preview"
import { Testimonials } from "@/components/home/testimonials"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative bg-black">
        <Hero />

        {/* Spacer to push content down so hero is visible initially */}
        <div className="h-screen pointer-events-none" />

        {/* Content sections that will slide OVER the fixed hero */}
        <div className="relative z-10 bg-black">
          <FeaturedProjects />
          <ServicesPreview />
          <Testimonials />
          <CTASection />
          <Footer />
        </div>
      </main>
    </>
  )
}
