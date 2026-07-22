import type { Metadata } from "next"
import Link from "next/link"
import { Target, Eye, Compass, Handshake, ArrowRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Section, SectionHeading } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { BentoCard } from "@/components/bento-card"
import { Button } from "@/components/ui/button"
import { CtaSection } from "@/components/cta-section"
import { differentials, processSteps } from "@/lib/content"

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A PRXLab é uma empresa de tecnologia focada em desenvolvimento de landing pages, sistemas personalizados, produtos SaaS e hospedagem gerenciada.",
}

const values = [
  {
    icon: Target,
    title: "Missão",
    desc: "Desenvolver soluções digitais sob medida que ajudam negócios a organizar operações, crescer e escalar com tecnologia moderna.",
  },
  {
    icon: Eye,
    title: "Visão",
    desc: "Ser referência em desenvolvimento de produtos digitais que unem design, engenharia e hospedagem em uma experiência única.",
  },
  {
    icon: Compass,
    title: "Propósito",
    desc: "Aproximar a tecnologia do negócio, construindo produtos que resolvem problemas reais e evoluem ao longo do tempo.",
  },
  {
    icon: Handshake,
    title: "Como trabalhamos",
    desc: "Comunicação direta, transparência e acompanhamento próximo em todas as etapas, do planejamento à evolução contínua.",
  },
]

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a PRXLab"
        title="Tecnologia sob medida para negócios que querem crescer"
        description="A PRXLab é uma empresa de tecnologia especializada em desenvolvimento de landing pages, sistemas personalizados e produtos SaaS, com hospedagem e evolução contínua na mesma casa."
      >
        <Button asChild size="lg">
          <Link href="/contato">
            Falar com a PRXLab
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Quem somos"
                title="Desenvolvimento e hospedagem em um só lugar"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Trabalhamos para transformar necessidades de negócio em produtos digitais bem construídos.
                  Do primeiro contato à publicação, o foco é entender o problema e entregar uma solução que
                  faça sentido para a operação.
                </p>
                <p>
                  Além de desenvolver, cuidamos da hospedagem, do ambiente e da manutenção. Isso reduz a
                  complexidade técnica para o cliente e mantém tudo funcionando de forma estável e segura.
                </p>
                <p>
                  Cada projeto é acompanhado de perto, com comunicação direta e evolução contínua depois da
                  entrega, para que o produto continue crescendo junto com o negócio.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <Reveal key={v.title} delay={i * 80}>
                  <BentoCard className="flex h-full flex-col p-6">
                    <span className="grid size-11 place-items-center rounded-xl border border-border bg-secondary text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-foreground">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                  </BentoCard>
                </Reveal>
              )
            })}
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-muted/30">
        <SectionHeading
          eyebrow="Como conduzimos os projetos"
          title="Um processo claro do início à evolução"
          description="Etapas bem definidas para manter o projeto organizado e previsível."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <BentoCard className="flex h-full flex-col p-6">
                <span className="font-pixel text-2xl font-semibold text-primary">{step.n}</span>
                <h3 className="mt-3 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Diferenciais"
          title="O que torna a PRXLab diferente"
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((d, i) => {
            const Icon = d.icon
            return (
              <Reveal key={d.title} delay={i * 60}>
                <BentoCard className="flex h-full flex-col p-6">
                  <span className="grid size-11 place-items-center rounded-xl border border-border bg-secondary text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </BentoCard>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <CtaSection />
    </>
  )
}
