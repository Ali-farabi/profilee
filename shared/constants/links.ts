export const LINKS = {
  github: "https://github.com/Fujura",
  linkedin: "https://www.linkedin.com/in/dzhalil-kalimov-41b5bb29b/",
  telegram: "https://t.me/fujura",
  email: "mailto:fujuroa@gmail.com",
} as const

export const CV_PATHS = {
  ru: "/cv/ru_CV_Dzhalil_Kalimov_frontend_developer.pdf",
  en: "/cv/en_CV_Dzhalil_Kalimov_frontend_developer.pdf",
} as const

export const SKILLS = {
  frontend: [
    "HTML",
    "CSS",
    "SASS/SCSS",
    "Tailwind CSS",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Zustand",
    "Next.js",
    "React Hooks",
    "SPA/SSR/SSG",
    "Responsive",
    "a11y",
    "Storybook",
    "shadcn/ui",
    "Web3 (ethers.js, wallets)",
  ],
  tooling: [
    "Git",
    "GitHub",
    "GitHub Actions",
    "CI/CD",
    "Docker",
    "Webpack",
    "Turbopack",
    "Vite",
    "Sentry",
    "Grafana",
    "Jira",
    "Linear",
  ],
  testing: [
    "REST API",
    "Auth/RBAC",
    "Jest",
    "React Testing Library",
  ],
} as const

export const PROJECTS = [
  {
    name: "fujura-dev",
    description: "Personal portfolio site. Next.js, Tailwind, glassmorphism design.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
    href: "https://github.com/Fujura/fujura-dev",
    demo: null,
  },
]
