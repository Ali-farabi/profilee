"use client"

import { useI18n } from "@/providers/i18n"
import { LINKS } from "@/shared/constants"

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-zinc-900 dark:bg-zinc-100 px-6 py-12 border-t border-zinc-800 dark:border-zinc-200">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-zinc-500 dark:text-zinc-600">
          © {year} {t.name}
        </p>

        <div className="flex items-center gap-8">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 dark:text-zinc-600 hover:text-white dark:hover:text-zinc-900 transition-colors uppercase tracking-wider"
          >
            GitHub
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 dark:text-zinc-600 hover:text-white dark:hover:text-zinc-900 transition-colors uppercase tracking-wider"
          >
            LinkedIn
          </a>
          <a
            href={LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 dark:text-zinc-600 hover:text-white dark:hover:text-zinc-900 transition-colors uppercase tracking-wider"
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  )
}
