"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { ProcessStep } from "./ProcessStep"
import { ScrollReveal } from "./ScrollReveal"

const steps_numbers = ["01", "02", "03", "04"]

const tools = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "Next.js", "Node.js",
  "Supabase", "Vercel", "Direct Response", "Sales Funnels", "CRO",
  "Hotmart", "Kiwify", "Eduzz",
]

export function ProcessSection() {
  const { t } = useLanguage()
  const { process } = t

  return (
    <section
      className="max-w-[1180px] mx-auto px-10 pt-0 pb-[110px] max-[900px]:px-5 max-[900px]:pb-[70px] relative z-2"
      id="process"
    >
      <div className="grid grid-cols-2 gap-[80px] items-start max-[900px]:grid-cols-1 max-[900px]:gap-12">
        {/* Left column */}
        <ScrollReveal variant="left">
          <span className="font-mono text-[.73rem] font-medium text-sky-400 tracking-[3px] uppercase mb-[14px] block">
            {process.tag}
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-1.5px] leading-[1.08] text-slate-100 mb-[14px]">
            {process.titleLine1}
            <br />
            {process.titleLine2}
          </h2>
          <p className="text-[.98rem] font-light text-slate-600 leading-[1.8] max-w-[460px] mb-0">
            {process.desc}
          </p>
          <div className="flex flex-wrap gap-[9px] mt-[30px]">
            {tools.map((tool) => (
              <span
                key={tool}
                className="font-mono text-[.72rem] text-slate-300 bg-[#0b1120] border border-sky-400/10 px-4 py-[7px] rounded-full transition-all duration-250 hover:border-sky-400 hover:text-sky-400 hover:bg-sky-400/8 hover:translate-y-[-2px] inline-block"
              >
                {tool}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Right column */}
        <ScrollReveal variant="right">
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
