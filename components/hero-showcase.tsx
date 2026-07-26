"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

// A hero backdrop built from the product itself instead of abstract art:
// a small collage of floating UI cards — a code snippet, a services
// overview, a portfolio summary and a web-page mockup — echoing what
// PRXLab actually ships. Cards drift gently and tilt toward the pointer
// for a bit of depth; everything is plain markup, no generated art.

function WindowChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-border/80 px-3.5 py-2.5">
      <span className="size-2 rounded-full bg-foreground/15" />
      <span className="size-2 rounded-full bg-foreground/15" />
      <span className="size-2 rounded-full bg-foreground/15" />
      <span className="ml-2 truncate font-mono text-[10px] text-muted-foreground/70">{label}</span>
    </div>
  )
}

function CodeCard() {
  return (
    <div className="w-72 overflow-hidden rounded-xl border border-border bg-card/95 shadow-xl shadow-black/5 backdrop-blur-md">
      <WindowChrome label="projeto.prxlab.ts" />
      <div className="space-y-1 p-4 font-mono text-[11px] leading-relaxed">
        <div><span className="text-primary">export const</span> <span className="text-foreground">projeto</span> <span className="text-muted-foreground">= {"{"}</span></div>
        <div className="pl-4"><span className="text-foreground">tecnologia</span><span className="text-muted-foreground">:</span> <span className="text-primary">"moderna"</span><span className="text-muted-foreground">,</span></div>
        <div className="pl-4"><span className="text-foreground">desenvolvimento</span><span className="text-muted-foreground">:</span> <span className="text-primary">"sob medida"</span><span className="text-muted-foreground">,</span></div>
        <div className="pl-4"><span className="text-foreground">deploy</span><span className="text-muted-foreground">:</span> <span className="text-primary">"cloud"</span><span className="text-muted-foreground">,</span></div>
        <div className="pl-4"><span className="text-foreground">status</span><span className="text-muted-foreground">:</span> <span className="text-primary">"online"</span></div>
        <div>
          <span className="text-muted-foreground">{"}"}</span>
          <span className="prx-blink ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-primary align-middle" />
        </div>
      </div>
    </div>
  )
}

const SERVICE_LIST = ["Landing Pages", "Sistemas Personalizados", "Produtos SaaS", "Hospedagem Gerenciada"]

function ServicesCard() {
  return (
    <div className="w-64 overflow-hidden rounded-xl border border-border bg-card/95 p-4 shadow-xl shadow-black/5 backdrop-blur-md">
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">Soluções desenvolvidas</p>
      <ul className="mt-2 space-y-1">
        {SERVICE_LIST.map((item) => (
          <li key={item} className="flex items-center gap-1.5 text-xs text-foreground">
            <span className="size-1 shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center justify-between gap-2 border-t border-border pt-2.5">
        <p className="text-xs font-medium text-foreground">9 projetos desenvolvidos</p>
        <span className="inline-flex shrink-0 items-center gap-0.5 whitespace-nowrap rounded-full bg-accent px-1.5 py-0.5 text-[9px] font-medium text-accent-foreground">
          <ArrowUpRight className="size-3" />
          Novos em construção
        </span>
      </div>
      <svg viewBox="0 0 120 32" className="mt-2 h-8 w-full overflow-visible">
        <path
          d="M2 24 L18 20 L34 22 L50 12 L66 15 L82 6 L98 9 L118 2"
          fill="none"
          className="prx-chart-draw"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function PortfolioCard() {
  return (
    <div className="w-56 overflow-hidden rounded-xl border border-border bg-card/95 p-4 shadow-xl shadow-black/5 backdrop-blur-md">
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">Projetos desenvolvidos</p>
      <p className="mt-1.5 text-xl font-semibold tracking-tight text-foreground">9 projetos</p>
      <p className="mt-1 text-xs text-muted-foreground">Sites, sistemas e produtos digitais</p>
      <div className="mt-2.5 flex items-center gap-1.5 border-t border-border pt-2.5">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-success" />
        </span>
        <span className="font-mono text-[10px] text-muted-foreground">Portfólio atualizado</span>
      </div>
    </div>
  )
}

function BrowserCard() {
  return (
    <div className="w-60 overflow-hidden rounded-xl border border-border bg-card/95 shadow-xl shadow-black/5 backdrop-blur-md">
      <div className="flex items-center gap-1.5 border-b border-border/80 px-3 py-2">
        <span className="size-2 rounded-full bg-foreground/15" />
        <span className="size-2 rounded-full bg-foreground/15" />
        <span className="ml-1 flex-1 truncate rounded-full bg-secondary px-2 py-0.5 text-center font-mono text-[9px] text-muted-foreground/70">
          prxlab.app
        </span>
      </div>
      <div className="space-y-1.5 p-3">
        <div className="h-2.5 w-2/3 rounded bg-foreground/10" />
        <div className="h-1.5 w-full rounded bg-foreground/6" />
        <div className="h-1.5 w-4/5 rounded bg-foreground/6" />
        <div className="mt-2 h-5 w-16 rounded-md bg-primary/90" />
      </div>
    </div>
  )
}

function ChatCard() {
  return (
    <div className="w-64 overflow-hidden rounded-xl border border-border bg-card/95 shadow-xl shadow-black/5 backdrop-blur-md">
      <div className="flex items-center gap-2 border-b border-border/80 px-3.5 py-2.5">
        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
          P
        </span>
        <span className="text-xs font-medium text-foreground">Suporte PRXLab</span>
        <span className="relative ml-auto flex size-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-success" />
        </span>
      </div>
      <div className="space-y-2 p-3.5">
        <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-secondary px-3 py-2 text-xs leading-relaxed text-secondary-foreground">
          Olá! Como podemos ajudar o seu projeto hoje?
        </div>
        <div className="flex items-center gap-1 rounded-xl rounded-tl-sm bg-secondary px-3 py-2.5">
          <span className="prx-typing-dot size-1.5 rounded-full bg-muted-foreground" />
          <span className="prx-typing-dot size-1.5 rounded-full bg-muted-foreground" />
          <span className="prx-typing-dot size-1.5 rounded-full bg-muted-foreground" />
        </div>
      </div>
    </div>
  )
}

function UptimeBadge() {
  return (
    <div className="relative grid size-24 place-items-center">
      <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
        <circle cx="50" cy="50" r="44" fill="none" stroke="var(--border)" strokeWidth="6" />
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="6"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="1"
          className="prx-ring-draw"
          style={{ ["--prx-ring-to" as string]: "0.001" }}
        />
      </svg>
      <div className="grid size-18 place-items-center rounded-full border border-border bg-card/95 text-center shadow-xl shadow-black/5 backdrop-blur-md">
        <div>
          <p className="text-base font-semibold leading-none text-foreground">99,9%</p>
          <p className="mt-1 font-mono text-[8px] uppercase tracking-widest text-muted-foreground/70">Uptime</p>
        </div>
      </div>
    </div>
  )
}

// Nodes, roughly: Saas → Code → Finance → Chat → Browser — traced so the
// traveling dots visibly pass by every card, including the support widget.
const CONNECTOR_PATH =
  "M14,18 C 40,8 65,10 84,20 C 94,32 78,40 68,46 C 52,50 45,48 33,46 C 55,55 75,68 88,80"

function Connector() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 hidden h-full w-full sm:block"
    >
      <path
        d={CONNECTOR_PATH}
        fill="none"
        stroke="var(--primary)"
        strokeOpacity="0.28"
        strokeWidth="0.35"
        strokeDasharray="1"
        strokeDashoffset="1"
        pathLength={1}
        style={{ animation: "prx-line-draw 1.8s cubic-bezier(0.16,1,0.3,1) 0.6s both" }}
      />
      {[0, 1.8, 3.6].map((beginOffset) => (
        <circle key={beginOffset} r="0.6" fill="var(--primary)">
          <animateMotion
            dur="5.4s"
            begin={`${1.8 + beginOffset}s`}
            repeatCount="indefinite"
            path={CONNECTOR_PATH}
          />
        </circle>
      ))}
    </svg>
  )
}

const STATUS_MESSAGES = [
  "Backup automático concluído",
  "Certificado SSL renovado",
  "Novo relatório financeiro gerado",
  "Ambiente monitorado sem incidentes",
]

function StatusToast() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((v) => (v + 1) % STATUS_MESSAGES.length)
        setVisible(true)
      }, 350)
    }, 4200)
    return () => clearInterval(cycle)
  }, [])

  return (
    <div
      className="absolute left-[40%] bottom-[9%] hidden md:block"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(6px)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
      }}
    >
      <div className="flex items-center gap-2 rounded-full border border-border bg-card/95 px-3.5 py-2 shadow-lg shadow-black/5 backdrop-blur-md">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-success" />
        </span>
        <span className="whitespace-nowrap text-xs font-medium text-foreground">{STATUS_MESSAGES[index]}</span>
      </div>
    </div>
  )
}

const CARDS = [
  { Card: CodeCard, className: "right-[6%] top-[12%]", float: "prx-float-a", depth: 22, delay: 0 },
  { Card: ServicesCard, className: "right-[26%] top-[42%] hidden sm:block", float: "prx-float-b", depth: 34, delay: 120 },
  { Card: PortfolioCard, className: "left-[8%] top-[10%] hidden lg:block", float: "prx-float-c", depth: 14, delay: 200 },
  { Card: BrowserCard, className: "right-[2%] bottom-[16%] hidden md:block", float: "prx-float-d", depth: 28, delay: 60 },
  { Card: ChatCard, className: "left-[26%] top-[38%] hidden lg:block", float: "prx-float-b", depth: 18, delay: 160 },
  { Card: UptimeBadge, className: "right-[44%] top-[8%] hidden xl:block", float: "prx-float-c", depth: 12, delay: 240 },
] as const

export function HeroShowcase() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = rootRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width - 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5
    el.style.setProperty("--hero-mx", nx.toFixed(3))
    el.style.setProperty("--hero-my", ny.toFixed(3))
  }

  return (
    <div ref={rootRef} className="absolute inset-0 overflow-hidden" onMouseMove={handleMouseMove}>
      <div aria-hidden="true" className="prx-blob-a absolute -right-10 -top-16 h-128 w-lg rounded-full bg-primary/25 blur-[110px]" />
      <div aria-hidden="true" className="prx-blob-c absolute left-[6%] bottom-[-8%] h-96 w-96 rounded-full bg-accent/70 blur-[100px]" />
      <div aria-hidden="true" className="prx-blob-b absolute left-[30%] top-[4%] h-80 w-80 rounded-full bg-primary/15 blur-[90px]" />
      <div aria-hidden="true" className="prx-blob-a absolute right-[18%] bottom-[6%] h-72 w-72 rounded-full bg-accent/60 blur-[90px]" />

      <Connector />

      {CARDS.map(({ Card, className, float, depth, delay }, i) => (
        <div
          key={i}
          className={`absolute ${className}`}
          style={{
            transform: `translate(calc(var(--hero-mx, 0) * ${depth}px), calc(var(--hero-my, 0) * ${depth}px))`,
            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            opacity: mounted ? 1 : 0,
            filter: mounted ? "blur(0px)" : "blur(12px)",
            transitionProperty: "transform, opacity, filter",
            transitionDelay: `${delay}ms, ${delay}ms, ${delay}ms`,
            transitionDuration: "0.4s, 0.9s, 0.9s",
          }}
        >
          <div className={float}>
            <Card />
          </div>
        </div>
      ))}

      <StatusToast />

      {/* Fade rising from the bottom, so the collage settles into the page background behind the text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "linear-gradient(to top, var(--background) 0%, var(--background) 22%, color-mix(in oklab, var(--background) 80%, transparent) 45%, transparent 100%)",
        }}
      />
    </div>
  )
}
