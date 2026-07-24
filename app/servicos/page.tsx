import type { Metadata } from "next"
import Link from "next/link"
import {
  LayoutTemplate,
  Globe,
  Boxes,
  Blocks,
  Building2,
  Plug,
  LineChart,
  Cloud,
  Wrench,
  RefreshCcw,
  ArrowRight,
  Users,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { BentoCard } from "@/components/bento-card"
import { CtaSection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Landing pages, sites institucionais, sistemas personalizados, SaaS, ferramentas internas, integrações, dashboards, hospedagem e manutenção pela PRXLab.",
}

type DetailedService = {
  icon: LucideIcon
  title: string
  problem: string
  audience: string
  possibilities: string[]
  benefit: string
}

type ServiceGroup = {
  category: string
  description: string
  centered?: boolean
  services: DetailedService[]
}

const serviceGroups: ServiceGroup[] = [
  {
    category: "Presença digital",
    description: "Para apresentar a empresa, um serviço ou uma campanha com uma boa primeira impressão.",
    centered: true,
    services: [
      {
        icon: LayoutTemplate,
        title: "Landing pages",
        problem: "Falta de uma página objetiva para apresentar um produto, serviço ou campanha.",
        audience: "Negócios que precisam de presença digital rápida e profissional.",
        possibilities: ["Apresentação institucional", "Campanhas e portfólios", "Captação de contatos", "Integração com WhatsApp"],
        benefit: "Presença digital profissional com boa performance.",
      },
      {
        icon: Globe,
        title: "Sites institucionais",
        problem: "Presença online desatualizada ou pouco alinhada à imagem da empresa.",
        audience: "Empresas que precisam comunicar credibilidade e estrutura.",
        possibilities: ["Páginas institucionais", "Áreas de serviços", "Blog ou conteúdo", "Formulários de contato"],
        benefit: "Uma presença consistente e bem estruturada.",
      },
    ],
  },
  {
    category: "Sistemas e produtos",
    description: "Para organizar operações, lançar um produto digital ou conectar as ferramentas do dia a dia.",
    services: [
      {
        icon: Boxes,
        title: "Sistemas personalizados",
        problem: "Processos manuais, planilhas dispersas e ferramentas que não se encaixam na operação.",
        audience: "Empresas com regras de negócio específicas.",
        possibilities: ["Gestão e cadastros", "Controle de usuários e permissões", "Relatórios", "Automatizações"],
        benefit: "Um sistema que se adapta ao seu processo.",
      },
      {
        icon: Blocks,
        title: "Produtos SaaS",
        problem: "Necessidade de um produto multiusuário e escalável por assinatura.",
        audience: "Quem quer lançar ou evoluir um produto digital.",
        possibilities: ["Aplicações por assinatura", "Múltiplos usuários e planos", "Painéis administrativos", "Integrações"],
        benefit: "Base sólida para crescer com segurança.",
      },
      {
        icon: Building2,
        title: "Ferramentas internas",
        problem: "Times perdendo tempo com tarefas repetitivas e dados desorganizados.",
        audience: "Equipes que precisam de eficiência operacional.",
        possibilities: ["Automação de rotinas", "Centralização de dados", "Fluxos de aprovação", "Controle de acesso"],
        benefit: "Menos retrabalho e mais organização.",
      },
      {
        icon: Plug,
        title: "Integrações",
        problem: "Sistemas que não conversam entre si, gerando duplicidade de trabalho.",
        audience: "Operações que dependem de várias ferramentas.",
        possibilities: ["Integração entre sistemas", "APIs e webhooks", "Sincronização de dados", "Automação de fluxos"],
        benefit: "Informações conectadas e consistentes.",
      },
      {
        icon: LineChart,
        title: "Dashboards",
        problem: "Dificuldade de acompanhar indicadores e tomar decisões com clareza.",
        audience: "Gestores que precisam de visão do negócio.",
        possibilities: ["Indicadores em tempo real", "Visualizações de dados", "Filtros e recortes", "Exportações"],
        benefit: "Decisões apoiadas em dados organizados.",
      },
    ],
  },
  {
    category: "Continuidade e suporte",
    description: "Para manter o projeto no ar, funcionando bem e evoluindo depois da publicação.",
    centered: true,
    services: [
      {
        icon: Cloud,
        title: "Hospedagem",
        problem: "Complexidade técnica para publicar e manter o projeto no ar.",
        audience: "Clientes que querem foco no negócio, não na infraestrutura.",
        possibilities: ["Publicação e ambiente", "SSL e monitoramento", "Atualizações de infraestrutura", "Backups quando incluídos"],
        benefit: "Menor complexidade técnica no dia a dia.",
      },
      {
        icon: Wrench,
        title: "Manutenção",
        problem: "Projetos que ficam parados por falta de acompanhamento técnico.",
        audience: "Quem já tem um produto e precisa de suporte contínuo.",
        possibilities: ["Correções", "Melhorias contínuas", "Monitoramento", "Suporte técnico"],
        benefit: "Estabilidade e continuidade do produto.",
      },
      {
        icon: RefreshCcw,
        title: "Evolução de sistemas existentes",
        problem: "Sistemas legados que precisam crescer ou modernizar funcionalidades.",
        audience: "Empresas com produtos já em uso.",
        possibilities: ["Novas funcionalidades", "Modernização de interface", "Refatoração", "Novas integrações"],
        benefit: "Seu produto evolui junto com o negócio.",
      },
    ],
  },
]

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Soluções de software para cada momento do seu negócio."
        description="Do site institucional ao sistema completo, desenvolvemos projetos sob medida com foco em organização, segurança e escalabilidade."
      >
        <Button asChild size="lg">
          <Link href="/contato">
            Solicitar orçamento
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </PageHero>

      {serviceGroups.map((group, groupIndex) => (
        <Section key={group.category} className={groupIndex % 2 === 0 ? "prx-wash-secondary" : undefined}>
          <Reveal className={group.centered ? "mx-auto max-w-2xl text-center" : undefined}>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
              {group.category}
            </p>
            <h2
              className={cn(
                "mt-2 text-2xl font-semibold tracking-tight text-foreground",
                group.centered ? "mx-auto" : "max-w-2xl",
              )}
            >
              {group.description}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {group.services.map((service, i) => {
              const Icon = service.icon
              return (
                <Reveal key={service.title} delay={(i % 2) * 80}>
                  <BentoCard as="article" className="flex h-full flex-col overflow-hidden p-0">
                    <div className="h-1 bg-primary" aria-hidden="true" />
                    <div className="flex h-full flex-col p-6 sm:p-7">
                      <div className="flex items-center gap-3">
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="size-5" />
                        </span>
                        <h3 className="flex min-h-11 items-center text-lg font-semibold text-foreground">
                          {service.title}
                        </h3>
                      </div>

                      <p className="mt-4 min-h-11 text-sm leading-relaxed text-muted-foreground">{service.problem}</p>

                      <div className="mt-3 flex min-h-10 items-start gap-2 text-sm text-muted-foreground">
                        <Users className="mt-0.5 size-4 shrink-0" />
                        <span>{service.audience}</span>
                      </div>

                      <div className="mt-5 flex min-h-14 flex-wrap gap-2">
                        {service.possibilities.map((p) => (
                          <span
                            key={p}
                            className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {p}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex items-start gap-2 rounded-xl bg-primary/10 p-3 text-sm font-medium text-primary">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                        <span>{service.benefit}</span>
                      </div>

                      <div className="mt-auto pt-6">
                        <Link
                          href="/contato"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary"
                        >
                          Solicitar orçamento
                          <ArrowRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </BentoCard>
                </Reveal>
              )
            })}
          </div>
        </Section>
      ))}

      <CtaSection />
    </>
  )
}
