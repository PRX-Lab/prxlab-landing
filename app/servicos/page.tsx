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
  type LucideIcon,
} from "lucide-react"
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

const detailedServices: DetailedService[] = [
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

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {detailedServices.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={(i % 2) * 80}>
                <BentoCard as="article" className="flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-xl border border-border bg-secondary text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h2 className="text-lg font-semibold text-foreground">{service.title}</h2>
                  </div>

                  <dl className="mt-5 space-y-3 text-sm">
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Problema que resolve</dt>
                      <dd className="mt-1 text-muted-foreground">{service.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Para quem é indicado</dt>
                      <dd className="mt-1 text-muted-foreground">{service.audience}</dd>
                    </div>
                  </dl>

                  <div className="mt-4">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Principais possibilidades</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {service.possibilities.map((p) => (
                        <span key={p} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="mt-5 text-sm font-medium text-foreground">{service.benefit}</p>

                  <div className="mt-auto pt-6">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/contato">
                        Solicitar orçamento
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
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
