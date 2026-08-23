'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[50%] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 mb-6 text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Client Reviews
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-800 tracking-tighter text-[var(--text-primary)] italic mb-6">
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative glass-card p-12 md:p-16 rounded-[3rem] overflow-hidden text-center hover:border-cyan-400/30"
        >
          {/* Decorative top bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          {/* Star row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-2 mb-8"
          >
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                width="24" height="24" viewBox="0 0 24 24"
                fill="#F59E0B"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.08, type: 'spring', stiffness: 300 }}
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </motion.svg>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-4xl font-display font-800 text-[var(--text-primary)] italic mb-4 tracking-tight"
          >
            Client testimonials coming soon.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed opacity-80 max-w-xl mx-auto mb-10 italic"
          >
            Be among the first clients to work with me and share your experience. I'm committed to delivering results that speak for themselves.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center gap-3 px-8 py-4 glass border border-cyan-500/40 text-cyan-400 font-bold text-sm rounded-2xl hover:bg-cyan-500/20 hover:border-cyan-500/70 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] transition-all"
          >
            Be My First Client
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>

          {/* Decorative quote mark */}
          <div className="absolute -bottom-4 -right-4 text-[180px] font-serif text-white/[0.02] select-none leading-none pointer-events-none">
            "
          </div>
        </motion.div>
      </div>
    </section>
  )
}
