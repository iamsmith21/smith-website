'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <div className="mx-auto max-w-5xl">
            <motion.div variants={itemVariants} className="mb-6">
              <motion.span
                className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Welcome to my portfolio
              </motion.span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Hi, I'm Smith Patel</span>
              <br />
              </motion.h1>
              <motion.h2 variants={itemVariants} className="text-5xl md:text-5xl font-bold mb-4">
              <motion.span
                className="text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 3 }}
              >
                Full-Stack Developer
              </motion.span>
              </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
            >
              Code with intention. Systems with depth. Experiences that last...
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold glow-hover"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-transparent border-2 border-purple-500 rounded-full text-purple-400 font-semibold"
                whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-16">
              {[
                { icon: Github, href: 'https://github.com/iamsmith21', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/smith-patel-778004233/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:deep.smith100@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-purple-500 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={24} className="text-gray-400 hover:text-purple-400" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center">
              <motion.a
                href="#about"
                className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="mb-2 text-sm">Scroll to explore</span>
                <ArrowDown size={24} />
              </motion.a>
            </motion.div>
          </div>

        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>
    </section>
  )
}

