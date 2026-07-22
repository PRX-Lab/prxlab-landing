"use client"

import { useEffect, useRef } from "react"

// Ambient backdrop of slow-drifting, twinkling dots. Color tracks the theme
// via computed `color`. With `connections`, faint lines are drawn between
// nearby nodes (a "constellation" look); without, it reads as soft sparkle —
// closer to light catching dust/glass, useful behind imagery-style heroes.
export function ParticleNetwork({
  className,
  density = 60,
  connections = true,
}: {
  className?: string
  density?: number
  connections?: boolean
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = canvas?.parentElement
    if (!canvas || !container) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const ctx = canvas.getContext("2d")!
    const color = getComputedStyle(canvas).color

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    type Node = { x: number; y: number; vx: number; vy: number; r: number; phase: number; speed: number }
    let nodes: Node[] = []

    function resize() {
      width = container!.clientWidth
      height = container!.clientHeight
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.round((width * height) / 22000) + Math.min(density, 20)
      nodes = Array.from({ length: Math.min(count, density) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: connections ? 2.2 : Math.random() * 1.6 + 0.6,
        phase: Math.random() * Math.PI * 2,
        speed: 0.0006 + Math.random() * 0.0012,
      }))
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(container)

    const maxDist = Math.max(160, Math.min(width, height) * 0.3)
    let rafRef = 0
    let t = 0

    function frame(time: number) {
      t = time
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        if (!reduceMotion) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > width) n.vx *= -1
          if (n.y < 0 || n.y > height) n.vy *= -1
        }
      }

      if (connections) {
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i], b = nodes[j]
            const dx = a.x - b.x, dy = a.y - b.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < maxDist) {
              ctx.strokeStyle = color
              ctx.globalAlpha = (1 - dist / maxDist) * 0.45
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.stroke()
            }
          }
        }
      }

      ctx.fillStyle = color
      for (const n of nodes) {
        const twinkle = reduceMotion ? 0.6 : 0.35 + 0.55 * ((Math.sin(t * n.speed + n.phase) + 1) / 2)
        ctx.globalAlpha = connections ? 0.75 : twinkle
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1

      if (!reduceMotion) rafRef = requestAnimationFrame(frame)
    }

    frame(0)
    return () => {
      ro.disconnect()
      cancelAnimationFrame(rafRef)
    }
  }, [density, connections])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className ?? "absolute inset-0 h-full w-full text-foreground"}
    />
  )
}
