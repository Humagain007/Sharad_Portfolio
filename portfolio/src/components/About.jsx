import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaMapMarkerAlt, FaGraduationCap, FaTrophy } from 'react-icons/fa'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Get to know me better
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="w-full aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl rotate-6" />
                <div className="absolute inset-0 glass rounded-2xl flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                A passionate Frontend Developer with a knack for turning React, TypeScript, and the latest web tech into high-performance apps that put users first. I love tackling state management, weaving APIs into smooth designs, and crafting responsive UIs with a sharp eye for UX/UI and accessibility.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 glass p-4 rounded-xl">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-medium">Belgium</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 glass p-4 rounded-xl">
                  <FaGraduationCap className="text-primary text-xl" />
                  <div>
                    <p className="text-sm text-gray-400">Education</p>
                    <p className="font-medium">BCA - Tribhuvan University (2019-2024)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 glass p-4 rounded-xl">
                  <FaTrophy className="text-primary text-xl" />
                  <div>
                    <p className="text-sm text-gray-400">Achievement</p>
                    <p className="font-medium">2nd Runner-Up, Mero Voice Universe S1</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
