import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, IBM_Plex_Sans, Courier_Prime } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { IntroAnimation } from "@/components/intro-animation"
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

export const metadata: Metadata = {
  title: {
    default: "PRXLab | Desenvolvimento de produtos digitais sob medida",
    template: "%s | PRXLab",
  },
  description:
    "A PRXLab desenvolve landing pages, sistemas personalizados, produtos SaaS e hospedagem gerenciada para transformar ideias e processos em soluções reais, preparadas para crescer.",
  keywords: [
    "desenvolvimento web",
    "sistemas personalizados",
    "SaaS",
    "landing pages",
    "hospedagem gerenciada",
    "PRXLab",
  ],
  authors: [{ name: "PRXLab" }],
  generator: "v0.app",
  icons: {
    icon: "/prx-icon-organge.svg",
  },
  openGraph: {
    title: "PRXLab | Desenvolvimento de produtos digitais sob medida",
    description:
      "Landing pages, sistemas personalizados, produtos SaaS e hospedagem gerenciada para transformar ideias e processos em soluções reais.",
    type: "website",
    locale: "pt_BR",
    siteName: "PRXLab",
  },
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
