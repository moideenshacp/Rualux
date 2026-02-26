"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AboutHero } from "@/components/about/about-hero"
import { StorySection } from "@/components/about/story-section"
import { MissionVision } from "@/components/about/mission-vision"
import { TeamSection } from "@/components/about/team-section"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <StorySection />
        <MissionVision />
        <TeamSection />
      </main>
      <Footer />
    </>
  )
}
