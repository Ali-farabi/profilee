import type { Metadata } from "next"
import { cookies } from "next/headers"
import { DM_Sans } from "next/font/google"
import "@/app/globals.css"
import { ThemeProvider } from "@/providers/theme"
import { I18nProvider } from "@/providers/i18n"
import { ThemeInitScript } from "@/app/theme-init"
import { locales, content, type Locale } from "@/content"
import { notFound } from "next/navigation"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = content[locale as Locale]

  return {
    title: `${t.name} | ${t.role}`,
    description: t.tagline,
    openGraph: {
      title: `${t.name} | ${t.role}`,
      description: t.tagline,
      url: `/${locale}`,
      siteName: t.name,
      images: [
        {
          url: "/opengraph.png",
          width: 1200,
          height: 630,
          alt: `${t.name} - ${t.role}`,
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t.name} | ${t.role}`,
      description: t.tagline,
      images: ["/opengraph.png"],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ru: "/ru",
        en: "/en",
      },
    },
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  const cookieStore = await cookies()
  const themeCookie = cookieStore.get("fujura-theme")?.value
  const themeClass = themeCookie === "dark" || themeCookie === "light" ? themeCookie : ""

  return (
    <html lang={locale} className={themeClass} suppressHydrationWarning>
      <head>
        <ThemeInitScript />
        <link rel="alternate" hrefLang="ru" href="/ru" />
        <link rel="alternate" hrefLang="en" href="/en" />
        <link rel="alternate" hrefLang="x-default" href="/ru" />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <ThemeProvider>
          <I18nProvider locale={locale as Locale}>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
