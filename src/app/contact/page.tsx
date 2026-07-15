import { Container } from "@/components/Container"
import { SectionTitle } from "@/components/SectionTitle"
import { ContactForm } from "@/components/ContactForm"
import { Mail, Phone, Globe, Link as LinkIcon, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: 'Contact | David Rio',
  description: 'Get in touch with David Rio',
}

export default function Contact() {
  return (
    <Container className="py-16 md:py-24">
      <SectionTitle>Get In Touch</SectionTitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
        <div>
          <p className="text-lg text-muted-foreground mb-8">
            I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          
          <div className="space-y-6">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <a href="mailto:davidriochristian43@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    davidriochristian43@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">WhatsApp</h3>
                  <a href="https://wa.me/081914945188" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    +62 819 1454 5188
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">GitHub</h3>
                  <a href="https://github.com/riooocn" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    github.com/riooocn
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <LinkIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/david-rio-christian-5645732b5/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    linkedin.com/in/david-rio-christian-5645732b5
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </Container>
  )
}
