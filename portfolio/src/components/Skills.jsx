import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaNodeJs,
} from 'react-icons/fa'
import {
  SiTypescript, SiRedux, SiTailwindcss, SiMongodb, SiExpress,
  SiExpo, SiPostman, SiVite
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'React Native', icon: FaReact, color: '#61DAFB' },
      { name: 'Expo', icon: SiExpo, color: '#FFFFFF' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git/GitHub', icon: FaGitAlt, color: '#F05032' },
      { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 sm:py-32 relative section-alt">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#7B5CFF]/5 rounded-full blur-[150px]" />
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
              Technical Skills
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Tools of the <span className="gradient-text">trade</span>
            </h2>
            <p className="text-[#A1A1AA] max-w-2xl mx-auto">
              A curated stack of modern technologies for building robust, scalable applications
            </p>
          </div>

          {/* Skills Grid by Category */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + catIndex * 0.1, duration: 0.5 }}
                className="space-y-4"
              >
                {/* Category Header */}
                <h3 className="text-sm font-semibold text-[#7B5CFF] uppercase tracking-wider pb-3 border-b border-white/10">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + catIndex * 0.1 + i * 0.05, duration: 0.4 }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      className="flex items-center gap-3 p-3 glass rounded-lg cursor-default group hover:bg-white/5 transition-all"
                    >
                      <skill.icon
                        className="text-xl transition-all group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm text-[#A1A1AA] group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
