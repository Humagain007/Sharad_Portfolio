import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'GreenSeafoods Web Platform',
    description: 'Full-stack seafood distribution platform with comprehensive order management, inventory tracking, and customer portal.',
    details: [
      'Built complete order management system with real-time status updates',
      'Implemented inventory tracking with automated stock alerts',
      'Created customer dashboard for order history and account management',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    gradient: 'from-[#10B981] to-[#059669]',
    github: null,
    live: null,
  },
  {
    title: 'Cloud Task Manager',
    description: 'Team collaboration tool enabling efficient task assignment, progress tracking, and project organization.',
    details: [
      'Developed drag-and-drop task boards with real-time sync',
      'Implemented role-based permissions and team workspaces',
      'Built notification system for task updates and deadlines',
    ],
    tech: ['React', 'TypeScript', 'REST API', 'Ant Design'],
    gradient: 'from-[#7B5CFF] to-[#4A3CFF]',
    github: null,
    live: null,
  },
  {
    title: 'NepSell Marketplace',
    description: 'E-commerce marketplace MVP connecting local buyers and sellers with secure transactions and listings management.',
    details: [
      'Built product listing system with search and filters',
      'Implemented secure user authentication and profiles',
      'Created responsive UI for seamless mobile browsing',
    ],
    tech: ['React', 'Redux', 'Tailwind CSS', 'JWT Auth'],
    gradient: 'from-[#F59E0B] to-[#D97706]',
    github: null,
    live: null,
  },
  {
    title: 'GreenSea Mobile App',
    description: 'Cross-platform mobile application for seafood ordering with Odoo ERP integration for enterprise clients.',
    details: [
      'Developed React Native app with Expo for iOS and Android',
      'Integrated Odoo API for real-time inventory and order sync',
      'Built offline-capable features for field operations',
    ],
    tech: ['React Native', 'Expo', 'Odoo API', 'TypeScript'],
    gradient: 'from-[#06B6D4] to-[#0284C7]',
    github: null,
    live: null,
  },
  {
    title: 'FoodAsia Mobile App',
    description: 'Food delivery mobile application with real-time order tracking, restaurant listings, and seamless checkout.',
    details: [
      'Built complete food ordering flow with cart management',
      'Implemented real-time order status tracking',
      'Integrated Odoo backend for restaurant and menu management',
    ],
    tech: ['React Native', 'Expo', 'Odoo API', 'Redux'],
    gradient: 'from-[#EF4444] to-[#DC2626]',
    github: null,
    live: null,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 sm:py-32 relative section-alt">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#7B5CFF]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#4A3CFF]/5 rounded-full blur-[120px]" />
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
              Portfolio
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-[#A1A1AA] max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in React, React Native, and full-stack development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Project Visual - MacBook Frame */}
                <motion.div
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity`} />

                    {/* MacBook Frame */}
                    <div className="relative macbook-frame">
                      {/* Notch */}
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-[#1A1A1A] rounded-full z-10" />

                      {/* Screen */}
                      <div className="macbook-screen aspect-[16/10] bg-gradient-to-br from-[#1A1A1A] to-[#111111] overflow-hidden">
                        {/* Project Preview */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <div className="text-center">
                            <div className={`text-5xl mb-4 opacity-30`}>
                              {index === 0 && '🦐'}
                              {index === 1 && '✓'}
                              {index === 2 && '🏪'}
                              {index === 3 && '📱'}
                              {index === 4 && '🍜'}
                            </div>
                            <p className={`text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                              {project.title}
                            </p>
                          </div>
                        </div>

                        {/* Fake UI Elements */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500/40" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                          <div className="w-2 h-2 rounded-full bg-green-500/40" />
                        </div>
                      </div>
                    </div>

                    {/* MacBook Base */}
                    <div className="h-3 bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A] rounded-b-lg relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#3D3D3D] rounded-b" />
                    </div>
                  </div>
                </motion.div>

                {/* Project Info */}
                <div className={`space-y-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-[#A1A1AA] leading-relaxed">{project.description}</p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex gap-3 text-sm text-[#A1A1AA]">
                        <span className="text-[#7B5CFF] mt-0.5">▹</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="tech-badge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-[#A1A1AA] hover:text-white border border-white/10 rounded-full hover:border-[#7B5CFF]/50 transition-all"
                      >
                        <FaGithub />
                        <span>Code</span>
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-gradient-to-r from-[#7B5CFF] to-[#4A3CFF] rounded-full"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    {!project.github && !project.live && (
                      <span className="text-sm text-[#71717A] italic">Private/Internal Project</span>
                    )}
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
