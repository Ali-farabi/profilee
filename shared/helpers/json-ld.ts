import type { Locale } from "@/shared/types"
import { content, defaultLocale } from "@/content"
import { LINKS } from "@/shared/constants"

export function generateProfilePageSchema(locale: Locale) {
  const t = content[locale] ?? content[defaultLocale]
  const baseUrl = "https://kalimov.com"
  const stakeme = t?.experience?.stakeme

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: t.name,
      jobTitle: t.role,
      description: t.tagline,
      url: `${baseUrl}/${locale}`,
      sameAs: [
        LINKS.github,
        LINKS.linkedin,
        LINKS.telegram,
      ],
      email: "fujuroa@gmail.com",
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Web3",
        "Frontend Development",
        "Performance Optimization",
        "SEO",
      ],
      hasOccupation: [
        {
          "@type": "Occupation",
          name: t.role,
          occupationalCategory: "15-1254.00",
          skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Web3",
            "Performance Optimization",
          ],
        },
      ],
      worksFor: stakeme
        ? {
            "@type": "Organization",
            name: stakeme.company,
            description: stakeme.subtitle,
          }
        : undefined,
    },
  }
}
