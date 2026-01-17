import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2023 — Present",
    title: "Senior Product Designer",
    company: "Vercel",
    companyUrl: "#",
    description:
      "Lead design for core product experiences and contribute to the design system. Work closely with engineering to implement accessible, performant interfaces.",
    skills: ["Figma", "React", "TypeScript", "Design Systems"],
  },
  {
    period: "2021 — 2023",
    title: "Product Designer",
    company: "Stripe",
    companyUrl: "#",
    description:
      "Designed payment flows and merchant dashboard experiences. Collaborated with PM and engineering to ship features serving millions of users.",
    skills: ["Product Design", "Prototyping", "User Research"],
  },
  {
    period: "2019 — 2021",
    title: "UI/UX Designer",
    company: "Notion",
    companyUrl: "#",
    description:
      "Created interface designs for collaborative workspace features. Conducted user testing and iterated on feedback to improve core workflows.",
    skills: ["UI Design", "Interaction Design", "Accessibility"],
  },
  {
    period: "2017 — 2019",
    title: "Junior Designer",
    company: "IDEO",
    companyUrl: "#",
    description:
      "Supported senior designers on client projects across healthcare, finance, and consumer tech. Developed skills in design thinking methodology.",
    skills: ["Design Thinking", "Workshops", "Visual Design"],
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
