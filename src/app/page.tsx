"use client"

import { useEffect, useState } from "react"
import { Container } from "@/components/Container"
import { Hero } from "@/components/Hero"
import { SectionTitle } from "@/components/SectionTitle"
import { SkillCard } from "@/components/SkillCard"
import { Button } from "@/components/ui/button"
import { Code, RefreshCcw } from "lucide-react"

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", 
  "Laravel", "PHP", "MySQL", "Git", "Tailwind CSS", "Bootstrap",
  "Machine Learning", "Data Engineer", "Data Science", "Data Analyst",
  "Microsoft Office", "Ms Word", "Ms Excel", "Ms PowerPoint", "Ms Outlook",
  
]

export default function Home() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [quote, setQuote] = useState({
      quote: "",
      author: "",
    })

    const fetchQuote = async () => {
      setLoading(true);
      setError(false);

      try {
        console.log("Fetching...");

        const res = await fetch("https://dummyjson.com/quotes/random");
        console.log(res);

        const data = await res.json();
        console.log(data);

        setQuote(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        console.log("Done");
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchQuote();
    }, []);

  return (
    <div className="pb-32">
      <Hero />
      
      <Container className="py-24 border-t border-border">
        <SectionTitle>My Skills</SectionTitle>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <SkillCard key={skill} name={skill} icon={<Code className="h-4 w-4" />} />
          ))}
        </div>
      </Container>

      <Container className="py-24">
        <SectionTitle>Programming Quote</SectionTitle>
        <div className="max-w-3xl mx-auto overflow-hidden border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_rgba(15,23,42,0.06)] rounded-2xl">
          <div className="p-10 md:p-16 flex flex-col items-center text-center">
            {loading ? (
              <div className="animate-pulse space-y-4 w-full flex flex-col items-center">
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </div>
            ) : error ? (
              <div className="text-destructive font-medium mb-6">Failed to load quote. Please try again.</div>
            ) : (
              <div className="mb-10">
                <p className="text-2xl md:text-3xl italic font-medium leading-tight tracking-tight text-foreground mb-6">&quot;{quote?.quote}&quot;</p>
                <p className="text-muted-foreground font-semibold tracking-wide text-sm uppercase">- {quote?.author}</p>
              </div>
            )}
            <Button 
              onClick={fetchQuote} 
              disabled={loading} 
              variant="outline" 
              className="gap-2 rounded-full font-medium border-border hover:bg-surface-alt shadow-sm transition-all hover:-translate-y-[1px]"
            >
              <RefreshCcw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh Quote
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
