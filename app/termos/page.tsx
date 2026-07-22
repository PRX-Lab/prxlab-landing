import type { Metadata } from "next"
import { LegalPage, type LegalSection } from "@/components/legal-page"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Condições gerais para uso do site da PRXLab e contratação dos serviços de desenvolvimento e hospedagem.",
}

const sections: LegalSection[] = [
  {
    heading: "Aceitação dos termos",
    paragraphs: [
      "Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. Caso não concorde com qualquer condição, recomendamos que não utilize o site.",
    ],
  },
  {
    heading: "Sobre os serviços",
    paragraphs: [
      "A PRXLab oferece desenvolvimento de landing pages, sistemas personalizados, produtos SaaS e hospedagem gerenciada. O escopo, o prazo e as condições de cada projeto são definidos individualmente em proposta específica.",
    ],
  },
  {
    heading: "Uso do site",
    paragraphs: ["Ao utilizar este site, você se compromete a:"],
    bullets: [
      "Fornecer informações verdadeiras nos formulários;",
      "Não utilizar o site para fins ilícitos ou não autorizados;",
      "Não tentar comprometer a segurança ou o funcionamento do site.",
    ],
  },
  {
    heading: "Propriedade intelectual",
    paragraphs: [
      "Os conteúdos, marcas, layout e elementos visuais deste site pertencem à PRXLab ou a seus licenciadores. A reprodução, distribuição ou uso sem autorização é vedada.",
      "Os direitos sobre os produtos desenvolvidos para clientes são definidos em contrato específico de cada projeto.",
    ],
  },
  {
    heading: "Propostas e orçamentos",
    paragraphs: [
      "As solicitações enviadas pelo site não constituem contrato. A prestação de serviços ocorre somente após aprovação de proposta e formalização entre as partes.",
    ],
  },
  {
    heading: "Hospedagem e disponibilidade",
    paragraphs: [
      "Os serviços de hospedagem seguem as condições do plano contratado. Buscamos manter a maior disponibilidade possível, mas podem ocorrer interrupções por manutenção, fatores técnicos ou de terceiros, conforme previsto em cada proposta.",
    ],
  },
  {
    heading: "Limitação de responsabilidade",
    paragraphs: [
      "A PRXLab não se responsabiliza por danos decorrentes do uso indevido do site ou de fatores externos fora do seu controle. As responsabilidades relativas a cada projeto são definidas nos respectivos contratos.",
    ],
  },
  {
    heading: "Alterações dos termos",
    paragraphs: [
      "Estes Termos de Uso podem ser atualizados a qualquer momento. A versão vigente estará sempre disponível nesta página.",
    ],
  },
  {
    heading: "Contato",
    paragraphs: [
      `Em caso de dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail ${siteConfig.email}.`,
    ],
  },
]

export default function TermosPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Termos de Uso"
      description="Condições gerais para navegação no site e contratação dos serviços da PRXLab."
      updatedAt="Modelo editável"
      sections={sections}
    />
  )
}
