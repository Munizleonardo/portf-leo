"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { ProcessStep } from "./ProcessStep"
import { ScrollReveal } from "./ScrollReveal"
import { SectionLabel } from "./SectionLabel"

const steps_numbers = ["01", "02", "03", "04", "05"]

export function ProcessSection() {
  const { t } = useLanguage()
  const { process } = t

  return (
    <section
      className="mx-auto max-w-[1180px] px-10 pb-[120px] pt-0 max-[900px]:px-5 max-[900px]:pb-[80px]"
      id="process"
    >
      <div className="grid grid-cols-2 items-start gap-[80px] max-[900px]:grid-cols-1 max-[900px]:gap-12">
        {/* Left column */}
        <ScrollReveal>
          <SectionLabel className="mb-7">
            {process.tag}
          </SectionLabel>
          <h2 className="mb-4 text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-50">
            {process.titleLine1}
            <br />
            {process.titleLine2}
          </h2>
          <p className="max-w-[460px] text-[0.98rem] font-light leading-[1.85] text-neutral-400">
            {process.desc}
          </p>
        </ScrollReveal>

        {/* Right column */}
        <ScrollReveal>
          <div className="flex flex-col">
            {process.steps.map((step, i) => (
              <ProcessStep
                key={step.title}
                number={steps_numbers[i]}
                title={step.title}
                description={step.description}
                isLast={i === process.steps.length - 1}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
