import { cn } from "@/lib/utils"

export function Logo({ className, showWordmark = true }: { className?: string; showWordmark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        aria-hidden="true"
        className="relative grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h7a4 4 0 0 1 0 8H4z" />
          <path d="M4 12v8" />
          <path d="M11 12l6 8" />
        </svg>
      </span>
      {showWordmark && (
        <span className="text-lg font-semibold tracking-tight text-foreground">
          PRX<span className="text-primary">Lab</span>
        </span>
      )}
    </span>
  )
}
