'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Business Websites',
    description: 'Modern, responsive websites for small businesses and startups that convert visitors into customers.',
    accent: '#22D3EE',
    tag: '01',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22L6.6 2a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.64 9.5a16 16 0 0 0 6.87 6.87l1.56-1.56a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: 'Landing Pages',
    description: 'High-converting landing pages for products, services and campaigns — built to drive action.',
    accent: '#818CF8',
    tag: '02',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Web Applications',
    description: 'Custom dashboards, portals and business applications built for your specific workflow.',
    accent: '#F59E0B',
    tag: '03',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    title: 'E-Commerce',
    description: 'Online stores with product management, cart, and payment integration — ready to sell.',
    accent: '#10B981',
    tag: '04',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
        <circle cx="7.5" cy="14.5" r="1.5" />
        <circle cx="16.5" cy="14.5" r="1.5" />
      </svg>
    ),
    title: 'AI-Powered Solutions',
    description: 'AI chatbots, intelligent tools and AI-integrated web applications that automate and enhance your business.',
    accent: '#A78BFA',
    tag: '05',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Website Redesign',
    description: 'Transform your outdated website into a modern, fast and conversion-ready digital experience.',
    accent: '#F472B6',
    tag: '06',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 20, stiffness: 90 },
  },
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 md:py-40 px-6 relative overflow-hidden" ref={ref}>
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-[10%] left-[-5%] w-[45%] h-[45%] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 mb-6 text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
            What I Offer
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-800 tracking-tighter text-[var(--text-primary)] italic mb-6">
            What I Can <span className="text-gradient">Build For You</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-lg leading-relaxed font-medium italic opacity-80">
            From simple landing pages to complex web applications — I deliver fast, modern digital solutions tailored to your goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative glass-card p-8 rounded-[2rem] overflow-hidden cursor-default"
              style={{
                '--accent': service.accent,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"
                style={{
                  background: `radial-gradient(ellipse at top left, ${service.accent}15 0%, transparent 70%)`,
                }}
              />
              {/* Accent border on hover */}
              <div
                className="absolute inset-0 rounded-[2rem] border opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ borderColor: `${service.accent}40` }}
              />

              {/* Tag number */}
              <div className="absolute top-6 right-6">
                <span
                  className="text-[10px] font-mono font-bold tracking-widest opacity-40 group-hover:opacity-80 transition-opacity px-2.5 py-1 rounded-full border border-white/5 bg-white/[0.02]"
                  style={{ color: service.accent }}
                >
                  {service.tag}
                </span>
              </div>

              {/* Icon */}
              <div
                className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 border"
                style={{
                  background: `${service.accent}15`,
                  borderColor: `${service.accent}30`,
                  color: service.accent,
                  boxShadow: `0 0 24px ${service.accent}20`,
                }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-display font-800 text-[var(--text-primary)] mb-3 tracking-tight italic">
                  {service.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>
              </div>

              {/* CTA arrow */}
              <div className="relative z-10 mt-6 flex items-center gap-2 text-xs font-mono font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                style={{ color: service.accent }}
              >
                <a href="#contact" className="flex items-center gap-2 hover:gap-3 transition-all">
                  Start This Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-[var(--text-secondary)] text-xs font-mono opacity-60 mb-6 tracking-widest uppercase">Not sure what you need?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 glass border border-cyan-500/30 text-cyan-400 font-bold text-sm rounded-2xl hover:bg-cyan-500/20 hover:border-cyan-500/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all hover:-translate-y-1"
          >
            Let's discuss your idea
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
