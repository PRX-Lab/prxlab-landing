import type { Metadata } from "next"
import { Mail, MessageCircle, Clock, MapPin, SendHorizontal, Search, CalendarCheck } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Section, SectionHeading } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { RevealText } from "@/components/reveal-text"
import { BentoCard } from "@/components/bento-card"
import { ContactForm } from "@/components/contact-form"
import { Faq } from "@/components/faq"
import { siteConfig } from "@/lib/site"
import { faqs } from "@/lib/content"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a PRXLab. Conte sobre seu projeto e receba uma proposta para landing pages, sistemas personalizados, produtos SaaS ou hospedagem.",
}

const whatsappDigits = siteConfig.whatsapp.replace(/\D/g, "")

const channels = [
  {
    icon: Mail,
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.whatsapp,
    href: `https://wa.me/${whatsappDigits}`,
    external: true,
  },
  {
    icon: Clock,
    label: "Tempo de resposta",
    value: siteConfig.responseTime,
  },
  {
    icon: MapPin,
    label: "Atendimento",
    value: "Projetos remotos para todo o Brasil",
  },
]

const nextSteps = [
  {
    icon: SendHorizontal,
    title: "Você envia os detalhes",
    desc: "Preencha o formulário ou fale direto por um dos canais de atendimento.",
  },
  {
    icon: Search,
    title: "Analisamos o projeto",
    desc: `Avaliamos o escopo do seu projeto. ${siteConfig.responseTime}.`,
  },
  {
    icon: CalendarCheck,
    title: "Alinhamos os próximos passos",
    desc: "Conversamos sobre a proposta, o prazo e como o projeto vai andar.",
  },
]

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu projeto"
        description="Conte o que a sua empresa precisa. Retornamos com as próximas etapas e uma proposta alinhada ao escopo e aos objetivos do negócio."
      />

      <Section className="prx-wash-secondary">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <RevealText as="h2" className="text-2xl font-semibold tracking-tight text-foreground">
              Canais de atendimento
            </RevealText>
            <Reveal delay={80}>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Prefere falar direto? Use um dos canais abaixo. Se preferir, preencha o formulário e nós
                entramos em contato.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {channels.map((c, i) => {
                const Icon = c.icon
                const linkProps = c.href
                  ? { as: "a" as const, href: c.href, ...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
                  : {}
                return (
                  <Reveal key={c.label} delay={i * 70}>
                    <BentoCard {...linkProps} className="flex h-full items-center gap-4 p-5">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-secondary text-primary">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {c.label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-foreground">{c.value}</p>
                      </div>
                    </BentoCard>
                  </Reveal>
                )
              })}
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <RevealText as="h3" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                O que acontece depois
              </RevealText>
              <div className="mt-5 space-y-5">
                {nextSteps.map((step, i) => {
                  const Icon = step.icon
                  return (
                    <Reveal key={step.title} delay={i * 70}>
                      <div className="flex gap-4">
                        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-secondary text-primary">
                          <Icon className="size-4" />
                        </span>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">{step.title}</h4>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </div>

          <Reveal delay={120}>
            <div>
              <RevealText as="h2" className="text-xl font-semibold text-foreground">
                Solicitar orçamento
              </RevealText>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Preencha os campos abaixo com o máximo de detalhes possível.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Perguntas comuns antes de começar"
          align="center"
          className="mx-auto"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <Faq items={faqs} />
        </div>
      </Section>
    </>
  )
}
