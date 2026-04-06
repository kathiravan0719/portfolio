'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experienceData = [
  {
    company: 'Rebel iTech Solutions',
    role: 'Frontend Developer Intern',
    period: '12/2025 – Present',
    location: 'Chennai, India',
    bullets: [
      'Developed and maintained responsive web interfaces using HTML, CSS, and JavaScript.',
      'Collaborated with team members to build and improve UI components for web applications.',
      'Followed industry best practices for clean code, debugging, and performance optimization.',
      'Participated in daily stand-ups and team meetings, improving communication and teamwork skills.'
    ],
    accent: '#22D3EE'
  },
  {
    company: 'Unified Mentor Pvt Ltd',
    role: 'Frontend Developer Intern',
    period: '06/2025 – 07/2025',
    location: 'Remote',
    bullets: [
      'Developed "E-Bus System" — a digital bus tracking and real-time location management platform.',
      'Frontend: HTML, CSS, JavaScript',
      'Backend/Database: Firebase (Firestore + Authentication)',
      'Built a responsive Basic Calculator UI with interactive features.'
    ],
    accent: '#818CF8'
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 md:py-32 px-6 relative bg-[var(--bg)] overflow-hidden" ref={ref}>
      {/* Background Decorative Glow (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-mono tracking-widest uppercase rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
            Career Log
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-800 tracking-tight text-[var(--text-primary)] italic">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-12 relative">
          {/* Vertical Connecting Line (Centered) */}
          <div className="hidden md:block absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-white/5 overflow-hidden">
             <motion.div 
               className="w-full h-full bg-gradient-to-b from-cyan-500 via-indigo-500 to-transparent"
               initial={{ y: '-100%' }}
               animate={inView ? { y: '100%' } : {}}
               transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
             />
          </div>

          <div className="space-y-12 relative">
            {experienceData.map((exp, i) => (
              <motion.div
                key={exp.company}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ delay: i * 0.2 }}
                className="group relative md:pl-20"
              >
                {/* Timeline Node (Icon) */}
                <div className="hidden md:flex absolute left-[2px] top-4 w-12 h-12 rounded-2xl glass items-center justify-center text-cyan-400 z-20 group-hover:scale-110 group-hover:border-white/20 transition-all duration-300">
                    <Briefcase size={20} />
                </div>

                <div className="glass p-6 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all duration-500 relative z-10 overflow-hidden">
                   {/* Background Shimmer Layer */}
                   <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                   <div className="relative z-10">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                      <div>
                        <h4 className="text-2xl md:text-3xl font-display font-800 text-[var(--text-primary)] transition-colors group-hover:text-cyan-400">
                          {exp.company}
                        </h4>
                        <p className="text-base font-mono text-cyan-500/80 uppercase tracking-widest mt-2 italic">
                          {exp.role}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1 font-mono text-[10px] md:text-xs opacity-60">
                        <span className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded-md tracking-tighter"><Calendar size={12} /> {exp.period}</span>
                        <span className="flex items-center gap-2"><MapPin size={12} /> {exp.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-4">
                      {exp.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex gap-4 text-[var(--text-secondary)] text-sm md:text-base leading-relaxed italic">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
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
              Experience Verified • Authenticated
           </p>
        </motion.div>
      </div>
    </section>
  )
}
