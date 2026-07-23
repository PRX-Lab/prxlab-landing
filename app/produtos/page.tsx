import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section, SectionHeading } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { ProductCard } from "@/components/cards"
import { CtaSection } from "@/components/cta-section"
import { products } from "@/lib/content"

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Produtos próprios e projetos selecionados da PRXLab, começando pelo PRX Finance System, um sistema financeiro em produção.",
}

export default function ProdutosPage() {
  return (
    <>
      <PageHero
        eyebrow="Produtos"
        title="Produtos próprios e projetos selecionados."
        description="Além de projetos sob medida, desenvolvemos e mantemos produtos próprios em produção. Esta página cresce conforme novos produtos são lançados."
      />

      <Section className="prx-wash-secondary">
        <div className="space-y-8">
          {products.map((product) => (
            <Reveal key={product.name}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
            <SectionHeading
              align="center"
              title="Novos produtos em breve."
              description="Esta seção está preparada para receber novos produtos da PRXLab. Tem uma ideia de produto? Podemos desenvolvê-la com você."
            />
          </div>
        </Reveal>
      </Section>

      <CtaSection
        title="Quer um produto como este para o seu negócio?"
        description="Podemos desenvolver uma solução semelhante, adaptada ao seu processo, ou criar um produto totalmente novo a partir da sua ideia."
        primaryLabel="Desenvolver minha solução"
        secondaryLabel="Falar com a PRXLab"
      />
    </>
  )
}
