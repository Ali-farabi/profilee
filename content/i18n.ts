import type { Locale } from "@/shared/types"

export type { Locale } from "@/shared/types"
export const locales: Locale[] = ["ru", "en"]

export const defaultLocale: Locale = "ru"

export const content = {
  ru: {
    name: "Джалиль Калимов",
    role: "Frontend Developer",
    tagline:
      "Frontend Engineer с 3-летним опытом разработки высоконагруженных Web3 и Enterprise решений. Эксперт в React/Next.js. Специализируюсь на оптимизации производительности и сложных интеграциях.",
    about: {
      title: "О себе",
      description:
        "Frontend Engineer с 3-летним коммерческим опытом. Разрабатываю высоконагруженные решения в Web3, Enterprise и админ-платформах. Фокус на измеримых результатах: SEO, retention, конверсия.",
      highlights: [
        "3+ года коммерческого опыта",
        "Web3, Enterprise, Admin platforms",
        "15x ускорение сборки",
        "+23% SEO трафика",
        "+28% retention",
      ],
    },
    skills: {
      title: "Навыки",
      frontend: "Frontend",
      tooling: "Tooling & DevOps",
      testing: "Testing & API",
    },
    experience: {
      title: "Опыт",
      stakeme: {
        company: "STAKEME LLC",
        subtitle: "Blockchain, 18,000+ пользователей, 35+ сетей · Удалённо",
        period: "Дек 2024 – Янв 2026",
        duration: "1 год 2 мес",
        role: "Frontend разработчик",
        points: [
          "SEO оптимизация → рост выручки",
          "15x ускорение сборки (Next.js 14→15, Turbopack)",
          "Интеграция MetaMask, Keplr, crypto wallets",
          "Design system, код-ревью, рефакторинг legacy",
        ],
      },
      dragau: {
        company: "DragAu",
        subtitle: "Custom software, 20+ клиентов · Алматы",
        period: "Мар 2024 – Дек 2024",
        duration: "10 мес",
        role: "Frontend разработчик",
        points: [
          "Ozo.direct: платформа для 15+ ресторанов",
          "+13% retention через систему лояльности",
          "1,000+ заказов/мес, Yandex Delivery, цифровые меню",
        ],
      },
      apc: {
        company: "APC",
        subtitle: "IT колледж, 1,500+ студентов · Алматы",
        period: "Фев 2023 – Мар 2024",
        duration: "1 год 2 мес",
        role: "Frontend разработчик",
        points: [
          "Attendix: QR-посещаемость, +40% attendance",
          "500+ пользователей, RBAC, real-time мониторинг",
          "6+ проектов: web apps, Telegram bots",
        ],
      },
    },
    projects: {
      title: "Проекты",
      viewRepo: "Репозиторий",
      viewDemo: "Demo",
    },
    achievements: {
      title: "Достижения",
      worldskillsAlmaty: "1 место WorldSkills Almaty, Веб-технологии",
      worldskillsKz: "2 место WorldSkills Kazakhstan, Веб-технологии",
      hackathon: "Halyk Bank OIY Hackathon",
      metrics: {
        build: "15x",
        seo: "+23%",
        retention: "+28%",
      },
    },
    contact: {
      title: "Связаться",
      cta: "Открыт к предложениям. Напишите — обсудим ваш проект.",
    },
    footer: {
      copyright: "©",
    },
    nav: {
      about: "О себе",
      skills: "Навыки",
      experience: "Опыт",
      projects: "Проекты",
      achievements: "Достижения",
      contact: "Контакты",
    },
    buttons: {
      resume: "Скачать резюме",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
  en: {
    name: "Dzhalil Kalimov",
    role: "Frontend Developer",
    tagline:
      "Frontend Engineer with 3 years of experience building high-load Web3 and Enterprise solutions. Expert in React/Next.js. Specialized in performance optimization and complex integrations.",
    about: {
      title: "About",
      description:
        "Frontend Engineer with 3+ years of commercial experience. Building high-load solutions in Web3, Enterprise, and admin platforms. Focus on measurable outcomes: SEO, retention, conversion.",
      highlights: [
        "3+ years commercial experience",
        "Web3, Enterprise, Admin platforms",
        "15x build speed improvement",
        "+23% SEO traffic",
        "+28% retention",
      ],
    },
    skills: {
      title: "Skills",
      frontend: "Frontend",
      tooling: "Tooling & DevOps",
      testing: "Testing & API",
    },
    experience: {
      title: "Experience",
      stakeme: {
        company: "STAKEME LLC",
        subtitle: "Blockchain, 18,000+ users, 35+ networks · Remote",
        period: "Dec 2024 – Jan 2026",
        duration: "1 yr 2 mo",
        role: "Frontend Developer",
        points: [
          "SEO optimization → revenue growth",
          "15x build speed (Next.js 14→15, Turbopack)",
          "MetaMask, Keplr, crypto wallets integration",
          "Design system, code review, legacy refactoring",
        ],
      },
      dragau: {
        company: "DragAu",
        subtitle: "Custom software, 20+ clients · Almaty",
        period: "Mar 2024 – Dec 2024",
        duration: "10 mo",
        role: "Frontend Developer",
        points: [
          "Ozo.direct: platform for 15+ restaurants",
          "+13% retention via loyalty system",
          "1,000+ orders/mo, Yandex Delivery, digital menus",
        ],
      },
      apc: {
        company: "APC",
        subtitle: "IT college, 1,500+ students · Almaty",
        period: "Feb 2023 – Mar 2024",
        duration: "1 yr 2 mo",
        role: "Frontend Developer",
        points: [
          "Attendix: QR attendance, +40% attendance",
          "500+ users, RBAC, real-time monitoring",
          "6+ projects: web apps, Telegram bots",
        ],
      },
    },
    projects: {
      title: "Projects",
      viewRepo: "Repository",
      viewDemo: "Demo",
    },
    achievements: {
      title: "Achievements",
      worldskillsAlmaty: "1st Place WorldSkills Almaty, Web Technologies",
      worldskillsKz: "2nd Place WorldSkills Kazakhstan, Web Technologies",
      hackathon: "Halyk Bank OIY Hackathon",
      metrics: {
        build: "15x",
        seo: "+23%",
        retention: "+28%",
      },
    },
    contact: {
      title: "Contact",
      cta: "Open to opportunities. Reach out — let's discuss your project.",
    },
    footer: {
      copyright: "©",
    },
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      achievements: "Achievements",
      contact: "Contact",
    },
    buttons: {
      resume: "Download Resume",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
} as const

export type Content = (typeof content)["en"]
