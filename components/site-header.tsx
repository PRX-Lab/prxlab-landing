"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown, LayoutTemplate, Boxes, Cloud, LayoutGrid, ArrowRight, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { mainNav } from "@/lib/site"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const SERVICE_LINKS: { href: string; icon: LucideIcon; title: string; desc: string }[] = [
  {
    href: "/landing-pages",
    icon: LayoutTemplate,
    title: "Landing Pages",
    desc: "Três modelos, com diferentes níveis de controle sobre o conteúdo.",
  },
  {
    href: "/sistemas",
    icon: Boxes,
    title: "Sistemas e SaaS",
    desc: "Plataformas personalizadas e produtos por assinatura.",
  },
  {
    href: "/hospedagem",
    icon: Cloud,
    title: "Hospedagem gerenciada",
    desc: "Publicação, SSL, monitoramento e manutenção da infraestrutura.",
  },
  {
    href: "/servicos",
    icon: LayoutGrid,
    title: "Todos os serviços",
    desc: "Visão completa de tudo que a PRXLab desenvolve.",
  },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const [servicesOpen, setServicesOpen] = React.useState(false)
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const scheduleCloseServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150)
  }

  React.useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto relative w-full max-w-4xl">
        <nav
          aria-label="Navegação principal"
          className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-background/40 px-4 py-2.5 shadow-lg shadow-black/4 backdrop-blur-xl sm:px-5"
        >
          <Link href="/" className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Logo />
            <span className="sr-only">PRXLab — página inicial</span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {mainNav.map((item) =>
              item.href === "/servicos" ? (
                <button
                  key={item.href}
                  type="button"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleCloseServices}
                  onFocus={openServices}
                  onBlur={scheduleCloseServices}
                  className={cn(
                    "inline-flex cursor-pointer items-center gap-1 text-[13px] leading-none tracking-wide transition-colors duration-200 hover:text-foreground",
                    isActive(item.href) || servicesOpen ? "text-foreground" : "text-muted-foreground",
                  )}
                  aria-expanded={servicesOpen}
                >
                  {item.label}
                  <ChevronDown className={cn("size-3.5 transition-transform duration-200", servicesOpen && "rotate-180")} />
                </button>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[13px] leading-none tracking-wide transition-colors duration-200 hover:text-foreground",
                    isActive(item.href) ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contato">Solicitar orçamento</Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <Logo />
                  </SheetTitle>
                </SheetHeader>
                <nav aria-label="Navegação mobile" className="mt-2 flex flex-col gap-1 px-4">
                  {mainNav.map((item) => (
                    <React.Fragment key={item.href}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                            isActive(item.href)
                              ? "bg-secondary text-foreground"
                              : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                          )}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                      {item.href === "/servicos" && (
                        <div className="mb-1 ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
                          {SERVICE_LINKS.map((service) => (
                            <SheetClose asChild key={service.href}>
                              <Link
                                href={service.href}
                                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                              >
                                {service.title}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </nav>
                <div className="mt-4 px-4">
                  <SheetClose asChild>
                    <Button asChild className="w-full">
                      <Link href="/contato">Solicitar orçamento</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>

        {/* Dropdown "Serviços" — same width as the header pill, items laid out horizontally */}
        <div
          onMouseEnter={openServices}
          onMouseLeave={scheduleCloseServices}
          className={cn(
            "absolute inset-x-0 top-full z-40 mt-2 origin-top rounded-2xl border border-border bg-background/95 p-4 shadow-xl shadow-black/4 backdrop-blur-xl transition-all duration-200",
            servicesOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-1 opacity-0",
          )}
        >
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            {SERVICE_LINKS.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setServicesOpen(false)}
                  className="group flex flex-col gap-2 rounded-xl p-3 transition-colors hover:bg-secondary"
                >
                  <span className="grid size-9 place-items-center rounded-lg border border-border bg-secondary text-primary transition-colors group-hover:border-primary/30">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{service.title}</span>
                  <span className="text-xs leading-relaxed text-muted-foreground">{service.desc}</span>
                </Link>
              )
            })}
          </div>
          <div className="mt-2 border-t border-border pt-2">
            <Link
              href="/contato"
              onClick={() => setServicesOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-primary hover:bg-secondary"
            >
              Solicitar orçamento
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
