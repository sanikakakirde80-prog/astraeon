"use client"

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import {
  type SelectedStar,
  spectralColor,
  spectralName,
  starDescription,
} from "@/lib/constellations"

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-gold-bright">
        {label}
      </p>
      <p className="mt-1 font-serif text-lg text-starlight">{value}</p>
    </div>
  )
}

export function StarModal({
  selection,
  onClose,
}: {
  selection: SelectedStar | null
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {selection && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="star-modal-title"
          onClick={onClose}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-void/70 backdrop-blur-sm"
          />
          <motion.div
            className="relative w-full max-w-lg rounded-2xl border border-gold bg-void/80 p-8 backdrop-blur-md sm:p-10"
            style={{ boxShadow: "0 0 60px rgba(117, 91, 63, 0.35)" }}
            initial={{ scale: 0.9, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 text-gold-bright transition-colors hover:bg-gold/20 hover:text-starlight [@media(pointer:fine)]:cursor-none"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-4 w-4 flex-none rounded-full"
                style={{
                  backgroundColor: spectralColor(selection.star.spectral),
                  boxShadow: `0 0 14px 2px ${spectralColor(selection.star.spectral)}`,
                }}
              />
              <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold-bright">
                {selection.constellation.name} &middot;{" "}
                {selection.constellation.meaning}
              </p>
            </div>

            <h2
              id="star-modal-title"
              className="mt-4 font-serif text-4xl text-starlight sm:text-5xl"
            >
              {selection.star.bayer ? `${selection.star.bayer} ` : ""}
              {selection.star.name}
            </h2>

            <div className="mt-6 grid grid-cols-3 gap-4 border-y border-gold/25 py-5">
              <Fact
                label="Distance"
                value={`${selection.star.dist.toLocaleString()} ly`}
              />
              <Fact label="Magnitude" value={selection.star.mag.toFixed(2)} />
              <Fact
                label="Type"
                value={`${selection.star.spectral} · ${spectralName(selection.star.spectral)}`}
              />
            </div>

            <p className="mt-6 font-sans text-sm leading-relaxed text-starlight/80 sm:text-base">
              {starDescription(selection.star, selection.constellation.name)}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
