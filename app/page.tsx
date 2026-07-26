import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
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
import { LandingPlanCard } from "@/components/cards"
import { ProjectsCarousel } from "@/components/projects-carousel"
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
      <section className="relative -mt-24 h-screen min-h-160 overflow-hidden">
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
      <Reveal>
        <StatsStrip />
      </Reveal>

      {/* SERVIÇOS — stacking cards */}
      <Section id="servicos">
        <Reveal>
          <PixelIcon type="platform" size={36} />
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
            items={services.map((service, i): React.ReactNode => {
              const Icon = service.icon
              const image = `/images/0${i + 1}.png`
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 md:h-56 md:flex-row"
                >
                  <div className="relative z-10 flex flex-col justify-center p-6 md:w-3/5">
                    <span className="grid size-9 place-items-center rounded-lg border border-border bg-secondary text-primary transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
                      <Icon className="size-4" />
                    </span>
                    <h3 className="mt-3 text-lg font-light tracking-tight text-foreground">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                      <p className="text-sm font-medium text-foreground">{service.benefit}</p>
                      <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                  </div>
                  <div className="relative h-36 shrink-0 overflow-hidden md:h-auto md:w-2/5">
                    <img
                      src={image}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-bottom object-contain px-4 pt-4 transition-transform duration-500 ease-out group-hover:scale-110 md:px-6 md:pt-6"
                      style={{
                        maskImage: "radial-gradient(85% 90% at 50% 100%, black 60%, transparent 100%)",
                        WebkitMaskImage: "radial-gradient(85% 90% at 50% 100%, black 60%, transparent 100%)",
                      }}
                    />
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
        className="prx-wash-secondary relative px-4 py-13 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="relative mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center"><PixelIcon type="pricing" size={36} /></div>
            <div className="mt-4 flex justify-center"><Tag>LANDING PAGES</Tag></div>
            <RevealText as="h2" className="mt-5 text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-[3rem] md:leading-[1.1]">
              {"Três modelos para diferentes\nníveis de controle."}
            </RevealText>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Escolha o modelo conforme a autonomia que você precisa para gerenciar o conteúdo. Não
              apresentamos preços: cada projeto recebe uma proposta.
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
      <Section>
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
          </Reveal>
          <Reveal delay={120}>
            <BentoCard className="flex h-full flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Exemplos de projetos</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Alguns dos tipos de aplicação que já desenvolvemos para diferentes operações.
              </p>
              <ul className="mt-5 grid flex-1 auto-rows-min grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
                {systemExamples.map((ex) => (
                  <li key={ex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="size-3.5 shrink-0 text-primary" />
                    {ex}
                  </li>
                ))}
              </ul>
            </BentoCard>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <div className="mt-8 flex justify-center">
            <Button asChild>
              <Link href="/sistemas">
                Ver sistemas e SaaS
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* PRODUTO EM DESTAQUE */}
      <section id="projetos-proprios" className="prx-wash-secondary relative px-4 py-11 sm:px-6 sm:py-13 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              align="center"
              className="mx-auto"
              eyebrow="Projetos próprios"
              title="Projetos próprios da PRXLab."
              description="Além de projetos sob medida, desenvolvemos e mantemos projetos próprios em produção."
            />
          </Reveal>
          <div className="mt-12">
            <ProjectsCarousel products={products} />
          </div>
        </div>
      </section>

      {/* HOSPEDAGEM */}
      <Section id="hospedagem">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <PixelIcon type="hosting" size={36} />
            <div className="mt-4"><Tag>HOSPEDAGEM GERENCIADA</Tag></div>
            <RevealText as="h2" className="mt-5 text-3xl font-light tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
              {"Desenvolvemos, publicamos\ne cuidamos do seu ambiente."}
            </RevealText>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A PRXLab pode publicar e hospedar o seu projeto, reduzindo a complexidade técnica do dia a
              dia, com monitoramento contínuo de disponibilidade.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/hospedagem">
                  Ver como funciona a hospedagem
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

      {/* MARQUEE */}
      <MarqueeStrip
        className="prx-wash-secondary-sm"
        rowTop={["Landing Pages", "Sistemas sob medida", "Produtos SaaS", "Hospedagem gerenciada", "Dashboards", "Integrações", "Automatizações", "Portais para clientes"]}
        rowBottom={["Certificado SSL", "Monitoramento", "Suporte técnico", "Manutenção contínua", "Segurança e permissões", "Escalabilidade", "UI/UX moderno", "Backups"]}
      />

      {/* PROCESSO */}
      <Section>
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
                <h3 className="mt-3 min-h-12 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* DIFERENCIAIS */}
      <section className="bg-accent">
        <div className="mx-auto max-w-7xl px-4 py-11 sm:px-6 sm:py-13 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-primary/50" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground">
                Por que escolher a PRXLab
              </span>
            </div>
            <RevealText
              as="h2"
              className="mt-5 text-3xl font-light tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]"
            >
              {"Desenvolvimento próximo, moderno\ne preparado para durar."}
            </RevealText>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map((d, i) => {
              const Icon = d.icon
              return (
                <Reveal key={d.title} delay={i * 50}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/30">
                    <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold text-foreground">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section>
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
