import { Container } from "@/components/Container"
import { ContactForm } from "@/components/ContactForm"
import { Mail, Phone, Globe, Link as LinkIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: 'Contact | David Rio',
  description: 'Get in touch with David Rio',
}

export default function Contact() {
  return (
    <Container className="py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 md:gap-24 items-start">
        <div className="lg:col-span-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Let&apos;s build something together.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            I&apos;m currently open for new opportunities. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          
          <div className="flex flex-col gap-4">
            <a href="mailto:davidriochristian43@gmail.com" className="group inline-flex items-center gap-4 p-4 rounded-full border border-border bg-surface-alt hover:bg-surface transition-colors">
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4 text-foreground" />
              </div>
              <div className="flex-1 font-medium text-[15px] text-foreground">davidriochristian43@gmail.com</div>
              <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all mr-2" />
            </a>

            <a href="https://wa.me/081914945188" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 p-4 rounded-full border border-border bg-surface-alt hover:bg-surface transition-colors">
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4 text-foreground" />
              </div>
              <div className="flex-1 font-medium text-[15px] text-foreground">+62 819 1454 5188</div>
              <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all mr-2" />
            </a>

            <a href="https://github.com/riooocn" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 p-4 rounded-full border border-border bg-surface-alt hover:bg-surface transition-colors">
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Globe className="w-4 h-4 text-foreground" />
              </div>
              <div className="flex-1 font-medium text-[15px] text-foreground">github.com/riooocn</div>
              <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all mr-2" />
            </a>

            <a href="https://www.linkedin.com/in/david-rio-christian-5645732b5/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 p-4 rounded-full border border-border bg-surface-alt hover:bg-surface transition-colors">
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <LinkIcon className="w-4 h-4 text-foreground" />
              </div>
              <div className="flex-1 font-medium text-[15px] text-foreground">LinkedIn Profile</div>
              <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all mr-2" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </Container>
  )
}
