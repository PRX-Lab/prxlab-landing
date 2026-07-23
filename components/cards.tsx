import Link from "next/link"
import { ArrowRight, Check, FileText, SlidersHorizontal, Sparkles, Star, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BentoCard } from "@/components/bento-card"
import type { Service, LandingPlan, Product } from "@/lib/content"

const LANDING_PLAN_ICONS: Record<string, LucideIcon> = {
  basica: FileText,
  customizavel: SlidersHorizontal,
  completa: Sparkles,
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <BentoCard as={Link} href={service.href} className="flex h-full flex-col p-6">
      <span className="grid size-11 place-items-center rounded-xl border border-border bg-secondary text-primary transition-colors group-hover:border-foreground/20">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      <p className="mt-4 text-sm font-medium text-foreground">{service.benefit}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        Conhecer o serviço
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </BentoCard>
  )
}

export function LandingPlanCard({ plan }: { plan: LandingPlan }) {
  const Icon = LANDING_PLAN_ICONS[plan.id] ?? FileText
  return (
    <BentoCard
      className="flex flex-col p-6"
      cardClassName={cn(
        plan.recommended && "border-primary/30 bg-secondary/50 shadow-xl shadow-primary/10",
      )}
      badge={
        plan.recommended && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-primary to-primary/85 px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap text-primary-foreground shadow-lg shadow-primary/40 ring-1 ring-primary-foreground/15">
            <Star className="size-3.5 fill-current" />
            Recomendada
          </span>
        )
      }
    >
      <span
        className={cn(
          "grid size-11 place-items-center rounded-xl border",
          plan.recommended ? "border-primary/30 bg-primary/10 text-primary" : "border-border bg-secondary text-primary",
        )}
      >
        <Icon className="size-5" />
      </span>
      <h3 className="mt-4 min-h-7 text-xl font-semibold text-foreground">{plan.name}</h3>
      <p className="mt-2 inline-flex w-fit items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-secondary-foreground">
        <span className="size-1 shrink-0 rounded-full bg-primary" />
        {plan.tagline}
      </p>
      <p className="mt-4 min-h-18 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>

      <div className="mt-6 border-t border-border pt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Inclui</p>
        <ul className="mt-3 min-h-38 space-y-2.5">
          {plan.includes.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Check className="size-2.5" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {plan.addons && plan.addons.length > 0 && (
        <div className="mt-5 border-t border-dashed border-border pt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Recursos adicionais</p>
          <ul className="mt-3 space-y-2.5">
            {plan.addons.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span
                  className={cn(
                    "mt-0.5 grid size-4 shrink-0 place-items-center rounded-full",
                    plan.addonsIncluded ? "bg-primary/10 text-primary" : "bg-secondary text-secondary-foreground",
                  )}
                >
                  {plan.addonsIncluded ? <Check className="size-2.5" /> : <Sparkles className="size-2.5" />}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto pt-6">
        <Button asChild className="w-full" variant={plan.recommended ? "default" : "outline"}>
          <Link href="/contato">
            Solicitar proposta
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </BentoCard>
  )
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <BentoCard className="grid gap-6 p-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-8">
      <div className="relative order-last aspect-4/3 overflow-hidden rounded-2xl border border-border bg-secondary lg:order-first lg:aspect-auto lg:h-96">
        <img
          src={product.image || "/placeholder.svg"}
          alt={`Interface do ${product.name}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-mono text-xs uppercase tracking-wider text-primary">{product.category}</span>
        <h3 className="mt-3 text-2xl font-semibold text-foreground">{product.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Recursos</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {product.features.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
          <Button asChild>
            <a href={product.href} target="_blank" rel="noopener noreferrer">
              Acessar produto
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contato">Desenvolver algo semelhante</Link>
          </Button>
        </div>
      </div>
    </BentoCard>
  )
}
