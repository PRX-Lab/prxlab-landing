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
  RefreshCcw,
  Gauge,
  SlidersHorizontal,
  Gift,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"
import { Section, SectionHeading } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { BentoCard } from "@/components/bento-card"
import { Faq } from "@/components/faq"
import { CtaSection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Hospedagem",
  description:
    "Refazemos seu site com tecnologias modernas e boa performance, seguindo as diretrizes do Google PageSpeed Insights, e ainda cuidamos da hospedagem na nossa própria infraestrutura.",
}

const reasons = [
  {
    icon: SlidersHorizontal,
    title: "Não é responsivo ou customizável?",
    desc: "Recriamos o site com uma estrutura moderna, fácil de ajustar e adaptar conforme o negócio muda.",
  },
  {
    icon: Gauge,
    title: "É lento ou mal avaliado?",
    desc: "Desenvolvemos seguindo as diretrizes do Google PageSpeed Insights, para performance e boa avaliação nas buscas.",
  },
  {
    icon: RefreshCcw,
    title: "Está desatualizado?",
    desc: "Reconstruímos com tecnologias atuais, sem depender de plataformas antigas ou difíceis de manter.",
  },
  {
    icon: Gift,
    title: "E a hospedagem?",
    desc: "Vem de bônus: publicamos e hospedamos o novo site na nossa própria infraestrutura, sem você precisar procurar outra empresa para isso.",
  },
]

const included = [
  { icon: Rocket, title: "Publicação", desc: "Colocamos o projeto no ar em um ambiente configurado." },
  { icon: Server, title: "Configuração do ambiente", desc: "Ambiente ajustado conforme o tipo de sistema." },
  { icon: ShieldCheck, title: "Certificado SSL", desc: "Conexão segura para o seu projeto." },
  { icon: Activity, title: "Monitoramento", desc: "Acompanhamento de disponibilidade do ambiente." },
  { icon: DatabaseBackup, title: "Backups", desc: "Rotinas de backup quando previstas no escopo do projeto." },
  { icon: Headphones, title: "Suporte técnico", desc: "Apoio para questões relacionadas à infraestrutura." },
]

const hostingFaqs = [
  {
    q: "A hospedagem é mesmo um bônus, ou tem custo à parte?",
    a: "Ao refazer o seu site com a gente, você não precisa procurar outra empresa para hospedar: publicação, ambiente e SSL já entram no pacote de desenvolvimento do projeto.",
  },
  {
    q: "A hospedagem pode ser mensal ou anual?",
    a: "Sim. A forma de cobrança é definida na proposta, conforme o tipo de projeto.",
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
    a: "Os backups são incluídos conforme definido no escopo do projeto. Podemos ampliar as rotinas conforme a necessidade.",
  },
  {
    q: "Posso solicitar uma proposta personalizada?",
    a: "Sim. Avaliamos o seu projeto e preparamos uma proposta de desenvolvimento e hospedagem adequada ao tipo de sistema.",
  },
]

export default function HospedagemPage() {
  return (
    <>
      <PageHero
        eyebrow="Desenvolvimento + hospedagem"
        title="Seu site atual não é responsivo, moderno ou fácil de atualizar?"
        description="A gente refaz o seu site com as melhores tecnologias, boa performance e fácil manutenção — e ainda cuida da hospedagem na nossa própria infraestrutura, de bônus, para você não precisar se preocupar com mais esse detalhe."
      >
        <Button asChild size="lg">
          <Link href="/contato">
            Quero refazer meu site
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </PageHero>

      {/* Por que refazer com a gente */}
      <Section className="prx-wash-secondary">
        <Reveal>
          <SectionHeading
            align="center"
            className="mx-auto"
            eyebrow="Por que refazer com a gente"
            title="Um site novo, e a hospedagem já vem junto."
            description="Se o seu site hoje não representa bem o seu negócio, recriamos do zero — e cuidamos também de colocar e manter tudo no ar."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={(i % 4) * 60}>
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

      {/* O que pode estar incluído */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Hospedagem, de bônus"
            title="Menos complexidade técnica para o seu negócio."
            description="Ao refazer o seu projeto com a gente, os itens abaixo podem compor o serviço de hospedagem, incluído no pacote. A combinação exata depende do tipo de projeto."
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

      {/* FAQ */}
      <Section>
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
        title="Vamos refazer o seu site e cuidar da hospedagem?"
        description="Avaliamos o seu projeto atual e preparamos uma proposta de desenvolvimento que já inclui a hospedagem."
        primaryLabel="Quero refazer meu site"
        secondaryLabel="Falar com a PRXLab"
      />
    </>
  )
}
