"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { ExperienceTimeline } from "./ExperienceTimeline"
import { ScrollReveal } from "./ScrollReveal"
import { SectionLabel } from "./SectionLabel"

export function ExperienceSection() {
  const { t } = useLanguage()
  const { experience } = t

  return (
    <section
      className="mx-auto max-w-[1180px] px-10 pb-24 pt-0 max-[900px]:px-5 max-[900px]:pb-17"
      id="experience"
    >
      <div className="mb-14 flex flex-wrap items-start justify-between gap-8">
        <ScrollReveal className="max-w-[560px]">
          <SectionLabel className="mb-7">
            {experience.tag}
          </SectionLabel>
          <h2 className="mb-4 text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-50">
            {experience.titleLine1}
            <br />
            {experience.titleLine2}
          </h2>
          <p className="max-w-[460px] text-[0.98rem] font-light leading-[1.85] text-neutral-400">
            {experience.desc}
          </p>
        </ScrollReveal>

        {/* Fills the void that used to sit empty next to the header —
            a one-line index instead of a blank column. */}
        <ScrollReveal delay={80} className="shrink-0 pt-2 max-[700px]:hidden">
          <div className="text-right font-mono text-[0.72rem] uppercase tracking-[0.16em] text-neutral-600">
            {experience.jobs.length} {experience.companiesLabel}
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <ExperienceTimeline jobs={experience.jobs} />
      </ScrollReveal>
    </section>
  )
}
