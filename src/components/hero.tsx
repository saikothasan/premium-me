"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Loading from "./loading"
import ErrorBoundary from "./error-boundary"

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => <Loading />,
})

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ErrorBoundary error={new Error("Failed to load 3D scene")} reset={() => window.location.reload()}>
          <Scene />
        </ErrorBoundary>
      </div>
      <div className="z-10 text-center px-4 bg-background/80 backdrop-blur-sm py-8 rounded-lg">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          John Doe
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Full-Stack Developer & 3D Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg">
            <a href="#projects">View Projects</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

