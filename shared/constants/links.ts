export const LINKS = {
  github: "https://github.com/Ali-farabi",
  linkedin: "https://www.linkedin.com/in/ali-kultai/",
  telegram: "https://t.me/Alizhok",
  email: "kultaiali670@gmail.com",
} as const

export const CV_PATHS = {
  ru: "",
  en: "",
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
    name: "ISRA [платформа для веберинаров]",
    description: "Webinar platform with live streaming, chat, and interactive features for hosting online events.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "Payload CMS", "Figma"],
    href: "https://isra-front.nomad-engineers.space/rooms",
    demo: null,
  },
  {
    name: "NeuroDent (корпоративный сайт стоматологии)",
    description: "Dental clinic website with appointment booking and patient information management.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Python", "Django", "PostgreSQL", "Next.js", 'Figma'],
    href: "https://neurodent-nine.vercel.app",
    demo: null,
  },
  {
    name: "EnterpriseHR (корпоративный HR портал)",
    description: "Corporate HR portal for managing employee data, attendance, and performance reviews.",
    stack: ["React", "TypeScript", "Tailwind CSS", "MongoDB", "Node.js" , "Next.js"],
    href: "https://enterprisehr.ru/enterpriseHR/",
    demo: null,
  },
  {
    name: "Медицинский сайт CRM",
    description: "Personal portfolio site with modern design and smooth animations.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    href: "https://medical-project-orpin.vercel.app/home",
    demo: null,
  },
  
]
