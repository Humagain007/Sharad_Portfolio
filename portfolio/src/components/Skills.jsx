import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma } from 'react-icons/fa'
import { SiTypescript, SiRedux, SiTailwindcss, SiAntdesign, SiAdobephotoshop, SiAdobepremierepro } from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', icon: FaReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'Ant Design', icon: SiAntdesign, color: '#0170FE' },
    ],
  },
  {
    title: 'Tools & Creative',
    skills: [
      { name: 'Git/GitHub', icon: FaGitAlt, color: '#F05032' },
      { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
      { name: 'Photoshop', icon: SiAdobephotoshop, color: '#31A8FF' },
      { name: 'Premiere Pro', icon: SiAdobepremierepro, color: '#9999FF' },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20 sm:py-32 bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>

          <div className="space-y-16">
            {skillCategories.map((category, catIndex) => (
              <div key={category.title}>
                <h3 className="text-xl font-semibold mb-8 text-center text-gray-300">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: catIndex * 0.2 + i * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="glass p-4 rounded-xl flex flex-col items-center gap-3 cursor-pointer group"
                    >
                      <skill.icon
                        className="text-4xl transition-colors"
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
