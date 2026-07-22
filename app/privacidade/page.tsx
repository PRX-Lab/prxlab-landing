import type { Metadata } from "next"
import { LegalPage, type LegalSection } from "@/components/legal-page"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a PRXLab coleta, utiliza e protege os dados pessoais fornecidos por meio do site e dos formulários de contato.",
}

const sections: LegalSection[] = [
  {
    heading: "Introdução",
    paragraphs: [
      "Esta Política de Privacidade descreve como a PRXLab trata os dados pessoais coletados por meio deste site, incluindo os formulários de contato e solicitação de orçamento.",
      "Ao utilizar o site e enviar suas informações, você declara estar ciente das práticas descritas neste documento.",
    ],
  },
  {
    heading: "Dados que coletamos",
    paragraphs: ["Podemos coletar os seguintes dados, fornecidos voluntariamente por você:"],
    bullets: [
      "Nome e informações de identificação;",
      "E-mail e telefone/WhatsApp para contato;",
      "Nome da empresa e informações sobre o projeto;",
      "Mensagens e conteúdos enviados pelos formulários.",
    ],
  },
  {
    heading: "Como utilizamos os dados",
    paragraphs: ["As informações coletadas são utilizadas para as seguintes finalidades:"],
    bullets: [
      "Responder solicitações e entrar em contato;",
      "Elaborar propostas e orçamentos;",
      "Prestar e melhorar os serviços contratados;",
      "Cumprir obrigações legais e contratuais.",
    ],
  },
  {
    heading: "Compartilhamento de dados",
    paragraphs: [
      "A PRXLab não vende dados pessoais. As informações podem ser compartilhadas apenas com fornecedores e parceiros essenciais à prestação do serviço, como provedores de infraestrutura e hospedagem, sempre com o objetivo de viabilizar os projetos contratados.",
    ],
  },
  {
    heading: "Armazenamento e segurança",
    paragraphs: [
      "Adotamos medidas técnicas e organizacionais para proteger os dados contra acesso não autorizado, perda ou uso indevido. Os dados são mantidos apenas pelo tempo necessário para cumprir as finalidades descritas ou obrigações legais.",
    ],
  },
  {
    heading: "Seus direitos",
    paragraphs: ["Você pode, a qualquer momento, solicitar:"],
    bullets: [
      "Confirmação da existência de tratamento de dados;",
      "Acesso, correção ou atualização dos seus dados;",
      "Exclusão dos dados, quando aplicável;",
      "Revogação do consentimento fornecido.",
    ],
  },
  {
    heading: "Cookies",
    paragraphs: [
      "O site pode utilizar cookies e tecnologias semelhantes para melhorar a experiência de navegação e entender como o site é utilizado. Você pode gerenciar as preferências de cookies nas configurações do seu navegador.",
    ],
  },
  {
    heading: "Contato",
    paragraphs: [
      `Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato pelo e-mail ${siteConfig.email}.`,
    ],
  },
]

export default function PrivacidadePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Política de Privacidade"
      description="Entenda como tratamos e protegemos os dados pessoais fornecidos por meio do nosso site."
      updatedAt="Modelo editável"
      sections={sections}
    />
  )
}
