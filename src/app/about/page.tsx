import { Container } from "@/components/Container"
import Image from "next/image"
import { MapPin, Briefcase, GraduationCap, Code } from "lucide-react"

export const metadata = {
  title: 'About | David Rio',
  description: 'About David Rio - Full Stack Developer',
}

export default function About() {
  return (
    <Container className="py-24 md:py-32">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 relative">
        
        {/* Left Rail (Sticky) */}
        <aside className="w-full md:w-[340px] flex-shrink-0">
          <div className="sticky top-32">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-background shadow-[0_0_0_1px_rgba(15,23,42,0.06)]">
              <Image 
                src="/photo.png" 
                alt="David Rio" 
                fill 
                className="object-cover"
              />
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight mb-2 text-foreground">David Rio</h1>
            <p className="text-muted-foreground mb-6 flex items-center gap-2 font-medium">
              <MapPin className="w-4 h-4" />
              Central Java, Indonesia
            </p>

            <nav className="hidden md:flex flex-col gap-3 text-sm font-medium text-muted-foreground border-l border-border pl-4">
              <a href="#intro" className="hover:text-primary transition-colors">Intro</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#education" className="hover:text-primary transition-colors">Education</a>
              <a href="#hobbies" className="hover:text-primary transition-colors">Hobbies</a>
            </nav>
          </div>
        </aside>

        {/* Right Column Content */}
        <main className="flex-1 max-w-3xl">
          <section id="intro" className="mb-20 scroll-mt-32">
            <h2 className="text-2xl font-bold tracking-tight mb-6 text-foreground flex items-center gap-2">
              <Code className="w-6 h-6 text-primary" />
              Who am I?
            </h2>
            <div className="space-y-6 text-[16px] leading-relaxed text-muted-foreground font-medium">
              <p>
                I am a passionate Full Stack Web Developer with experience in designing and developing modern web applications from concept to deployment. I specialize in building responsive, 
                scalable, and user-friendly applications using Laravel, Next.js, React, Vue.js, and CodeIgniter.
              </p>
              <p>
                Beyond web development, I have a strong interest in data-related fields. I have experience as a Data Analyst and Scientist including data preprocessing, machine learning modeling, and data visualization using Python, 
                along with foundational Data Engineering skills such as developing simple ETL pipelines and writing efficient SQL queries.
              </p>
            </div>
          </section>

          <section id="experience" className="mb-20 scroll-mt-32">
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-foreground flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" />
              Experience
            </h2>
            
            <div className="space-y-12">
              <div className="group">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground">"Rencana Karierku" Project - Full Stack Engineer</h3>
                  <span className="text-sm font-medium text-muted-foreground mt-1 md:mt-0">2026</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  Developed Rencana Karierku, a web-based career planning and self-assessment platform for high school students using Laravel, Tailwind CSS, and MySQL. Built the application as a full-stack developer, including participant and admin dashboards, role management, CRUD modules for assessments and administrators, and a database system to store participants&apos; assessment responses.
                </p>
              </div>

              <div className="group">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground">PT. Satria Lintas Intermoda</h3>
                  <span className="text-sm font-medium text-muted-foreground mt-1 md:mt-0">2026</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  Developed a company profile website for a sea freight logistics company using WordPress. The website showcases the company&apos;s services and profile, and was submitted to Google Search Console to improve search engine indexing and online visibility.
                </p>
              </div>

              <div className="group">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground">Student Study Sustainability Detection System</h3>
                  <span className="text-sm font-medium text-muted-foreground mt-1 md:mt-0">2024 - 2025</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  Collaborated with a university lecturer to develop a detection system using Deep Learning techniques. The project focused on applying Convolutional Neural Networks (CNN) to identify students at risk of dropping out based on academic performance data.
                </p>
              </div>

              <div className="group">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground">Indonesian Baptist Youth Conference (IBYC)</h3>
                  <span className="text-sm font-medium text-muted-foreground mt-1 md:mt-0">2024 - 2025</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  Managed and maintained participant data using SQL databases while supporting data requests. Monitored the online registration system, reported website issues and bugs, and helped ensure data accuracy.
                </p>
              </div>
              
              <div className="group">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground">PT. Kanisius - Front End Engineer</h3>
                  <span className="text-sm font-medium text-muted-foreground mt-1 md:mt-0">2023 - 2024</span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  Developed a web-based permit management system for employees and security staff using CodeIgniter 3 and Bootstrap while collaborating with a university development team using GitHub.
                </p>
              </div>
            </div>
          </section>

          <section id="education" className="mb-20 scroll-mt-32">
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-foreground flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h2>

            <div className="space-y-12">
              <div className="group">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">Bachelor of Computer Science</h3>
                  <span className="text-sm font-medium text-muted-foreground mt-1 md:mt-0">2022 - 2026</span>
                </div>
                <div className="text-foreground font-medium mb-3">Sanata Dharma University</div>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  Graduated with Honors. Focused on Software Engineering and Web Technologies. Graduated with a final GPA score of 3.82.
                </p>
              </div>
              
              <div className="group">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">Science (IPA) Program</h3>
                  <span className="text-sm font-medium text-muted-foreground mt-1 md:mt-0">2019 - 2022</span>
                </div>
                <div className="text-foreground font-medium mb-3">Kristen Kalam Kudus Senior High School</div>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  Completed the Science (IPA) program and graduated with a final academic score of 84.83.
                </p>
              </div>
            </div>
          </section>

          <section id="hobbies" className="scroll-mt-32">
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-foreground flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary opacity-0" />
              Hobbies
            </h2>
            <div className="flex flex-wrap gap-3">
              {["Vibe Coding", "Reading Tech Blogs", "Playing Guitar", "Traveling"].map((hobby) => (
                <span key={hobby} className="px-5 py-2 rounded-full bg-surface-alt border border-border text-[14px] font-medium text-muted-foreground shadow-sm hover:text-foreground hover:bg-surface transition-colors cursor-default">
                  {hobby}
                </span>
              ))}
            </div>
          </section>

        </main>
      </div>
    </Container>
  )
}
