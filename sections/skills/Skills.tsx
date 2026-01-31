"use client"

import { useI18n } from "@/providers/i18n"
import { AnimateOnScroll, GlassCard } from "@/shared/components"
import { SKILLS } from "@/shared/constants"

export function Skills() {
  const { t } = useI18n()

  const groups = [
    { key: "frontend" as const, label: t.skills.frontend },
    { key: "tooling" as const, label: t.skills.tooling },
    { key: "testing" as const, label: t.skills.testing },
  ]

  return (
    <AnimateOnScroll>
      <section id="skills" className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-10">
            {t.skills.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {groups.map(({ key, label }) => (
              <GlassCard key={key} className="p-6 group">
                <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  {label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS[key].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm border transition-colors
                      bg-zinc-100/90 text-zinc-700 border-zinc-200/80 group-hover:border-zinc-300
                      dark:bg-white/5 dark:text-zinc-300 dark:border-white/5 dark:group-hover:border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  )
}
