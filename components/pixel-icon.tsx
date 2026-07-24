"use client"

import { useEffect, useRef } from "react"

// Each icon is drawn on a small canvas grid, animated at 60fps via RAF.
// Color is resolved from the element's computed `color` (set via className
// text-foreground) so it automatically tracks the light/dark theme.

type IconType = "platform" | "workflow" | "hosting" | "pricing"

interface PixelIconProps {
  type: IconType
  size?: number
  className?: string
}

function drawPlatform(ctx: CanvasRenderingContext2D, W: number, t: number, color: string) {
  const cx = W / 2, cy = W / 2
  const r = W * 0.36
  const ps = W / 12

  const pulse = 0.6 + 0.4 * Math.sin(t * 0.003)
  ctx.globalAlpha = pulse
  ctx.fillStyle = color
  const cs = ps * 1.4
  ctx.fillRect(cx - cs / 2, cy - cs / 2, cs, cs)

  const nodeCount = 6
  for (let i = 0; i < nodeCount; i++) {
    const angle = (i / nodeCount) * Math.PI * 2 + t * 0.0015
    const nx = cx + Math.cos(angle) * r
    const ny = cy + Math.sin(angle) * r
    ctx.globalAlpha = 0.3 + 0.5 * ((Math.sin(angle * 2 + t * 0.002) + 1) / 2)
    ctx.fillRect(Math.round(nx / ps) * ps - ps / 2, Math.round(ny / ps) * ps - ps / 2, ps, ps)

    const steps = 5
    for (let s = 1; s < steps; s++) {
      const lx = cx + (nx - cx) * (s / steps)
      const ly = cy + (ny - cy) * (s / steps)
      ctx.globalAlpha = (0.06 + 0.1 * (s / steps)) * pulse
      ctx.fillRect(Math.round(lx / ps) * ps, Math.round(ly / ps) * ps, ps * 0.7, ps * 0.7)
    }
  }
}

function drawWorkflow(ctx: CanvasRenderingContext2D, W: number, t: number, color: string) {
  const ps = Math.floor(W / 12)
  const cx = W / 2
  const cy = W / 2

  const shape = [
    [1,1,1,1,1,1,1],
    [0,1,1,1,1,1,0],
    [0,0,1,1,1,0,0],
    [0,0,0,1,0,0,0],
    [0,0,1,1,1,0,0],
    [0,1,1,1,1,1,0],
    [1,1,1,1,1,1,1],
  ]

  const rows = shape.length
  const cols = shape[0].length
  const offX = cx - (cols * ps) / 2
  const offY = cy - (rows * ps) / 2

  const period = 2400
  const fill = (t % period) / period

  ctx.fillStyle = color
  shape.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (!cell) return
      const isTopHalf = r < rows / 2
      const isMid = r === Math.floor(rows / 2)
      let sandAlpha: number

      if (isTopHalf) {
        sandAlpha = Math.max(0, 1 - Math.min(1, fill * rows * 1.4 - r))
      } else if (isMid) {
        sandAlpha = 0.5 + 0.4 * Math.sin(t * 0.008)
      } else {
        const rowFromCenter = r - Math.floor(rows / 2)
        sandAlpha = Math.max(0, Math.min(1, fill * rows * 1.4 - rowFromCenter))
      }

      ctx.globalAlpha = Math.max(0.12, sandAlpha * 0.85)
      ctx.fillRect(offX + c * ps, offY + r * ps, ps - 1, ps - 1)
    })
  })
}

function drawHosting(ctx: CanvasRenderingContext2D, W: number, t: number, color: string) {
  const cols = 5, rows = 4
  const ps = Math.floor(W / (cols + 1))
  const gap = 2
  const offX = Math.floor((W - cols * (ps + gap)) / 2)
  const offY = Math.floor((W - rows * (ps + gap)) / 2)
  const total = cols * rows
  const wave = t * 0.0008

  ctx.fillStyle = color
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = r * cols + c
      const phase = (idx / total) * Math.PI * 2
      ctx.globalAlpha = 0.1 + 0.65 * ((Math.sin(wave + phase) + 1) / 2)
      ctx.fillRect(offX + c * (ps + gap), offY + r * (ps + gap), ps, ps)
    }
  }
}

function drawPricing(ctx: CanvasRenderingContext2D, W: number, t: number, color: string) {
  const ps = Math.floor(W / 12)
  const bars = 3
  const bw = ps * 2
  const gap = ps
  const total = bars * bw + (bars - 1) * gap
  const offX = Math.floor((W - total) / 2)
  const maxH = W * 0.7

  const heights = [0.45, 0.75, 0.55]
  const wave = Math.sin(t * 0.0015) * 0.12

  ctx.fillStyle = color
  heights.forEach((h, i) => {
    const animated = Math.max(0.1, h + wave * (i % 2 === 0 ? 1 : -1))
    const bh = animated * maxH
    const x = offX + i * (bw + gap)
    const y = W - bh - ps

    const rowCount = Math.floor(bh / ps)
    for (let row = 0; row < rowCount; row++) {
      ctx.globalAlpha = 0.15 + (1 - row / rowCount) * 0.7
      ctx.fillRect(x, y + row * ps, bw, ps - 1)
    }
  })
}

export function PixelIcon({ type, size = 40, className }: PixelIconProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    const color = getComputedStyle(canvas).color

    const draw = (t: number) => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = size * dpr
      canvas.height = size * dpr
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, size, size)
      ctx.imageSmoothingEnabled = false

      switch (type) {
        case "platform": drawPlatform(ctx, size, t, color); break
        case "workflow": drawWorkflow(ctx, size, t, color); break
        case "hosting": drawHosting(ctx, size, t, color); break
        case "pricing": drawPricing(ctx, size, t, color); break
      }
      ctx.globalAlpha = 1

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(rafRef.current)
  }, [type, size])

  return (
    <canvas
      ref={canvasRef}
      className={className ?? "text-foreground"}
      style={{ width: size, height: size, imageRendering: "pixelated", display: "block", flexShrink: 0 }}
    />
  )
}
