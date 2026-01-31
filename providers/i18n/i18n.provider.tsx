"use client"

import { createContext, useContext } from "react"
import { content, type Content } from "@/content"
import type { Locale } from "@/shared/types"

interface I18nContextValue {
  locale: Locale
  t: Content
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({
  children,
  locale,
}: {
  children: React.ReactNode
  locale: Locale
}) {
  const t = content[locale]

  return (
    <I18nContext.Provider value={{ locale, t: t as Content }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
