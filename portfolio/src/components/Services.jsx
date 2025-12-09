import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCode, FaMobile, FaPaintBrush, FaRocket } from 'react-icons/fa'

const services = [
  {
    icon: FaCode,
    title: 'Web Development',
    description: 'Building responsive, high-performance web applications with React, TypeScript, and modern frameworks.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FaMobile,
    title: 'UI/UX Implementation',
    description: 'Transforming designs into pixel-perfect, accessible interfaces with smooth animations and interactions.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FaPaintBrush,
    title: 'Graphic Design',
    description: 'Creating engaging visual content, thumbnails, banners, and brand assets using Photoshop and Illustrator.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: FaRocket,
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed, SEO, and scalability with best practices and modern tooling.',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Services I provide to bring your ideas to life
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="glass p-6 rounded-2xl group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
