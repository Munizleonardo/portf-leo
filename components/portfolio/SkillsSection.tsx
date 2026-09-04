"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { SkillRow } from "./SkillRow"
import { TechMarquee } from "./TechMarquee"
import { ScrollReveal } from "./ScrollReveal"
import { SectionLabel } from "./SectionLabel"

export function SkillsSection() {
  const { t } = useLanguage()
  const { skills } = t

  return (
    <section
      className="mx-auto max-w-[1180px] px-10 py-24 max-[900px]:px-5 max-[900px]:py-17"
      id="skills"
    >
      <ScrollReveal>
        <SectionLabel className="mb-7">
          {skills.tag}
        </SectionLabel>
        <h2 className="mb-4 text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-50">
          {skills.titleLine1}
          <br />
          {skills.titleLine2}
        </h2>
        <p className="mb-12 max-w-[460px] text-[0.98rem] font-light leading-[1.85] text-neutral-400">
          {skills.desc}
        </p>
      </ScrollReveal>

      <ScrollReveal className="mb-10">
        <TechMarquee />
      </ScrollReveal>

      {/* Editorial list — category left, stack flowing right, natural
          height per row. Replaces the 8-card grid, which forced every
          short category to the height of the longest one. */}
      <div className="border-t border-white/[0.07]">
        {skills.categories.map((cat, i) => (
          <ScrollReveal key={cat.title} delay={Math.min(i, 6) * 45}>
            <SkillRow title={cat.title} items={cat.items} itemsLabel={skills.itemsLabel} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
