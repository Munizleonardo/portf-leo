"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { StatItem } from "./StatItem"
import { ScrollReveal } from "./ScrollReveal"
import { STAT_TARGETS } from "@/lib/stats"

export function StatsSection() {
  const { t } = useLanguage()

  const stats = [
    { target: STAT_TARGETS.projects,     label: t.stats.projects },
    { target: STAT_TARGETS.years,        label: t.stats.experience },
    { target: STAT_TARGETS.stacks,       label: t.stats.stacks },
    { target: STAT_TARGETS.satisfaction, label: t.stats.satisfaction, suffix: "%" },
  ]

  return (
    <div className="border-y border-white/[0.07]">
      <ScrollReveal>
        <div className="mx-auto grid max-w-[1000px] grid-cols-4 divide-x divide-white/[0.07] max-[900px]:grid-cols-2 max-[900px]:divide-x-0 max-[900px]:[&>*:nth-child(n+3)]:border-t max-[900px]:[&>*:nth-child(n+3)]:border-white/[0.07]">
          {stats.map((s) => (
            <StatItem key={s.label} target={s.target} label={s.label} suffix={s.suffix ?? "+"} />
          ))}
        </div>
      </ScrollReveal>
    </div>
  )
}
