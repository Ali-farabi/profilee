"use client"

import { useI18n } from "@/providers/i18n"
import { AnimateOnScroll, GlassCard } from "@/shared/components"
import { PROJECTS } from "@/shared/constants"

function ExternalIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

export function Projects() {
  const { t } = useI18n()

  return (
    <AnimateOnScroll>
      <section id="projects" className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-10">
            {t.projects.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <GlassCard
                key={project.name}
                className="p-6 group hover:scale-[1.02] transition-transform"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-xs
                      bg-zinc-100/90 text-zinc-700 dark:bg-white/5 dark:text-zinc-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {t.projects.viewRepo}
                    <ExternalIcon />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {t.projects.viewDemo}
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  )
}
