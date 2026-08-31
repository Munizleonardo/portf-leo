"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { ProjectCard } from "./ProjectCard"
import { ScrollReveal } from "./ScrollReveal"
import { SectionLabel } from "./SectionLabel"

const repos: (string | undefined)[] = [
  "https://github.com/unienfproject/unienf-project",
  "https://github.com/Munizleonardo/carvalho-bjj",
  "https://github.com/Munizleonardo/site-th",
  "https://github.com/Munizleonardo/ytamar-barbershop",
  undefined,
  undefined,
]

const stacks: string[][] = [
  ["HTML5", "CSS3", "JavaScript", "TypeScript", "Next.js", "Node.js", "Supabase", "Vercel", "Responsivo"],
  ["HTML5", "CSS3", "JavaScript", "TypeScript", "Next.js", "Node.js", "Payment API", "Supabase", "Vercel", "Responsivo"],
  ["HTML5", "CSS3", "JavaScript", "TypeScript", "Next.js", "Form API", "Vercel", "Responsivo"],
  ["HTML5", "CSS3", "JavaScript", "TypeScript", "Next.js", "Vercel", "Responsivo", "SEO"],
  ["HTML5", "CSS3", "JavaScript", "DR Marketing", "VSL", "Upsell/Downsell"],
  ["HTML5", "CSS3", "JavaScript", "TypeScript", "Payment API", "Responsivo"],
]

export function PortfolioSection() {
  const { t } = useLanguage()
  const { portfolio } = t

  return (
    <section
      className="mx-auto max-w-[1180px] px-10 pb-[120px] pt-0 max-[900px]:px-5 max-[900px]:pb-[80px]"
      id="work"
    >
      <ScrollReveal>
        <SectionLabel className="mb-7">{portfolio.tag}</SectionLabel>
        <h2 className="mb-4 text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-50">
          {portfolio.titleLine1}
          <br />
          {portfolio.titleLine2}
        </h2>
        <p className="mb-14 max-w-[460px] text-[0.98rem] font-light leading-[1.85] text-neutral-400">
          {portfolio.desc}
        </p>
      </ScrollReveal>

      <div className="grid auto-rows-fr grid-cols-2 gap-5 max-[900px]:grid-cols-1">
        {portfolio.projects.map((proj, i) => (
          <ScrollReveal key={i} delay={(i % 2) * 80}>
            <ProjectCard
              category={proj.category}
              title={proj.title}
              description={proj.description}
              stack={stacks[i]}
              repo={repos[i]}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
