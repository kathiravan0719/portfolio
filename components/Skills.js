'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaReact, FaNodeJs, FaGitAlt
} from 'react-icons/fa'
import { 
  SiTailwindcss, SiExpress, SiMongodb, 
  SiVercel, SiPython,
  SiNextdotjs, SiFirebase, SiPostgresql
} from 'react-icons/si'

const techColumns = [
  {
    title: 'Frontend',
    accent: '#22D3EE',
    icon: <FaReact />,
    skills: [
      { name: 'React', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#FFFFFF' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    accent: '#818CF8',
    icon: <FaNodeJs />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'Express', icon: <SiExpress />, color: '#FFFFFF' },
      { name: 'Python', icon: <SiPython />, color: '#3776AB' },
    ],
  },
  {
    title: 'Database',
    accent: '#34D399',
    icon: <SiMongodb />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
      { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
    ],
  },
  {
    title: 'Deployment',
    accent: '#F59E0B',
    icon: <SiVercel />,
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      { name: 'Vercel', icon: <SiVercel />, color: '#FFFFFF' },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', damping: 20, stiffness: 100 }
  }
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 md:py-32 px-6 relative overflow-hidden bg-[var(--bg)]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl 3xl:max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-mono tracking-widest uppercase rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-6xl 3xl:text-7xl font-display font-800 tracking-tight text-[var(--text-primary)] mb-6 italic">
            Technologies <span className="text-gradient">I Use</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-lg mx-auto text-base leading-relaxed italic opacity-70">
            Modern, battle-tested tools to build fast and reliable digital solutions.
          </p>
        </motion.div>

        {/* 4-column compact grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {techColumns.map((col) => (
            <motion.div
              key={col.title}
              variants={cardVariants}
              className="group glass-card p-6 rounded-[2rem] relative overflow-hidden transition-all duration-500 hover:border-cyan-400/30"
            >
              {/* Scanning shimmer */}
              <motion.div
                className="absolute inset-0 pointer-events-none w-[200%] h-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${col.accent}08, ${col.accent}12, ${col.accent}08, transparent)`,
                }}
                animate={{ x: ['-100%', '0%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              />

              {/* Header */}
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all duration-300 group-hover:scale-110 border"
                  style={{ background: `${col.accent}15`, borderColor: `${col.accent}30`, color: col.accent, boxShadow: `0 0 15px ${col.accent}15` }}
                >
                  {col.icon}
                </div>
                <h3 className="text-base font-display font-800 text-[var(--text-primary)] italic">
                  {col.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-3 relative z-10">
                {col.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 4, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl glass border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group/skill"
                  >
                    <span className="text-lg transition-transform duration-300 group-hover/skill:scale-110" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="text-xs font-bold tracking-tight font-mono text-[var(--text-secondary)] group-hover/skill:text-[var(--text-primary)] transition-colors italic">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Capability tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {['Scalable Architecture', 'Responsive Design', 'Real-time Features', 'AI Integration'].map((tag) => (
            <div
              key={tag}
              className="px-5 py-2.5 rounded-2xl text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] text-cyan-400 glass border border-cyan-400/25 uppercase flex items-center gap-2 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all cursor-pointer"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              {tag}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
