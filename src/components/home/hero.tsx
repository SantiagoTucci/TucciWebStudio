"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { motion } from "framer-motion"
import SphereTech from "@/components/ui/sphere-tech"
import OrbitingParticles from "@/components/ui/orbiting-particles"

export default function Hero() {  
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-6 sm:px-15 md:px-35 lg:px-45 py-24 md:py-12 gap-0 md:gap-8 relative">

      {/* Texto */}
      <div className="flex flex-col justify-center text-center md:text-left">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-4" > 
          <h1 id="main-title" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-6xl"> 
            Desarrollos <strong>Web</strong> <br /> 
            <em className="italic">para potenciar tu empresa</em> 
          </h1> 
        </motion.div>

        <p className="mt-2 text-base md:text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
            Creamos sitios web y software a medida para potenciar tu empresa.
        </p>

        <div className="mt-12 md:mt-9 flex flex-col sm:flex-row gap-4 justify-center md:justify-start px-12 md:px-0">
          <a
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("contact")
              if (element) {
                const headerOffset = 120 // Account for sticky header height + margin
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
            className="bg-cyan-600 text-white px-3.5 py-2 sm:px-6 md:py-3 rounded-xl hover:bg-cyan-800"
          >
            Contanos tu idea
          </a>
          <a
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("proyectos")
              if (element) {
                const headerOffset = 120 // Account for sticky header height + margin
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }
            }}
            className="border border-cyan-600 text-cyan-600 px-3.5 py-2 sm:px-6 md:py-3 rounded-xl hover:bg-white/10"
          >
            Ver proyectos
          </a>
        </div>
      </div>

      {/* Esfera 3D */}
      <div className="flex items-center justify-center relative">
        <div
          className="
            w-[75vw] h-[75vw] max-w-[320px] max-h-[320px]
            sm:w-[45vw] sm:h-[45vw] sm:max-w-[330px] sm:max-h-[330px]
            md:w-[360px] md:h-[360px] md:max-w-[360px] md:max-h-[360px]
            lg:w-[450px] lg:h-[450px] lg:max-w-[450px] lg:max-h-[450px]
          "
        >

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
