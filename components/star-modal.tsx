'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { StarData } from '@/lib/stars'

export function StarModal({
  star,
  onClose,
}: {
  star: StarData | null
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {star && (
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
            style={{ boxShadow: '0 0 60px rgba(117, 91, 63, 0.35)' }}
            initial={{ scale: 0.9, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
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

            <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold-bright">
              {star.distance}
            </p>
            <h2
              id="star-modal-title"
              className="mt-3 font-serif text-4xl text-starlight sm:text-5xl"
            >
              {star.name}
            </h2>
            <div className="mt-5 h-px w-16 bg-gold" />
            <p className="mt-6 font-sans text-sm leading-relaxed text-starlight/80 sm:text-base">
              {star.story}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
