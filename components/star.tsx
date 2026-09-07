'use client'

import { motion } from 'framer-motion'
import type { StarData } from '@/lib/stars'

const alignMap: Record<StarData['align'], string> = {
  left: 'left-[8%] sm:left-[16%] items-start text-left',
  center: 'left-1/2 -translate-x-1/2 items-center text-center',
  right: 'right-[8%] sm:right-[16%] items-end text-right',
}

export function Star({
  star,
  onSelect,
}: {
  star: StarData
  onSelect: (star: StarData) => void
}) {
  return (
    <motion.div
      className={`absolute flex flex-col gap-3 ${alignMap[star.align]}`}
      style={{ top: star.top }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <button
        type="button"
        onClick={() => onSelect(star)}
        aria-label={`Discover ${star.name}`}
        className="group relative flex items-center justify-center rounded-full outline-none [@media(pointer:fine)]:cursor-none"
        style={{ width: star.size, height: star.size }}
      >
        {/* halo */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-80"
          style={{ backgroundColor: '#755b3f' }}
        />
        {/* core */}
        <span
          aria-hidden="true"
          className="relative rounded-full transition-transform duration-500 group-hover:scale-110"
          style={{
            width: '55%',
            height: '55%',
            backgroundColor: '#755b3f',
            boxShadow:
              '0 0 20px 4px rgba(117, 91, 63, 0.9), inset 0 0 8px rgba(244, 239, 229, 0.4)',
            animation: 'astraeon-pulse 3.5s ease-in-out infinite',
          }}
        />
      </button>
      <div className="max-w-[16rem]">
        <p className="font-serif text-xl text-starlight sm:text-2xl">
          {star.name}
        </p>
        <p className="mt-1 font-sans text-xs uppercase tracking-[0.25em] text-gold-bright">
          {star.distance}
        </p>
      </div>
    </motion.div>
  )
}
