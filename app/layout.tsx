import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, IBM_Plex_Sans, Courier_Prime } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { IntroAnimation } from "@/components/intro-animation"
import { siteConfig } from "@/lib/site"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ibm-plex-sans",
})
const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier-prime",
})

const siteUrl = "https://www.prxlab.app"
const siteTitle = "PRXLab | Desenvolvimento de software, sites e SaaS sob medida"
const siteDescription =
  "Desenvolvimento de sites, landing pages, sistemas personalizados e produtos SaaS com hospedagem gerenciada para empresas que precisam crescer com tecnologia."
const ogImage = "/og-image.png"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | PRXLab",
  },
  description: siteDescription,
  applicationName: "PRXLab",
  keywords: [
    "PRXLab",
    "desenvolvimento de software",
    "desenvolvimento web",
    "criação de sites",
    "landing pages",
    "sistemas personalizados",
    "sistemas sob medida",
    "SaaS",
    "produtos SaaS",
    "hospedagem gerenciada",
    "automação de processos",
    "desenvolvimento de sistemas no Brasil",
  ],
  authors: [{ name: "PRXLab", url: siteUrl }],
  creator: "PRXLab",
  publisher: "PRXLab",
  category: "technology",
  classification: "Desenvolvimento de software sob medida",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/prx-icon-organge.svg",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    type: "website",
    locale: "pt_BR",
    siteName: "PRXLab",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Logo da PRXLab sobre fundo escuro",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  other: {
    "service-area": "Brasil",
    "service-types": "landing pages, sites, sistemas personalizados, produtos SaaS, hospedagem gerenciada",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "PRXLab",
      url: siteUrl,
      logo: `${siteUrl}/prx-logo-orange.png`,
      image: `${siteUrl}${ogImage}`,
      description: siteDescription,
      email: siteConfig.email,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.whatsapp,
        contactType: "sales",
        areaServed: "BR",
        availableLanguage: ["pt-BR"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "PRXLab",
      description: siteDescription,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "pt-BR",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#services`,
      name: "Desenvolvimento de software sob medida",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: "BR",
      serviceType: ["Landing pages", "Sites", "Sistemas personalizados", "Produtos SaaS", "Hospedagem gerenciada"],
      description: siteConfig.description,
    },
  ],
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSans.variable} ${courierPrime.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <IntroAnimation />
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 pt-24">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
