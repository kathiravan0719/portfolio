'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Modern Development',
    description:
      'Built using up-to-date web technologies and development best practices — no outdated code, no shortcuts.',
    accent: '#22D3EE',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Mobile First',
    description:
      'Every website is designed to work properly across mobile, tablet and desktop — because most visitors arrive on phones.',
    accent: '#818CF8',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
      </svg>
    ),
    title: 'AI & Modern Web',
    description:
      'Experience building AI-powered features, intelligent chatbots and modern web integrations into real projects.',
    accent: '#F59E0B',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22L6.6 2a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.64 9.5a16 16 0 0 0 6.87 6.87l1.56-1.56a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: 'Full-Stack Capability',
    description:
      'Frontend, backend, database and deployment — I handle the complete development stack so you only need one person.',
    accent: '#10B981',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22 11 13 2 9l20-7z" />
      </svg>
    ),
    title: 'Deployment Support',
    description:
      "I help take the project from development to a live, working website — not just handing you raw files.",
    accent: '#A78BFA',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function WhyWorkWithMe() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-me" className="py-24 md:py-36 px-6 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-indigo-500/5 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 mb-6 text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Why Choose Me
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-800 tracking-tighter text-white italic mb-6">
            Why Work <span className="text-gradient">With Me?</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg leading-relaxed font-medium italic opacity-80">
            A developer who cares about your results, not just the code.
          </p>
        </motion.div>

        {/* Cards grid — 3 + 2 layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="group glass-card p-8 rounded-[2rem] relative overflow-hidden cursor-default"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"
                style={{ background: `radial-gradient(ellipse at top left, ${reason.accent}12 0%, transparent 70%)` }}
              />
              {/* Hover border */}
              <div
                className="absolute inset-0 rounded-[2rem] border opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ borderColor: `${reason.accent}35` }}
              />

              {/* Icon */}
              <div
                className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${reason.accent}15`,
                  borderColor: `${reason.accent}30`,
                  color: reason.accent,
                  boxShadow: `0 0 20px ${reason.accent}18`,
                }}
              >
                {reason.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-display font-800 text-white mb-3 tracking-tight italic">
                  {reason.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 glass border border-cyan-500/30 text-cyan-400 font-bold text-sm rounded-2xl hover:bg-cyan-500/20 hover:border-cyan-500/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all hover:-translate-y-1"
          >
            Discuss Your Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
