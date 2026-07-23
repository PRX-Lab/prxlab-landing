import type { Metadata } from "next"
import Link from "next/link"
import { Check, Minus, ArrowRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/page-hero"
import { Section, SectionHeading } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { LandingPlanCard } from "@/components/cards"
import { CtaSection } from "@/components/cta-section"
import { landingPlans } from "@/lib/content"

export const metadata: Metadata = {
  title: "Landing Pages",
  description:
    "Compare os modelos de landing page da PRXLab: Básica, Customizável e Completa, com diferentes níveis de controle sobre o conteúdo.",
}

type Cell = "yes" | "no" | "partial" | "addon" | "included" | string

const rows: { label: string; basica: Cell; customizavel: Cell; completa: Cell }[] = [
  { label: "Painel administrativo", basica: "no", customizavel: "partial", completa: "yes" },
  { label: "Alteração de textos", basica: "no", customizavel: "partial", completa: "yes" },
  { label: "Alteração de imagens", basica: "no", customizavel: "partial", completa: "yes" },
  { label: "Controle de produtos", basica: "no", customizavel: "partial", completa: "yes" },
  { label: "Controle de estoque", basica: "no", customizavel: "partial", completa: "yes" },
  { label: "Controle de localidades", basica: "no", customizavel: "partial", completa: "yes" },
  { label: "Gerenciamento de cards", basica: "no", customizavel: "partial", completa: "yes" },
  { label: "Gerenciamento de seções", basica: "no", customizavel: "no", completa: "yes" },
  { label: "Sistema de traduções", basica: "addon", customizavel: "addon", completa: "included" },
  { label: "Sistema de dois temas", basica: "addon", customizavel: "addon", completa: "included" },
  { label: "Possibilidade de expansão", basica: "Limitada", customizavel: "Modular", completa: "Ampla" },
  {
    label: "Indicação de uso",
    basica: "Conteúdo estático",
    customizavel: "Áreas específicas",
    completa: "Controle total",
  },
]

function CellValue({ value }: { value: Cell }) {
  if (value === "yes")
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
        <Check className="size-4 text-primary" />
        Sim
      </span>
    )
  if (value === "no")
    return (
      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
        <Minus className="size-4" />
        Não
      </span>
    )
  if (value === "partial")
    return <span className="text-sm text-muted-foreground">Áreas específicas</span>
  if (value === "addon")
    return (
      <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
        Adicional
      </span>
    )
  if (value === "included")
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        <Check className="size-4" />
        Incluído
      </span>
    )
  return <span className="text-sm text-muted-foreground">{value}</span>
}

export default function LandingPagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Landing pages"
        title="Escolha o nível de controle que o seu projeto precisa."
        description="Três modelos com diferentes graus de autonomia para gerenciar o conteúdo. Um deles é recomendado, mas a melhor escolha depende do seu projeto."
      >
        <Button asChild size="lg">
          <Link href="/contato">
            Avaliar meu projeto
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </PageHero>

      <Section className="prx-wash-secondary">
        <div className="grid gap-5 lg:grid-cols-3">
          {landingPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 80}>
              <LandingPlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Comparativo"
            title="O que cada modelo permite gerenciar."
            description="Uma comparação visual entre os três modelos para ajudar na escolha."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-sm font-semibold text-foreground sm:p-5">Recurso</th>
                  <th className="p-4 text-sm font-semibold text-foreground sm:p-5">Básica</th>
                  <th className="p-4 text-sm font-semibold text-primary sm:p-5">
                    Customizável
                    <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium">
                      Recomendada
                    </span>
                  </th>
                  <th className="p-4 text-sm font-semibold text-foreground sm:p-5">Completa</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 1 ? "bg-secondary/40" : ""}>
                    <td className="p-4 text-sm text-muted-foreground sm:p-5">{row.label}</td>
                    <td className="p-4 sm:p-5"><CellValue value={row.basica} /></td>
                    <td className="p-4 sm:p-5"><CellValue value={row.customizavel} /></td>
                    <td className="p-4 sm:p-5"><CellValue value={row.completa} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "O plano básico é estático, sem painel administrativo.",
              "O plano customizável libera somente áreas específicas definidas no projeto.",
              "O plano completo permite controle amplo de toda a página.",
              "Traduções e o sistema de dois temas são recursos adicionais nos planos básico e customizável. O plano completo já inclui os dois.",
              "Seguimos as diretrizes do Google PageSpeed Insights para garantir boa performance em todos os projetos.",
            ].map((note) => (
              <div key={note} className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                <Info className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{note}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <CtaSection
        title="Vamos avaliar o seu projeto?"
        description="Conte o que você precisa gerenciar e indicamos o modelo de landing page mais adequado, com uma proposta sob medida."
        primaryLabel="Solicitar proposta"
        secondaryLabel="Falar com a PRXLab"
      />
    </>
  )
}
