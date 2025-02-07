"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Star } from "lucide-react"

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Repository[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/saikothasan/repos?sort=stars&per_page=6")
        if (!response.ok) {
          throw new Error("Failed to fetch projects")
        }
        const data: Repository[] = await response.json()
        setProjects(data)
      } catch (error) {
        console.error("Error fetching projects:", error)
        setError("Failed to load projects. Please try again later.")
      }
    }

    fetchProjects()
  }, [])

  if (error) {
    return (
      <section id="projects" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <p className="text-center text-red-500">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description || "No description available"}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{project.language || "N/A"}</Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      <span>{project.stargazers_count}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

