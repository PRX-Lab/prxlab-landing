import {
  Boxes,
  Cloud,
  Wrench,
  LayoutTemplate,
  Blocks,
  LineChart,
  Plug,
  ShieldCheck,
  RefreshCcw,
  Building2,
  Gauge,
  type LucideIcon,
} from "lucide-react"

export type Service = {
  icon: LucideIcon
  title: string
  description: string
  benefit: string
  href: string
}

export const services: Service[] = [
  {
    icon: LayoutTemplate,
    title: "Landing pages",
    description:
      "Páginas de apresentação, campanhas e captação de contatos, com design responsivo e boa performance.",
    benefit: "Presença digital profissional rapidamente.",
    href: "/landing-pages",
  },
  {
    icon: Boxes,
    title: "Sistemas personalizados",
    description:
      "Plataformas construídas conforme suas regras de negócio, com controle de usuários e permissões.",
    benefit: "O sistema se adapta ao processo, não o contrário.",
    href: "/sistemas",
  },
  {
    icon: Blocks,
    title: "Produtos SaaS",
    description:
      "Aplicações por assinatura, multiusuário e preparadas para escalar conforme a operação cresce.",
    benefit: "Base sólida para produtos que evoluem.",
    href: "/sistemas",
  },
  {
    icon: Building2,
    title: "Produtos internos",
    description:
      "Ferramentas de uso interno para organizar operações, reduzir tarefas manuais e centralizar dados.",
    benefit: "Menos retrabalho e mais organização.",
    href: "/sistemas",
  },
  {
    icon: Cloud,
    title: "Hospedagem gerenciada",
    description:
      "Publicação, configuração de ambiente, SSL, monitoramento e manutenção da infraestrutura.",
    benefit: "Menor complexidade técnica para o cliente.",
    href: "/hospedagem",
  },
  {
    icon: RefreshCcw,
    title: "Manutenção e evolução",
    description:
      "Acompanhamento contínuo, correções, melhorias e novas funcionalidades após a publicação.",
    benefit: "Seu produto continua evoluindo com o negócio.",
    href: "/servicos",
  },
]

export type LandingPlan = {
  id: string
  name: string
  tagline: string
  description: string
  recommended?: boolean
  indicated: string[]
  includes: string[]
  addons?: string[]
  addonsIncluded?: boolean
}

export const landingPlans: LandingPlan[] = [
  {
    id: "basica",
    name: "Básica",
    tagline: "Estática, sem painel administrativo",
    description:
      "Landing page estática, ideal para apresentação institucional, divulgação de serviços e captação de contatos.",
    indicated: [
      "Apresentação institucional",
      "Divulgação de serviços",
      "Campanhas",
      "Portfólios",
      "Captação de contatos",
    ],
    includes: [
      "Conteúdo institucional",
      "Formulários",
      "Links comerciais",
      "Design responsivo e boa performance",
    ],
    addons: ["ADD-ON: Recurso de Traduções", "ADD-ON: Recurso de dois temas"],
  },
  {
    id: "customizavel",
    name: "Customizável",
    tagline: "Controle sobre áreas específicas",
    description:
      "Landing page com controle administrativo sobre partes específicas da página, definidas conforme o projeto.",
    recommended: true,
    indicated: [
      "Negócios com informações que mudam com frequência",
      "Catálogos e unidades",
      "Localidades e serviços",
    ],
    includes: [
      "Tudo do plano básico",
      "Controle limitado do site pela interface",
      "Controle administrativo do site pela interface (usuários, configurações)",
    ],
    addons: ["ADD-ON: Recurso de Traduções", "ADD-ON: Recurso de dois temas"],
  },
  {
    id: "completa",
    name: "Completa",
    tagline: "Controle amplo de todo o conteúdo",
    description:
      "Landing page com controle amplo sobre textos, imagens, seções e ordem dos componentes da página.",
    indicated: [
      "Quem precisa de autonomia total",
      "Conteúdo dinâmico e multilíngue",
      "Operações com muitas seções",
    ],
    includes: [
      "Tudo do plano customizável",
      "Controle total do site pela interface",
      "Textos, imagens e traduções editáveis pela interface",
      "Customização de seções e ordem de componentes pela interface",
    ],
    addons: ["Recurso de Traduções incluído", "Recurso de dois temas incluído"],
    addonsIncluded: true,
  },
]

export const systemExamples = [
  "Sistemas administrativos",
  "Sistemas financeiros",
  "Portais para clientes",
  "Dashboards",
  "Sistemas de gestão",
  "Ferramentas internas",
  "Plataformas por assinatura",
  "Automatizações",
  "Integrações",
  "Aplicações de uso interno",
  "Aplicações para clientes",
]

export const systemPillars = [
  { icon: Boxes, title: "Regras de negócio", desc: "Fluxos e regras personalizados conforme a sua operação." },
  { icon: ShieldCheck, title: "Segurança e permissões", desc: "Controle de usuários, perfis e acessos granulares." },
  { icon: LineChart, title: "Escalabilidade", desc: "Estrutura preparada para crescer junto com o negócio." },
  { icon: RefreshCcw, title: "Manutenção e evolução", desc: "Melhorias e novas funcionalidades ao longo do tempo." },
]

export const processSteps = [
  {
    n: "01",
    title: "Entendimento da necessidade",
    desc: "Conversamos para entender o contexto, o problema e os objetivos do projeto.",
  },
  {
    n: "02",
    title: "Definição do projeto",
    desc: "Alinhamos escopo, funcionalidades, prioridades e a melhor abordagem técnica.",
  },
  {
    n: "03",
    title: "Desenvolvimento",
    desc: "Construímos a solução com comunicação direta e entregas acompanhadas de perto.",
  },
  {
    n: "04",
    title: "Validação e publicação",
    desc: "Testamos, ajustamos e publicamos o projeto em um ambiente configurado.",
  },
  {
    n: "05",
    title: "Suporte, hospedagem e evolução",
    desc: "Suporte técnico e hospedagem disponíveis, com melhorias e novas funcionalidades avaliadas sob consulta.",
  },
]

export const differentials = [
  { icon: Wrench, title: "Desenvolvimento sob medida", desc: "Soluções construídas para o seu processo específico." },
  { icon: Plug, title: "Comunicação direta", desc: "Contato próximo e transparente durante todo o projeto." },
  { icon: LineChart, title: "Preparado para crescer", desc: "Arquitetura pensada para escalar com o negócio." },
  { icon: Cloud, title: "Desenvolvimento e hospedagem", desc: "Tudo na mesma empresa, com menos complexidade." },
  { icon: ShieldCheck, title: "Segurança e estabilidade", desc: "Foco em ambientes seguros e confiáveis." },
  { icon: Blocks, title: "Tecnologias modernas", desc: "Stack atual e bem estruturada." },
  { icon: RefreshCcw, title: "Suporte após a publicação", desc: "Acompanhamento contínuo e evolução do produto." },
  {
    icon: Gauge,
    title: "Performance validada",
    desc: "Seguimos as diretrizes do Google PageSpeed Insights em todos os projetos que desenvolvemos.",
  },
]

export const faqs = [
  {
    q: "Qual é a diferença entre os modelos de landing page?",
    a: "A básica é estática, sem painel administrativo. A customizável libera o gerenciamento apenas de áreas específicas definidas no projeto. A completa permite controle amplo sobre textos, imagens, seções e a ordem dos componentes.",
  },
  {
    q: "Posso editar o conteúdo do meu site?",
    a: "Depende do modelo contratado. Nos modelos customizável e completo você edita as áreas liberadas no projeto. O modelo básico é estático e as alterações são feitas pela PRXLab.",
  },
  {
    q: "É possível adicionar outros idiomas?",
    a: "Sim. O sistema de traduções pode ser contratado como recurso adicional nos modelos básico e customizável. No modelo completo, o sistema de idiomas já está incluído.",
  },
  {
    q: "A PRXLab também hospeda o projeto?",
    a: "Sim. Podemos desenvolver, publicar e hospedar o projeto, cuidando de ambiente, SSL, monitoramento e manutenção da infraestrutura.",
  },
  {
    q: "Posso contratar apenas o desenvolvimento?",
    a: "Sim. Você pode contratar somente o desenvolvimento e hospedar por conta própria, ou optar pela hospedagem gerenciada pela PRXLab.",
  },
  {
    q: "A hospedagem pode ser mensal ou anual?",
    a: "Sim. A forma de cobrança é definida na proposta, conforme o projeto e o tipo de sistema.",
  },
  {
    q: "A PRXLab desenvolve sistemas para qualquer segmento?",
    a: "Trabalhamos com diferentes modelos de negócio e operações. Escopo, funcionalidades e integrações são definidos conforme cada projeto.",
  },
  {
    q: "É possível continuar evoluindo o sistema após a publicação?",
    a: "Sim. Oferecemos manutenção e evolução contínua, com correções, melhorias e novas funcionalidades ao longo do tempo.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "Você compartilha a necessidade do projeto e preparamos uma proposta alinhada ao escopo, ao momento do negócio e aos objetivos de crescimento.",
  },
  {
    q: "O prazo é igual para todos os projetos?",
    a: "Não. O prazo depende do escopo e da complexidade de cada projeto e é definido durante a etapa de planejamento.",
  },
]

export type Product = {
  name: string
  category: string
  description: string
  problem: string
  features: string[]
  status: string
  href: string
  image: string
}

export const products: Product[] = [
  {
    name: "PRX Finance System",
    category: "Sistema financeiro",
    description:
      "Sistema financeiro desenvolvido para centralizar contas, pagamentos, compartilhamentos e informações financeiras em uma experiência simples e organizada.",
    problem:
      "Informações financeiras espalhadas e difíceis de acompanhar entre contas, pagamentos e pessoas.",
    features: [
      "Controle de contas e pagamentos",
      "Compartilhamento de informações",
      "Organização financeira centralizada",
      "Interface simples e objetiva",
    ],
    status: "Em produção",
    href: "https://finance-system.prxlab.app/login",
    image: "/images/prx-finance-mockup.png",
  },
  {
    name: "Truco Online",
    category: "Jogo multiplayer",
    description:
      "Aplicação para jogar truco online em tempo real com amigos, direto do navegador, com salas privadas e pontuação automática.",
    problem:
      "Dificuldade de reunir um grupo para jogar truco presencialmente, mesmo com os amigos à distância.",
    features: [
      "Partidas multiplayer em tempo real",
      "Salas privadas por grupo de amigos",
      "Pontuação e regras automatizadas",
      "Interface simples, direto do navegador",
    ],
    status: "Em produção",
    href: "https://truco.prxlab.app",
    image: "/images/03.png",
  },
  {
    name: "ACID/C",
    category: "Site institucional",
    description:
      "Site institucional da ACID/C, banda tributo ao AC/DC, criado para apresentar a banda, divulgar apresentações e centralizar o contato para contratações.",
    problem:
      "Falta de um canal digital único para apresentar a banda, divulgar shows e receber contatos de contratação.",
    features: [
      "Apresentação institucional da banda",
      "Divulgação de datas e apresentações",
      "Galeria de fotos e vídeos",
      "Contato para contratações",
    ],
    status: "Em produção",
    href: "https://acidc.com.br",
    image: "/images/02.png",
  },
]
