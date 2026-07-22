import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { RevealText } from "@/components/reveal-text"

export function CtaSection({
  title = "Seu próximo produto digital pode começar aqui.",
  description = "Conte o que sua empresa precisa e receba uma proposta alinhada ao projeto, ao momento do negócio e aos objetivos de crescimento.",
  primaryLabel = "Solicitar orçamento",
  secondaryLabel = "Falar sobre meu projeto",
}: {
  title?: string
  description?: string
  primaryLabel?: string
  secondaryLabel?: string
}) {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute -bottom-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -top-24 right-0 h-56 w-56 rounded-full bg-accent/60 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <RevealText as="h2" className="text-balance text-3xl font-light tracking-tight text-foreground sm:text-4xl">
              {title}
            </RevealText>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contato">
                  {primaryLabel}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contato">{secondaryLabel}</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
