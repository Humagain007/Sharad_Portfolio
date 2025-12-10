import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const socials = [
  { icon: FaGithub, href: 'https://github.com/sharadhumagain', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/sharad-humagain-401ba61a0', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:sharadhumagain@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4"
          >
            <span className="text-lg font-bold gradient-text">SH</span>
            <span className="text-[#71717A] text-sm">
              © {new Date().getFullYear()} Sharad Humagain
            </span>
          </motion.div>

          {/* Made with */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#71717A] text-sm flex items-center gap-1.5 order-3 md:order-2"
          >
            Built with
            <FaHeart className="text-[#7B5CFF] text-xs" />
            using React & Tailwind
          </motion.p>

          {/* Social Links */}
          <div className="flex items-center gap-3 order-2 md:order-3">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 text-[#71717A] hover:text-[#7B5CFF] transition-colors"
              >
                <social.icon className="text-lg" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
