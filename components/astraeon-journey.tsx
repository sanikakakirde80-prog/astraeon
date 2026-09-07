"use client"

import { useCallback, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CustomCursor } from "@/components/custom-cursor"
import { DepthTracker } from "@/components/depth-tracker"
import { SkyGradient } from "@/components/sky-gradient"
import { StarfieldCanvas } from "@/components/starfield-canvas"
import { ConstellationSection } from "@/components/constellation-section"
import { StarModal } from "@/components/star-modal"
import { playBlink } from "@/lib/blink-sound"
import {
  CONSTELLATIONS,
  TOTAL_STARS,
  type SelectedStar,
} from "@/lib/constellations"

export function AstraeonJourney() {
  const [active, setActive] = useState<SelectedStar | null>(null)

  const handleSelect = useCallback((selection: SelectedStar) => {
    playBlink()
    setActive(selection)
  }, [])

  // Lock scrolling while the modal is open.
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [active])

  return (
    <div className="cursor-none relative">
      <CustomCursor />
      <SkyGradient />
      <StarfieldCanvas />
      <DepthTracker />

      {/* Intro hero */}
      <header className="relative z-10 flex h-screen flex-col items-center justify-center px-6 text-center">
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
          Descend through all {CONSTELLATIONS.length} constellations of the sky.
          Cross the light years, and touch the {TOTAL_STARS} named stars drifting
          in the dark along the way.
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

      {/* The deep scroll journey through every constellation */}
      <main className="relative z-10">
        {CONSTELLATIONS.map((constellation, index) => (
          <ConstellationSection
            key={constellation.abbr}
            constellation={constellation}
            index={index}
            onSelect={handleSelect}
          />
        ))}
      </main>

      {/* Journey's end */}
      <footer className="relative z-10 flex h-screen flex-col items-center justify-center px-6 text-center">
        <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold-bright">
          Beyond the Charted Sky
        </p>
        <h2 className="mt-4 font-serif text-4xl text-starlight sm:text-6xl">
          The Void Continues
        </h2>
        <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-starlight/60">
          Beyond every star lies another dark, and beyond every catalog lie
          billions more suns uncounted. The journey never truly ends.
        </p>
      </footer>

      <StarModal selection={active} onClose={() => setActive(null)} />
    </div>
  )
}
