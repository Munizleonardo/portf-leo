"use client"

import { Code2, Server, Database, GitBranch, Rocket, Sparkles, Wrench, Monitor } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { SkillCategoryCard } from "./SkillCategoryCard"
import { TechMarquee } from "./TechMarquee"
import { ScrollReveal } from "./ScrollReveal"

const icons = [Code2, Server, Database, GitBranch, Rocket, Sparkles, Wrench, Monitor]
const variants = ["up", "rotate", "flip", "scale", "left", "right", "up", "scale"] as const
const delays   = [0, 60, 120, 180, 0, 60, 120, 180]

export function SkillsSection() {
  const { t } = useLanguage()
  const { skills } = t

  return (
    <section
      className="max-w-[1180px] mx-auto px-10 py-[110px] max-[900px]:px-5 max-[900px]:py-[70px] relative z-2"
      id="skills"
    >
      <ScrollReveal variant="left">
        <span className="font-mono text-[.73rem] font-medium text-sky-400 tracking-[3px] uppercase mb-[14px] block">
          {skills.tag}
        </span>
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-1.5px] leading-[1.08] text-slate-100 mb-[14px]">
          {skills.titleLine1}
          <br />
          {skills.titleLine2}
        </h2>
        <p className="text-[.98rem] font-light text-slate-600 leading-[1.8] max-w-[460px] mb-[50px]">
          {skills.desc}
        </p>
      </ScrollReveal>

      <ScrollReveal variant="scale" className="mb-[50px]">
        <TechMarquee />
      </ScrollReveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(255px,1fr))] auto-rows-fr gap-5">
        {skills.categories.map((cat, i) => (
          <ScrollReveal key={cat.title} variant={variants[i % variants.length]} delay={delays[i % delays.length]}>
            <SkillCategoryCard icon={icons[i % icons.length]} title={cat.title} items={cat.items} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
