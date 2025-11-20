'use client'

import { motion, useInView } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { useRef } from 'react'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="education"
      ref={ref}
      className="py-32"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4">
            Education
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">York University</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-start md:items-center"
        >
          <div className="p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20">
            <GraduationCap size={32} className="text-purple-300" />
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap gap-3 items-center">
              <p className="text-lg uppercase tracking-wide text-purple-300 font-semibold">
                Bachelor of Science (Honours) — Computer Science
              </p>
              <span className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                Expected Apr 2026
              </span>
            </div>
            <p className="text-gray-400">
              Lassonde School of Engineering · Toronto, ON
            </p>
            <p className="text-gray-300">
              Relevant Coursework: Algorithms, Database Systems, Software Tools, Operating Systems, Computer Networks, Cybersecurity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


