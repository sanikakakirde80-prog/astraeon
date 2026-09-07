let ctx: AudioContext | null = null

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null
  if (!ctx) {
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext
    if (!AC) return null
    ctx = new AC()
  }
  return ctx
}

// A short sparkling "blink" — two quick high sine blips with a fast decay,
// evoking the twinkle of a star being touched.
export function playBlink() {
  const ac = getCtx()
  if (!ac) return
  if (ac.state === "suspended") void ac.resume()

  const now = ac.currentTime
  const blips = [
    { freq: 2100, at: 0 },
    { freq: 3150, at: 0.06 },
  ]

  for (const { freq, at } of blips) {
    const osc = ac.createOscillator()
    const gain = ac.createGain()
    const start = now + at

    osc.type = "sine"
    osc.frequency.setValueAtTime(freq, start)

    gain.gain.setValueAtTime(0.0001, start)
    gain.gain.exponentialRampToValueAtTime(0.16, start + 0.008)
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.19)

    osc.connect(gain).connect(ac.destination)
    osc.start(start)
    osc.stop(start + 0.22)
  }
}
