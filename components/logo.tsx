import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/prx-logo-light.png"
        alt="PRXLab"
        width={400}
        height={200}
        priority
        className="block h-7 w-auto dark:hidden"
      />
      <Image
        src="/prx-logo-dark.png"
        alt="PRXLab"
        width={400}
        height={200}
        priority
        className="hidden h-7 w-auto dark:block"
      />
    </span>
  )
}
