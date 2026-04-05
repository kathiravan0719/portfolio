'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Low-drag, ultra-smooth spring for the outer ring (High damping for smoothness)
  const ringX = useSpring(mouseX, { damping: 60, stiffness: 120, mass: 1 })
  const ringY = useSpring(mouseY, { damping: 60, stiffness: 120, mass: 1 })

  // Snappier spring for the center dot
  const dotX = useSpring(mouseX, { damping: 20, stiffness: 800 })
  const dotY = useSpring(mouseY, { damping: 20, stiffness: 800 })

  useEffect(() => {
    setMounted(true)
    const moveCursor = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleHover = (e) => {
      const target = e.target
      const isInteractive = target.closest('a') || target.closest('button') || target.closest('.cursor-pointer')
      setIsHovering(!!isInteractive)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleHover)
    
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleHover)
    }
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Primary Snappy Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Smooth Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-500/40"
        animate={{
          width: isHovering ? 60 : 30,
          height: isHovering ? 60 : 30,
          backgroundColor: isHovering ? 'rgba(34,211,238,0.05)' : 'rgba(34,211,238,0)',
        }}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  )
}
