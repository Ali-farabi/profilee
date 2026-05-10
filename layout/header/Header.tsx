"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { useTheme } from "@/providers/theme"
import type { Theme } from "@/shared/types"
import { useI18n } from "@/providers/i18n"
import { locales } from "@/content"
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "@/shared/icons"

const navIds = [
  { id: "projects", key: "projects" as const },
  { id: "contact", key: "contact" as const },
]

export function Header() {
  const { setThemeWithTransition, resolved, mounted } = useTheme()
  const { t, locale } = useI18n()
  const [open, setOpen] = useState(false)
  const themeButtonRef = useRef<HTMLButtonElement>(null)

  const cycleTheme = () => {
    const themes: Theme[] = ["light", "dark", "system"]
    const currentTheme =
      (localStorage.getItem("fujura-theme") as Theme) || "system"
    const systemIsDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches

    const resolveTheme = (themeVal: Theme): "light" | "dark" =>
      themeVal === "system" ? (systemIsDark ? "dark" : "light") : themeVal

    const currentResolved = resolveTheme(currentTheme)
    let i = themes.indexOf(currentTheme)
    let nextTheme: Theme

    do {
      i = (i + 1) % themes.length
      nextTheme = themes[i]
    } while (
      resolveTheme(nextTheme) === currentResolved &&
      nextTheme !== currentTheme
    )

    setThemeWithTransition(nextTheme, themeButtonRef)
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href={`/${locale}`}
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="cursor-pointer text-xl font-bold tracking-tight text-white dark:text-zinc-900 select-none"
          aria-label="Go to top"
        >
          {t.name}
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navIds.map(({ id, key }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="px-4 py-2 text-sm text-zinc-300 dark:text-zinc-700 hover:text-white dark:hover:text-zinc-900 transition-colors rounded-lg cursor-pointer uppercase tracking-wider"
            >
              {t.nav[key]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            ref={themeButtonRef}
            onClick={cycleTheme}
            className="p-2 rounded-lg text-zinc-300 dark:text-zinc-700 hover:text-white dark:hover:text-zinc-900 transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {mounted ? (
              resolved === "dark" ? (
                <MoonIcon />
              ) : (
                <SunIcon />
              )
            ) : (
              <div className="size-5"></div>
            )}
          </button>

          <div className="hidden sm:flex rounded-lg overflow-hidden border border-zinc-700 dark:border-zinc-300">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                  locale === l
                    ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white"
                    : "text-zinc-300 dark:text-zinc-700 hover:bg-white/10 dark:hover:bg-zinc-800/10"
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-zinc-300 dark:text-zinc-700 hover:text-white dark:hover:text-zinc-900 cursor-pointer"
            aria-label="Toggle menu"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-zinc-900/95 dark:bg-zinc-100/95 backdrop-blur-lg">
          <nav className="flex flex-col p-6 gap-2 cursor-pointer">
            {navIds.map(({ id, key }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="py-4 text-left text-zinc-300 dark:text-zinc-700 hover:text-white dark:hover:text-zinc-900 text-lg uppercase tracking-wider"
              >
                {t.nav[key]}
              </button>
            ))}
            <div className="flex gap-2 pt-4">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  onClick={() => setOpen(false)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium ${
                    locale === l
                      ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white"
                      : "border border-zinc-700 dark:border-zinc-300 text-zinc-300 dark:text-zinc-700"
                  }`}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
