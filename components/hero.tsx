"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [greeting, setGreeting] = useState("Good morning")

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour >= 5 && hour < 12) setGreeting("Good morning")
    else if (hour >= 12 && hour < 18) setGreeting("Good afternoon")
    else setGreeting("Good evening")
  }, [])

  return (
    <section className="min-h-screen flex items-center pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sm text-muted-foreground mb-4 animate-in fade-in slide-in-from-bottom-3 duration-700">
            {greeting}
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] tracking-tight text-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {
              "I’m a software and documentation engineer. While building robust systems is my primary focus, I treat documentation as a core feature of the code itself, believing that technical clarity is just as vital as performance."
            }
          </h1>

          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-sm text-foreground hover:bg-secondary transition-colors"
            >
              More about me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
