"use client"

import { useI18n } from "@/providers/i18n"
import { LINKS } from "@/shared/constants"
import { GithubIcon, LinkedinIcon, TelegramIcon } from "@/shared/icons"

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="min-h-screen bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full">
        <p className="text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.3em] text-sm mb-6">
          {t.role}
        </p>
        <h1 className="font-black uppercase leading-none tracking-tight text-white dark:text-zinc-900 text-[clamp(3.5rem,12vw,140px)] mb-8">
          {t.name}
        </h1>
        <p className="text-zinc-400 dark:text-zinc-600 text-xl md:text-2xl max-w-2xl mb-16 leading-relaxed">
          {t.tagline}
        </p>

        <div className="flex items-center gap-6">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white/10 dark:bg-zinc-800/10 hover:bg-white/20 dark:hover:bg-zinc-800/20 flex items-center justify-center text-white dark:text-zinc-900 transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white/10 dark:bg-zinc-800/10 hover:bg-white/20 dark:hover:bg-zinc-800/20 flex items-center justify-center text-white dark:text-zinc-900 transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href={LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white/10 dark:bg-zinc-800/10 hover:bg-white/20 dark:hover:bg-zinc-800/20 flex items-center justify-center text-white dark:text-zinc-900 transition-all hover:scale-110"
            aria-label="Telegram"
          >
            <TelegramIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
