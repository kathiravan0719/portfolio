'use client'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  SiNodedotjs, SiExpress, SiMongodb, 
  SiTailwindcss, SiFirebase, SiFlask, SiPython, 
  SiJavascript, SiVercel, 
  SiRender, SiJsonwebtokens 
} from 'react-icons/si'
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa'
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const techIcons = {
  'React': { icon: FaReact, color: '#61DAFB' },
  'Node.js': { icon: FaNodeJs, color: '#339933' },
  'Express': { icon: SiExpress, color: '#FFFFFF' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'Flask': { icon: SiFlask, color: '#FFFFFF' },
  'Python': { icon: SiPython, color: '#3776AB' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'Firebase': { icon: SiFirebase, color: '#FFCA28' },
  'Firestore': { icon: SiFirebase, color: '#FFCA28' },
  'Authentication': { icon: SiFirebase, color: '#FFCA28' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
  'HTML': { icon: FaHtml5, color: '#E34F26' },
  'CSS': { icon: FaCss3Alt, color: '#1572B6' },
  'Vercel': { icon: SiVercel, color: '#FFFFFF' },
  'Render': { icon: SiRender, color: '#FFFFFF' },
  'JWT': { icon: SiJsonwebtokens, color: '#D63AFF' },
  'Next.js': { icon: FaReact, color: '#FFFFFF' },
}

const projects = [
  {
    tag: 'Featured Project',
    title: 'StudyAI — Smart Planner',
    description:
      'An intelligent study planner powered by AI that helps students organize their academic life. Features smart scheduling, streak tracking, and a built-in analytics dashboard.',
    image: '/projects/studyai.png',
    tech: ['Python', 'Flask', 'MongoDB', 'React', 'Tailwind CSS', 'Render'],
    liveUrl: 'https://ai-study-planner-8y16.onrender.com',
    githubUrl: 'https://github.com/kathiravan0719/study-planner',
    accent: '#22D3EE',
  },
  {
    tag: 'Internship Project',
    title: 'E-Bus Tracking System',
    description:
      'A digital bus ticketing and real-time location management system. Developed to streamline public transport tracking and booking experiences with Firebase integration.',
    image: '/projects/ebus.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    liveUrl: 'https://loginform-93e3d.web.app/',
    githubUrl: 'https://github.com/kathiravan0719/Ebus-Location-Management',
    accent: '#10B981',
  },
  {
    tag: 'Full Stack / MERN',
    title: 'ShopMERN — E-Commerce',
    description:
      'A professional full-stack platform featuring JWT auth, role-based admin dashboard, real-time cart, multi-step checkout, and a RESTful API with 15+ endpoints.',
    image: '/projects/shopmern.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Vercel'],
    liveUrl: 'https://shopmern-woad.vercel.app/',
    githubUrl: 'https://github.com/kathiravan0719/shopmern',
    accent: '#A78BFA',
  },
]

const TechIcon = ({ name }) => {
  const tech = techIcons[name] || { icon: SiJavascript, color: '#F7DF1E' }
  const Icon = tech.icon
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 transition-colors hover:bg-white/10 group">
      <Icon style={{ color: tech.color }} className="text-sm transition-transform group-hover:scale-110" />
      <span className="text-[10px] font-medium text-[var(--text-secondary)] whitespace-nowrap">{name}</span>
    </div>
  )
}

const ProjectCard = ({ project, isFront, position, onNext }) => {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-150, 0, 150], [-15, 0, 15])
  const opacity = useTransform(x, [-150, -100, 0, 100, 150], [0, 1, 1, 1, 0])

  // Reset x position when card moves to back
  useEffect(() => {
    if (!isFront) {
      x.set(0)
    }
  }, [isFront, x])

  const handleDragEnd = (_, info) => {
    if (Math.abs(info.offset.x) > 100) {
      onNext()
    }
  }

  return (
    <motion.div
      style={{
        x,
        rotate,
        opacity: isFront ? 1 : 1 - position * 0.3,
        scale: 1 - position * 0.08,
        z: -position * 100,
        y: position * 15,
        zIndex: 10 - position,
        pointerEvents: isFront ? 'auto' : 'none',
      }}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1 - position * 0.08, y: position * 15 }}
      exit={{ x: 500, opacity: 0, rotate: 20, transition: { duration: 0.4 } }}
      drag={isFront ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      className="absolute w-full max-w-[850px] aspect-[16/10] md:aspect-[16/9] cursor-grab active:cursor-grabbing"
    >
      <div className="w-full h-full glass rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl flex flex-col md:flex-row p-6 md:p-8 gap-8 group transition-all duration-500 hover:border-white/20 backdrop-blur-3xl bg-white/[0.03]">
        
        {/* Left: Project Preview */}
        <div className="relative w-full md:w-[45%] h-full rounded-[2rem] overflow-hidden flex-shrink-0 bg-black/40 border border-white/5">
          <img 
            src={project.image} 
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 ${isFront ? 'scale-100 opacity-100 group-hover:scale-105' : 'scale-95 opacity-40'}`}
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Action Icons Override - Only on Front */}
          <motion.div 
            animate={{ opacity: isFront ? 1 : 0, y: isFront ? 0 : 20 }}
            className="absolute top-6 right-6 flex gap-3"
          >
             <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-11 h-11 flex items-center justify-center rounded-2xl glass border border-white/10 text-white hover:bg-indigo-500 transition-all hover:scale-110 shadow-xl">
               <FiGithub size={20} />
             </a>
             <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-11 h-11 flex items-center justify-center rounded-2xl bg-cyan-500 text-white hover:bg-cyan-400 transition-all hover:scale-110 shadow-xl shadow-cyan-500/20">
               <FiExternalLink size={20} />
             </a>
          </motion.div>

          <motion.div 
            animate={{ opacity: isFront ? 1 : 0 }}
            className="absolute bottom-6 left-6"
          >
            <span
              className="text-[10px] font-mono tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white"
              style={{ borderLeft: `4px solid ${project.accent}` }}
            >
              {project.tag}
            </span>
          </motion.div>
        </div>

        {/* Right: Content Section - Only on Front */}
        <motion.div 
          animate={{ opacity: isFront ? 1 : 0, x: isFront ? 0 : 20 }}
          transition={{ duration: 0.4 }}
          className="flex-1 flex flex-col justify-between py-2"
        >
          <div>
            <h3 
              className="text-4xl md:text-5xl font-display font-800 tracking-tight italic mb-6 leading-tight"
              style={{ color: project.accent }}
            >
              {project.title}
            </h3>
            <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-8 italic opacity-80">
              {project.description}
            </p>
          </div>

          <div>
             <div className="w-full h-[1px] bg-white/5 mb-6" />
             <div className="flex flex-wrap gap-2 md:gap-3">
                {project.tech.map((t) => (
                  <TechIcon key={t} name={t} />
                ))}
             </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [index, setIndex] = useState(0)

  const handleNext = () => setIndex((prev) => (prev + 1) % projects.length)
  const handleBack = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <section id="projects" className="py-24 md:py-40 px-6 bg-[var(--bg)] relative overflow-hidden flex flex-col items-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[150px]" />
         <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl w-full relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 mb-6 text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
          >
            Digital Craftsmanship
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-display font-800 tracking-tighter text-[var(--text-primary)] italic"
          >
            Selected <span className="text-gradient">Projects</span>
          </motion.h2>
        </div>

        {/* 3D Stack Container */}
        <div 
          className="relative w-full h-[650px] md:h-[550px] flex items-center justify-center perspective-[1500px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, i) => {
              const position = (i - index + projects.length) % projects.length
              if (position > 2) return null // Only show top 3 cards for depth
              
              return (
                <ProjectCard 
                  key={project.title}
                  project={project}
                  isFront={position === 0}
                  position={position}
                  onNext={handleNext}
                />
              )
            })}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-16 flex items-center gap-12">
          <button
            onClick={handleBack}
            className="group relative p-6 rounded-full glass border border-white/10 text-white/50 hover:text-cyan-400 transition-all"
            aria-label="Previous Project"
          >
            <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-full transition-all duration-300" />
            <FiChevronLeft size={28} />
          </button>

          <div className="flex gap-4">
             {projects.map((_, i) => (
               <div 
                 key={i}
                 className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-12 bg-gradient-to-r from-indigo-500 to-cyan-500' : 'w-1.5 bg-white/10'}`}
               />
             ))}
          </div>

          <button
            onClick={handleNext}
            className="group relative p-6 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 hover:text-white transition-all overflow-hidden"
            aria-label="Next Project"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <FiChevronRight size={28} className="relative z-10" />
          </button>
        </div>

        <p className="mt-12 text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-[0.5em] opacity-40 animate-pulse">
          Drag cards to explore or use arrows
        </p>
      </div>
    </section>
  )
}
