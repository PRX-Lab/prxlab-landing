import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { ProductCard } from "@/components/cards"
import { CtaSection } from "@/components/cta-section"
import { products } from "@/lib/content"

export const metadata: Metadata = {
  title: "Projetos Próprios",
  description:
    "Projetos próprios da PRXLab: PRX Finance System, ACID/C e Truco Online, produtos e sites em produção desenvolvidos pela nossa equipe.",
}

export default function ProdutosPage() {
  return (
    <>
      <PageHero
        eyebrow="Projetos Próprios"
        title="Projetos próprios e produtos em produção."
        description="Além de projetos sob medida para clientes, desenvolvemos e mantemos projetos próprios em produção. Esta página cresce conforme novos projetos são lançados."
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

      <CtaSection
        title="Quer um produto como este para o seu negócio?"
        description="Podemos desenvolver uma solução semelhante, adaptada ao seu processo, ou criar um produto totalmente novo a partir da sua ideia."
        primaryLabel="Desenvolver minha solução"
        secondaryLabel="Falar com a PRXLab"
      />
    </>
  )
}
