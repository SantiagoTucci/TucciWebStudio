"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function NewReleasePromo() {
  const ref = useRef(null)

  // Detecta cuando el componente entra al viewport
  const isInView = useInView(ref, {
    once: true,
    margin: "-20% 0px",
  })

  return (
    <section id="faq" className="pb-120 pt-24">

      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : {}
        }
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1], // easing suave tipo iOS
        }}
        className="mt-3 w-full"
      >
        <div className="mx-auto max-w-4xl rounded-[40px] border border-black/5 dark:border-white/20 p-2 shadow-sm">

          <div
            className="
              relative mx-auto 
              w-full
              min-h-[460px]
              sm:min-h-[420px]
              md:min-h-[480px]
              lg:min-h-[520px]
              max-w-4xl overflow-hidden 
              rounded-[38px] border border-black/5 dark:border-white/20 
              bg-cyan-600 p-3 shadow-sm
            "
          >
            {/* Glow cyan suave */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(8, 145, 178, 0.25), transparent 70%)",
              }}
            />

            {/* Grain */}
            <div
              className="absolute inset-0 z-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Contenido */}
            <div className="relative z-10 px-6 py-10 sm:py-14 flex flex-col items-center text-center gap-6">

              <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-white drop-shadow-md">
                ¿Querés tu Página Web<br className="hidden sm:block" /> o Software?
              </h2>

              <p className="text-white/80 text-base sm:text-lg max-w-md">
                Desarrollo sitios modernos, rápidos y con alto impacto visual.
              </p>

              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                className="mx-auto stroke-white/80 animate-bounce"
              >
                <path
                  d="M12 5v14M5 12l7 7 7-7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <a href="https://wa.me/1127082987" target="_blank">
                <div className="
                  group flex items-center gap-3 rounded-full
                  backdrop-blur-md border border-white/30
                  px-6 py-3 bg-white/10 hover:bg-white/20
                  transition-all duration-300 cursor-pointer
                ">
                  <div className="
                    bg-cyan-700 group-hover:bg-cyan-600 
                    px-4 py-2 rounded-full flex items-center gap-2
                    transition-all
                  ">
                    <span className="text-white font-semibold tracking-tight text-sm sm:text-base">
                      Contactame
                    </span>
                  </div>

                  <div className="
                    size-[24px] flex items-center justify-center
                    border border-white/40 rounded-full
                    group-hover:translate-x-1 transition-transform
                  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-all group-hover:scale-110"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8A8.5 8.5 0 0 1 17.5 5a8.38 8.38 0 0 1 3.5 3.5 8.38 8.38 0 0 1 0 3z"/>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  )
}
