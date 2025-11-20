'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'LUEV – Electric Vehicles Store',
    description:
      'Full-stack e-commerce experience for 100+ EV products with AI chatbot support. Elevated performance by 35% and cut React page loads under 300ms while orchestrating secure auth, product, and payment APIs.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
    image: '⚡',
    github: 'https://github.com/iamsmith21/LUEV',
    demo: 'https://luev-frontend.onrender.com/',
    featured: true,
  },
  {
    title: 'Smart Portfolio Generator',
    description:
      'Next.js + Prisma platform that ingests GitHub repos, summarizes work with the Gemini API, and deploys a polished portfolio in <90s. Uses GitHub GraphQL caching, Zod validation, and Vercel Cron for automated rebuilds.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Gemini API'],
    image: '🧠',
    github: 'https://github.com/iamsmith21/smart_portfolio_manager',
    demo: 'https://smart-portfolio-manager.vercel.app/',
    featured: true,
  },
  {
    title: 'AI Resume Screener',
    description:
      'Python + Flask engine that compares 500+ job descriptions using semantic embeddings, delivers batch feedback via Streamlit, and exports PDF-ready reports. Caching + concurrency cut latency by 60% and improved match accuracy by 40%.',
    technologies: ['Python', 'Flask', 'Streamlit', 'Gemini API'],
    image: '📄',
    github: 'https://github.com/iamsmith21/ai_resume_scanner',
    demo: '#',
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and experience in
            web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 h-full flex flex-col hover:border-purple-500/50 transition-all duration-300 overflow-hidden relative"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="relative z-10">
                  <div className="text-5xl mb-4">{project.image}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300 border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Demo</span>
                    </motion.a>
                  </div>
                </div>

                {/* Hover effect overlay */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

