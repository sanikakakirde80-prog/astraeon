"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import {
  type Constellation,
  type SelectedStar,
  spectralColor,
  starSize,
} from "@/lib/constellations"

function mulberry32(seed: number) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function seedFrom(s: string) {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

export function ConstellationSection({
  constellation,
  index,
  onSelect,
}: {
  constellation: Constellation
  index: number
  onSelect: (selection: SelectedStar) => void
}) {
  const points = useMemo(() => {
    const rnd = mulberry32(seedFrom(constellation.abbr))
    return constellation.stars.map((star) => ({
      star,
      x: 14 + rnd() * 72,
      y: 20 + rnd() * 62,
    }))
  }, [constellation])

  const alignRight = index % 2 === 1
  const polyline = points.map((p) => `${p.x},${p.y}`).join(" ")

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden py-24">
      {/* Editorial panel */}
      <motion.div
        className={`pointer-events-none absolute top-16 z-20 max-w-xs px-6 sm:top-24 sm:max-w-sm sm:px-12 ${
          alignRight ? "right-0 text-right" : "left-0 text-left"
        }`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <p className="font-sans text-[0.65rem] uppercase tracking-[0.4em] text-gold-bright">
          {constellation.abbr} &middot; {constellation.hemisphere} Sky
        </p>
        <h2 className="mt-3 font-serif text-4xl leading-none text-starlight sm:text-6xl">
          {constellation.name}
        </h2>
        <p className="mt-2 font-serif text-lg italic text-gold-bright">
          {constellation.meaning}
        </p>
        <p
          className={`mt-4 font-sans text-sm leading-relaxed text-starlight/70 ${
            alignRight ? "ml-auto" : ""
          }`}
        >
          {constellation.desc}
        </p>
      </motion.div>

      {/* Constellation figure: connecting lines */}
      {points.length > 1 && (
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.polyline
            points={polyline}
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth={0.12}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.55}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}

      {/* Stars */}
      {points.map(({ star, x, y }, i) => {
        const size = starSize(star.mag)
        const color = spectralColor(star.spectral)
        return (
          <motion.div
            key={star.name}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.08 }}
          >
            <button
              type="button"
              onClick={() => onSelect({ star, constellation })}
              aria-label={`Discover ${star.name} in ${constellation.name}`}
              className="group relative flex flex-col items-center outline-none [@media(pointer:fine)]:cursor-none"
            >
              <span
                className="relative flex items-center justify-center rounded-full"
                style={{ width: size, height: size }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full opacity-50 blur-md transition-opacity duration-500 group-hover:opacity-90"
                  style={{ backgroundColor: color }}
                />
                <span
                  aria-hidden="true"
                  className="relative rounded-full transition-transform duration-500 group-hover:scale-125"
                  style={{
                    width: "58%",
                    height: "58%",
                    backgroundColor: color,
                    boxShadow: `0 0 ${size * 0.6}px ${size * 0.16}px ${color}, inset 0 0 6px rgba(255,255,255,0.6)`,
                    animation: `astraeon-pulse ${(3 + (i % 4) * 0.6).toFixed(1)}s ease-in-out infinite`,
                  }}
                />
              </span>
              <span className="mt-2 whitespace-nowrap font-sans text-[0.7rem] tracking-wide text-starlight/80 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                {star.bayer ? `${star.bayer} ` : ""}
                {star.name}
              </span>
            </button>
          </motion.div>
        )
      })}
    </section>
  )
}
