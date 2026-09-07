'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { CustomCursor } from '@/components/custom-cursor'
import { DepthTracker } from '@/components/depth-tracker'
import { Star } from '@/components/star'
import { StarModal } from '@/components/star-modal'
import { STARS, type StarData } from '@/lib/stars'

const STRUM_SRC =
  'https://actions.google.com/sounds/v1/alarms/acoustic_guitar_strum.ogg'

export function AstraeonJourney() {
  const [active, setActive] = useState<StarData | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio(STRUM_SRC)
    audioRef.current.preload = 'auto'
  }, [])

  const handleSelect = useCallback((star: StarData) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      void audioRef.current.play().catch(() => {})
    }
    setActive(star)
  }, [])

  // Lock scrolling while the modal is open.
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <div className="cursor-none relative">
      <CustomCursor />

      {/* Fixed starfield background + void overlay */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/starfield.png')",
        }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-void/60"
      />

      <DepthTracker />

      {/* Intro hero */}
      <header className="relative flex h-screen flex-col items-center justify-center px-6 text-center">
        <motion.p
          className="font-sans text-xs uppercase tracking-[0.5em] text-gold-bright"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          An Interstellar Voyage
        </motion.p>
        <motion.h1
          className="mt-6 font-serif text-6xl text-starlight sm:text-8xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          ASTRAEON
        </motion.h1>
        <motion.p
          className="mt-6 max-w-md font-sans text-sm leading-relaxed text-starlight/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Scroll into the void. Travel light years across the dark, and touch
          the stars you pass along the way.
        </motion.p>
        <motion.div
          className="absolute bottom-12 flex flex-col items-center gap-2 text-gold-bright"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.3, 1] }}
          transition={{ duration: 2.5, delay: 1, repeat: Infinity }}
        >
          <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em]">
            Descend
          </span>
          <span aria-hidden="true" className="text-lg">
            &darr;
          </span>
        </motion.div>
      </header>

      {/* The deep scroll journey */}
      <div className="relative w-full" style={{ height: '15000px' }}>
        {STARS.map((star) => (
          <Star key={star.id} star={star} onSelect={handleSelect} />
        ))}
      </div>

      {/* Journey's end */}
      <footer className="relative flex h-screen flex-col items-center justify-center px-6 text-center">
        <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold-bright">
          700 Light Years Deep
        </p>
        <h2 className="mt-4 font-serif text-4xl text-starlight sm:text-6xl">
          The Void Continues
        </h2>
        <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-starlight/60">
          Beyond every star lies another dark, waiting to be crossed. The
          journey never truly ends.
        </p>
      </footer>

      <StarModal star={active} onClose={() => setActive(null)} />
    </div>
  )
}
