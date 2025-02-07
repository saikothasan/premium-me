"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                Hi, I'm John Doe, a passionate full-stack developer with a love for creating beautiful and functional
                web applications. With over 5 years of experience in the industry, I specialize in React, Node.js, and
                Three.js for 3D web experiences.
              </p>
              <p className="text-lg mb-4">
                My journey in web development started with a fascination for how things work on the internet. Since
                then, I've honed my skills in both front-end and back-end technologies, always staying up-to-date with
                the latest trends and best practices.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying a good cup of coffee while brainstorming my next big idea.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

