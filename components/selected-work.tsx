"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Meridian",
    description: "Building a seamless path to better financial health",
    tags: ["Design", "Development", "React", "Next.js"],
    image: "/modern-finance-app-dashboard-with-charts-and-clean.jpg",
    year: "2025",
  },
  {
    id: 2,
    title: "Nomad Studios",
    description: "Elevating a creative agency's digital presence",
    tags: ["Design", "Branding", "Webflow"],
    image: "/creative-agency-website-with-bold-typography-and-a.jpg",
    year: "2024",
  },
  {
    id: 3,
    title: "Clarity",
    description: "Distilling complexity into intuitive interfaces",
    tags: ["Product Design", "UI/UX", "Figma"],
    image: "/minimal-saas-dashboard-with-clean-white-interface.jpg",
    year: "2024",
  },
  {
    id: 4,
    title: "Wavelength",
    description: "Bringing clarity to audio production workflows",
    tags: ["Design", "React", "Tailwind CSS"],
    image: "/dark-mode-audio-production-app-with-waveforms.jpg",
    year: "2023",
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
