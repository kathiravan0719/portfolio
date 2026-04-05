'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'


const projects = [
  {
    tag: 'Featured Project',
    title: 'StudyAI — Smart Planner',
    description:
      'An intelligent study planner powered by AI that helps students organize their academic life. Features smart scheduling, streak tracking to maintain consistency, and a built-in analytics dashboard to visualize progress.',
    tech: ['Flask', 'MongoDB', 'Python', 'React', 'Tailwind CSS', 'Render'],
    liveUrl: 'https://ai-study-planner-8y16.onrender.com',
    githubUrl: 'https://github.com/kathiravan0719/study-planner',
    accent: '#22D3EE',
  },
  {
    tag: 'Internship Project',
    title: 'E-Bus System',
    description:
      'A comprehensive digital bus ticketing and real-time location management system. Developed during my internship to streamline public transport tracking and booking experiences.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    liveUrl: '#',
    githubUrl: 'https://github.com/kathiravan0719/Ebus-Location-Management',
    accent: '#10B981',
  },
  {
    tag: 'Full Stack / MERN',
    title: 'ShopMERN — E-Commerce',
    description:
      'A professional full-stack platform featuring JWT auth, role-based admin dashboard, real-time cart, multi-step checkout, and a RESTful API with 15+ endpoints.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Vercel'],
    liveUrl: 'https://shopmern-woad.vercel.app/',
    githubUrl: 'https://github.com/kathiravan0719/shopmern',
    accent: '#A78BFA',
  },
]

export default function Projects() {
  const [index, setIndex] = useState(0)

  const handleNext = () => setIndex((prev) => (prev + 1) % projects.length)
  const handleBack = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <section id="projects" className="py-20 md:py-32 px-6 bg-[var(--bg)] relative overflow-hidden">
      <div className="max-w-6xl 3xl:max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="w-full mb-16 md:mb-24 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-mono tracking-widest uppercase rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Portfolio Showcase
          </span>
          <h2 className="text-4xl md:text-6xl 3xl:text-7xl font-display font-800 tracking-tight text-[var(--text-primary)] italic">
            Selected <span className="text-gradient">Projects</span>
          </h2>
        </div>

        {/* Rummy Card Stack Container */}
        <div className="relative w-full max-w-[800px] h-[550px] md:h-[450px] flex items-center justify-center pt-8">
          <AnimatePresence mode="popLayout">
            {projects.map((project, i) => {
              // Logic for Rummy Card Stacking (Deck Style)
              const position = (i - index + projects.length) % projects.length
              const isFront = position === 0
              const isBack = position === projects.length - 1
              const zIndex = projects.length - position

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.8, x: 100 }}
                  animate={{
                    opacity: 1 - position * 0.2, // Fade background cards
                    scale: 1 - position * 0.05, // Scale down background cards
                    x: position * 20, // Horizontal offset
                    y: position * -10, // Vertical "fan" offset
                    rotate: position * 2, // Slight rummy-style rotation
                    zIndex,
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.8, 
                    x: 400, 
                    rotate: 15, 
                    transition: { duration: 0.4 } 
                  }} // Swipe out to the right
                  transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                  className="absolute inset-0 cursor-pointer"
                  onClick={isFront ? handleNext : undefined}
                >
                  <article className="h-full w-full glass rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl relative p-8 md:p-12 flex flex-col justify-between group transition-all duration-500 hover:border-white/20">
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-8">
                        <div className="flex-1">
                          <span
                            className="inline-block text-[10px] font-mono tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full bg-white/5"
                            style={{ color: project.accent, border: `1px solid ${project.accent}20` }}
                          >
                            {project.tag}
                          </span>
                          <h3 
                            className="text-3xl md:text-4xl 3xl:text-5xl font-display font-800 tracking-tight italic"
                            style={{ color: project.accent }}
                          >
                            {project.title}
                          </h3>
                        </div>
                        
                        {isFront && (
                          <div className="flex gap-3">
                            <a
                              href={project.githubUrl}
                              className="w-12 h-12 flex items-center justify-center rounded-2xl glass border border-white/5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all hover:scale-110"
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                              </svg>
                            </a>
                            <a
                              href={project.liveUrl}
                              className="w-12 h-12 flex items-center justify-center rounded-2xl bg-cyan-500 text-white transition-all hover:scale-110 shadow-[0_10px_20px_rgba(6,182,212,0.3)]"
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                              </svg>
                            </a>
                          </div>
                        )}
                      </div>

                      <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-8 italic">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] md:text-[10px] font-mono font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-white/5 text-[var(--text-primary)] border border-white/5 uppercase tracking-widest"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Gradient Hint for shuffle */}
                    {isFront && (
                      <div className="absolute bottom-6 right-8 flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                         <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Next Project</span>
                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="animate-bounce-x">
                           <path d="M9 18l6-6-6-6" />
                         </svg>
                      </div>
                    )}
                  </article>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Stack Navigation Controls */}
        <div className="mt-12 flex items-center gap-6">
          <button
            onClick={handleBack}
            className="p-4 rounded-full glass border border-white/5 text-[var(--text-secondary)] hover:text-cyan-500 transition-all hover:scale-110"
            aria-label="Previous Project"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="flex gap-2">
             {projects.map((_, i) => (
               <div 
                 key={i}
                 className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-cyan-500' : 'bg-white/10'}`}
               />
             ))}
          </div>
          <button
            onClick={handleNext}
            className="p-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 hover:bg-cyan-500/20 transition-all hover:scale-110"
            aria-label="Next Project"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}
