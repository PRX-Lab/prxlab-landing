"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type BentoCardProps = {
  children: React.ReactNode
  className?: string
  cardClassName?: string
  wrapperClassName?: string
  as?: React.ElementType
  badge?: React.ReactNode
  [key: string]: unknown
}

// Card with a subtle radial glow that follows the pointer on hover — the
// signature hover treatment shared across every card grid on the site.
// `className` lays out the actual children (flex/grid/padding — it's applied
// to the div that directly wraps them). `cardClassName` overrides the outer
// chrome (border/background/shadow) only, e.g. for a highlighted variant.
// `badge` renders centered on the card's own top border (outside the card's
// own overflow-hidden box), for the classic "Recomendado" ribbon look.
// `wrapperClassName` reaches the outermost positioning div, only needed when
// a caller must extend a CSS Grid subgrid through this component (e.g. to
// align row-by-row with a sibling card).
export function BentoCard({
  children,
  className,
  cardClassName,
  wrapperClassName,
  as: Tag = "div",
  badge,
  ...props
}: BentoCardProps) {
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  return (
    <div className={cn("relative h-full", wrapperClassName)}>
      {badge && (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center">
          <div className="pointer-events-auto -translate-y-1/2">{badge}</div>
        </div>
      )}
      <Tag
        onMouseMove={handleMouse}
        className={cn(
          "group relative block h-full overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-foreground/15",
          cardClassName,
        )}
        {...props}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), color-mix(in oklch, var(--foreground) 5%, transparent), transparent 60%)",
          }}
        />
        <div className={cn("relative z-10 h-full", className)}>{children}</div>
      </Tag>
    </div>
  )
}
