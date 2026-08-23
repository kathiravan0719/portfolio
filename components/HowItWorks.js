'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Tell Me Your Idea',
    description: 'Share your requirements through the project form — project type, budget, timeline and any reference websites you like.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    accent: '#22D3EE',
  },
  {
    number: '02',
    title: 'Discovery Call',
    description: "We connect via call or WhatsApp to discuss your goals, features, design direction, and finalize the timeline.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22L6.6 2a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.64 9.5a16 16 0 0 0 6.87 6.87l1.56-1.56a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    accent: '#818CF8',
  },
  {
    number: '03',
    title: 'Design & Build',
    description: 'I design, develop and test your website with regular progress updates — no surprises, just clean delivery.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    accent: '#F59E0B',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Your website goes live. I handle deployment, final testing, and provide post-launch support to ensure everything runs perfectly.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22 11 13 2 9l20-7z" />
      </svg>
    ),
    accent: '#10B981',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" className="py-24 md:py-40 px-6 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-indigo-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 mb-6 text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Process
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-800 tracking-tighter text-[var(--text-primary)] italic mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-lg leading-relaxed font-medium italic opacity-80">
            A simple, transparent process from first conversation to launch day.
          </p>
        </motion.div>

        {/* Steps — Desktop: horizontal, Mobile: vertical */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-[1px] bg-white/5 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 via-amber-500 to-emerald-500"
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="group glass-card p-6 md:p-8 rounded-[2rem] flex flex-col items-center text-center lg:text-left lg:items-start relative overflow-hidden transition-all duration-500 hover:border-white/20"
              >
                {/* Step ambient glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"
                  style={{
                    background: `radial-gradient(ellipse at top, ${step.accent}12 0%, transparent 70%)`,
                  }}
                />

                {/* Step Circle */}
                <div className="relative mb-6 z-10">
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10 border transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `${step.accent}15`,
                      borderColor: `${step.accent}30`,
                      color: step.accent,
                      boxShadow: `0 0 30px ${step.accent}15`,
                    }}
                    whileHover={{ boxShadow: `0 0 40px ${step.accent}40` }}
                  >
                    {step.icon}
                  </motion.div>
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{ borderColor: `${step.accent}20` }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  >
                    <div className="w-full h-full rounded-2xl border" style={{ borderColor: `${step.accent}20` }} />
                  </motion.div>
                </div>

                {/* Step number label */}
                <span
                  className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase mb-3 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] z-10"
                  style={{ color: step.accent }}
                >
                  Step {step.number}
                </span>

                <h3 className="text-xl font-display font-800 text-[var(--text-primary)] mb-3 italic tracking-tight z-10">
                  {step.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity z-10">
                  {step.description}
                </p>

                {/* Mobile connector arrow */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="lg:hidden mt-6 flex flex-col items-center gap-1 opacity-30 w-full"
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="w-[1px] h-6 bg-gradient-to-b from-white/30 to-transparent" />
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.7 }}
          className="text-center mt-20"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-cyan-500 text-white font-bold text-sm rounded-2xl transition-all hover:shadow-[0_20px_40px_rgba(6,182,212,0.3)] hover:-translate-y-1"
          >
            Start Your Project Today
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
