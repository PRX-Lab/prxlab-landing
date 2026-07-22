"use client"

import * as React from "react"

type Stat = { value: number; suffix?: string; prefix?: string; label: string; description?: string }

const stats: Stat[] = [
  { value: 9, suffix: "+", label: "Projetos desenvolvidos" },
  { value: 8, suffix: "+", label: "Tecnologias utilizadas" },
  {
    value: 99.9,
    suffix: "%",
    label: "Disponibilidade da infraestrutura",
    description: "Meta de disponibilidade dos ambientes que hospedamos, com monitoramento contínuo.",
  },
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
  return (
    <div className="text-center sm:text-left">
      <div className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {stat.prefix}
        {value}
        {stat.suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
      {stat.description && (
        <div className="mt-1 max-w-88 text-xs leading-relaxed text-muted-foreground/70">
          {stat.description}
        </div>
      )}
    </div>
  )
}

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
    <div ref={ref} className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} run={run} />
      ))}
    </div>
  )
}
