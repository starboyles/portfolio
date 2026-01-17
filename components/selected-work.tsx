"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "DbVis Software Ab",
    description: "Building the universal database tool for the world’s leading data professionals",
    tags: ["SQL", "Developer Advocacy", "Development", "DBMS Internals"],
    image: "/DbVisualizer Brand Assets Promo.png",
    year: "2022 - Now",
  },
  {
    id: 2,
    title: "Yemaachi Biotech",
    description: "The world’s most robust cancer knowledge base to develop the next gen of cancer drugs effective in diverse populations",
    tags: ["Technical Documentation", "API Design", "Healthcare Tech"],
    image: "/yemaachi.jpg",
    year: "2024",
  },
  {
    id: 3,
    title: "Bright Data",
    description: "Get structured, reliable, real-time or historical data at petabyte-scale",
    tags: ["Web Scraping", "APIs", "Python", "Selenium"],
    image: "/brightdata.png",
    year: "2024",
  },
  {
    id: 4,
    title: "Open Source GH",
    description: "Backend system for a national power outage tracking platform",
    tags: ["APIs", "NodeJS", "Performance Optimization"],
    image: "/Open Source.jpg",
    year: "2024",
  },
]

export function SelectedExperiences() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="experiences" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-sm text-muted-foreground tracking-wide">Selected Experiences</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href="#"
              className="group block"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-secondary mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-700",
                    hoveredId === project.id && "scale-105",
                  )}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1 group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                <span className="text-xs text-muted-foreground">{project.year}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
