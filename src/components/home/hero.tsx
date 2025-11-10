"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { motion } from "framer-motion"
import SphereTech from "@/components/ui/sphere-tech"
import OrbitingParticles from "@/components/ui/orbiting-particles"

export default function Hero() {  
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-24 py-12 gap-8 relative">

      {/* Texto */}
      <div className="flex flex-col justify-center text-center md:text-left">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-4" > 
          <h1 id="main-title" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-6xl"> 
            Desarrollos <strong>Web</strong> <br /> 
            <em className="italic">para potenciar tu empresa</em> 
          </h1> 
        </motion.div>

        <p className="mt-2 text-base md:text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
            Creamos sitios web modernos y software a medida para empresas. Transformamos tus ideas en productos digitales listos
            para escalar.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#contacto"
            className="bg-cyan-600 text-white px-6 py-3 rounded-xl hover:bg-cyan-800"
          >
            Contanos tu idea
          </a>
          <a
            href="#proyectos"
            className="border border-cyan-600 text-cyan-600 px-6 py-3 rounded-xl hover:bg-white/10"
          >
            Ver proyectos & clientes
          </a>
        </div>
      </div>

      {/* Esfera 3D */}
      <div className="flex items-center justify-center relative">
        <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[450px]">
          <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
            <ambientLight intensity={0.8} />
            <directionalLight intensity={1} position={[4, 4, 4]} />
            <SphereTech />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            <OrbitingParticles />
          </Canvas>
        </div>
      </div>

    </section>
  )
}
