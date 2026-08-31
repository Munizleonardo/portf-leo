"use client"

import { Target, Repeat, Building2, Boxes } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { ServiceCard } from "./ServiceCard"
import { ScrollReveal } from "./ScrollReveal"
import { SectionLabel } from "./SectionLabel"

const icons = [Target, Repeat, Building2, Boxes]

export function ServicesSection() {
  const { t } = useLanguage()
  const { services } = t

  return (
    <section
      className="mx-auto max-w-[1180px] px-10 py-[120px] max-[900px]:px-5 max-[900px]:py-[80px]"
      id="services"
    >
      <ScrollReveal>
        <SectionLabel className="mb-7">
          {services.tag}
        </SectionLabel>
        <h2 className="mb-4 text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-50">
          {services.titleLine1}
          <br />
          {services.titleLine2}
        </h2>
        <p className="mb-14 max-w-[460px] text-[0.98rem] font-light leading-[1.85] text-neutral-400">
          {services.desc}
        </p>
      </ScrollReveal>

      <div className="grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(255px,1fr))] gap-4">
        {services.cards.map((card, i) => (
          <ScrollReveal key={card.title} delay={(i % 4) * 70}>
            <ServiceCard
              icon={icons[i % icons.length]}
              title={card.title}
              description={card.description}
              tags={card.tags}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
