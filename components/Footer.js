'use client'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="glass border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm text-[var(--text-secondary)] font-mono tracking-widest uppercase opacity-60">
            © 2024 Kathiravan.D
          </p>
          <p className="text-xs text-[var(--text-secondary)] opacity-40 italic">
            Built with Next.js, Framer Motion & Tailwind
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-6"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase font-bold">Open to work</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
