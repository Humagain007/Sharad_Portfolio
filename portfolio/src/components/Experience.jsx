import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBriefcase, FaYoutube } from 'react-icons/fa'

const experiences = [
  {
    title: 'Front-End Developer',
    company: 'Information Technology Bridge Nepal',
    location: 'Banepa, Nepal',
    period: 'Feb 2024 - Jun 2025',
    icon: FaBriefcase,
    points: [
      'Developed responsive web applications for finance, education, and food delivery sectors using React.js, TypeScript, and Redux',
      'Integrated RESTful APIs with Axios, implementing JWT-based authentication and role-based access control',
      'Built dynamic forms with validation and reusable UI components using Ant Design and Tailwind CSS',
      'Collaborated with UI/UX designers and backend engineers to refine requirements and shape design decisions',
      'Delivered scalable, maintainable front-end solutions within Agile/Scrum workflows',
    ],
  },
  {
    title: 'Graphic Designer & Video Editor',
    company: 'Devil Gamer, YouTube',
    location: 'USA (Remote)',
    period: 'May 2020 - Nov 2020',
    icon: FaYoutube,
    points: [
      'Designed engaging thumbnails, banners, and channel art, enhancing brand visibility',
      'Edited gameplay videos with Premiere Pro, adding effects and smooth transitions',
      'Created on-brand digital content for social media promotion',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 w-[400px] h-[600px] bg-[#7B5CFF]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Career
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Professional <span className="gradient-text">Experience</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Glowing Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px">
              <div className="absolute inset-0 bg-gradient-to-b from-[#7B5CFF] via-[#4A3CFF] to-[#7B5CFF]/30" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#7B5CFF] via-[#4A3CFF] to-[#7B5CFF]/30 blur-sm" />
            </div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 mt-8">
                  <div className="absolute inset-0 bg-[#7B5CFF] rounded-full" />
                  <div className="absolute inset-0 bg-[#7B5CFF] rounded-full animate-ping opacity-25" />
                  <div className="absolute -inset-2 bg-[#7B5CFF]/20 rounded-full blur-sm" />
                </div>

                {/* Content Card */}
                <div className={`md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-0' : 'md:pl-0'} pl-12 md:pl-0`}>
                  <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className="glass p-6 sm:p-8 rounded-2xl hover:border-[#7B5CFF]/20 transition-all hover:shadow-lg hover:shadow-[#7B5CFF]/5"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-[#7B5CFF]/15 rounded-xl shrink-0">
                        <exp.icon className="text-[#7B5CFF] text-xl" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-lg text-white">{exp.title}</h3>
                        <p className="text-[#7B5CFF] text-sm font-medium">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#71717A] mb-6">
                      <span className="px-3 py-1 bg-white/5 rounded-full">{exp.period}</span>
                      <span className="px-3 py-1 bg-white/5 rounded-full">{exp.location}</span>
                    </div>

                    {/* Points */}
                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-3 text-sm text-[#A1A1AA]">
                          <span className="text-[#7B5CFF] mt-1.5 shrink-0">▹</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
