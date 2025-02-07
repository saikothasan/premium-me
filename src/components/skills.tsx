"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text } from "@react-three/drei"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const skills = ["React", "Node.js", "Three.js", "TypeScript", "Next.js", "GraphQL", "Tailwind CSS", "MongoDB"]

function Word({ children, ...props }) {
  return (
    <Text fontSize={0.5} letterSpacing={0.1} font="/fonts/Inter-Bold.ttf" {...props}>
      {children}
    </Text>
  )
}

function Cloud() {
  return (
    <group>
      {skills.map((skill, i) => (
        <Word key={i} position={[Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2]}>
          {skill}
        </Word>
      ))}
    </group>
  )
}

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
              <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
                <Cloud />
              </Canvas>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

