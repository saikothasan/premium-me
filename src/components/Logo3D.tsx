import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text3D, Float } from "@react-three/drei"
import type * as THREE from "three"

export default function Logo3D() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text3D
        ref={meshRef}
        font="/helvetiker_regular.typeface.json"
        size={1.5}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        JD
        <meshNormalMaterial />
      </Text3D>
    </Float>
  )
}

