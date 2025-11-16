"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function StickyFooter() {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          const isNearBottom = scrollTop + windowHeight >= documentHeight - 100

          setIsAtBottom(isNearBottom)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isAtBottom && (
        <motion.div
          className="fixed z-50 bottom-0 left-0 w-full h-80 flex justify-center items-center shadow-2xl"
          style={{ backgroundColor: "#02586dff" }} // cyan-600
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div
            className="relative overflow-hidden w-full h-full flex justify-between px-12 items-start py-12"
            style={{ color: "#e0f7ff" }}
          >
            <motion.div
              className="grid grid-cols-2 gap-x-16 gap-y-6 text-base sm:text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/tucciwebstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 cursor-pointer hover:opacity-70 transition-all"
              >
                <img src="/icons/instagram-icon.png" alt="Instagram" className="w-7 h-7" />
                <span>Instagram</span>
              </a>

              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@tucciwebstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 cursor-pointer hover:opacity-70 transition-all"
              >
                <img src="/icons/tiktok-icon.png" alt="TikTok" className="w-7 h-7" />
                <span>TikTok</span>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/santiago-tucci-816373275"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 cursor-pointer hover:opacity-70 transition-all"
              >
                <img src="/icons/linkedin-icon.png" alt="LinkedIn" className="w-7 h-7" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/SantiagoTucci"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 cursor-pointer hover:opacity-70 transition-all"
              >
                <img src="/icons/github-icon.png" alt="GitHub" className="w-7 h-7" />
                <span>GitHub</span>
              </a>

            </motion.div>

            {/* Branding gigante */}
            <motion.h2
              className="absolute bottom-0 right-0 translate-y-1/3 sm:text-[60px] md:text-[75px] lg:text-[100px] text-[45px] font-extrabold opacity-20 select-none"
              style={{ color: "#d0d0d0ff" }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              TucciWebStudio
            </motion.h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
