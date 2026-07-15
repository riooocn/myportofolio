"use client"

import { useState } from "react"
import { Container } from "@/components/Container"
import { SectionTitle } from "@/components/SectionTitle"
import { ProjectCard, ProjectType } from "@/components/ProjectCard"
import { Button } from "@/components/ui/button"

const allProjects: ProjectType[] = [
  {
    id: "1",
    title: "Student Detection System",
    description:
      "Developed an early student risk detection system using two approaches: a Convolutional Neural Network (CNN) model and a Content-Based Filtering recommender system to identify students who may require academic support.",
    image: "/placeholder.svg",
    tags: ["Python", "CNN", "Content-Based Filtering", "Streamlit", "Excel", "Web"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "2",
    title: "Psychology Test Website - Rencana Karierku",
    description:
      "Developed a web-based career planning assessment platform using Laravel and Tailwind CSS. The project was built with Google Antigravity IDE integrated AI to accelerate development through AI-assisted (vibe coding) workflows.",
    image: "/placeholder.svg",
    tags: ["Laravel", "PHP", "HTML", "CSS", "Tailwind CSS", "Web"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "Built a modern and responsive personal portfolio website using Next.js and React to showcase projects, technical skills, and professional experience with AI-assisted development.",
    image: "/placeholder.svg",
    tags: ["JavaScript", "React", "Next.js", "Vibe Coding"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "4",
    title: "E-Commerce Website - Vogency (Campus Project)",
    description:
      "Developed a simple e-commerce web application as a university project, featuring product management, shopping cart, and order management without payment gateway integration.",
    image: "/placeholder.svg",
    tags: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "SQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "5",
    title: "Employee Record System - PT. Kanisius",
    description:
      "Developed an employee record management system for security personnel to manage official duty requests, incident reports, and employee leave records.",
    image: "/placeholder.svg",
    tags: ["CodeIgniter", "PHP", "XAMPP", "MySQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "6",
    title: "Company Profile - PT. Satria Lintas Intermoda",
    description:
      "Designed and developed a company profile website using WordPress with Elementor and Astra theme, while applying basic SEO practices to improve search engine visibility.",
    image: "/placeholder.svg",
    tags: ["WordPress", "Elementor", "Astra", "SEO"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

const filters = ["All", "React", "Laravel", "Next.js", "Web"]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects = activeFilter === "All" 
    ? allProjects 
    : allProjects.filter(p => p.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter === "Web" && !["React", "Next.js", "Laravel"].includes(tag)))

  // Improved filtering logic for "Web" to just catch any web-related project if needed, 
  // but simpler to just match tags:
  const actualFilteredProjects = activeFilter === "All"
    ? allProjects
    : allProjects.filter(p => p.tags.includes(activeFilter) || (activeFilter === "Web" && p.tags.includes("Web")))

  return (
    <Container className="py-16 md:py-24">
      <SectionTitle>My Projects</SectionTitle>
      
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map(filter => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            onClick={() => setActiveFilter(filter)}
            className="rounded-full"
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {actualFilteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {actualFilteredProjects.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No projects found for the selected filter.
        </div>
      )}
    </Container>
  )
}
