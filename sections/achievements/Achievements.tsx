"use client"

import { useI18n } from "@/providers/i18n"
import { AnimateOnScroll, GlassCard } from "@/shared/components"

function TrophyIcon() {
  return (
    <svg className="size-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export function Achievements() {
  const { t } = useI18n()
  const m = t.achievements.metrics

  return (
    <AnimateOnScroll>
      <section id="achievements" className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-10">
            {t.achievements.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <GlassCard className="p-6 text-center">
              <div className="flex justify-center mb-2">
                <TrophyIcon />
              </div>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                {m.build}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                build speed
              </p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <div className="flex justify-center mb-2">
                <TrophyIcon />
              </div>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                {m.seo}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                SEO traffic
              </p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <div className="flex justify-center mb-2">
                <TrophyIcon />
              </div>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                {m.retention}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                retention
              </p>
            </GlassCard>
            <GlassCard className="p-6 sm:col-span-2 lg:col-span-1 flex flex-col justify-center">
              <div className="flex justify-center mb-2">
                <TrophyIcon />
              </div>
              <p className="text-sm font-medium text-zinc-900 dark:text-white mb-2">
                WorldSkills
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                {t.achievements.worldskillsAlmaty}
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                {t.achievements.worldskillsKz}
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                {t.achievements.hackathon}
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  )
}
