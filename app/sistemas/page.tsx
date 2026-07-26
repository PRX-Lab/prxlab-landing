import type { Metadata } from "next"
import Link from "next/link"
import {
  Boxes,
  Wallet,
  Users,
  LineChart,
  Blocks,
  Building2,
  Workflow,
  Plug,
  Settings,
  Headphones,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"
import { Section, SectionHeading } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { BentoCard } from "@/components/bento-card"
import { CtaSection } from "@/components/cta-section"
import { systemPillars } from "@/lib/content"

export const metadata: Metadata = {
  title: "Sistemas e SaaS",
  description:
    "A PRXLab desenvolve sistemas administrativos, financeiros, portais, dashboards, SaaS, ferramentas internas e integrações sob medida.",
}

const categories: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Settings, title: "Gestão", desc: "Sistemas administrativos e de gestão para organizar operações." },
  { icon: Wallet, title: "Finanças", desc: "Controle financeiro, pagamentos e informações centralizadas." },
  { icon: Users, title: "Portais", desc: "Portais para clientes, parceiros e equipes internas." },
  { icon: LineChart, title: "Dashboards", desc: "Indicadores e visualizações para apoiar decisões." },
  { icon: Blocks, title: "SaaS", desc: "Plataformas por assinatura, multiusuário e escaláveis." },
  { icon: Building2, title: "Ferramentas internas", desc: "Aplicações de uso interno para o dia a dia da equipe." },
  { icon: Workflow, title: "Automatizações", desc: "Rotinas automatizadas para reduzir tarefas manuais." },
  { icon: Plug, title: "Integrações", desc: "Conexão entre sistemas, APIs e serviços." },
  { icon: Boxes, title: "Operações", desc: "Sistemas para processos operacionais específicos." },
  { icon: Headphones, title: "Atendimento ao cliente", desc: "Ferramentas para organizar o relacionamento com clientes." },
]

const examples = [
  "Sistemas administrativos",
  "Sistemas financeiros",
  "Portais para clientes",
  "Dashboards",
  "Sistemas de gestão",
  "Ferramentas internas",
  "Plataformas por assinatura",
  "Automatizações",
  "Integrações",
  "Aplicações de uso interno",
  "Aplicações para clientes",
]

export default function SistemasPage() {
  return (
    <>
      <PageHero
        eyebrow="Sistemas e SaaS"
        title="Sistemas desenvolvidos para o seu processo, não o contrário."
        description="A PRXLab desenvolve plataformas sob medida para diferentes modelos de negócio, operações e necessidades, de ferramentas internas a produtos por assinatura."
      >
        <Button asChild size="lg">
          <Link href="/contato">
            Solicitar orçamento
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </PageHero>

      {/* Categorias */}
      <Section className="prx-wash-secondary">
        <Reveal>
          <SectionHeading
            align="center"
            className="mx-auto"
            eyebrow="Categorias"
            title="Projetos diversos, construídos sob medida."
            description="Trabalhamos com diferentes tipos de aplicação. A categoria é apenas um ponto de partida: cada projeto é definido conforme a sua necessidade."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <Reveal key={cat.title} delay={(i % 3) * 60}>
                <BentoCard className="flex h-full flex-col p-6">
                  <span className="grid size-10 place-items-center rounded-lg bg-secondary text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{cat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.desc}</p>
                </BentoCard>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Pilares */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="O que garantimos"
            title="Regras de negócio, segurança e escalabilidade."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {systemPillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <Reveal key={pillar.title} delay={i * 60}>
                <BentoCard className="flex h-full flex-col p-6">
                  <Icon className="size-5 text-primary" />
                  <h3 className="mt-3 text-sm font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.desc}</p>
                </BentoCard>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Escopo definido por projeto */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Escopo sob medida"
              title="Cada projeto é definido conforme a necessidade."
              description="Escopo, funcionalidades, permissões, integrações e infraestrutura são definidos de acordo com o objetivo do projeto e o momento do negócio."
            />
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/contato">
                  Falar sobre meu projeto
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <BentoCard className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Exemplos de aplicações</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {examples.map((ex) => (
                  <span
                    key={ex}
                    className="shrink-0 whitespace-nowrap rounded-full border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </BentoCard>
          </Reveal>
        </div>
      </Section>

      <CtaSection
        title="Tem um processo que precisa de um sistema?"
        description="Conte como sua operação funciona hoje e avaliamos a melhor forma de transformá-la em um sistema sob medida."
        primaryLabel="Solicitar orçamento"
        secondaryLabel="Falar sobre meu projeto"
      />
    </>
  )
}
