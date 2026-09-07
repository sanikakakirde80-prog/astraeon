'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const springX = useSpring(x, { stiffness: 500, damping: 28, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 28, mass: 0.4 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 6)
      y.set(e.clientY - 6)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-3 w-3 rounded-full bg-gold [@media(pointer:fine)]:block"
      style={{
        x: springX,
        y: springY,
        boxShadow: '0 0 12px 2px rgba(117, 91, 63, 0.9)',
      }}
    />
  )
}
