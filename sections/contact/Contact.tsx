"use client"

import { useI18n } from "@/providers/i18n"
import { FadeIn } from "@/shared/components"
import { LINKS } from "@/shared/constants"
import { MailIcon } from "@/shared/icons"

export function Contact() {
  const { t } = useI18n()

  return (
    <section className="bg-zinc-900 dark:bg-zinc-100 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-6 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className="text-zinc-500 dark:text-zinc-600 uppercase tracking-[0.3em] text-sm mb-6">
            GET IN TOUCH
          </p>
          <h2 className="font-black uppercase leading-none tracking-tight text-white dark:text-zinc-900 text-[clamp(3rem,12vw,120px)] mb-12">
            {t.contact.title}
          </h2>
          <p className="text-zinc-400 dark:text-zinc-600 text-xl md:text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
            {t.contact.cta}
          </p>

          <a
            href={`mailto:${LINKS.email}`}
            className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-medium text-lg transition-all hover:scale-105 hover:shadow-2xl"
          >
            <MailIcon />
            {LINKS.email}
          </a>

          <div className="flex justify-center gap-12 mt-20">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-600 hover:text-white dark:hover:text-zinc-900 transition-colors text-sm uppercase tracking-wider font-medium"
            >
              GitHub
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-600 hover:text-white dark:hover:text-zinc-900 transition-colors text-sm uppercase tracking-wider font-medium"
            >
              LinkedIn
            </a>
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-600 hover:text-white dark:hover:text-zinc-900 transition-colors text-sm uppercase tracking-wider font-medium"
            >
              Telegram
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
