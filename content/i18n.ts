import type { Locale } from "@/shared/types"

export type { Locale } from "@/shared/types"
export const locales: Locale[] = ["ru", "en"]

export const defaultLocale: Locale = "ru"

export const content = {
  ru: {
    name: "Ali Kultai",
    role: "Frontend Developer",
    tagline:
      "Создаю современные веб-приложения с фокусом на чистый код, производительность и пользовательский опыт.",
    about: {
      title: "О себе",
      description:
        "Я Junior+/Mid Frontend разработчик с практическим опытом в создании лендингов, веб-приложений и игр на Vue.js и React. Фокусируюсь на качественном коде, адаптивности и удобстве пользователя.",
      highlights: [
        "Опыт работы с React, Next.js, Vue.js",
        "Интеграция Firebase, Google Sheets",
        "Создание адаптивных интерфейсов с Tailwind CSS",
        "Оптимизация производительности проектов",
        "Реализация сложной бизнес-логики",
      ],
    },
    skills: {
      title: "Навыки",
      frontend: "Frontend: HTML, CSS, JavaScript, TypeScript, React, Next.js, Vue.js, Tailwind CSS",
      tooling: "Инструменты: Git, Firebase, VS Code, npm/yarn, Turbopack",
      testing: "Тестирование: базовое тестирование функций, работа с API",
    },
    experience: {
      title: "Опыт",
      elnurCo: {
        company: "Елнур и Ко",
        subtitle: "Стажировка по техническим направлениям · Алматы",
        period: "Июль 2025 – Настоящее время",
        duration: "8 мес",
        role: "Frontend стажёр",
        points: [
          "Сборка и тестирование электронных и программных решений",
          "Разработка интерфейсов для дронов и автомобильных систем",
          "Работа с микроконтроллерами и программированием устройств",
        ],
      },
      personalProjects: {
        company: "Персональные проекты",
        subtitle: "React, Next.js, Vue.js, Firebase · Алматы",
        period: "2024 – 2026",
        duration: "2 года",
        role: "Frontend разработчик",
        points: [
          "ALIFOOD: сайт фастфуда с корзиной, меню и авторизацией через Firebase",
          "Discover Kazakhstan: сайт с туристическими достопримечательностями с детализацией",
          "Vue.js лендинг с анимацией и компонентами Hero, About, Services, Projects, Contact",
          "Интеграция Google Sheets для сохранения данных пользователей",
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
      worldskillsAlmaty: "Участие в IT конкурсах и хакатонах",
      hackathon: "Участие в Halyk Bank OIY Hackathon",
      metrics: {
        build: "Оптимизация сборки проектов",
        seo: "Повышение качества веб-приложений",
        retention: "Улучшение UX и вовлечённости пользователей",
      },
    },
    contact: {
      title: "Связаться",
      cta:
        "Открыт для интересных проектов и сотрудничества. Напишите мне.",
    },
    footer: {
      copyright: "© Ali Kultai",
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
    name: "Ali Kultai",
    role: "Frontend Developer",
    tagline:
      "Building modern web applications with a focus on clean code, performance, and user experience.",
    about: {
      title: "About",
      description:
        "I am a Junior+/Mid Frontend developer with practical experience creating landing pages, web apps, and games in Vue.js and React. I focus on clean code, responsiveness, and user experience.",
      highlights: [
        "Experience with React, Next.js, Vue.js",
        "Firebase and Google Sheets integration",
        "Responsive UI with Tailwind CSS",
        "Project performance optimization",
        "Complex business logic implementation",
      ],
    },
    skills: {
      title: "Skills",
      frontend: "Frontend: HTML, CSS, JavaScript, TypeScript, React, Next.js, Vue.js, Tailwind CSS",
      tooling: "Tools: Git, Firebase, VS Code, npm/yarn, Turbopack",
      testing: "Testing: basic function testing, API interaction",
    },
    experience: {
      title: "Experience",
      elnurCo: {
        company: "Elnur & Co",
        subtitle: "Technical internship · Almaty",
        period: "Jul 2025 – Present",
        duration: "8 mo",
        role: "Frontend Intern",
        points: [
          "Building and testing electronic and software solutions",
          "Developing interfaces for drones and automotive systems",
          "Working with microcontrollers and device programming",
        ],
      },
      personalProjects: {
        company: "Personal Projects",
        subtitle: "React, Next.js, Vue.js, Firebase · Almaty",
        period: "2024 – 2026",
        duration: "2 yrs",
        role: "Frontend Developer",
        points: [
          "ALIFOOD: fast food site with cart, menu, Firebase auth",
          "Discover Kazakhstan: tourist attractions site with detail pages",
          "Vue.js landing page with animated components: Hero, About, Services, Projects, Contact",
          "Google Sheets integration for user data storage",
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
      worldskillsAlmaty: "Participation in IT competitions and hackathons",
      hackathon: "Halyk Bank OIY Hackathon participant",
      metrics: {
        build: "Project build optimization",
        seo: "Improved web app quality",
        retention: "Better UX and user engagement",
      },
    },
    contact: {
      title: "Contact",
      cta:
        "Open to interesting projects and collaborations. Drop me a line.",
    },
    footer: {
      copyright: "© Ali Kultai",
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