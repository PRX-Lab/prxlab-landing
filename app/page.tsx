import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Section, SectionHeading, Eyebrow, Tag } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { RevealText } from "@/components/reveal-text"
import { BentoCard } from "@/components/bento-card"
import { PixelIcon } from "@/components/pixel-icon"
import { HeroShowcase } from "@/components/hero-showcase"
import { StatsStrip } from "@/components/stats-strip"
import { StackingServiceCards } from "@/components/stacking-service-cards"
import { LiveStatusFeed } from "@/components/live-status-feed"
import { MarqueeStrip } from "@/components/marquee-strip"
import { LandingPlanCard, ProductCard } from "@/components/cards"
import { CtaSection } from "@/components/cta-section"
import { Faq } from "@/components/faq"
import {
  services,
  landingPlans,
  systemExamples,
  systemPillars,
  processSteps,
  differentials,
  products,
  faqs,
} from "@/lib/content"

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-24 h-screen min-h-160 overflow-hidden border-b border-border">
        <HeroShowcase />

        <div className="relative flex h-full flex-col">
          <div className="h-24 shrink-0" aria-hidden="true" />
          <div className="mt-auto w-full px-4 pb-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <Reveal>
                  <Eyebrow>Desenvolvimento de software</Eyebrow>
                </Reveal>
                <RevealText
                  as="h1"
                  delay={150}
                  className="mt-4 text-balance text-4xl font-light tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.05]"
                >
                  {"Desenvolvemos produtos\ndigitais preparados para crescer."}
                </RevealText>
                <Reveal delay={160}>
                  <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                    Landing pages, sistemas personalizados, produtos SaaS e hospedagem gerenciada para
                    transformar ideias e processos em soluções reais.
                  </p>
                </Reveal>
                <Reveal delay={240}>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="lg">
                      <Link href="/contato">
                        Solicitar orçamento
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link href="/servicos">Conhecer os serviços</Link>
                    </Button>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDICADORES */}
      <Section className="border-b border-border">
        <Reveal>
          <StatsStrip />
        </Reveal>
      </Section>

      {/* SERVIÇOS — stacking cards */}
      <Section id="servicos">
        <Reveal>
          <PixelIcon type="services" size={36} />
          <div className="mt-4"><Tag>SERVIÇOS</Tag></div>
          <RevealText as="h2" className="mt-5 text-3xl font-light tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            {"Do site institucional ao\nsistema completo."}
          </RevealText>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Desenvolvemos soluções sob medida em diferentes formatos, sempre com foco em organização,
            segurança e escalabilidade.
          </p>
        </Reveal>
        <div className="mt-12">
          <StackingServiceCards
            items={services.map((service): React.ReactNode => {
              const Icon = service.icon
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div className="relative flex h-40 items-center justify-center overflow-hidden bg-foreground/3 md:hidden">
                    <Icon className="size-16 text-foreground/10" strokeWidth={1} />
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 items-center justify-center overflow-hidden bg-foreground/3 md:flex">
                    <Icon className="size-40 text-foreground/6" strokeWidth={1} />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to right, var(--card) 0%, transparent 55%)" }}
                    />
                  </div>

                  <div className="relative z-10 p-8">
                    <div className="md:max-w-[55%]">
                      <span className="grid size-11 place-items-center rounded-xl border border-border bg-secondary text-primary">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="mt-5 text-xl font-light tracking-tight text-foreground">{service.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-5 md:max-w-[55%]">
                      <p className="text-sm font-medium text-foreground">{service.benefit}</p>
                      <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              )
            })}
          />
        </div>
      </Section>

      {/* LANDING PAGES — destaque */}
      <section
        id="landing-pages"
        className="relative overflow-hidden border-y border-border bg-linear-to-b from-secondary/70 via-secondary/20 to-transparent px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-2xl -translate-x-1/2 rounded-full bg-primary/12 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <PixelIcon type="pricing" size={36} />
            <div className="mt-4"><Tag>LANDING PAGES</Tag></div>
            <RevealText as="h2" className="mt-5 text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-[3rem] md:leading-[1.1]">
              {"Três modelos para diferentes\nníveis de controle."}
            </RevealText>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Escolha o modelo conforme a autonomia que você precisa para gerenciar o conteúdo. Não
              apresentamos preços — cada projeto recebe uma proposta.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {landingPlans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 80}>
                <LandingPlanCard plan={plan} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="outline">
                <Link href="/landing-pages">Comparar os modelos</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/contato">
                  Avaliar meu projeto
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SISTEMAS E SAAS */}
      <Section className="border-t border-border">
        <Reveal>
          <SectionHeading
            eyebrow="Sistemas e SaaS"
            title="Sistemas desenvolvidos para o seu processo, não o contrário."
            description="A PRXLab desenvolve plataformas sob medida para diferentes modelos de negócio, operações e necessidades."
          />
        </Reveal>
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {systemPillars.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <BentoCard key={pillar.title} className="p-5">
                    <Icon className="size-5 text-primary" />
                    <h3 className="mt-3 text-sm font-semibold text-foreground">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{pillar.desc}</p>
                  </BentoCard>
                )
              })}
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link href="/sistemas">
                  Ver sistemas e SaaS
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <BentoCard className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Exemplos de projetos</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {systemExamples.map((ex) => (
                  <span
                    key={ex}
                    className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </BentoCard>
          </Reveal>
        </div>
      </Section>

      {/* MARQUEE */}
      <MarqueeStrip
        rowTop={["Landing Pages", "Sistemas sob medida", "Produtos SaaS", "Hospedagem gerenciada", "Dashboards", "Integrações", "Automatizações", "Portais para clientes"]}
        rowBottom={["Certificado SSL", "Monitoramento", "Suporte técnico", "Manutenção contínua", "Segurança e permissões", "Escalabilidade", "UI/UX moderno", "Backups"]}
      />

      {/* PRODUTO EM DESTAQUE */}
      <Section className="border-b border-border">
        <Reveal>
          <SectionHeading
            eyebrow="Produto em destaque"
            title="Produtos próprios da PRXLab."
            description="Além de projetos sob medida, desenvolvemos produtos próprios em produção."
          />
        </Reveal>
        <div className="mt-12 space-y-6">
          {products.map((product) => (
            <Reveal key={product.name}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* HOSPEDAGEM */}
      <Section id="hospedagem">
        <Reveal>
          <PixelIcon type="hosting" size={36} />
          <div className="mt-4"><Tag>HOSPEDAGEM GERENCIADA</Tag></div>
          <RevealText as="h2" className="mt-5 text-3xl font-light tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            {"Desenvolvemos, publicamos\ne cuidamos do seu ambiente."}
          </RevealText>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <p className="text-base leading-relaxed text-muted-foreground">
              A PRXLab pode publicar e hospedar o seu projeto, reduzindo a complexidade técnica do dia a
              dia — com monitoramento contínuo de disponibilidade.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/hospedagem">
                  Ver planos de hospedagem
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <LiveStatusFeed />
          </Reveal>
        </div>
      </Section>

      {/* PROCESSO */}
      <Section className="border-t border-border">
        <Reveal>
          <PixelIcon type="workflow" size={36} />
          <div className="mt-4"><Tag>COMO TRABALHAMOS</Tag></div>
          <RevealText as="h2" className="mt-5 text-3xl font-light tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            {"Um processo transparente,\ndo primeiro contato à evolução."}
          </RevealText>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 70}>
              <BentoCard className="flex h-full flex-col p-6">
                <span className="font-pixel text-[11px] tracking-widest text-muted-foreground/50">{step.n}</span>
                <h3 className="mt-3 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* DIFERENCIAIS */}
      <Section className="border-t border-border">
        <Reveal>
          <SectionHeading
            eyebrow="Por que escolher a PRXLab"
            title="Desenvolvimento próximo, moderno e preparado para durar."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((d, i) => {
            const Icon = d.icon
            return (
              <Reveal key={d.title} delay={i * 50}>
                <BentoCard className="flex h-full flex-col p-6">
                  <span className="grid size-10 place-items-center rounded-lg bg-secondary text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </BentoCard>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Perguntas frequentes" title="Tudo que você precisa saber." />
          </Reveal>
          <Reveal delay={100}>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </Section>

      {/* CTA FINAL */}
      <CtaSection />
    </>
  )
}
