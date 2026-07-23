"use client"

import * as React from "react"
import { Info } from "lucide-react"

type Stat = {
  value: number
  suffix?: string
  prefix?: string
  label: string
  techGroups?: { label: string; items: string[] }[]
}

const stats: Stat[] = [
  { value: 9, suffix: "+", label: "Projetos desenvolvidos" },
  {
    value: 8,
    suffix: "+",
    label: "Tecnologias utilizadas",
    techGroups: [
      { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Bootstrap"] },
      { label: "Backend", items: ["NestJS", "Python", "Go", "TypeScript"] },
    ],
  },
  { value: 99.9, suffix: "%", label: "Disponibilidade da infraestrutura" },
]

function useCountUp(end: number, run: boolean, duration = 1600) {
  const [value, setValue] = React.useState(0)
  React.useEffect(() => {
    if (!run || end === 0) {
      setValue(end)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(end * eased * 10) / 10)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end, run, duration])
  return value
}

function StatItem({ stat, run }: { stat: Stat; run: boolean }) {
  const value = useCountUp(stat.value, run)
  const hasPopover = !!stat.techGroups

  return (
    <div
      className={`group relative px-6 py-12 text-center sm:px-8 sm:text-left ${hasPopover ? "cursor-help" : ""}`}
      tabIndex={hasPopover ? 0 : undefined}
    >
      <div className="font-display text-5xl font-semibold tracking-tight text-accent-foreground sm:text-6xl">
        {stat.prefix}
        {value}
        {stat.suffix}
      </div>
      <div className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-widest text-accent-foreground">
        <span className={hasPopover ? "border-b border-dashed border-accent-foreground/50" : undefined}>
          {stat.label}
        </span>
        {hasPopover && (
          <Info className="size-3.5 shrink-0 opacity-70 transition-transform duration-200 group-hover:scale-110" />
        )}
      </div>

      {stat.techGroups && (
        <div
          className="pointer-events-none absolute inset-x-4 top-full z-30 mt-3 origin-top scale-95 rounded-xl border border-border bg-popover p-4 text-left opacity-0 shadow-2xl transition-all duration-200 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-focus:pointer-events-auto group-focus:scale-100 group-focus:opacity-100 sm:inset-x-8 sm:w-72"
        >
          {stat.techGroups.map((group, i) => (
            <div key={group.label} className={i > 0 ? "mt-3" : undefined}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{group.label}</p>
              <p className="mt-1 text-sm text-popover-foreground">{group.items.join(", ")}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// A full-bleed, color-inverted band — a "spec sheet" moment that reads as
// its own object on the page, distinct from every bordered/tinted card
// treatment used elsewhere on the site.
export function StatsStrip() {
  const ref = React.useRef<HTMLDivElement>(null)
  const [run, setRun] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="bg-accent">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-accent-foreground/15 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} run={run} />
        ))}
      </div>
    </div>
  )
}
