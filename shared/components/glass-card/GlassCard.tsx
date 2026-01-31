"use client"

import type { GlassCardProps } from "@/shared/types"

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`
        rounded-2xl border backdrop-blur-xl
        border-zinc-200/80 bg-white/90 shadow-[0_4px_24px_rgba(0,0,0,0.06)]
        dark:border-white/5 dark:bg-white/3 dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:border-zinc-300 hover:bg-white dark:hover:border-white/10 dark:hover:bg-white/6
        ${className}
      `}
    >
      {children}
    </div>
  )
}
