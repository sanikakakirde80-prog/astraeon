"use client"

import { useEffect, useRef } from "react"

interface FieldStar {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  base: number
  twPhase: number
  twSpeed: number
  hue: string
}

const HUES = ["#ffffff", "#dfe6ff", "#fff4e8", "#ffe9a8", "#ffd0a0", "#cdd8ff"]

export function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let width = 0
    let height = 0
    let dpr = 1
    let stars: FieldStar[] = []
    let raf = 0

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const density = Math.round((width * height) / 1500)
      const count = Math.max(280, Math.min(900, density))
      stars = Array.from({ length: count }, () => {
        const speed = 0.03 + Math.random() * 0.14
        const angle = Math.random() * Math.PI * 2
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.4 + 0.45,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          base: 0.4 + Math.random() * 0.6,
          twPhase: Math.random() * Math.PI * 2,
          twSpeed: 0.6 + Math.random() * 1.8,
          hue: HUES[Math.floor(Math.random() * HUES.length)],
        }
      })
    }

    let last = performance.now()
    const render = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      ctx.clearRect(0, 0, width, height)

      for (const s of stars) {
        if (!reduce) {
          s.x += s.vx
          s.y += s.vy
          if (s.x < -2) s.x = width + 2
          if (s.x > width + 2) s.x = -2
          if (s.y < -2) s.y = height + 2
          if (s.y > height + 2) s.y = -2
          s.twPhase += s.twSpeed * dt
        }
        const twinkle = 0.55 + 0.45 * Math.sin(s.twPhase)
        const alpha = Math.max(0.05, Math.min(1, s.base * twinkle))

        ctx.globalAlpha = alpha
        ctx.fillStyle = s.hue
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()

        if (s.r > 1.05) {
          ctx.globalAlpha = alpha * 0.28
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.r * 3.2, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(render)
    }

    build()
    raf = requestAnimationFrame(render)
    window.addEventListener("resize", build)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", build)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  )
}
