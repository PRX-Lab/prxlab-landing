"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Maximize2, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function ExpandableImage({
  src,
  alt,
  className,
  imgClassName,
}: {
  src: string
  alt: string
  className?: string
  imgClassName?: string
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>
        <button
          type="button"
          aria-label={`Ampliar imagem${alt ? `: ${alt}` : ""}`}
          className={cn("group/expand relative block h-full w-full cursor-zoom-in", className)}
        >
          <img src={src} alt={alt} className={cn("h-full w-full", imgClassName)} />
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover/expand:bg-black/30 group-hover/expand:opacity-100">
            <span className="grid size-9 place-items-center rounded-full bg-white/90 text-neutral-900 shadow-lg">
              <Maximize2 className="size-4" />
            </span>
          </span>
        </button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-100 bg-black/85 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-100 flex cursor-zoom-out items-center justify-center p-4 outline-none sm:p-10 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          <DialogPrimitive.Title className="sr-only">{alt || "Imagem ampliada"}</DialogPrimitive.Title>
          <img
            src={src}
            alt={alt}
            className="max-h-full max-w-full cursor-default rounded-lg object-contain shadow-2xl"
          />
          <DialogPrimitive.Close
            aria-label="Fechar"
            className="fixed top-4 right-4 grid size-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            <X className="size-5" />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
