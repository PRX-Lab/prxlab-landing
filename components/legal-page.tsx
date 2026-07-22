import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"

export type LegalSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export function LegalPage({
  eyebrow,
  title,
  description,
  updatedAt,
  sections,
}: {
  eyebrow: string
  title: string
  description: string
  updatedAt: string
  sections: LegalSection[]
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Última atualização: {updatedAt}
          </p>
          <div className="mt-8 space-y-10">
            {sections.map((s, i) => (
              <section key={s.heading}>
                <h2 className="flex items-baseline gap-3 text-xl font-semibold text-foreground">
                  <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </h2>
                {s.paragraphs?.map((p, j) => (
                  <p key={j} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Este documento é um modelo informativo e deve ser revisado por um profissional jurídico
              antes da publicação definitiva, adequando-o à realidade e às obrigações legais da empresa.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
