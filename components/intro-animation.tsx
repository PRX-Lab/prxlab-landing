"use client"

import { useEffect, useState } from "react"

const LETTERS = ["P", "R", "X", "L", "A", "B"]

const LETTER_IN_STAGGER = 90
const LETTER_IN_DUR = 700
const HOLD_DURATION = 300
const LETTERS_IN_TOTAL = LETTER_IN_STAGGER * (LETTERS.length - 1) + LETTER_IN_DUR + HOLD_DURATION

const LETTER_OUT_STAGGER = 55
const LETTER_OUT_DUR = 450
const LETTERS_OUT_TOTAL = LETTER_OUT_STAGGER * (LETTERS.length - 1) + LETTER_OUT_DUR

const CURTAIN_DELAY = LETTERS_IN_TOTAL + 100
const CURTAIN_DURATION = 1300
const ANIM_TOTAL = CURTAIN_DELAY + LETTERS_OUT_TOTAL + 1400

const SESSION_KEY = "prxlab-intro-seen"

type Phase = "idle" | "in" | "out" | "done"

export function IntroAnimation() {
  const [skip, setSkip] = useState<boolean | null>(null)
  const [phase, setPhase] = useState<Phase>("idle")
  const [curtainUp, setCurtainUp] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      setSkip(true)
      return
    }
    sessionStorage.setItem(SESSION_KEY, "1")
    setSkip(false)
  }, [])

  useEffect(() => {
    if (skip !== false) return
    const t0 = setTimeout(() => setPhase("in"), 80)
    const t1 = setTimeout(() => setPhase("out"), LETTERS_IN_TOTAL)
    const t2 = setTimeout(() => setCurtainUp(true), CURTAIN_DELAY)
    const t3 = setTimeout(() => setPhase("done"), ANIM_TOTAL)
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [skip])

  if (skip !== false || phase === "done") return null

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none" aria-hidden="true">
      <div
        className="absolute inset-x-0 top-0 bg-background"
        style={{
          bottom: curtainUp ? "100%" : "0%",
          transition: curtainUp ? "bottom 1.3s cubic-bezier(0.76, 0, 0.24, 1)" : "none",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex" style={{ gap: "0.06em" }}>
          {LETTERS.map((letter, i) => {
            const inDelay = i * LETTER_IN_STAGGER
            const outDelay = i * LETTER_OUT_STAGGER

            const isIdle = phase === "idle"
            const isIn = phase === "in"
            const isOut = phase === "out"

            const opacity = isIdle ? 0 : isIn ? 1 : 0
            const blur = isIdle ? 36 : isIn ? 0 : 24
            const translateY = isIdle ? 48 : isIn ? 0 : -20

            const transition = isOut
              ? `opacity ${LETTER_OUT_DUR}ms cubic-bezier(0.4,0,1,1) ${outDelay}ms, filter ${LETTER_OUT_DUR}ms cubic-bezier(0.4,0,1,1) ${outDelay}ms, transform ${LETTER_OUT_DUR}ms cubic-bezier(0.4,0,1,1) ${outDelay}ms`
              : isIn
                ? `opacity ${LETTER_IN_DUR}ms cubic-bezier(0.16,1,0.3,1) ${inDelay}ms, filter ${LETTER_IN_DUR}ms cubic-bezier(0.16,1,0.3,1) ${inDelay}ms, transform ${LETTER_IN_DUR}ms cubic-bezier(0.16,1,0.3,1) ${inDelay}ms`
                : "none"

            return (
              <span
                key={i}
                className="font-display font-semibold text-foreground leading-none select-none"
                style={{
                  fontSize: `calc((100vw - 64px) / ${LETTERS.length + 1})`,
                  letterSpacing: "0.05em",
                  opacity,
                  filter: `blur(${blur}px)`,
                  transform: `translateY(${translateY}px)`,
                  transition,
                  willChange: "opacity, filter, transform",
                }}
              >
                {letter}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
