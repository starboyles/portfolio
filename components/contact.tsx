import { ArrowUpRight, Copy } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-sm text-muted-foreground tracking-wide">Contact</h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-2xl md:text-3xl text-foreground leading-snug mb-8 text-balance">
              {"If you would like to discuss a project or just say hi, I'm always down to chat."}
            </p>

            <a
              href="mailto:hello@alexchen.design"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity mb-12"
            >
              Get in touch
            </a>

            <div className="space-y-6 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Mail</span>
                <a
                  href="mailto:hello@alexchen.design"
                  className="text-foreground hover:text-muted-foreground transition-colors inline-flex items-center gap-2"
                >
                  hello@alexchen.design
                  <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                </a>
              </div>

              <div className="space-y-3">
                {[
                  { label: "LinkedIn", handle: "@alexchen" },
                  { label: "Twitter", handle: "@alexchen" },
                  { label: "Dribbble", handle: "@alexchen" },
                  { label: "GitHub", handle: "@alexchen" },
                ].map((social) => (
                  <div key={social.label} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{social.label}</span>
                    <a
                      href="#"
                      className="text-foreground hover:text-muted-foreground transition-colors inline-flex items-center gap-1"
                    >
                      {social.handle}
                      <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
