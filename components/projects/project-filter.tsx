"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { projectCategories } from "@/lib/data/projects"

interface ProjectFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function ProjectFilter({
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {projectCategories.map((category) => (
        <Button
          key={category}
          variant="ghost"
          onClick={() => onCategoryChange(category)}
          className={cn(
            "relative rounded-full px-6 py-2 text-sm font-medium transition-colors",
            activeCategory === category
              ? "text-secondary-foreground hover:text-secondary-foreground"
              : "text-muted-foreground hover:text-secondary-foreground"
          )}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 rounded-full bg-secondary"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </Button>
      ))}
    </div>
  )
}
