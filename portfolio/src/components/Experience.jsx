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
      'Delivered scalable, maintainable, and user-focused front-end solutions within Agile/Scrum workflows',
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
      'Edited gameplay videos with Premiere Pro, adding effects and smooth transitions to boost viewer engagement',
      'Used Photoshop and Illustrator to create on-brand digital content for social media promotion',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            My professional journey
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-secondary" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-6 z-10">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-25" />
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                  <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/20 rounded-xl">
                        <exp.icon className="text-primary text-xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{exp.title}</h3>
                        <p className="text-primary text-sm">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-gray-300 text-sm flex gap-2">
                          <span className="text-primary mt-1">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
