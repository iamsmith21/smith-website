'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    hidden: { opacity: 0, y: 50 },
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
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.span
              className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4"
            >
              About Me
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Who I Am</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I’m a 4th Year Computer Science student at York University’s Lassonde School of Engineering
                with hands-on experience delivering full-stack products for startups
                and AI tooling for creators. My work spans React, Next.js, Node.js, Python, and
                cloud-native infrastructure.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                During my time at FLOW Inc., I shipped features that support 5,000+ editors,
                optimized REST APIs by 22%, and automated QA workflows with Dockerized CI/CD.
                I also mentor learners globally through Chegg, explaining 200+ algorithmic and
                database problems with a 98% satisfaction score.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
              I’m obsessed with building systems that don’t fall apart under pressure, sneaking AI into every developer workflow I touch, and sharing what I learn so future-me can avoid past-me’s mistakes. Outside class, I’m usually tinkering with smart portfolio builders, resume screeners, and any tool that lets developers ship cool stuff with fewer headaches.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
          
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Too many to count', value: 'Systems I’ve Broken & Fixed' },
                    { label: 'React, Node.js, Docker', value: 'Tech I Actually Enjoy' },
                    { label: 'Everything humans forget to do', value: 'Things I Automate' },
                    { label: 'Undefined (overflow error)', value: 'Coffee Required Per Sprint' },                    
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <div className="text-3xl font-bold gradient-text mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

