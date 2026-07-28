"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { ExperienceCard } from "./ExperienceCard"
import { ScrollReveal } from "./ScrollReveal"

const featuredVariants = ["up", "rotate", "flip"] as const
const featuredDelays   = [0, 65, 130]
const compactVariants  = ["left", "up", "right"] as const
const compactDelays    = [0, 60, 120]

export function ExperienceSection() {
  const { t } = useLanguage()
  const { experience } = t
  const featured = experience.jobs.filter((job) => job.featured)
  const earlier  = experience.jobs.filter((job) => !job.featured)

  return (
    <section
      className="max-w-[1180px] mx-auto px-10 pt-0 pb-[110px] max-[900px]:px-5 max-[900px]:pb-[70px] relative z-2"
      id="experience"
    >
      <ScrollReveal variant="right">
        <span className="font-mono text-[.73rem] font-medium text-sky-400 tracking-[3px] uppercase mb-[14px] block">
          {experience.tag}
        </span>
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-1.5px] leading-[1.08] text-slate-100 mb-[14px]">
          {experience.titleLine1}
          <br />
          {experience.titleLine2}
        </h2>
        <p className="text-[.98rem] font-light text-slate-600 leading-[1.8] max-w-[460px] mb-[60px]">
          {experience.desc}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] auto-rows-fr gap-6 mb-16">
        {featured.map((job, i) => (
          <ScrollReveal
            key={`${job.company}-${job.role}`}
            variant={featuredVariants[i % featuredVariants.length]}
            delay={featuredDelays[i % featuredDelays.length]}
          >
            <ExperienceCard {...job} />
          </ScrollReveal>
        ))}
      </div>

      {earlier.length > 0 && (
        <>
          <ScrollReveal variant="up">
            <div className="font-mono text-[.72rem] font-medium text-slate-600 tracking-[2px] uppercase mb-6">
              {experience.earlierLabel}
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] auto-rows-fr gap-4">
            {earlier.map((job, i) => (
              <ScrollReveal
                key={`${job.company}-${job.role}`}
                variant={compactVariants[i % compactVariants.length]}
                delay={compactDelays[i % compactDelays.length]}
              >
                <ExperienceCard {...job} />
              </ScrollReveal>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
