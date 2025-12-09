import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const socials = [
  { icon: FaGithub, href: 'https://github.com/sharadhumagain' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/sharad-humagain-401ba61a0' },
  { icon: FaEnvelope, href: 'mailto:sharadhumagain@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 text-sm flex items-center gap-1"
          >
             Sharad Humagain © {new Date().getFullYear()}
          </motion.p>

          <div className="flex items-center gap-4">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <social.icon className="text-xl" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
