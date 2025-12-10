import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Development Team',
    role: 'IT Bridge Nepal',
    initials: 'DT',
    text: 'Sharad consistently delivered high-quality front-end code. His attention to detail and ability to translate designs into pixel-perfect interfaces made him a valuable team member.',
    rating: 5,
  },
  {
    name: 'Project Stakeholder',
    role: 'Finance Platform',
    initials: 'PS',
    text: 'The finance dashboard Sharad built exceeded our expectations. Clean code, great performance, and a seamless user experience.',
    rating: 5,
  },
  {
    name: 'Collaboration Partner',
    role: 'E-Learning Project',
    initials: 'CP',
    text: 'Working with Sharad was smooth and professional. He understood our requirements quickly and delivered responsive, accessible interfaces.',
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 sm:py-32 relative section-alt">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B5CFF]/5 rounded-full blur-[150px]" />
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
              Testimonials
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              What people <span className="gradient-text">say</span>
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="glass p-6 sm:p-8 rounded-2xl relative group hover:border-[#7B5CFF]/20 transition-all"
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="text-[#7B5CFF]/20 text-2xl mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#F59E0B] text-sm" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#7B5CFF] to-[#4A3CFF] rounded-full flex items-center justify-center text-sm font-medium text-white">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-[#71717A]">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
