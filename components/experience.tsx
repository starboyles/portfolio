import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2022 — Present",
    title: "Developer Advocate",
    company: "DbVis Software",
    companyUrl: "https://www.dbvis.com",
    description:
      "Empowering the global database community to manage data efficiently using DbVisualizer and architecting official documentation and connection guides for PostgreSQL, ClickHouse, and MySQL while serving as the voice of the developer internally to drive feature prioritization",
    skills: ["Developer Advocacy", "Structured Query Language", "Technical Writing" ]
  },
  {
    period: "2024 — 2024",
    title: "Software Engineer",
    company: "Open Source GH",
    companyUrl: "https://github.com/OpenSource-GH",
    description:
      "Engineered a backend system for a national power outage tracking platform. Designed and implemented robust RESTful API endpoints for efficient data collection and pattern analysis",
    skills: ["Node.js", "RESTful APIs", "Backend Development"],
  },
  {
    period: "2024 — 2024",
    title: "Technical Author",
    company: "Bright Data",
    companyUrl: "https://brightdata.com/",
    description:
      "Developed deep-dive technical guides on building web scrapers",
    skills: ["Web Scraping", "APIs", "Python", "Selenium"],
  },
  {
    period: "2023 — 2024",
    title: "Product & API Technical Documentation Engineer",
    company: "Yemaachi Biotech",
    companyUrl: "https://yemaachi.com",
    description:
      "Managed critical technical documentation for clinical data management systems to ensure seamless data transparency within a biotech environment",
    skills: ["Technical Documentation", "API Design Thinking", "Healthcare Tech"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-sm text-muted-foreground tracking-wide mb-12">Experience</h2>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div key={index} className="group py-8 border-t border-border last:border-b">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                <div className="md:col-span-3">
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>

                <div className="md:col-span-9">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-foreground font-medium">
                        {exp.title} ·{" "}
                        <a
                          href={exp.companyUrl}
                          className="inline-flex items-center gap-1 hover:text-muted-foreground transition-colors"
                        >
                          {exp.company}
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
