"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Loading from "./loading"
import ErrorBoundary from "./error-boundary"

const SkillsCloud = dynamic(() => import("./SkillsCloud"), {
  ssr: false,
  loading: () => <Loading />,
})

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          My Skills
        </motion.h2>
        <Card>
          <CardContent className="p-0">
            <div className="h-[400px] md:h-[500px]">
              <ErrorBoundary error={new Error("Failed to load skills cloud")} reset={() => window.location.reload()}>
                <SkillsCloud />
              </ErrorBoundary>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

