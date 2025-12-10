import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Finance Dashboard',
    description: 'A comprehensive financial management dashboard with real-time data visualization, transaction tracking, and analytics built for the finance sector.',
    tech: ['React.js', 'TypeScript', 'Redux', 'Ant Design', 'REST API'],
    image: '💰',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'E-Learning Platform',
    description: 'Educational web application featuring course management, video streaming, progress tracking, and interactive learning modules.',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'JWT Auth'],
    image: '📚',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Food Delivery App',
    description: 'Modern food delivery platform with restaurant listings, real-time order tracking, cart management, and seamless checkout experience.',
    tech: ['React.js', 'Redux', 'Axios', 'Responsive Design'],
    image: '🍔',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'YouTube Channel Branding',
    description: 'Complete visual identity design including thumbnails, banners, channel art, and video editing for gaming content creator.',
    tech: ['Photoshop', 'Illustrator', 'Premiere Pro'],
    image: '🎮',
    liveLink: 'https://www.youtube.com/@Arabpati',
    color: 'from-purple-500 to-pink-500',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 sm:py-32 bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Some of my recent work
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden group"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        <FaGithub className="text-xl" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </motion.button>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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
