"use client"

import { useRef, useEffect, useState } from "react"
import type { AnimateOnScrollProps } from "@/shared/types"

export function AnimateOnScroll({ children, className = "" }: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true)
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
