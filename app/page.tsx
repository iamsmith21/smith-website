'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Snowfall from 'react-snowfall'
export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 })
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <main className="relative min-h-screen">
      <Snowfall color='#82C3D9' />
      {/* Animated background gradient */}
      <motion.div
        className="fixed inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(102, 126, 234, 0.1) 0%, transparent 50%)`,
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Interactive floating orbs that respond to mouse */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => {
          // Fixed positions based on index to avoid hydration issues
          // Use percentage-based positioning for consistency
          const baseXPercent = ((i * 137.5) % 100)
          const baseYPercent = ((i * 237.5) % 100)
          const baseX = (baseXPercent / 100) * windowSize.width
          const baseY = (baseYPercent / 100) * windowSize.height
          
          // Calculate distance from mouse to orb
          const dx = mousePosition.x - baseX
          const dy = mousePosition.y - baseY
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          // Attraction effect (stronger when closer, max influence at 300px)
          const maxDistance = 300
          const attraction = distance > 0 && distance < maxDistance 
            ? Math.max(0, 1 - distance / maxDistance) 
            : 0
          const moveX = distance > 0 ? (dx / distance) * attraction * 30 : 0
          const moveY = distance > 0 ? (dy / distance) * attraction * 30 : 0
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-20 blur-sm"
              style={{
                width: `${20 + i * 2}px`,
                height: `${20 + i * 2}px`,
                background: i % 3 === 0 
                  ? 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent)'
                  : i % 3 === 1
                  ? 'radial-gradient(circle, rgba(236, 72, 153, 0.4), transparent)'
                  : 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent)',
              }}
              initial={{
                x: baseX,
                y: baseY,
              }}
              animate={{
                x: baseX + moveX,
                y: baseY + moveY,
                scale: [1, 1.2, 1],
              }}
              transition={{
                x: { duration: 0.5, ease: 'easeOut' },
                y: { duration: 0.5, ease: 'easeOut' },
                scale: {
                  duration: 3 + (i * 0.2),
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            />
          )
        })}
      </div>

      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}

