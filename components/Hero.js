'use client'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { Fingerprint, ArrowRight, MapPin } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  const [revealed, setRevealed] = useState(false)
  const containerRef = useRef(null)

  // 3D tilt on desktop
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springCfg = { damping: 28, stiffness: 160 }
  const x = useSpring(mouseX, springCfg)
  const y = useSpring(mouseY, springCfg)
  const rotateX = useTransform(y, [-0.5, 0.5], [12, -12])
  const rotateY = useTransform(x, [-0.5, 0.5], [-12, 12])

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - left) / width - 0.5)
    mouseY.set((e.clientY - top) / height - 0.5)
  }
  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-8%] left-[-5%] w-[45%] h-[45%] bg-cyan-500/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-8%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/8 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Content ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center text-center lg:text-left"
          >
            {/* Availability badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2.5 mb-8 mx-auto lg:mx-0 w-fit px-4 py-2 rounded-full bg-white/[0.04] border border-emerald-500/30 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span className="text-xs font-mono font-bold text-emerald-400 tracking-widest uppercase">Available for Projects</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-display font-800 text-4xl xs:text-5xl sm:text-6xl lg:text-[3.75rem] leading-[1.1] tracking-tight mb-6 text-white"
            >
              <span className="block text-lg sm:text-xl font-mono text-cyan-400 mb-3 tracking-widest font-normal opacity-80">
                Hi, I'm Kathiravan 👋
              </span>
              Modern Websites That
              <br />
              <span className="text-gradient">Help Businesses Grow.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              I build <strong className="text-white font-semibold">fast, responsive, high-converting</strong> websites and web apps that attract customers and grow your business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(6,182,212,0.3)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.45)] hover:-translate-y-0.5 flex items-center gap-2"
              >
                Start Your Project
                <ArrowRight size={18} />
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-white/[0.04] border border-white/10 hover:border-white/25 text-white font-bold text-sm rounded-2xl transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-xl"
              >
                View My Work
              </a>
            </motion.div>

            {/* Location line */}
            <motion.div variants={item} className="flex items-center justify-center lg:justify-start gap-2 text-zinc-500 text-xs font-mono">
              <MapPin size={13} className="text-cyan-400 shrink-0" />
              <span>Based in Chennai, India • Working with clients worldwide</span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Profile with reveal animation (Desktop) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="hidden lg:flex items-center justify-center py-16"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setRevealed(true)}
            onMouseLeave={() => { handleMouseLeave(); setRevealed(false) }}
            onClick={() => setRevealed(prev => !prev)}
          >
            <motion.div
              className="relative cursor-pointer"
              style={{ perspective: 1200, rotateX, rotateY }}
            >
              {/* Spinning conic ring */}
              <motion.div
                className="absolute inset-[-4px] rounded-full transform-gpu will-change-transform"
                style={{
                  background: 'conic-gradient(from 0deg, rgba(34,211,238,0.15), rgba(129,140,248,0.15), rgba(16,185,129,0.15), rgba(34,211,238,0.15))',
                  borderRadius: '50%',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />

              {/* HUD rings when revealed */}
              <AnimatePresence>
                {revealed && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.35, scale: 1.2 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-[-40px] border border-dashed border-cyan-400/30 rounded-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.2, scale: 1.4 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-[-60px] border border-dotted border-indigo-400/20 rounded-full"
                    />
                  </>
                )}
              </AnimatePresence>

              {/* Glass mask disk */}
              <div
                className="absolute inset-[2px] rounded-full border border-white/10"
                style={{ zIndex: 1, background: 'rgba(255,255,255,0.01)', backdropFilter: 'blur(4px)' }}
              />

              {/* Ambient glow */}
              <div className="absolute inset-[-24px] bg-cyan-400/8 rounded-full blur-[40px] transform-gpu" />

              {/* Fingerprint overlay — hidden after reveal */}
              <AnimatePresence>
                {!revealed && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    className="absolute inset-0 z-[5] flex flex-col items-center justify-center pointer-events-none"
                  >
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5], scale: [0.97, 1.03, 0.97] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      className="flex flex-col items-center gap-4"
                    >
                      <div className="p-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                        <Fingerprint size={48} className="text-cyan-400 opacity-80" strokeWidth={1.2} />
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400/70 tracking-[0.3em] uppercase">System Restricted</span>
                      <motion.span
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-white/10 bg-white/5"
                      >
                        Hover to Unmask
                      </motion.span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Profile image — revealed on hover/click */}
              <motion.div
                animate={revealed ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(8px)' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative w-[340px] h-[340px] rounded-full overflow-hidden transform-gpu will-change-transform"
                style={{ zIndex: 2 }}
              >
                <Image
                  src="/profile.jpg?v=2"
                  alt="Kathiravan D — Full Stack Developer & Freelance Web Developer"
                  fill
                  className="object-cover object-top scale-110"
                  priority
                />
                {/* Holographic scan line */}
                <AnimatePresence>
                  {revealed && (
                    <motion.div
                      className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22D3EE]"
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        style={{ position: 'absolute' }}
                      />
                      <div className="absolute inset-0 bg-cyan-400/5 mix-blend-overlay" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Data callout pills — appear when revealed */}
              <AnimatePresence>
                {revealed && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: -50 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="absolute top-1/4 -left-10 z-20"
                    >
                      <div className="glass-card px-4 py-2.5 rounded-2xl border border-cyan-400/30 shadow-2xl">
                        <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-wide font-bold">Stack</span>
                        <p className="text-xs font-bold text-white">MERN + Next.js</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 50 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="absolute top-1/2 -right-10 -translate-y-1/2 z-20"
                    >
                      <div className="glass-card px-4 py-2.5 rounded-2xl border border-indigo-400/30 shadow-2xl">
                        <span className="text-[9px] font-mono text-indigo-400 uppercase tracking-wide font-bold">Status</span>
                        <p className="text-xs font-bold text-white">Open to Work</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 50 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20"
                    >
                      <div className="glass px-4 py-1.5 rounded-full border border-emerald-400/30 flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_6px_#34d399]" />
                        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wide">Portfolio Verified</span>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

              {/* Floating badge: MERN */}
              <motion.div
                className="absolute -left-12 top-[30%] glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl"
                style={{ zIndex: 10 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                  <span className="text-cyan-400 text-[11px] font-mono font-bold">M</span>
                </div>
                <div>
                  <p className="text-xs text-white font-mono font-medium">MERN Stack</p>
                  <p className="text-[10px] text-zinc-500">Full Stack</p>
                </div>
              </motion.div>

              {/* Floating badge: AI */}
              <motion.div
                className="absolute -right-12 bottom-[30%] glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl"
                style={{ zIndex: 10 }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center">
                  <span className="text-indigo-400 text-[11px] font-mono font-bold">AI</span>
                </div>
                <div>
                  <p className="text-xs text-white font-mono font-medium">AI Powered</p>
                  <p className="text-[10px] text-zinc-500">Real-time</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Mobile profile (shown below text, tap to reveal) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex lg:hidden justify-center pb-8"
            onClick={() => setRevealed(prev => !prev)}
          >
            <div className="relative cursor-pointer">
              <div className="absolute inset-[-16px] bg-cyan-400/8 rounded-full blur-[30px]" />
              <motion.div
                className="relative w-52 h-52 rounded-full overflow-hidden border-2 border-white/10 bg-white/[0.02] flex items-center justify-center backdrop-blur-xl"
              >
                {/* Fingerprint for mobile */}
                <AnimatePresence>
                  {!revealed && (
                    <motion.div
                      animate={{ opacity: [0.5, 0.9, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 flex flex-col items-center justify-center z-10"
                    >
                      <Fingerprint size={36} className="text-cyan-400 mb-2" strokeWidth={1.2} />
                      <span className="text-[8px] font-mono text-cyan-400 tracking-widest uppercase">Tap to Reveal</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  animate={revealed ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(6px)' }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src="/profile.jpg?v=2"
                    alt="Kathiravan D"
                    fill
                    className="object-cover object-top scale-110"
                    priority
                  />
                </motion.div>

                {/* Mobile scan line */}
                <AnimatePresence>
                  {revealed && (
                    <motion.div
                      className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
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
