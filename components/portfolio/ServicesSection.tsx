"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { ServiceCard } from "./ServiceCard"
import { ScrollReveal } from "./ScrollReveal"

const variants = ["up", "rotate", "flip", "scale"] as const
const delays   = [0, 65, 130, 195]

export function ServicesSection() {
  const { t } = useLanguage()
  const { services } = t

  return (
    <section
      className="max-w-[1180px] mx-auto px-10 py-[110px] max-[900px]:px-5 max-[900px]:py-[70px] relative z-2"
      id="services"
    >
      <ScrollReveal variant="left">
        <span className="font-mono text-[.73rem] font-medium text-sky-400 tracking-[3px] uppercase mb-[14px] block">
          {services.tag}
        </span>
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-1.5px] leading-[1.08] text-slate-100 mb-[14px]">
          {services.titleLine1}
          <br />
          {services.titleLine2}
        </h2>
        <p className="text-[.98rem] font-light text-slate-600 leading-[1.8] max-w-[460px] mb-[60px]">
          {services.desc}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(255px,1fr))] gap-5">
        {services.cards.map((card, i) => (
          <ScrollReveal key={card.title} variant={variants[i]} delay={delays[i]}>
            <ServiceCard
              icon={card.icon}
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
