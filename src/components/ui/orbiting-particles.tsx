import { Points, PointMaterial } from "@react-three/drei"

export default function OrbitingParticles() {
  const count = 200
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 4
  }

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial size={0.01} color="#22d3ee" transparent />
    </Points>
  )
}
