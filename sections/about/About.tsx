"use client"

import { useI18n } from "@/providers/i18n"
import { AnimateOnScroll, GlassCard } from "@/shared/components"

export function About() {
  const { t } = useI18n()

  return (
    <AnimateOnScroll>
      <section id="about" className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <GlassCard className="p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
              {t.about.title}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              {t.about.description}
            </p>
            <ul className="flex flex-wrap gap-3">
              {t.about.highlights.map((item) => (
                <li
                  key={item}
                  className="px-4 py-2 rounded-lg text-sm font-medium
                  bg-zinc-100/90 text-zinc-700 dark:bg-white/5 dark:text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>
    </AnimateOnScroll>
  )
}
