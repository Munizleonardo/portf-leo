"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { ExperienceCard } from "./ExperienceCard"
import { ScrollReveal } from "./ScrollReveal"
import { SectionLabel } from "./SectionLabel"

export function ExperienceSection() {
  const { t } = useLanguage()
  const { experience } = t
  const featured = experience.jobs.filter((job) => job.featured)
  const earlier  = experience.jobs.filter((job) => !job.featured)

  return (
    <section
      className="mx-auto max-w-[1180px] px-10 pb-[120px] pt-0 max-[900px]:px-5 max-[900px]:pb-[80px]"
      id="experience"
    >
      <ScrollReveal>
        <SectionLabel className="mb-7">
          {experience.tag}
        </SectionLabel>
        <h2 className="mb-4 text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-50">
          {experience.titleLine1}
          <br />
          {experience.titleLine2}
        </h2>
        <p className="mb-14 max-w-[460px] text-[0.98rem] font-light leading-[1.85] text-neutral-400">
          {experience.desc}
        </p>
      </ScrollReveal>

      <div className="mb-16 grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {featured.map((job, i) => (
          <ScrollReveal key={`${job.company}-${job.role}`} delay={(i % 3) * 70}>
            <ExperienceCard {...job} />
          </ScrollReveal>
        ))}
      </div>

      {earlier.length > 0 && (
        <>
          <ScrollReveal>
            <div className="mb-6 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-neutral-500">
              {experience.earlierLabel}
            </div>
          </ScrollReveal>
          <div className="grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
            {earlier.map((job, i) => (
              <ScrollReveal key={`${job.company}-${job.role}`} delay={(i % 3) * 60}>
                <ExperienceCard {...job} />
              </ScrollReveal>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
