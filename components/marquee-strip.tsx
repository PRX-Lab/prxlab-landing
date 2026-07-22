export function MarqueeStrip({
  rowTop,
  rowBottom,
}: {
  rowTop: string[]
  rowBottom: string[]
}) {
  return (
    <section className="overflow-hidden border-y border-border py-0 select-none">
      <div className="flex border-b border-border" style={{ animation: "prx-marquee-left 28s linear infinite" }}>
        {[...Array(3)].map((_, rep) => (
          <div key={rep} className="flex shrink-0">
            {rowTop.map((label, i) => (
              <div key={`${rep}-${i}`} className="flex shrink-0 items-center gap-3 border-r border-border px-8 py-4">
                <span className="size-1.5 shrink-0 rounded-full bg-primary/50" />
                <span className="whitespace-nowrap text-sm tracking-wide text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex" style={{ animation: "prx-marquee-right 22s linear infinite" }}>
        {[...Array(3)].map((_, rep) => (
          <div key={rep} className="flex shrink-0">
            {rowBottom.map((label, i) => (
              <div key={`${rep}-${i}`} className="flex shrink-0 items-center gap-3 border-r border-border px-8 py-4">
                <span className="size-1.5 shrink-0 rounded-full bg-primary/25" />
                <span className="whitespace-nowrap text-sm tracking-wide text-muted-foreground/70">{label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
