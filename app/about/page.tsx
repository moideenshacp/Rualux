"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AboutHero } from "@/components/about/about-hero"
import { StorySection } from "@/components/about/story-section"
import { ValuesSection } from "@/components/about/values-section"
import { TeamSection } from "@/components/about/team-section"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <StorySection />
        <ValuesSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  )
}
