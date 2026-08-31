"use client"

import { Mail } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { ScrollReveal } from "./ScrollReveal"
import { SectionLabel } from "./SectionLabel"
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "./BrandIcons"

const contacts = [
  { icon: Mail,         label: "Email",    href: "https://mail.google.com/mail/?view=cm&fs=1&to=munizzleonardo@gmail.com" },
  { icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/5522981208003" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/leonardo-muniz-ab17b718a/" },
  { icon: GitHubIcon,   label: "GitHub",   href: "https://github.com/Munizleonardo" },
]

export function CTASection() {
  const { t } = useLanguage()
  const { cta } = t

  return (
    <div
      className="border-t border-white/[0.07] px-10 py-[130px] text-center max-[900px]:px-5 max-[900px]:py-[90px]"
      id="contact"
    >
      <ScrollReveal>
        <SectionLabel className="mb-7 text-center">
          {cta.tag}
        </SectionLabel>

        <h2 className="mb-4 text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-neutral-50">
          {cta.titleLine1}
          <br />
          <span className="text-neutral-500">{cta.titleLine2}</span>
        </h2>

        <p className="mb-[42px] text-base font-light text-neutral-400">{cta.desc}</p>
      </ScrollReveal>

      <div className="flex flex-wrap justify-center gap-[12px]">
        {contacts.map((c, i) => (
          <ScrollReveal key={c.label} delay={i * 60}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[10px] rounded-[12px] border border-white/[0.09] bg-white/[0.02] px-6 py-[14px] text-[0.875rem] font-medium text-neutral-300 no-underline transition-all duration-250 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.04] hover:text-neutral-50"
            >
              <c.icon className="h-[16px] w-[16px]" />
              {c.label}
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
