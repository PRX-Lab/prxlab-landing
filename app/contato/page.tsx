import type { Metadata } from "next"
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { BentoCard } from "@/components/bento-card"
import { ContactForm } from "@/components/contact-form"
import { Faq } from "@/components/faq"
import { SectionHeading } from "@/components/section"
import { siteConfig } from "@/lib/site"
import { faqs } from "@/lib/content"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a PRXLab. Conte sobre seu projeto e receba uma proposta para landing pages, sistemas personalizados, produtos SaaS ou hospedagem.",
}

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
    href: "#",
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

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu projeto"
        description="Conte o que a sua empresa precisa. Retornamos com as próximas etapas e uma proposta alinhada ao escopo e aos objetivos do negócio."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Canais de atendimento</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Prefere falar direto? Use um dos canais abaixo. Se preferir, preencha o formulário e nós
                entramos em contato.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {channels.map((c, i) => {
                const Icon = c.icon
                const content = (
                  <BentoCard
                    {...(c.href ? { as: "a", href: c.href } : {})}
                    className="flex h-full items-start gap-4 p-5"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-foreground">{c.value}</p>
                    </div>
                  </BentoCard>
                )
                return (
                  <Reveal key={c.label} delay={i * 70}>
                    {content}
                  </Reveal>
                )
              })}
            </div>

            <Reveal delay={200}>
              <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Os dados de contato acima são de exemplo e podem ser atualizados com as informações
                  reais da empresa.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-foreground">Solicitar orçamento</h2>
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

      <Section className="border-t border-border bg-muted/30">
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
