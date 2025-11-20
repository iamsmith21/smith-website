'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'FLOW Inc. · Toronto, ON',
    period: 'May 2023 – Sep 2023',
    description: [
      'Developed and maintained React + Node.js (Express) applications supporting 5,000+ active editors.',
      'Optimized PostgreSQL queries and backend APIs, reducing response times by 22%.',
      'Enhanced content scheduling, SEO tagging, and analytics dashboards to boost editor productivity by 25%.',
      'Automated 8+ QA flows with Jest and Postman, increasing coverage by 30% and cutting manual testing by 40%.',
      'Containerized services with Docker and shipped CI/CD pipelines via GitHub Actions for 100% deployment success.',
    ],
  },
  {
    title: 'Subject Matter Expert (Computer Science)',
    company: 'Chegg Inc. · Remote',
    period: 'Dec 2023 – May 2024',
    description: [
      'Solved and explained 200+ algorithm, data structures, and SQL problems with a 98% learner satisfaction rating.',
      'Produced tutorials on recursion, dynamic programming, and data management that improved engagement by 35%.',
      'Reviewed peer submissions for performance, accuracy, and clarity to keep the shared repository high quality.',
      'Mentored learners on debugging workflows, full-stack project planning, and database optimization best practices.',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="experience"
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
            Experience
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Work History</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black transform md:-translate-x-1/2 z-10" />

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-6/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-purple-400">
                          <Briefcase size={16} />
                          <span className="text-sm">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="text-gray-300 text-sm flex items-start gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            isInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -20 }
                          }
                          transition={{
                            delay: index * 0.2 + itemIndex * 0.1 + 0.3,
                            duration: 0.4,
                          }}
                        >
                          <span className="text-purple-500 mt-1">▹</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

