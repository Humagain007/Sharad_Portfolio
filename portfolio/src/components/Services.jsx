import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCode, FaMobileAlt, FaPalette, FaServer } from 'react-icons/fa'

const services = [
  {
    icon: FaCode,
    title: 'Web Development',
    description: 'High-performance React & TypeScript applications that scale. Clean code, reusable components, and seamless user experiences.',
    gradient: 'from-[#7B5CFF] to-[#4A3CFF]',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications with React Native and Expo. Odoo API integration for enterprise solutions.',
    gradient: 'from-[#06B6D4] to-[#0284C7]',
  },
  {
    icon: FaPalette,
    title: 'UI/UX Implementation',
    description: 'Pixel-perfect, accessible interfaces translated from Figma designs. Smooth animations and polished interactions.',
    gradient: 'from-[#F59E0B] to-[#D97706]',
  },
  {
    icon: FaServer,
    title: 'Full-Stack MERN',
    description: 'Complete web solutions from database to deployment. MongoDB, Express, React, and Node.js expertise.',
    gradient: 'from-[#10B981] to-[#059669]',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#7B5CFF]/5 rounded-full blur-[120px]" />
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
              What I Offer
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Services that drive <span className="gradient-text">results</span>
            </h2>
            <p className="text-[#A1A1AA] mt-4 max-w-2xl mx-auto">
              Delivering end-to-end development solutions that help businesses grow
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="h-full glass rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-[#7B5CFF]/30 hover:shadow-lg hover:shadow-[#7B5CFF]/5">
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7B5CFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Icon */}
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-xl text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-lg font-semibold text-white mb-3">{service.title}</h3>
                  <p className="relative text-sm text-[#A1A1AA] leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
