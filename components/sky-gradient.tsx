"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function SkyGradient() {
  const { scrollYProgress } = useScroll()
  // As we descend, a black veil deepens over the navy sky.
  const veil = useTransform(scrollYProgress, [0, 1], [0, 0.82])

  return (
    <>
      {/* Base sky: navy blue fading to black, top to bottom */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, #0a1430 0%, #070d20 22%, #050813 45%, #03040a 70%, #010103 100%)",
        }}
      />
      {/* Deepening veil driven by scroll depth */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 z-0 bg-black"
        style={{ opacity: veil }}
      />
    </>
  )
}
