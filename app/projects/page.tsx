"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectGrid } from "@/components/projects/project-grid"

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectsHero />
        <ProjectGrid />
      </main>
      <Footer />
    </>
  )
}
