"use client"

import Image from "next/image"
import { MapPin, Languages, GraduationCap } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { ScrollReveal } from "./ScrollReveal"
import { Separator } from "@/components/ui/separator"

export function AboutSection() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <section
      className="max-w-[1180px] mx-auto px-10 py-[110px] max-[900px]:px-5 max-[900px]:py-[70px] relative z-2"
      id="about"
    >
      <div className="grid grid-cols-[1.3fr_.7fr] gap-[80px] items-start max-[900px]:grid-cols-1 max-[900px]:gap-12">
        {/* Text column */}
        <ScrollReveal variant="left">
          <span className="font-mono text-[.73rem] font-medium text-sky-400 tracking-[3px] uppercase mb-[14px] block">
            {about.tag}
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-1.5px] leading-[1.08] text-slate-100 mb-[26px]">
            {about.titleLine1}
            <br />
            {about.titleLine2}
          </h2>

          {about.bio.map((paragraph, i) => (
            <p
              key={i}
              className="text-[.98rem] font-light text-slate-600 leading-[1.8] max-w-[540px] mb-5 last:mb-0"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-12">
            <div className="font-mono text-[.72rem] font-medium text-sky-400 tracking-[2px] uppercase mb-5">
              {about.educationLabel}
            </div>
            <div className="flex flex-col gap-4">
              {about.education.map((edu) => (
                <div key={edu.degree} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-[10px] bg-sky-400/8 border border-sky-400/18 flex items-center justify-center text-sky-400 shrink-0">
                    <GraduationCap className="w-[18px] h-[18px]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-[.9rem] font-semibold text-slate-200">{edu.degree}</div>
                    <div className="font-mono text-[.72rem] text-slate-600">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Profile card */}
        <ScrollReveal variant="right">
          <div className="bg-[#0b1120] border border-sky-400/10 rounded-[20px] p-8 flex flex-col items-center text-center gap-6 max-w-[320px] mx-auto md:mx-0">
            <div className="relative w-[180px] h-[180px]">
              <div
                className="absolute inset-0 rounded-[28px] animate-[spinSlow_8s_linear_infinite]"
                style={{ background: "conic-gradient(from 0deg,#38bdf8,#6366f1,#22d3ee,#38bdf8)" }}
              />
              <div className="absolute inset-[3px] rounded-[26px] overflow-hidden">
                <Image
                  src="/img.jpeg"
                  alt="Leonardo Muniz"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 30%" }}
                  sizes="180px"
                  priority
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#070b12] border-2 border-[#0b1120] flex items-center justify-center">
                <span className="w-[10px] h-[10px] rounded-full bg-emerald-400 animate-[dotBlink_1.8s_ease_infinite] shadow-[0_0_8px_#34d399]" />
              </div>
            </div>

            <div>
              <div className="text-[1.05rem] font-bold text-slate-100 tracking-[-0.3px]">
                Leonardo Muniz
              </div>
              <div className="font-mono text-[.78rem] text-sky-400 mt-1">
                {"<"}Full-Stack Developer{" />"}
              </div>
            </div>

            <Separator className="bg-sky-400/10" />

            <div className="w-full flex flex-col gap-4 text-left">
              <div className="flex items-center gap-3 text-[.85rem] text-slate-500">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" strokeWidth={1.75} />
                {about.location}
              </div>
              <div className="flex items-center gap-3 text-[.85rem] text-slate-500">
                <span className="w-4 h-4 flex items-center justify-center shrink-0">
                  <span className="w-[7px] h-[7px] rounded-full bg-emerald-400 animate-[dotBlink_1.8s_ease_infinite] shadow-[0_0_8px_#34d399]" />
                </span>
                {about.availability}
              </div>
              <div className="flex items-start gap-3 text-[.85rem] text-slate-500">
                <Languages className="w-4 h-4 text-sky-400 shrink-0 mt-[3px]" strokeWidth={1.75} />
                <div className="flex flex-wrap gap-[6px]">
                  {about.languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="font-mono text-[.68rem] text-slate-300 bg-sky-400/6 border border-sky-400/12 rounded-full px-[10px] py-[3px]"
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
