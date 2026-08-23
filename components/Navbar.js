'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X, Menu } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero', tag: '01' },
  { label: 'Services', href: '#services', tag: '02' },
  { label: 'Projects', href: '#projects', tag: '03' },
  { label: 'How It Works', href: '#how-it-works', tag: '04' },
  { label: 'About', href: '#about', tag: '05' },
  { label: 'Experience', href: '#experience', tag: '06' },
  { label: 'Contact', href: '#contact', tag: '07' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 80
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-black/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3.5 group relative z-10"
          >
            <div className="relative flex items-center justify-center w-12 h-12 transition-transform duration-500 group-hover:scale-105">
              <motion.div
                className="absolute inset-0 border-2 border-cyan-500/30 rounded-xl transform-gpu will-change-transform"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              />
              <motion.div
                className="absolute inset-2 border border-indigo-500/30 transform-gpu will-change-transform"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              />
              <div className="absolute inset-0 bg-cyan-500/10 blur-xl group-hover:bg-cyan-500/25 transition-colors duration-700 rounded-full" />
              <svg width="24" height="24" viewBox="0 0 24 24" className="relative z-10 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                <motion.path d="M4 4v16M4 12l6-8M4 12l6 8" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: 'easeInOut' }} />
                <motion.path d="M12 4c5 0 8 4 8 8s-3 8-8 8" fill="none" stroke="#22D3EE" strokeWidth="3" strokeLinecap="round"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }} />
              </svg>
            </div>

            <div className="flex flex-col">
              <motion.h3
                className="font-display font-800 text-lg md:text-xl tracking-tighter text-white leading-none italic uppercase"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                Kathir<span className="text-cyan-400">.Dev</span>
              </motion.h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
                <span className="text-zinc-400 text-[8px] font-mono tracking-[0.3em] uppercase italic font-semibold">Available for Work</span>
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i + 0.2 }}
                className="text-zinc-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.a>
            ))}

            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-white/10">
              <a
                href="https://github.com/kathiravan0719"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors text-zinc-400 hover:text-white flex items-center justify-center cursor-pointer"
                aria-label="GitHub Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-sm font-bold hover:from-cyan-400 hover:to-indigo-500 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:-translate-y-0.5 flex items-center gap-1.5"
              >
                <span>Start a Project</span>
                <ArrowUpRight size={16} />
              </motion.a>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 text-white hover:text-cyan-400 transition-all flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} className="text-cyan-400" /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'calc(100vh - 80px)' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-black/98 backdrop-blur-3xl border-t border-white/[0.08] overflow-y-auto z-50 flex flex-col justify-between p-6"
            >
              <div className="flex flex-col gap-2.5 pt-2">
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] mb-2 pl-2">Navigation</p>
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 active:bg-cyan-500/10 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono font-bold text-cyan-400/70 group-hover:text-cyan-400">{link.tag}</span>
                      <span className="text-base font-display font-bold text-white group-hover:text-cyan-400 transition-colors italic">{link.label}</span>
                    </div>
                    <ArrowUpRight size={18} className="text-zinc-600 opacity-40 group-hover:opacity-100 group-hover:text-cyan-400 transition-all" />
                  </motion.a>
                ))}
              </div>

              <div className="pt-6 mt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-center font-display font-bold text-base shadow-[0_0_25px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight size={18} />
                </a>
                <div className="flex items-center justify-between px-2 pt-2 text-xs font-mono text-zinc-500">
                  <span>Based in Chennai, India</span>
                  <a href="https://github.com/kathiravan0719" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors underline">GitHub</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
