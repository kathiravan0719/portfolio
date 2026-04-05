'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl 3xl:max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Cyber-Hexagon Logo */}
        <a href="#hero" className="flex items-center gap-4 group relative z-10">
          <div className="relative flex items-center justify-center w-14 h-14 transition-transform duration-500 group-hover:scale-110">
            {/* Rotating Hex Shells (GPU Accelerated) */}
            <motion.div 
               className="absolute inset-0 border-2 border-cyan-500/20 rounded-xl transform-gpu will-change-transform"
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            />
            <motion.div 
               className="absolute inset-2 border border-indigo-500/30 transform-gpu will-change-transform"
               animate={{ rotate: -360 }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            />
            
            {/* Glowing Core Pulse */}
            <div className="absolute inset-0 bg-cyan-500/5 blur-xl group-hover:bg-cyan-500/20 transition-colors duration-700 rounded-full" />
            
            {/* Stylized Tech Initials (SVG) */}
            <svg width="28" height="28" viewBox="0 0 24 24" className="relative z-10 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] overflow-visible">
              <motion.path
                d="M4 4v16M4 12l6-8M4 12l6 8"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M12 4c5 0 8 4 8 8s-3 8-8 8"
                fill="none"
                stroke="#22D3EE"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              />
              {/* Core Pulse Ring */}
              <motion.circle 
                cx="12" cy="12" r="10" 
                stroke="#22D3EE" 
                strokeWidth="0.5" 
                fill="none" 
                opacity="0.3"
                animate={{ r: [10, 14, 10], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </svg>
          </div>

          {/* Branded Text */}
          <div className="flex flex-col -gap-1">
            <motion.h3 
              className="font-display font-900 text-xl tracking-tighter text-[var(--text-primary)] leading-none italic uppercase"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              Kathir<span className="text-cyan-500">.Dev</span>
            </motion.h3>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[var(--text-secondary)] text-[7px] font-mono tracking-[0.5em] uppercase opacity-50 italic">System Online • 2.0</span>
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              className="text-[var(--text-secondary)] hover:text-[#22D3EE] text-sm font-medium transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#22D3EE] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          
          <div className="flex items-center gap-4 ml-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-white/5 transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="px-5 py-2 rounded-full border border-cyan-500/40 text-cyan-500 text-sm font-medium hover:bg-cyan-500/10 transition-all duration-200 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
            >
              Hire Me
            </motion.a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-white/5 transition-colors text-[var(--text-secondary)]"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button
            className="text-[var(--text-secondary)] hover:text-[#22D3EE] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-white/5"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[var(--text-secondary)] hover:text-[#22D3EE] text-lg font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="w-full py-3 rounded-xl border border-cyan-500/40 text-cyan-500 text-center font-medium"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
