"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { ProjectCard } from "./ProjectCard"
import { ScrollReveal } from "./ScrollReveal"

type TechType = "html" | "css" | "js" | "ts" | "next" | "node" | "supa" | "verc" | "api" | "resp" | "dr"

const staticData = [
  {
    emoji:    "🏥",
    href:     "https://www.unienflagos.com.br/",
    image:    undefined,
    video:    "/projetos/unienf.mp4",
    gradient: "linear-gradient(135deg,#0c2d4e,#0369a1)",
    stack: [
      { label: "HTML5",      type: "html" as TechType },
      { label: "CSS3",       type: "css"  as TechType },
      { label: "JavaScript", type: "js"   as TechType },
      { label: "TypeScript", type: "ts"   as TechType },
      { label: "Next.js",    type: "next" as TechType },
      { label: "Node.js",    type: "node" as TechType },
      { label: "Supabase",   type: "supa" as TechType },
      { label: "Vercel",     type: "verc" as TechType },
      { label: "Responsive", type: "resp" as TechType },
    ],
    variant: "up"     as const,
    delay: 0,
  },
  {
    emoji:    "🥋",
    href:     "https://www.blackbeltbjj.com.br/",
    image:    "/projetos/bjj.png",
    video:    "/projetos/blackbelt.mp4",
    gradient: "linear-gradient(135deg,#1a0505,#7f1d1d)",
    stack: [
      { label: "HTML5",       type: "html" as TechType },
      { label: "CSS3",        type: "css"  as TechType },
      { label: "JavaScript",  type: "js"   as TechType },
      { label: "TypeScript",  type: "ts"   as TechType },
      { label: "Next.js",     type: "next" as TechType },
      { label: "Node.js",     type: "node" as TechType },
      { label: "Payment API", type: "api"  as TechType },
      { label: "Supabase",    type: "supa" as TechType },
      { label: "Vercel",      type: "verc" as TechType },
      { label: "Responsive",  type: "resp" as TechType },
    ],
    variant: "rotate" as const,
    delay: 65,
  },
  {
    emoji:    "💻",
    href:     "https://www.thtecnologia.com.br/",
    image:    "/projetos/th.png",
    video:    "/projetos/thtecnologia.mp4",
    gradient: "linear-gradient(135deg,#080818,#1e1b4b)",
    stack: [
      { label: "HTML5",      type: "html" as TechType },
      { label: "CSS3",       type: "css"  as TechType },
      { label: "JavaScript", type: "js"   as TechType },
      { label: "TypeScript", type: "ts"   as TechType },
      { label: "Next.js",    type: "next" as TechType },
      { label: "Form API",   type: "api"  as TechType },
      { label: "Vercel",     type: "verc" as TechType },
      { label: "Responsive", type: "resp" as TechType },
    ],
    variant: "flip"   as const,
    delay: 130,
  },
  {
    emoji:    "📄",
    href:     "https://www.psistephaniemoura.com.br/",
    image:    "/projetos/psi.png",
    video:    "/projetos/landingpage.mp4",
    gradient: "linear-gradient(135deg,#042010,#065f46)",
    stack: [
      { label: "HTML5",      type: "html" as TechType },
      { label: "CSS3",       type: "css"  as TechType },
      { label: "JavaScript", type: "js"   as TechType },
      { label: "TypeScript", type: "ts"   as TechType },
      { label: "Next.js",    type: "next" as TechType },
      { label: "Supabase",   type: "supa" as TechType },
      { label: "Vercel",     type: "verc" as TechType },
      { label: "Responsive", type: "resp" as TechType },
    ],
    variant: "scale"  as const,
    delay: 195,
  },
  {
    emoji:    "🎬",
    image:    undefined,
    video:    "/projetos/funnel.mp4",
    gradient: "linear-gradient(135deg,#180430,#4c1d95)",
    stack: [
      { label: "HTML5",           type: "html" as TechType },
      { label: "CSS3",            type: "css"  as TechType },
      { label: "JavaScript",      type: "js"   as TechType },
      { label: "DR Marketing",    type: "dr"   as TechType },
      { label: "VSL",             type: "api"  as TechType },
      { label: "Upsell/Downsell", type: "resp" as TechType },
    ],
    variant: "left"   as const,
    delay: 260,
  },
  {
    emoji:    "🛒",
    image:    undefined,
    video:    "/projetos/ecommerce.mp4",
    gradient: "linear-gradient(135deg,#1a0800,#92400e)",
    stack: [
      { label: "HTML5",       type: "html" as TechType },
      { label: "CSS3",        type: "css"  as TechType },
      { label: "JavaScript",  type: "js"   as TechType },
      { label: "TypeScript",  type: "ts"   as TechType },
      { label: "Payment API", type: "api"  as TechType },
      { label: "Responsive",  type: "resp" as TechType },
    ],
    variant: "right"  as const,
    delay: 325,
  },
]

export function PortfolioSection() {
  const { t } = useLanguage()
  const { portfolio } = t

  return (
    <section
      className="max-w-[1180px] mx-auto px-10 pt-0 pb-[110px] max-[900px]:px-5 max-[900px]:pb-[70px] relative z-2"
      id="work"
    >
      <ScrollReveal variant="right">
        <span className="font-mono text-[.73rem] font-medium text-sky-400 tracking-[3px] uppercase mb-[14px] block">
          {portfolio.tag}
        </span>
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-1.5px] leading-[1.08] text-slate-100 mb-[14px]">
          {portfolio.titleLine1}
          <br />
          {portfolio.titleLine2}
        </h2>
        <p className="text-[.98rem] font-light text-slate-600 leading-[1.8] max-w-[460px] mb-[60px]">
          {portfolio.desc}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] max-[900px]:grid-cols-1 gap-6">
        {portfolio.projects.map((proj, i) => (
          <ScrollReveal key={i} variant={staticData[i].variant} delay={staticData[i].delay}>
            <ProjectCard
              emoji={staticData[i].emoji}
              gradient={staticData[i].gradient}
              stack={staticData[i].stack}
              href={staticData[i].href}
              image={staticData[i].image}
              video={staticData[i].video}
              category={proj.category}
              title={proj.title}
              description={proj.description}
              type={proj.type}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
