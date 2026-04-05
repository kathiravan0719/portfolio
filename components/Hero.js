'use client'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { Fingerprint } from 'lucide-react'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  const [hudActive, setHudActive] = useState(false)
  const containerRef = useRef(null)

  // 3D Tilt Logic
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15])
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15])

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXRelative = (e.clientX - rect.left) / width - 0.5
    const mouseYRelative = (e.clientY - rect.top) / height - 0.5
    mouseX.set(mouseXRelative)
    mouseY.set(mouseYRelative)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setHudActive(false)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Blobs (Optimized Blur) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[80px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] bg-indigo-500/10 rounded-full blur-[80px] animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-6xl 3xl:max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center"
          >
            <motion.div variants={item} className="inline-flex items-center gap-3 mb-10 w-fit px-4 py-1.5 rounded-full glass border border-white/5">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-[var(--text-secondary)] tracking-[0.2em] uppercase">
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display font-800 text-4xl xs:text-5xl md:text-6xl 3xl:text-7xl leading-[1.1] tracking-tighter mb-8 text-[var(--text-primary)]"
            >
              <span className="text-xl xs:text-2xl md:text-3xl font-light opacity-60 block mb-2 font-mono tracking-wider italic">Kathiravan.D</span>
              <span className="text-gradient italic">
                { "Full Stack Developer.".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.05,
                      delay: 0.8 + (index * 0.04),
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="inline-block w-[2px] h-[0.8em] bg-cyan-500 ml-1 translate-y-1 align-baseline"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-[var(--text-secondary)] text-lg md:text-xl 3xl:text-2xl max-w-lg 3xl:max-w-xl leading-relaxed mb-12 font-medium italic"
            >
              Building <span className="text-[var(--text-primary)]">high-performance</span> web applications with 
              a focus on <span className="text-[var(--text-primary)]">exceptional user experience.</span>
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-5">
              <a
                href="#projects"
                className="group px-8 py-4 bg-cyan-500 text-white font-bold text-sm rounded-2xl transition-all hover:shadow-[0_20px_40px_rgba(6,182,212,0.3)] hover:-translate-y-1 flex items-center gap-3"
              >
                Explore My Work
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/resume.pdf"
                className="px-8 py-4 glass border border-white/5 hover:border-white/20 text-[var(--text-primary)] font-bold text-sm rounded-2xl transition-all hover:-translate-y-1"
              >
                Resume
              </a>
            </motion.div>

          </motion.div>

          {/* RIGHT: Profile photo — desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 0 }}
            animate={{ opacity: 1, scale: 1, rotateY: 360 }}
            transition={{ 
              duration: 2.5, 
              delay: 0.5, 
              ease: [0.34, 1.56, 0.64, 1] // Custom springy ease
            }}
            className="hidden lg:flex items-center justify-center py-16"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHudActive(true)}
            onMouseLeave={handleMouseLeave}
            onClick={() => setHudActive(!hudActive)}
          >
            <motion.div 
              className="relative cursor-pointer"
              style={{
                perspective: 1200,
                rotateX,
                rotateY,
              }}
            >
              {/* Holographic Disc Background (Active when hidden) */}
              <motion.div
                className="absolute inset-[-4px] rounded-full transform-gpu will-change-transform"
                style={{
                  background: 'conic-gradient(from 0deg, #22D3EE1A, #818CF81A, #10B9811A, #22D3EE1A)',
                  borderRadius: '50%',
                  opacity: hudActive ? 0.2 : 0.8,
                  backdropFilter: 'blur(4px)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: hudActive ? 4 : 10, repeat: Infinity, ease: 'linear' }}
              />

              {/* Interaction Clue: Fingerprint & Text (Hides on reveal) */}
              <AnimatePresence>
                {!hudActive && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="absolute inset-0 z-[5] flex flex-col items-center justify-center pointer-events-none"
                  >
                    <motion.div 
                      animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1.05, 0.95] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="flex flex-col items-center gap-4"
                    >
                      <div className="p-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 shadow-[0_0_30px_#22D3EE33]">
                        <Fingerprint size={48} className="text-cyan-400 opacity-80" strokeWidth={1} />
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400/70 tracking-[0.3em] uppercase">
                        System Restricted
                      </span>
                      <span className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-white/5 bg-white/5 animate-pulse">
                        Tap to Unmask
                      </span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* HUD Rings (Only show after spin) */}
              <AnimatePresence>
                {hudActive && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                      animate={{ opacity: 0.4, scale: 1.2, rotate: 180 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-[-40px] border border-dashed border-[#22D3EE]/30 rounded-full"
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                      animate={{ opacity: 0.2, scale: 1.4, rotate: -180 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-[-60px] border border-dotted border-indigo-500/30 rounded-full"
                      transition={{ duration: 0.7 }}
                    />
                  </>
                )}
              </AnimatePresence>

              {/* Inner mask/glass disk shown during spin */}
              <div className="absolute inset-[2px] rounded-full glass border border-white/10" style={{ zIndex: 1, backgroundColor: 'rgba(255,255,255,0.02)' }} />

              {/* Glow pulse (Optimized Blur) */}
              <div className="absolute inset-[-24px] bg-[#22D3EE]/10 rounded-full blur-[30px] animate-pulse-slow transform-gpu" />

              {/* Profile image container — Revealed only on hover or click */}
              <motion.div
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={hudActive ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(5px)' }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-[360px] h-[360px] rounded-full overflow-hidden transform-gpu will-change-transform"
                style={{ zIndex: 2 }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Kathiravan.D — Full Stack Developer"
                  fill
                  className={`object-cover object-top scale-110 transition-all duration-700 ${hudActive ? 'saturate-[1.2] brightness-[1.1]' : 'saturate-[0.9]'}`}
                  priority
                />
                
                {/* Holographic Scan Line — shown after reveal */}
                <AnimatePresence>
                  {hudActive && (
                    <motion.div 
                      className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div 
                        className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent shadow-[0_0_15px_#22D3EE]"
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        style={{ position: 'absolute' }}
                      />
                      <div className="absolute inset-0 bg-[#22D3EE]/5 mix-blend-overlay" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Data Callouts (Recruiter Info) */}
              <AnimatePresence>
                {hudActive && (
                  <>
                    {/* Top Callout */}
                    <motion.div
                      initial={{ opacity: 0, x: -20, y: -20 }}
                      animate={{ opacity: 1, x: -40, y: -40 }}
                      exit={{ opacity: 0, x: -20, y: -20 }}
                      className="absolute top-0 -left-10 z-20"
                    >
                      <div className="flex flex-col items-end">
                        <div className="bg-[#0D1117]/90 backdrop-blur-md border border-[#22D3EE]/40 rounded-lg px-3 py-1 shadow-2xl">
                          <span className="text-[10px] font-mono text-[#22D3EE] uppercase tracking-tighter">Core Stack</span>
                          <p className="text-xs font-bold text-white uppercase tracking-wider">MERN Specialist</p>
                        </div>
                        <div className="w-[1px] h-6 bg-gradient-to-b from-[#22D3EE]/40 to-transparent mr-4" />
                      </div>
                    </motion.div>

                    {/* Right Callout */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 50 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="absolute top-1/2 -right-10 -translate-y-1/2 z-20"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-indigo-500/40" />
                        <div className="bg-[#0D1117]/90 backdrop-blur-md border border-indigo-500/40 rounded-lg px-3 py-1 shadow-2xl">
                          <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-tighter">Availability</span>
                          <p className="text-xs font-bold text-white uppercase tracking-wider">Open to Work</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Bottom Callout */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 50 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-[1px] h-6 bg-gradient-to-t from-emerald-500/40 to-transparent" />
                        <div className="bg-[#0D1117]/90 backdrop-blur-md border border-emerald-500/40 rounded-full px-4 py-1.5 shadow-2xl flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-tighter">Portfolio Verified</span>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

              {/* Floating badge: MERN (Original, hide when HUD active or move) */}
              <motion.div
                className="absolute -left-10 top-[30%] bg-[#0D1117] border border-[#1E2D3D] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl"
                style={{ zIndex: 10 }}
                animate={{ 
                  y: hudActive ? [0, -12, 0] : [0, -8, 0],
                  scale: hudActive ? 1.05 : 1,
                  borderColor: hudActive ? '#22D3EE66' : '#1E2D3D'
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#22D3EE]/10 flex items-center justify-center">
                  <span className="text-[#22D3EE] text-xs font-mono font-bold">M</span>
                </div>
                <div>
                  <p className="text-xs text-[#F0F6FC] font-mono font-medium">MERN Stack</p>
                  <p className="text-[10px] text-[#4A5568]">Full Stack</p>
                </div>
              </motion.div>

              {/* Floating badge: AI (Original) */}
              <motion.div
                className="absolute -right-10 bottom-[30%] bg-[#0D1117] border border-[#1E2D3D] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl"
                style={{ zIndex: 10 }}
                animate={{ 
                  y: hudActive ? [0, 12, 0] : [0, 8, 0],
                  scale: hudActive ? 1.05 : 1,
                  borderColor: hudActive ? '#818CF866' : '#1E2D3D'
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <span className="text-violet-400 text-xs font-mono font-bold">AI</span>
                </div>
                <div>
                  <p className="text-xs text-[#F0F6FC] font-mono font-medium">AI Powered</p>
                  <p className="text-[10px] text-[#4A5568]">Real-time</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Profile photo — mobile (shown below text) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 0 }}
            animate={{ opacity: 1, scale: 1, rotateY: 360 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="flex lg:hidden justify-center pb-12"
            onClick={() => setHudActive(!hudActive)}
          >
            <div className="relative cursor-pointer">
              <div className={`absolute inset-[-16px] bg-[#22D3EE]/10 rounded-full blur-[30px] transition-opacity duration-500 ${hudActive ? 'opacity-100' : 'opacity-60'}`} />
              <motion.div 
                className="relative w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-[#22D3EE]/40 glass flex items-center justify-center"
                style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
              >
                {/* Mobile Reveal Clue */}
                {!hudActive && (
                   <motion.div 
                     animate={{ opacity: [0.4, 0.8, 0.4] }}
                     transition={{ duration: 2, repeat: Infinity }}
                     className="absolute inset-0 flex flex-col items-center justify-center z-10"
                   >
                     <Fingerprint size={32} className="text-cyan-400 mb-2" strokeWidth={1} />
                     <span className="text-[8px] font-mono text-cyan-400 tracking-widest uppercase">Tap to Reveal</span>
                   </motion.div>
                )}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={hudActive ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src="/profile.jpg"
                    alt="Kathiravan D"
                    fill
                    className={`object-cover object-top scale-110 transition-all duration-700 ${hudActive ? 'saturate-[1.2] brightness-[1.1]' : 'saturate-[0.9]'}`}
                    priority
                  />
                </motion.div>
                <AnimatePresence>
                  {hudActive && (
                    <motion.div 
                      className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div 
                        className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent"
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        style={{ position: 'absolute' }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
