"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { ScrollReveal } from "./ScrollReveal"

const contacts = [
  { label: "✉️ Email",    href: "https://mail.google.com/mail/?view=cm&fs=1&to=munizzleonardo@gmail.com", target: "_blank" },
  { label: "💬 WhatsApp", href: "https://wa.me/5522981208003",                              target: "_blank" },
  { label: "🔗 LinkedIn", href: "https://www.linkedin.com/in/leonardo-muniz-ab17b718a/",   target: "_blank" },
]

export function CTASection() {
  const { t } = useLanguage()
  const { cta } = t

  return (
    <div className="relative z-2 bg-[#070b12] border-t border-sky-400/10 text-center px-10 py-[110px] overflow-hidden" id="contact">
      {/* Glow */}
      <div
        className="absolute w-[700px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-[pulseGlow_5s_ease_infinite]"
        style={{ background: "radial-gradient(ellipse,rgba(56,189,248,.12) 0%,transparent 70%)" }}
      />

      <span className="font-mono text-[.73rem] font-medium text-sky-400 tracking-[3px] uppercase mb-[14px] block relative z-1">
        {cta.tag}
      </span>

      <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-black tracking-[-2px] text-slate-100 relative z-1 mb-4">
        {cta.titleLine1}
        <br />
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(100deg,#38bdf8,#22d3ee)" }}
        >
          {cta.titleLine2}
        </span>
      </h2>

      <p className="text-slate-600 text-base font-light mb-[42px] relative z-1">
        {cta.desc}
      </p>

      <div className="flex justify-center gap-[14px] flex-wrap relative z-1">
        {contacts.map((c) => (
          <ScrollReveal key={c.label} variant="up">
            <a
              href={c.href}
              target={c.target}
              rel={c.target === "_blank" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-[9px] bg-[#0b1120] border border-sky-400/10 text-slate-300 px-6 py-[13px] rounded-[10px] no-underline font-medium text-[.875rem] transition-all duration-250 hover:border-sky-400 hover:translate-y-[-3px] hover:bg-sky-400/6 hover:text-slate-100"
            >
              {c.label}
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
