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
    <section className="relative overflow-hidden">
      <ParticleNetwork className="absolute inset-0 h-full w-full text-primary/50" density={50} connections={false} />
      <div className="relative px-4 py-13 sm:px-6 sm:py-16 lg:px-8">
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
