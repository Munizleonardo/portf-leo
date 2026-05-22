"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { StatItem } from "./StatItem"
import { ScrollReveal } from "./ScrollReveal"

export function StatsSection() {
  const { t } = useLanguage()

  const stats = [
    { target: 30,  label: t.stats.projects },
    { target: 5,   label: t.stats.experience },
    { target: 6,   label: t.stats.stacks },
    { target: 100, label: t.stats.satisfaction, suffix: "%" },
  ]

  return (
    <div className="relative z-2 bg-[#070b12] border-y border-sky-400/10 flex justify-center flex-wrap max-[900px]:flex-col">
      {stats.map((s) => (
        <ScrollReveal key={s.label} variant="up">
          <StatItem
            target={s.target}
            label={s.label}
            suffix={s.suffix ?? "+"}
          />
        </ScrollReveal>
      ))}
    </div>
  )
}
