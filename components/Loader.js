'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STATUS_LINES = [
  'Initializing runtime environment...',
  'Loading MERN modules...',
  'Parsing AI integration layers...',
  'Compiling assets & components...',
  'Rendering portfolio interface...',
]

export default function Loader() {
  const [mounted, setMounted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [statusIdx, setStatusIdx] = useState(0)
  const [done, setDone] = useState(false)
  const [exit, setExit] = useState(false)

  useEffect(() => {
    setMounted(true)
    let start = null
    const DURATION = 1800

    // Guaranteed fallback so the loader never gets stuck
    const fallbackTimer = setTimeout(() => {
      setProgress(100)
      setDone(true)
      setTimeout(() => setExit(true), 300)
    }, 2200)

    let rafId
    const tick = (ts) => {
      if (!start) start = ts
      const elapsed = ts - start
      const pct = Math.min((elapsed / DURATION) * 100, 100)
      setProgress(pct)

      const idx = Math.floor((pct / 100) * STATUS_LINES.length)
      setStatusIdx(Math.min(idx, STATUS_LINES.length - 1))

      if (pct < 100) {
        rafId = requestAnimationFrame(tick)
      } else {
        setDone(true)
        setTimeout(() => setExit(true), 400)
      }
    }
    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(fallbackTimer)
    }
  }, [])

  if (!mounted || exit) return null

  return (
    <AnimatePresence mode="wait">
      {!exit && (
        <motion.div
          key="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="fixed inset-0 w-screen h-screen z-[99999] flex flex-col items-center justify-center select-none overflow-hidden bg-black"
        >
          {/* Hex grid background */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52'%3E%3Cpolygon points='30,2 58,18 58,34 30,50 2,34 2,18' fill='none' stroke='%2322D3EE' stroke-width='0.8'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 52px',
            }}
          />

          {/* Ambient glow blobs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Corner brackets */}
          {[
            'top-8 left-8 border-t-2 border-l-2',
            'top-8 right-8 border-t-2 border-r-2',
            'bottom-8 left-8 border-b-2 border-l-2',
            'bottom-8 right-8 border-b-2 border-r-2',
          ].map((cls, i) => (
            <div
              key={i}
              className={`absolute w-8 h-8 md:w-10 md:h-10 border-cyan-400/40 ${cls}`}
            />
          ))}

          {/* ─── Main content ─── */}
          <div className="relative flex flex-col items-center gap-8 md:gap-10 px-6 w-full max-w-sm">

            {/* KD Logo — spinning ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-center w-28 h-28"
            >
              {/* Outer conic ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #22D3EE, #818CF8, #34D399, #22D3EE)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              {/* Mask ring */}
              <div className="absolute inset-[3px] rounded-full bg-black" />
              {/* Inner glow */}
              <div 
                className="absolute inset-[6px] rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(34,211,238,0.2) 0%, transparent 70%)',
                }}
              />
              {/* KD text */}
              <div className="relative z-10 flex items-baseline gap-0.5">
                <span className="font-bold text-3xl text-white font-display">K</span>
                <span className="font-bold text-3xl text-cyan-400 font-display">D</span>
              </div>
            </motion.div>

            {/* Name + role */}
            <div className="text-center">
              <p className="font-bold text-lg text-slate-100 tracking-widest uppercase font-display">
                KATHIRAVAN<span className="text-cyan-400">.D</span>
              </p>
              <p className="text-xs text-slate-400 tracking-[0.25em] uppercase mt-1 font-mono">
                Full Stack Developer
              </p>
            </div>

            {/* Progress track */}
            <div className="w-full flex flex-col gap-3">
              {/* Bar */}
              <div className="relative w-full h-[3px] bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Percentage + status */}
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-mono text-slate-400 truncate max-w-[220px]">
                  {STATUS_LINES[statusIdx]}
                </p>
                <span
                  className="text-[11px] font-mono tabular-nums font-bold"
                  style={{ color: progress >= 100 ? '#34D399' : '#22D3EE' }}
                >
                  {Math.round(progress)}%
                </span>
              </div>
            </div>

            {/* "Loaded" check */}
            {done && (
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-5 h-5 rounded-full bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-xs font-mono text-emerald-400 tracking-wider font-bold">READY</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
