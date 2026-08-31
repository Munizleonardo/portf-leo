"use client"

import { Code2, Server, Database, GitBranch, Rocket, Sparkles, Wrench, Monitor } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { SkillCategoryCard } from "./SkillCategoryCard"
import { TechMarquee } from "./TechMarquee"
import { ScrollReveal } from "./ScrollReveal"
import { SectionLabel } from "./SectionLabel"

const icons = [Code2, Server, Database, GitBranch, Rocket, Sparkles, Wrench, Monitor]

export function SkillsSection() {
  const { t } = useLanguage()
  const { skills } = t

  return (
    <section
      className="mx-auto max-w-[1180px] px-10 py-[120px] max-[900px]:px-5 max-[900px]:py-[80px]"
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

      <ScrollReveal className="mb-12">
        <TechMarquee />
      </ScrollReveal>

      <div className="grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(255px,1fr))] gap-4">
        {skills.categories.map((cat, i) => (
          <ScrollReveal key={cat.title} delay={(i % 4) * 70}>
            <SkillCategoryCard icon={icons[i % icons.length]} title={cat.title} items={cat.items} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
