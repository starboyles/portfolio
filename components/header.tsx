"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Blog", href: "#blog" },
  { label: "Thoughts", href: "#thoughts" },
  { label: "Moodboard", href: "#moodboard" }
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent",
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-foreground font-medium tracking-tight">
          Leslie S. Gyamfi
          <span className="block text-xs text-muted-foreground font-normal">Software & Documentation Engineer</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
        >
          Get in touch?
        </Link>

        <button className="md:hidden text-foreground" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
