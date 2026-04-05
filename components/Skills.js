'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub 
} from 'react-icons/fa'
import { 
  SiTailwindcss, SiExpress, SiMongodb, 
  SiPostman, SiVercel, SiPython,
  SiJavascript, SiFirebase, SiFlask, SiRender, SiPostgresql
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend Architecture',
    baseColor: '#22D3EE',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend Systems',
    baseColor: '#818CF8',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'Express.js', icon: <SiExpress />, color: '#FFFFFF' },
      { name: 'Flask', icon: <SiFlask />, color: '#FFFFFF' },
      { name: 'Python', icon: <SiPython />, color: '#3776AB' },
    ],
  },
  {
    title: 'Data Management',
    baseColor: '#34D399',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
      { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
    ],
  },
  {
    title: 'DevOps & Tools',
    baseColor: '#F59E0B',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      { name: 'GitHub', icon: <FaGithub />, color: '#FFFFFF' },
      { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
      { name: 'Vercel', icon: <SiVercel />, color: '#FFFFFF' },
      { name: 'Render', icon: <SiRender />, color: '#46E3B7' },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
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
      {/* High-Tech Background Ambient Glow */}
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
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-mono tracking-widest uppercase rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
            System Capabilities
          </span>
          <h2 className="text-4xl md:text-6xl 3xl:text-7xl font-display font-800 tracking-tight text-[var(--text-primary)] mb-8 italic">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed italic opacity-80">
            A comprehensive set of modern technologies I use to build 
            <span className="text-[var(--text-primary)]"> high-performance</span>, 
            <span className="text-[var(--text-primary)]"> scalable</span> digital experiences.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-2 gap-6 md:gap-8"
        >
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="glass p-8 rounded-[2rem] relative group border border-white/5 overflow-hidden transform-gpu"
            >
              {/* Optimised Scanning Loop Shimmer (Using TranslateX for GPU acceleration) */}
              <motion.div
                className="absolute inset-0 pointer-events-none w-[200%] h-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${cat.baseColor}03, ${cat.baseColor}08, ${cat.baseColor}03, transparent)`,
                }}
                animate={{ x: ['-100%', '0%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              />

              <div className="flex items-center justify-between mb-10 relative z-10">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_#22D3EE]" />
                    <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest opacity-80 italic">Status: Live</span>
                  </div>
                  <h3 className="text-2xl font-display font-800 text-[var(--text-primary)] italic">
                    {cat.title}
                  </h3>
                </div>
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(34,211,238,0.1)] border border-white/5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                  style={{ background: `${cat.baseColor}10`, color: cat.baseColor }}
                >
                  {catIdx === 0 ? <FaReact /> : catIdx === 1 ? <FaNodeJs /> : catIdx === 2 ? <SiMongodb /> : <FaGitAlt />}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 md:gap-4 relative z-10">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ 
                      y: -8,
                      scale: 1.05,
                      backgroundColor: `${skill.color}15`,
                      borderColor: `${skill.color}30`,
                      boxShadow: `0 10px 30px -10px ${skill.color}40`
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    className="flex items-center gap-3 px-4 py-2.5 md:px-6 md:py-3 rounded-2xl bg-white/5 border border-white/5 text-[var(--text-secondary)] hover:text-white transition-all cursor-default group/skill"
                  >
                    <span className="text-xl transition-transform duration-300 group-hover/skill:scale-125" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="text-xs md:text-sm font-bold tracking-tight font-mono opacity-70 group-hover/skill:opacity-100 italic transition-opacity">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic Capability Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {['Scalable Architecture', 'Responsive Design', 'Real-time Features', 'AI Integration'].map((tag) => (
            <div 
              key={tag}
              className="px-6 py-3 rounded-2xl text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] text-[#22D3EE] border border-[#22D3EE]/20 bg-[#22D3EE]/5 uppercase flex items-center gap-3 hover:bg-[#22D3EE]/10 hover:border-[#22D3EE]/40 transition-all cursor-pointer group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform" />
              {tag}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
