"use client"

import { useI18n } from "@/providers/i18n"
import { PROJECTS } from "@/shared/constants"
import { ExternalIcon } from "@/shared/icons"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: typeof PROJECTS[0]
  index: number
  totalCards: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [topOffset, setTopOffset] = useState(96)

  useEffect(() => {
    const handleResize = () => {
      setTopOffset(window.innerWidth >= 768 ? 128 : 96)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={ref}
      style={{
        position: "sticky",
        height: "85vh",
        top: `${index * 28 + topOffset}px`,
      }}
    >
      <motion.div
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 md:p-10 h-full flex flex-col"
        style={{ scale }}
      >
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-baseline gap-6">
            <span className="font-black text-[clamp(2.5rem,8vw,80px)] text-zinc-200 dark:text-zinc-700 leading-none">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col">
              <span className="text-zinc-400 dark:text-zinc-600 uppercase tracking-widest text-xs mb-1">
                PROJECT
              </span>
              <h3 className="text-zinc-900 dark:text-white font-medium uppercase text-2xl md:text-3xl">
                {project.name}
              </h3>
            </div>
          </div>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 flex items-center justify-center text-zinc-900 dark:text-white transition-all hover:scale-110"
              aria-label={`View ${project.name}`}
            >
              <ExternalIcon />
            </a>
          )}
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function Projects() {
  const { t } = useI18n()

  if (PROJECTS.length === 0) {
    return null
  }

  return (
    <section className="bg-white dark:bg-zinc-900 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 pt-20 pb-20">
      <h2 className="font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] text-zinc-900 dark:text-white mb-16">
        {t.projects.title}
      </h2>

      <div>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  )
}
