"use client"

import { useI18n } from "@/providers/i18n"

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {t.footer.copyright} {year} {t.name}
        </p>
      </div>
    </footer>
  )
}
