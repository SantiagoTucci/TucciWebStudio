import { useRef } from "react"
import { Mesh } from "three"
import { useFrame } from "@react-three/fiber"

export default function SphereTech() {
  const sphereRef = useRef<Mesh>(null)

  // Animación: rotación constante
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.003
      sphereRef.current.rotation.x += 0.001
    }
  })

  return (
    <group ref={sphereRef}>
      {/* Esfera sólida */}
      <mesh>
        <sphereGeometry args={[1.3, 64, 64]} />
        <meshStandardMaterial
          color="#06b6d4" // cyan
          metalness={0.4}
          roughness={0.2}
        />
      </mesh>

      {/* Wireframe */}
      <mesh>
        <sphereGeometry args={[1.32, 32, 32]} />
        <meshBasicMaterial
          color="#00eaff"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  )
}
