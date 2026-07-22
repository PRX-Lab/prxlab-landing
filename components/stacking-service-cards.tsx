"use client"

import { useEffect, useRef, useState } from "react"

const STICKY_TOP = 88
const STICKY_STEP = 14
const SCALE_STEP = 0.035
const OFFSET_STEP = 7

// Renders pre-built card bodies (assembled server-side, since they may embed
// server-only icon components) inside sticky, scroll-scaled wrappers.
export function StackingServiceCards({ items }: { items: React.ReactNode[] }) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [depth, setDepth] = useState<number[]>(items.map(() => 0))

  useEffect(() => {
    function onScroll() {
      const nextDepth = items.map((_, i) => {
        let count = 0
        for (let j = i + 1; j < items.length; j++) {
          const el = cardRefs.current[j]
          if (!el) continue
          const rect = el.getBoundingClientRect()
          const stickyTopJ = STICKY_TOP + j * STICKY_STEP
          if (rect.top <= stickyTopJ + 2) count++
        }
        return count
      })
      setDepth(nextDepth)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [items])

  return (
    <div className="flex flex-col" style={{ perspective: "1400px", perspectiveOrigin: "50% 0%" }}>
      {items.map((item, i) => {
        const d = depth[i]
        const scale = 1 - d * SCALE_STEP
        const translateY = d * OFFSET_STEP

        return (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el }}
            className="sticky mb-4"
            style={{ top: `${STICKY_TOP + i * STICKY_STEP}px`, zIndex: 10 + i }}
          >
            <div
              style={{
                transform: `scale(${scale}) translateY(${translateY}px)`,
                transformOrigin: "top center",
                transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                willChange: "transform",
              }}
            >
              {item}
            </div>
          </div>
        )
      })}
    </div>
  )
}
