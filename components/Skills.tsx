'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 94 },
      { name: 'JavaScript / TypeScript', level: 90 },
      { name: 'C / C++', level: 78 },
      { name: 'SQL', level: 91 },
    ],
  },
  {
    title: 'Frameworks & Platforms',
    skills: [
      { name: 'React & Next.js', level: 93 },
      { name: 'Node.js / Express.js', level: 90 },
      { name: 'Flask & REST APIs', level: 88 },
      { name: 'PostgreSQL / MongoDB', level: 87 },
    ],
  },
  {
    title: 'Data, QA & DevOps',
    skills: [
      { name: 'Pandas / NumPy / Matplotlib', level: 92 },
      { name: 'Selenium & Automated QA', level: 82 },
      { name: 'CI/CD & GitHub Actions', level: 88 },
      { name: 'Cloud & Microservices', level: 86 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="skills"
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
            Skills & Technologies
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">What I Know</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-purple-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={
                          isInView
                            ? { width: `${skill.level}%` }
                            : { width: 0 }
                        }
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          duration: 1,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating skill icons */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {[
            'React',
            'Next.js',
            'Node.js',
            'Python',
            'Java',
            'PostgreSQL',
            'MongoDB',
            'Docker',
            'AWS Lambda',
            'CI/CD',
            'Gemini API',
          ].map((tech, index) => (
            <motion.div
              key={tech}
              className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 text-sm text-gray-300"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 1 + index * 0.1,
                type: 'spring',
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: 'rgba(139, 92, 246, 0.2)',
                borderColor: 'rgba(139, 92, 246, 0.5)',
              }}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

