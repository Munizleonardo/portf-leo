"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { ProcessSteps } from "./ProcessSteps"
import { ScrollReveal } from "./ScrollReveal"
import { SectionLabel } from "./SectionLabel"

const stepNumbers = ["01", "02", "03", "04", "05"]

export function ProcessSection() {
  const { t } = useLanguage()
  const { process } = t

  const steps = process.steps.map((step, i) => ({
    number: stepNumbers[i],
    title: step.title,
    description: step.description,
  }))

  return (
    <section
      className="mx-auto max-w-[1180px] px-10 pb-24 pt-0 max-[900px]:px-5 max-[900px]:pb-17"
      id="process"
    >
      <div className="grid grid-cols-2 items-start gap-[80px] max-[900px]:grid-cols-1 max-[900px]:gap-12">
        {/* Left column */}
        <ScrollReveal>
          {/* sticky on its own wrapper, not the reveal root, so the
              fade-up transform never fights the sticky positioning */}
          <div className="md:sticky md:top-28">
            <SectionLabel className="mb-7">
              {process.tag}
            </SectionLabel>
            <h2 className="mb-4 text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-50">
              {process.titleLine1}
              <br />
              {process.titleLine2}
            </h2>
            <p className="mb-8 max-w-[460px] text-[0.98rem] font-light leading-[1.85] text-neutral-400">
              {process.desc}
            </p>

            {/* Fills the column instead of leaving it empty once the
                steps outrun the description's height. */}
            <dl className="flex max-w-[380px] flex-col gap-3 border-t border-white/[0.07] pt-6">
              {process.facts.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-4">
                  <dt className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-neutral-600">
                    {fact.label}
                  </dt>
                  <dd className="text-[0.82rem] text-neutral-200">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </ScrollReveal>

        {/* Right column */}
        <ScrollReveal>
          <ProcessSteps steps={steps} />
        </ScrollReveal>
      </div>
    </section>
  )
}
