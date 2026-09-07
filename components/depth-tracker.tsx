'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const MAX_LIGHT_YEARS = 700

export function DepthTracker() {
  const { scrollYProgress } = useScroll()
  const lightYears = useTransform(
    scrollYProgress,
    [0, 1],
    [0, MAX_LIGHT_YEARS],
  )
  const [value, setValue] = useState(0)

  useEffect(() => {
    return lightYears.on('change', (v) => setValue(Math.round(v)))
  }, [lightYears])

  return (
    <div className="pointer-events-none fixed right-5 top-1/2 z-50 -translate-y-1/2 text-right sm:right-10">
      <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold-bright">
        Depth
      </p>
      <p className="font-serif text-4xl leading-none text-starlight tabular-nums sm:text-6xl">
        {value.toLocaleString()}
      </p>
      <p className="mt-1 font-sans text-xs uppercase tracking-[0.25em] text-starlight/70">
        Light Years
      </p>
      <div className="mt-4 flex justify-end">
        <div className="h-40 w-px bg-starlight/15">
          <motion.div
            className="w-px origin-top bg-gold"
            style={{ scaleY: scrollYProgress, height: '100%' }}
          />
        </div>
      </div>
    </div>
  )
}
