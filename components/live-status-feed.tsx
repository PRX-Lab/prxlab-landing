"use client"

import { useEffect, useRef, useState } from "react"

const HOSTS = [
  "app.cliente-a.prxlab.app",
  "painel.cliente-b.prxlab.app",
  "financeiro.cliente-c.prxlab.app",
  "loja.cliente-d.prxlab.app",
  "portal.cliente-e.prxlab.app",
  "sistema.cliente-f.prxlab.app",
]

const EVENTS = [
  "Verificação de disponibilidade concluída",
  "Certificado SSL renovado automaticamente",
  "Backup diário concluído com sucesso",
  "Deploy publicado em produção",
  "Monitoramento de uptime sem incidentes",
  "Atualização de infraestrutura aplicada",
  "Verificação de segurança concluída",
  "Sincronização de ambiente concluída",
]

const STATUSES = [
  { label: "Online", tone: "success" as const },
  { label: "Online", tone: "success" as const },
  { label: "Online", tone: "success" as const },
  { label: "Online", tone: "success" as const },
  { label: "Manutenção", tone: "maintenance" as const },
  { label: "Offline", tone: "offline" as const },
  { label: "Falha identificada", tone: "failure" as const },
]

const STATUS_TONE: Record<(typeof STATUSES)[number]["tone"], string> = {
  success: "bg-success",
  maintenance: "bg-amber-500",
  offline: "bg-muted-foreground/50",
  failure: "bg-destructive",
}

type Row = {
  key: number
  host: string
  event: string
  status: (typeof STATUSES)[number]
  progress: number
}

function randomRow(key: number): Row {
  return {
    key,
    host: HOSTS[Math.floor(Math.random() * HOSTS.length)],
    event: EVENTS[Math.floor(Math.random() * EVENTS.length)],
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
    progress: Math.floor(Math.random() * 60 + 40),
  }
}

const SEED_ROWS: Row[] = [
  { key: 0, host: "app.cliente-a.prxlab.app", event: "Backup diário concluído com sucesso", status: STATUSES[0], progress: 100 },
  { key: 1, host: "painel.cliente-b.prxlab.app", event: "Certificado SSL renovado automaticamente", status: STATUSES[0], progress: 100 },
  { key: 2, host: "financeiro.cliente-c.prxlab.app", event: "Deploy publicado em produção", status: STATUSES[4], progress: 72 },
  { key: 3, host: "loja.cliente-d.prxlab.app", event: "Monitoramento de uptime sem incidentes", status: STATUSES[0], progress: 100 },
  { key: 4, host: "sistema.cliente-f.prxlab.app", event: "Verificação de disponibilidade concluída", status: STATUSES[0], progress: 100 },
]

function ProgressBar({ initial }: { initial: number }) {
  const [pct, setPct] = useState(initial)
  const rafRef = useRef<number>(0)
  const pctRef = useRef(initial)

  useEffect(() => {
    const tick = () => {
      pctRef.current = Math.min(100, pctRef.current + 0.02)
      setPct(Math.round(pctRef.current))
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div className="h-0.5 w-full overflow-hidden rounded-full bg-foreground/10">
      <div className="h-full rounded-full bg-foreground/35 transition-[width] duration-500" style={{ width: `${pct}%` }} />
    </div>
  )
}

export function LiveStatusFeed() {
  const [rows, setRows] = useState<Row[]>(SEED_ROWS)
  const keyRef = useRef(100)

  useEffect(() => {
    setRows(Array.from({ length: 5 }, (_, i) => randomRow(i)))
    const t = setInterval(() => {
      keyRef.current++
      setRows((prev) => [...prev.slice(1), randomRow(keyRef.current)])
    }, 3200)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card/70">
      <div className="grid grid-cols-[1fr_100px] gap-2 border-b border-border bg-foreground/3 px-4 py-2">
        {["AMBIENTE / EVENTO", "STATUS"].map((h) => (
          <span key={h} className="font-mono text-[9px] tracking-widest text-muted-foreground/60">{h}</span>
        ))}
      </div>
      <div>
        {rows.map((row, i) => (
          <div
            key={row.key}
            className="grid grid-cols-[1fr_100px] items-center gap-2 border-b border-border/60 px-4 py-2.5"
            style={{ animation: i === rows.length - 1 ? "prx-row-in 0.4s cubic-bezier(0.16,1,0.3,1) both" : "none" }}
          >
            <div className="min-w-0">
              <div className="truncate font-mono text-[11px] text-foreground/70">{row.host}</div>
              <div className="mb-1.5 truncate text-[11px] text-muted-foreground">{row.event}</div>
              <ProgressBar initial={row.progress} />
            </div>
            <div className="flex items-center gap-1.5">
              <span
                className={`size-1.5 shrink-0 rounded-full ${STATUS_TONE[row.status.tone]}`}
                style={
                  row.status.tone === "success" || row.status.tone === "failure"
                    ? { animation: "prx-pulse-dot 2s ease-in-out infinite" }
                    : undefined
                }
              />
              <span className="font-mono text-[10px] text-muted-foreground/70">{row.status.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
