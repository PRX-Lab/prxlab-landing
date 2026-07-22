import type React from "react"
import { cn } from "@/lib/utils"
import { RevealText } from "@/components/reveal-text"

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn("px-4 py-20 sm:px-6 sm:py-24 lg:px-8", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-primary",
        className,
      )}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-primary prx-pulse-dot" />
      {children}
    </span>
  )
}

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-foreground/5 px-3 py-1 font-pixel text-[11px] tracking-widest text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string
  title: string
  description?: React.ReactNode
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className={cn(align === "center" && "flex justify-center")}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <RevealText
        as="h2"
        className="mt-4 text-pretty text-3xl font-light tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]"
      >
        {title}
      </RevealText>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
