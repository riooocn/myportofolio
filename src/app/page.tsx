"use client"

import { useEffect, useState } from "react"
import { Container } from "@/components/Container"
import { Hero } from "@/components/Hero"
import { SectionTitle } from "@/components/SectionTitle"
import { SkillCard } from "@/components/SkillCard"
import { Button } from "@/components/ui/button"
import { Code, RefreshCcw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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
    <div className="pb-20">
      <Hero />
      
      <Container className="py-16 border-t">
        <SectionTitle>My Skills</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <SkillCard key={skill} name={skill} icon={<Code className="h-8 w-8" />} />
          ))}
        </div>
      </Container>

      <Container className="py-16">
        <SectionTitle>Programming Quote</SectionTitle>
        <Card className="max-w-3xl mx-auto overflow-hidden border-primary/20 bg-muted/30">
          <CardContent className="p-8 md:p-12 flex flex-col items-center text-center">
            {loading ? (
              <div className="animate-pulse space-y-4 w-full flex flex-col items-center">
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </div>
            ) : error ? (
              <div className="text-destructive mb-6">Failed to load quote. Please try again.</div>
            ) : (
              <div className="mb-8">
                <p className="text-xl md:text-2xl italic font-medium mb-4">&quot;{quote?.quote}&quot;</p>
                <p className="text-muted-foreground font-semibold">- {quote?.author}</p>
              </div>
            )}
            <Button 
              onClick={fetchQuote} 
              disabled={loading} 
              variant="outline" 
              className="gap-2 rounded-full"
            >
              <RefreshCcw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh Quote
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}
