import { Github, Linkedin, Twitter, Dribbble } from "lucide-react"

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-sm text-muted-foreground tracking-wide mb-6">About</h2>

            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              {
                "I'm a software and documentation engineer passionate about architecting scalable backend systems and crafting technical narratives that bridge the gap between complex code and developer understanding. My favorite work lies at the intersection of engineering and developer experience (DX), building tools and documentation that are not only high-performing but meticulously designed for clarity and usability."
              }
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {
                "Currently, I'm a Developer Advocate at DbVis Software Ab, specializing in database management systems. I empower the global developer community to interact with data more efficiently, contributing to the official documentation and connection guides for industry-standard systems like PostgreSQL, MySQL, and ClickHouse. My goal is to serve as the voice of the developer, collaborating with engineering teams to prioritize features that solve real-world technical challenges."
              }
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {
                "In the past, I've had the opportunity to work across a variety of technical landscapes: from developing open-source platforms for public utility tracking to managing documentation for industry-based reinsurance platforms, and  clinical data documentation for biotech startups. I love collaborating with cross-functional teams to ship robust, well-documented products that developers actually enjoy using."
              }
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {
                "In my spare time, I'm usually tinkering with terminal-based tools in Golang or playing the piano. When away, you can find me planning my next project or at the gym🏋🏻‍♀️."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
