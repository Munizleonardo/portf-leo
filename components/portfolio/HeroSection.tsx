"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-10 pt-[140px] pb-[100px] max-[900px]:pt-[120px] max-[900px]:px-5 max-[900px]:pb-[90px] relative z-2 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.04) 1px,transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage: "radial-gradient(ellipse at center,black 20%,transparent 75%)",
        }}
      />

      {/* Glow */}
      <div
        className="absolute w-[800px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[pulseGlow_5s_ease_infinite] pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(56,189,248,.13) 0%,transparent 70%)" }}
      />

      {/* Eyebrow */}
      <div className="inline-flex items-center gap-[10px] font-mono text-[.75rem] text-sky-400 tracking-[2px] uppercase mb-[30px] opacity-0 animate-[heroFadeDown_0.8s_ease_0.1s_forwards]">
        <span className="w-[7px] h-[7px] bg-emerald-400 rounded-full animate-[dotBlink_1.8s_ease_infinite] shadow-[0_0_8px_#34d399]" />
        {t.hero.eyebrow}
      </div>

      {/* Title */}
      <h1 className="text-[clamp(3.2rem,8vw,7rem)] font-black tracking-[-3px] leading-[.94] mb-[26px] text-slate-100 opacity-0 animate-[heroFadeUp_0.9s_ease_0.25s_forwards]">
        {t.hero.titleLine1}
        <br />
        <span
          className="block bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(100deg,#38bdf8 0%,#22d3ee 45%,#6366f1 100%)" }}
        >
          {t.hero.titleLine2}
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-[1.08rem] font-light text-slate-500 max-w-[560px] leading-[1.8] mb-[46px] opacity-0 animate-[heroFadeUp_0.9s_ease_0.4s_forwards]">
        {t.hero.subtitle}
      </p>

      {/* Actions */}
      <div className="flex gap-4 flex-wrap justify-center opacity-0 animate-[heroFadeUp_0.9s_ease_0.55s_forwards]">
        <Link
          href="#work"
          className="inline-block font-bold text-[.9rem] text-[#030508] px-[34px] py-[14px] rounded-[8px] no-underline transition-[transform,box-shadow] duration-200 shadow-[0_0_28px_rgba(56,189,248,.25)] hover:translate-y-[-3px] hover:shadow-[0_0_50px_rgba(56,189,248,.45)]"
          style={{ background: "linear-gradient(135deg,#38bdf8,#22d3ee)" }}
        >
          {t.hero.cta1}
        </Link>
        <Link
          href="#contact"
          className="inline-block font-medium text-[.9rem] text-slate-300 px-[34px] py-[14px] rounded-[8px] no-underline border border-sky-400/22 transition-all duration-300 hover:border-sky-400 hover:bg-sky-400/7 hover:translate-y-[-3px]"
        >
          {t.hero.cta2}
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-[34px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[.65rem] text-slate-500 tracking-[2px] opacity-0 animate-[heroFadeIn_1s_ease_1.2s_both]">
        <div className="w-px h-[46px] bg-gradient-to-b from-sky-400 to-transparent animate-[scrollProgress_2s_ease_infinite]" />
        {t.hero.scroll}
      </div>
    </div>
  )
}
