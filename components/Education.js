'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const educationData = [
  {
    degree: 'Bachelor Of Computer Science And Engineering',
    institution: 'Karpaga Vinayaga College Of Engineering And technology',
    period: '2022 – 2026',
    location: 'Chengalpattu, India',
    accent: '#34D399'
  },
  {
    degree: 'Higher Secondary',
    institution: 'Laurel Higher Secondary School',
    period: '2020 – 2022',
    location: 'Pattukkottai, Thanjavur',
    details: 'Mathematics & Computer Science',
    accent: '#F59E0B'
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-24 md:py-32 px-6 relative bg-[var(--bg)] overflow-hidden" ref={ref}>
      {/* Background Decorative Glow (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-mono tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-800 tracking-tight text-[var(--text-primary)] italic">
            Education <span className="text-gradient">Timeline</span>
          </h2>
        </motion.div>

        <div className="space-y-12 relative">
          {/* Vertical Connecting Line (Centered) */}
          <div className="hidden md:block absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-white/5 overflow-hidden">
             <motion.div 
               className="w-full h-full bg-gradient-to-b from-emerald-500 via-teal-500 to-transparent"
               initial={{ y: '-100%' }}
               animate={inView ? { y: '100%' } : {}}
               transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
             />
          </div>

          <div className="space-y-12 relative">
            {educationData.map((edu, i) => (
              <motion.div
                key={edu.degree}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ delay: i * 0.2 }}
                className="group relative md:pl-20"
              >
                {/* Timeline Node (Icon) */}
                <div className="hidden md:flex absolute left-[2px] top-4 w-12 h-12 rounded-2xl glass items-center justify-center text-emerald-400 z-20 group-hover:scale-110 group-hover:border-white/20 transition-all duration-300">
                    <GraduationCap size={20} />
                </div>

                <div className="glass p-6 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all duration-500 relative z-10 overflow-hidden">
                   {/* Background Shimmer Layer */}
                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                   <div className="relative z-10">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-xl md:text-3xl font-display font-800 text-[var(--text-primary)] transition-colors group-hover:text-emerald-400">
                          {edu.degree}
                        </h4>
                        <p className="text-base text-[var(--text-secondary)] font-medium mt-3 italic">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1 font-mono text-[10px] md:text-xs opacity-60">
                        <span className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded-md tracking-tighter"><Calendar size={12} /> {edu.period}</span>
                        <span className="flex items-center gap-2"><MapPin size={12} /> {edu.location}</span>
                      </div>
                    </div>
                    {edu.details && (
                       <p className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 text-[10px] font-mono tracking-[0.2em] uppercase mt-4">
                          {edu.details}
                       </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Callout (Small) */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={inView ? { opacity: 1 } : {}}
           transition={{ delay: 1, duration: 1 }}
           className="mt-16 text-center"
        >
           <p className="text-[var(--text-secondary)] font-mono text-[9px] tracking-[0.5em] uppercase opacity-30 italic">
              Academic Registry • 2024
           </p>
        </motion.div>
      </div>
    </section>
  )
}
