"use client"

import Image from "next/image"
import { Languages, GraduationCap, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { ScrollReveal } from "./ScrollReveal"
import { SectionLabel } from "./SectionLabel"
import { Separator } from "@/components/ui/separator"

export function AboutSection() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <section
      className="mx-auto max-w-[1180px] px-10 py-24 max-[900px]:px-5 max-[900px]:py-17"
      id="about"
    >
      <div className="grid grid-cols-[1.3fr_.7fr] items-start gap-[80px] max-[900px]:grid-cols-1 max-[900px]:gap-12">
        {/* Text column */}
        <ScrollReveal>
          <SectionLabel className="mb-7">
            {about.tag}
          </SectionLabel>
          <h2 className="mb-7 text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-50">
            {about.titleLine1}
            <br />
            {about.titleLine2}
          </h2>

          {about.bio.map((paragraph, i) => (
            <p
              key={i}
              className="mb-5 max-w-[540px] text-[0.98rem] font-light leading-[1.85] text-neutral-400 last:mb-0"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-12">
            <div className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-neutral-500">
              {about.educationLabel}
            </div>
            <div className="flex flex-col gap-4">
              {about.education.map((edu) => (
                <div key={edu.degree} className="flex items-center gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] border border-white/10 bg-white/[0.03] text-neutral-300">
                    <GraduationCap className="h-[18px] w-[18px]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-medium text-neutral-100">{edu.degree}</div>
                    <div className="text-[0.75rem] text-neutral-500">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Profile card — sticky (on its own wrapper, not the reveal root,
            so the fade-up transform never fights the sticky positioning)
            so it stays in view instead of ending well before the bio
            text does. */}
        <ScrollReveal>
          <div className="md:sticky md:top-28 mx-auto flex max-w-[320px] flex-col items-center gap-6 rounded-[22px] border border-white/[0.07] bg-white/[0.02] p-8 text-center md:mx-0">
            <div className="relative h-[176px] w-[176px] overflow-hidden rounded-[20px] border border-white/10">
              <Image
                src="/img.jpeg"
                alt="Leonardo Muniz"
                fill
                sizes="176px"
                className="object-cover"
                style={{ objectPosition: "50% 30%" }}
                priority
              />
            </div>

            <div>
              <div className="text-[1.05rem] font-semibold tracking-[-0.01em] text-neutral-50">
                Leonardo Muniz
              </div>
              <div className="mt-1 text-[0.8rem] text-neutral-500">Full-Stack Developer</div>
            </div>

            <Separator className="bg-white/[0.08]" />

            <div className="flex w-full flex-col gap-4 text-left">
              <div className="flex items-center gap-3 text-[0.85rem] text-neutral-400">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                  <span className="h-[7px] w-[7px] rounded-full bg-neutral-300" />
                </span>
                {about.availability}
              </div>
              <div className="flex items-center gap-3 text-[0.85rem] text-neutral-400">
                <MapPin className="h-4 w-4 shrink-0 text-neutral-500" strokeWidth={1.5} />
                {about.location}
              </div>
              <div className="flex items-start gap-3 text-[0.85rem] text-neutral-400">
                <Languages className="mt-[3px] h-4 w-4 shrink-0 text-neutral-500" strokeWidth={1.5} />
                <div className="flex flex-wrap gap-[6px]">
                  {about.languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-[10px] py-[3px] text-[0.68rem] text-neutral-300"
                    >
                      {lang.name} · {lang.level}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
