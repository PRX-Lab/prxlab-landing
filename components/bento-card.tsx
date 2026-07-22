"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type BentoCardProps = {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  [key: string]: unknown
}

// Card with a subtle radial glow that follows the pointer on hover — the
// signature hover treatment shared across every card grid on the site.
export function BentoCard({ children, className, as: Tag = "div", ...props }: BentoCardProps) {
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  return (
    <Tag
      onMouseMove={handleMouse}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-foreground/15",
        className,
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
      <div className="relative z-10 h-full">{children}</div>
    </Tag>
  )
}
