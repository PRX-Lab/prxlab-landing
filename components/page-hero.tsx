import type React from "react"
import { Eyebrow } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { RevealText } from "@/components/reveal-text"
import { ParticleNetwork } from "@/components/particle-network"

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <ParticleNetwork className="absolute inset-0 h-full w-full text-primary/60" density={60} connections={false} />
      <div
        aria-hidden="true"
        className="prx-blob-a absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="prx-blob-c absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-accent/80 blur-3xl"
      />
      <div className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <RevealText
              as="h1"
              delay={80}
              className="mt-4 text-balance text-4xl font-light tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.05]"
            >
              {title}
            </RevealText>
            <Reveal delay={160}>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
            </Reveal>
            {children && (
              <Reveal delay={240}>
                <div className="mt-8">{children}</div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
