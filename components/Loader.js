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
  const [progress, setProgress] = useState(0)
  const [statusIdx, setStatusIdx] = useState(0)
  const [done, setDone] = useState(false)
  const [exit, setExit] = useState(false)

  useEffect(() => {
    // Smooth progress fill over ~2.4s
    let start = null
    const DURATION = 2400

    const tick = (ts) => {
      if (!start) start = ts
      const elapsed = ts - start
      const pct = Math.min((elapsed / DURATION) * 100, 100)
      setProgress(pct)

      // cycle status lines
      const idx = Math.floor((pct / 100) * STATUS_LINES.length)
      setStatusIdx(Math.min(idx, STATUS_LINES.length - 1))

      if (pct < 100) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(() => setDone(true), 200)
        setTimeout(() => setExit(true), 700)
      }
    }
    requestAnimationFrame(tick)
  }, [])

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none overflow-hidden"
          style={{ background: '#0E1420' }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Hex grid background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52'%3E%3Cpolygon points='30,2 58,18 58,34 30,50 2,34 2,18' fill='none' stroke='%2322D3EE' stroke-width='0.8'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 52px',
            }}
          />

          {/* Ambient glow blobs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Vertical scan line */}
          <div className="absolute left-0 right-0 h-[2px] pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #22D3EE 50%, transparent 100%)',
              animation: 'scanner 2s linear infinite',
              opacity: 0.25,
            }}
          />

          {/* Corner brackets */}
          {[
            'top-8 left-8 border-t-2 border-l-2',
            'top-8 right-8 border-t-2 border-r-2',
            'bottom-8 left-8 border-b-2 border-l-2',
            'bottom-8 right-8 border-b-2 border-r-2',
          ].map((cls, i) => (
            <motion.div
              key={i}
              className={`absolute w-10 h-10 border-[#22D3EE]/40 ${cls}`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
            />
          ))}

          {/* ─── Main content ─── */}
          <div className="relative flex flex-col items-center gap-10 px-6 w-full max-w-sm">

            {/* KD Logo — spinning conic ring */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative flex items-center justify-center"
            >
              {/* Outer conic ring */}
              <motion.div
                className="absolute w-28 h-28 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #22D3EE, #818CF8, #34D399, #22D3EE)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              {/* Mask ring */}
              <div className="absolute w-[104px] h-[104px] rounded-full" style={{ background: '#0E1420' }} />
              {/* Inner glow */}
              <div className="absolute w-24 h-24 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)',
                  animation: 'loader-pulse 2s ease-in-out infinite',
                }}
              />
              {/* KD text */}
              <div className="relative z-10 flex items-baseline gap-0.5">
                <span className="font-bold text-3xl text-white" style={{ fontFamily: 'Syne, sans-serif' }}>K</span>
                <span className="font-bold text-3xl text-[#22D3EE]" style={{ fontFamily: 'Syne, sans-serif', animation: 'flicker 4s infinite' }}>D</span>
              </div>
            </motion.div>

            {/* Name + role */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="font-bold text-lg text-[#EFF6FF] tracking-widest uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>
                KATHIRAVAN<span className="text-[#22D3EE]">.D</span>
              </p>
              <p className="text-xs text-[#94A3B8] tracking-[0.25em] uppercase mt-1 font-mono">
                Full Stack Developer
              </p>
            </motion.div>

            {/* Progress track */}
            <div className="w-full flex flex-col gap-3">
              {/* Bar */}
              <div className="relative w-full h-[3px] bg-[#243347] rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #22D3EE, #818CF8)',
                    boxShadow: '0 0 12px rgba(34,211,238,0.8)',
                  }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'linear', duration: 0.016 }}
                />
                {/* Shimmer */}
                <motion.div
                  className="absolute inset-y-0 w-10 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    left: `calc(${progress}% - 20px)`,
                  }}
                  transition={{ ease: 'linear', duration: 0.016 }}
                />
              </div>

              {/* Percentage + status */}
              <div className="flex items-center justify-between">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={statusIdx}
                    className="text-[10px] font-mono text-[#94A3B8] truncate max-w-[220px]"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    {STATUS_LINES[statusIdx]}
                  </motion.p>
                </AnimatePresence>
                <motion.span
                  className="text-[11px] font-mono tabular-nums"
                  style={{ color: progress >= 100 ? '#34D399' : '#22D3EE' }}
                >
                  {Math.round(progress)}%
                </motion.span>
              </div>
            </div>

            {/* Dot row */}
            <div className="flex gap-2">
              {STATUS_LINES.map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  animate={{
                    backgroundColor: i <= statusIdx ? '#22D3EE' : '#243347',
                    scale: i === statusIdx ? 1.5 : 1,
                    boxShadow: i === statusIdx ? '0 0 6px #22D3EE' : 'none',
                  }}
                  transition={{ duration: 0.25 }}
                />
              ))}
            </div>

            {/* "Loaded" check */}
            <AnimatePresence>
              {done && (
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-400/20 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 tracking-wider">READY</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
