# Dzhalil Kalimov | Frontend Developer

Personal portfolio site built with Next.js 16, React 19, TypeScript and Tailwind CSS 4. Liquid glass / glassmorphism design, dark/light themes, RU/EN localization.

## Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, TypeScript, Tailwind CSS 4
- **Features:** i18n (RU/EN), theme toggle (light/dark/system), responsive layout, scroll animations

## Project structure

```
├── app/
│   ├── globals.css      # Global styles, theme variables
│   ├── layout.tsx       # Root layout, providers, fonts
│   ├── page.tsx         # Main page composition
│   └── theme-init.tsx   # Inline script for theme flash prevention
├── components/
│   ├── ui/
│   │   ├── AnimateOnScroll.tsx  # IntersectionObserver-based reveal
│   │   └── GlassCard.tsx       # Glassmorphism card
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── content/
│   └── i18n.ts          # Localized content (RU/EN)
├── lib/
│   ├── constants.ts     # Links, skills, projects
│   ├── theme.ts         # Theme context (light/dark/system)
│   └── i18n.tsx         # i18n context
└── public/
    └── cv/              # PDF resumes (RU, EN)
```

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Author

**Dzhalil Kalimov** — [GitHub](https://github.com/Fujura) · [LinkedIn](https://www.linkedin.com/in/dzhalil-kalimov-41b5bb29b/)
