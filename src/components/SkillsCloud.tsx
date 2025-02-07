"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text } from "@react-three/drei"
import type { ReactNode } from "react"

const skills = ["React", "Node.js", "Three.js", "TypeScript", "Next.js", "GraphQL", "Tailwind CSS", "MongoDB"]

interface WordProps {
  children: ReactNode
  [key: string]: any
}

function Word({ children, ...props }: WordProps) {
  return (
    <Text fontSize={0.5} letterSpacing={0.1} font="/helvetiker_regular.typeface.json" {...props}>
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

export default function SkillsCloud() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      <Cloud />
    </Canvas>
  )
}

