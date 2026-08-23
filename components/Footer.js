'use client'
import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="glass border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm text-[var(--text-secondary)] font-mono tracking-widest uppercase opacity-60">
            © {year} Kathiravan.D. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-secondary)] opacity-40 italic flex flex-wrap gap-2 items-center">
            <span>Based in Chennai, India • Available for remote projects worldwide</span>
          </p>
          <p className="text-xs text-[var(--text-secondary)] opacity-30 italic flex flex-wrap gap-2 items-center">
            <span>Built with Next.js, Framer Motion & Tailwind</span>
            <span className="hidden sm:inline">•</span>
            <a 
              href="https://github.com/kathiravan0719" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyan-500 transition-colors underline decoration-white/20 hover:decoration-cyan-500"
            >
              GitHub
            </a>
            <span>•</span>
            <a 
              href="https://portfolio-five-sooty-mo1ccx609g.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyan-500 transition-colors underline decoration-white/20 hover:decoration-cyan-500"
            >
              Live Site
            </a>
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-emerald-500/30">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase font-bold">Available for Projects</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
