import type { Metadata } from "next"
import Link from "next/link"
import {
  Rocket,
  ShieldCheck,
  Activity,
  DatabaseBackup,
  Headphones,
  Server,
  ArrowRight,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"
import { Section, SectionHeading } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { BentoCard } from "@/components/bento-card"
import { HostingCard } from "@/components/cards"
import { Faq } from "@/components/faq"
import { CtaSection } from "@/components/cta-section"
import { hostingPlans } from "@/lib/content"

export const metadata: Metadata = {
  title: "Hospedagem",
  description:
    "Hospedagem gerenciada pela PRXLab: publicação, ambiente, SSL, monitoramento, manutenção de infraestrutura e suporte, com planos mensais e anuais.",
}

const included = [
  { icon: Rocket, title: "Publicação", desc: "Colocamos o projeto no ar em um ambiente configurado." },
  { icon: Server, title: "Configuração do ambiente", desc: "Ambiente ajustado conforme o tipo de sistema." },
  { icon: ShieldCheck, title: "Certificado SSL", desc: "Conexão segura para o seu projeto." },
  { icon: Activity, title: "Monitoramento", desc: "Acompanhamento de disponibilidade do ambiente." },
  { icon: DatabaseBackup, title: "Backups", desc: "Rotinas de backup quando incluídas no plano." },
  { icon: Headphones, title: "Suporte técnico", desc: "Apoio para questões relacionadas à infraestrutura." },
]

const hostingFaqs = [
  {
    q: "A hospedagem pode ser mensal ou anual?",
    a: "Sim. Existem opções mensais e anuais. Os recursos variam conforme o projeto e o tipo de sistema.",
  },
  {
    q: "Os recursos são iguais para todos os projetos?",
    a: "Não. A infraestrutura é definida de acordo com o tipo de sistema e as necessidades de cada projeto.",
  },
  {
    q: "Como funciona a publicação?",
    a: "Cuidamos da publicação e da configuração do ambiente, incluindo SSL e monitoramento, para reduzir a complexidade técnica do cliente.",
  },
  {
    q: "Os backups estão sempre incluídos?",
    a: "Os backups são incluídos quando previstos no plano contratado. Podemos ampliar as rotinas conforme a necessidade do projeto.",
  },
  {
    q: "Posso solicitar uma proposta personalizada?",
    a: "Sim. Avaliamos o seu projeto e preparamos uma proposta de hospedagem adequada ao tipo de sistema e ao volume esperado.",
  },
]

export default function HospedagemPage() {
  return (
    <>
      <PageHero
        eyebrow="Hospedagem gerenciada"
        title="Publicamos e cuidamos do ambiente do seu projeto."
        description="A PRXLab pode desenvolver, publicar e hospedar o seu projeto, cuidando do ambiente, da segurança e da manutenção da infraestrutura."
      >
        <Button asChild size="lg">
          <Link href="/contato">
            Solicitar proposta
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </PageHero>

      {/* O que pode estar incluído */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="O que pode estar incluído"
            title="Menos complexidade técnica para o seu negócio."
            description="Os itens abaixo podem compor o serviço de hospedagem. A combinação exata depende do plano e do tipo de projeto."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={(i % 3) * 60}>
                <BentoCard className="flex h-full flex-col p-6">
                  <span className="grid size-10 place-items-center rounded-lg bg-secondary text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </BentoCard>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Planos */}
      <Section className="border-t border-border">
        <Reveal>
          <SectionHeading
            eyebrow="Planos"
            title="Três níveis, definidos conforme o projeto."
            description="Os recursos variam conforme o projeto. Não trabalhamos com promessas de capacidade fixa — a infraestrutura é dimensionada por necessidade."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {hostingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80}>
              <HostingCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
            <Calendar className="size-4 text-primary" />
            Opções mensais e anuais. A infraestrutura é definida de acordo com o tipo de sistema.
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Perguntas frequentes" title="Dúvidas sobre hospedagem." />
          </Reveal>
          <Reveal delay={100}>
            <Faq items={hostingFaqs} />
          </Reveal>
        </div>
      </Section>

      <CtaSection
        title="Quer publicar e hospedar seu projeto com a PRXLab?"
        description="Avaliamos o tipo de sistema e preparamos uma proposta de hospedagem adequada, com opções mensais e anuais."
        primaryLabel="Solicitar proposta"
        secondaryLabel="Falar com a PRXLab"
      />
    </>
  )
}
