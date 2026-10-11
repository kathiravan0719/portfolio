'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const includes = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    label: 'Modern Responsive Website',
    color: '#22D3EE',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    label: 'Mobile-Friendly Design',
    color: '#818CF8',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    label: 'Professional UI & UX',
    color: '#F59E0B',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    label: 'Contact / Enquiry Form',
    color: '#10B981',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
      </svg>
    ),
    label: 'WhatsApp Integration',
    color: '#25D366',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    label: 'Basic SEO Setup',
    color: '#F472B6',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22 11 13 2 9l20-7z" />
      </svg>
    ),
    label: 'Website Deployment',
    color: '#A78BFA',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: 'Support During the Project',
    color: '#22D3EE',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function FreeInitiative() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="free-initiative" className="py-24 md:py-36 px-6 relative overflow-hidden" ref={ref}>
      {/* Background ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-cyan-500/6 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-[-5%] w-[40%] h-[50%] bg-indigo-500/6 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Top badge + headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 mb-6 text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Limited Opportunity
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-800 tracking-tighter text-white italic mb-6">
            Free Website <span className="text-gradient">Initiative</span>
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium mb-8">
            I'm currently building my freelance portfolio and working with a small number of businesses and professionals.
            Selected projects can receive a modern, responsive website{' '}
            <span className="text-white font-semibold">completely free of development charges.</span>
          </p>

          {/* Availability pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-amber-400/40 bg-amber-400/5 backdrop-blur-xl mb-4"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_#FBBF24]" />
            <span className="text-sm font-mono font-bold text-amber-400 tracking-widest uppercase">
              3–5 Projects Only
            </span>
          </motion.div>

          <p className="text-zinc-500 text-sm font-mono mt-3">
            Projects are selected based on scope, fit and availability.
          </p>
        </motion.div>

        {/* What's included grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-6"
        >
          <p className="text-center text-[10px] font-mono text-zinc-500 tracking-[0.3em] uppercase mb-8">
            What Selected Projects Include
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {includes.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="glass-card p-5 rounded-2xl flex items-center gap-4 group hover:border-white/20 transition-all"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all group-hover:scale-110"
                  style={{
                    background: `${item.color}15`,
                    borderColor: `${item.color}30`,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-zinc-200 leading-tight group-hover:text-white transition-colors">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-sm rounded-2xl hover:from-cyan-400 hover:to-indigo-500 transition-all duration-300 shadow-[0_10px_40px_rgba(6,182,212,0.3)] hover:shadow-[0_15px_50px_rgba(6,182,212,0.45)] hover:-translate-y-0.5"
          >
            Apply for a Free Website
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="mt-8 max-w-2xl mx-auto text-xs text-zinc-600 leading-relaxed font-mono"
          >
            * Free development applies to selected projects. Third-party costs such as domain registration, premium hosting,
            paid APIs, payment gateways, premium assets or other external services may be charged separately when required.
          </motion.p>
        </motion.div>

      </div>
    </section>
  )
}
