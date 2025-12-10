import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const contactInfo = [
  { icon: FaEnvelope, label: 'Email', value: 'sharadhumagain@gmail.com', href: 'mailto:sharadhumagain@gmail.com' },
  { icon: FaPhone, label: 'Phone', value: '+32 465 560 211', href: 'tel:+32465560211' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Belgium', href: null },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://linkedin.com/in/sharad-humagain-401ba61a0' },
]

const EMAILJS_SERVICE_ID = 'service_za2rpmd'
const EMAILJS_TEMPLATE_ID = 'template_xf7k4bl'
const EMAILJS_PUBLIC_KEY = 'GkFeHLkGb8IJf2Zvi'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7B5CFF]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Contact
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-[#A1A1AA] max-w-xl mx-auto">
              Feel free to reach out — I'm always happy to discuss opportunities or interesting ideas.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-2 space-y-4"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Let's connect</h3>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 glass p-4 rounded-xl hover:bg-white/5 hover:border-[#7B5CFF]/20 transition-all group"
                    >
                      <div className="p-3 bg-[#7B5CFF]/15 rounded-lg group-hover:bg-[#7B5CFF]/25 transition-colors">
                        <info.icon className="text-[#7B5CFF] text-lg" />
                      </div>
                      <div>
                        <p className="text-xs text-[#71717A] mb-0.5">{info.label}</p>
                        <p className="text-sm font-medium text-white">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 glass p-4 rounded-xl">
                      <div className="p-3 bg-[#7B5CFF]/15 rounded-lg">
                        <info.icon className="text-[#7B5CFF] text-lg" />
                      </div>
                      <div>
                        <p className="text-xs text-[#71717A] mb-0.5">{info.label}</p>
                        <p className="text-sm font-medium text-white">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:col-span-3 glass p-8 rounded-2xl"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-[#A1A1AA] mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#1A1A1A] border border-white/10 rounded-xl text-white placeholder:text-[#71717A] focus:border-[#7B5CFF] focus:ring-2 focus:ring-[#7B5CFF]/20 focus:outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#A1A1AA] mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#1A1A1A] border border-white/10 rounded-xl text-white placeholder:text-[#71717A] focus:border-[#7B5CFF] focus:ring-2 focus:ring-[#7B5CFF]/20 focus:outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#A1A1AA] mb-2 font-medium">Message</label>
                  <textarea
                    name="title"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#1A1A1A] border border-white/10 rounded-xl text-white placeholder:text-[#71717A] focus:border-[#7B5CFF] focus:ring-2 focus:ring-[#7B5CFF]/20 focus:outline-none transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-sm ${status.type === 'success'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                      }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.01 }}
                  whileTap={{ scale: isLoading ? 1 : 0.99 }}
                  className={`w-full py-4 bg-gradient-to-r from-[#7B5CFF] to-[#4A3CFF] rounded-xl font-medium text-white transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-[#7B5CFF]/25'
                    }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
