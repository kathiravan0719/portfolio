'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { number: '3+', label: 'Projects Built' },
  { number: 'MERN', label: 'Core Stack' },
  { number: 'AI', label: 'Integrated' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Left: Text */}
          <div>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-mono tracking-widest uppercase rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
              Identity
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-800 tracking-tight text-[var(--text-primary)] mb-8">
              Crafting Digital <br />
              <span className="text-gradient">Experiences</span>
            </h2>
            <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed font-medium">
              <p>
                I am a <span className="text-[var(--text-primary)]">Full Stack Developer</span> with
                a focus on building scalable web solutions using the MERN stack.
              </p>
              <p>
                My approach combines <span className="text-[var(--text-primary)]">clean architecture</span> with
                intuitive user interfaces. I believe in code that is as beautiful as the pixels it renders.
              </p>
              <p>
                Currently exploring the frontiers of <span className="text-cyan-500">AI integration</span> and 
                real-time collaborative systems to push what's possible on the web.
              </p>
            </div>

            <div className="mt-12 flex gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-white/5 border border-white/5 hover:border-white/20 text-[var(--text-primary)] font-bold text-sm rounded-2xl transition-all hover:bg-white/10"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right: Stats + Visual */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="glass p-4 md:p-6 rounded-3xl text-center"
                >
                  <p className="text-2xl md:text-3xl font-display font-800 text-gradient mb-1 italic">{stat.number}</p>
                  <p className="text-[var(--text-secondary)] text-[8px] md:text-[10px] font-mono tracking-widest uppercase opacity-60 italic">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="glass p-5 xs:p-8 rounded-3xl font-mono text-[10px] xs:text-xs md:text-sm shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 opacity-50" />
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/40" />
                <span className="ml-2 text-[var(--text-secondary)] text-[10px] tracking-widest uppercase opacity-40">profile.config</span>
              </div>
              <div className="space-y-2 opacity-90">
                <p><span className="text-indigo-400">const</span> <span className="text-cyan-400">developer</span> <span className="text-[var(--text-primary)]">= {'{'}</span></p>
                <p className="pl-4"><span className="text-[var(--text-secondary)]">name:</span> <span className="text-emerald-400">'Kathiravan'</span><span className="text-[var(--text-primary)]">,</span></p>
                <p className="pl-4"><span className="text-[var(--text-secondary)]">stack:</span> <span className="text-[var(--text-primary)]">[</span><span className="text-emerald-400">'MERN'</span><span className="text-[var(--text-primary)]">, </span><span className="text-emerald-400">'AI'</span><span className="text-[var(--text-primary)]">],</span></p>
                <p className="pl-4"><span className="text-[var(--text-secondary)]">focus:</span> <span className="text-emerald-400">'Scalability'</span></p>
                <p><span className="text-[var(--text-primary)]">{'}'}</span></p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
