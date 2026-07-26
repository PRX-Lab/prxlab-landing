"use client"

import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { ProductCard } from "@/components/cards"
import { Reveal } from "@/components/reveal"
import type { Product } from "@/lib/content"

const AUTOPLAY_DELAY = 6000

export function ProjectsCarousel({ products }: { products: Product[] }) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [paused, setPaused] = React.useState(false)
  const [inView, setInView] = React.useState(false)
  const rootRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  React.useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  React.useEffect(() => {
    if (!api || products.length <= 1 || paused || !inView) return
    const id = setInterval(() => api.scrollNext(), AUTOPLAY_DELAY)
    return () => clearInterval(id)
  }, [api, products.length, paused, inView])

  return (
    <div ref={rootRef} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.name}>
              <Reveal>
                <ProductCard product={product} />
              </Reveal>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {products.length > 1 && (
        <div className="mt-8 flex items-center justify-center gap-6">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => api?.scrollPrev()}
            aria-label="Projeto anterior"
          >
            <ArrowLeft className="size-4" />
          </Button>
          <div className="flex items-center gap-2">
            {products.map((product, i) => (
              <button
                key={product.name}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Ir para ${product.name}`}
                className={cn(
                  "size-2 rounded-full transition-colors",
                  current === i ? "bg-primary" : "bg-border",
                )}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => api?.scrollNext()}
            aria-label="Próximo projeto"
          >
            <ArrowRight className="size-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
