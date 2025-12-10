import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaMapMarkerAlt, FaGraduationCap, FaRocket, FaBriefcase } from 'react-icons/fa'

const highlights = [
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Belgium' },
  { icon: FaGraduationCap, label: 'Education', value: 'BCA - Tribhuvan University' },
  { icon: FaRocket, label: 'Focus', value: 'React & React Native' },
  { icon: FaBriefcase, label: 'Status', value: 'Open for roles' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7B5CFF]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-[#7B5CFF] font-medium mb-4 tracking-wide uppercase text-sm"
            >
              About Me
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Building digital experiences
              <br />
              <span className="gradient-text">that make a difference</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Background Decoration */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#7B5CFF]/20 to-[#4A3CFF]/10 rounded-3xl blur-xl" />

                {/* Main Card */}
                <div className="relative glass rounded-3xl p-8 overflow-hidden">
                  {/* Abstract Profile */}
                  <div className="aspect-square relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7B5CFF]/30 to-[#4A3CFF]/20 rounded-2xl" />
                    <div className="absolute inset-4 bg-[#1A1A1A] rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-6xl sm:text-7xl block mb-4">👨‍💻</span>
                        <p className="text-[#A1A1AA] text-sm font-medium">Frontend Developer</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badges */}
                  <motion.div
                    className="absolute -top-3 -right-3 px-4 py-2 bg-[#7B5CFF] rounded-full text-sm font-medium text-white shadow-lg shadow-[#7B5CFF]/30"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  >
                    React Expert
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              {/* Main Description */}
              <p className="text-lg text-[#A1A1AA] leading-relaxed">
                <span className="text-white font-medium">Frontend Developer</span> specializing in{' '}
                <span className="text-white">React</span>, <span className="text-white">TypeScript</span>, and{' '}
                <span className="text-white">React Native</span> with a focus on clean architecture,
                reusable components, and performance optimization.
              </p>

              <p className="text-[#A1A1AA] leading-relaxed">
                Currently developing mobile applications with React Native and Odoo API integration,
                including <span className="text-white">GreenSea</span> and <span className="text-white">FoodAsia</span> apps.
                My approach combines strong UI/UX implementation with solid technical foundations.
              </p>

              <p className="text-[#A1A1AA] leading-relaxed">
                What sets me apart: hands-on MERN stack experience, real-world API integrations,
                and a strong eye for translating designs into pixel-perfect, performant interfaces.
              </p>

              {/* Highlight Cards */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="glass p-4 rounded-xl group hover:bg-white/5 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#7B5CFF]/15 rounded-lg group-hover:bg-[#7B5CFF]/25 transition-colors">
                        <item.icon className="text-[#7B5CFF] text-lg" />
                      </div>
                      <div>
                        <p className="text-xs text-[#71717A]">{item.label}</p>
                        <p className="text-sm font-medium text-white">{item.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="pt-4"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#7B5CFF] font-medium hover:text-white transition-colors group"
                >
                  <span>Let's work together</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
