"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export function HeroSection() {
  const { t } = useLanguage()
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const mqDesktop = window.matchMedia("(min-width: 901px)")
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)")
    let detach: (() => void) | null = null

    const setup = () => {
      if (detach || !mqDesktop.matches || mqReduce.matches) return

      // Desktop only: hide everything but "Full-Stack" and reveal it as the cursor sweeps the hero.
      root.classList.add("reveal-active")
      const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"))
      let done = false

      const finish = () => {
        if (done) return
        done = true
        clearTimeout(arm)
        clearTimeout(timer)
        root.removeEventListener("mousemove", onMove)
        root.removeEventListener("focusin", revealAll)
        window.removeEventListener("scroll", onScroll)
      }

      const revealAll = () => {
        targets.forEach((el) => el.classList.add("revealed"))
        finish()
      }

      const onScroll = () => {
        // Ignore load-time scroll restoration; a real scroll away reveals everything.
        if (window.scrollY > 40) revealAll()
      }

      const onMove = (e: MouseEvent) => {
        const pad = 48
        let pending = false
        for (const el of targets) {
          if (el.classList.contains("revealed")) continue
          const r = el.getBoundingClientRect()
          if (
            e.clientX >= r.left - pad &&
            e.clientX <= r.right + pad &&
            e.clientY >= r.top - pad &&
            e.clientY <= r.bottom + pad
          ) {
            el.classList.add("revealed")
          } else {
            pending = true
          }
        }
        if (!pending) finish()
      }

      // Settle first so scroll-restoration / autofocus on load don't count.
      const arm = window.setTimeout(() => {
        root.addEventListener("mousemove", onMove)
        root.addEventListener("focusin", revealAll)
        window.addEventListener("scroll", onScroll, { passive: true })
      }, 250)
      const timer = window.setTimeout(revealAll, 12000)

      detach = finish
    }

    setup()
    const onMqChange = () => setup()
    mqDesktop.addEventListener("change", onMqChange)

    return () => {
      mqDesktop.removeEventListener("change", onMqChange)
      detach?.()
      root.classList.remove("reveal-active")
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className="hero-reveal relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-10 pb-[100px] pt-[140px] text-center max-[900px]:px-5 max-[900px]:pb-[60px] max-[900px]:pt-[120px]"
    >
      {/* Eyebrow */}
      <div
        data-reveal
        className="mb-8 inline-flex items-center gap-[10px] text-[0.72rem] font-medium uppercase tracking-[0.22em] text-neutral-500 max-[900px]:mb-6"
      >
        <span className="h-[6px] w-[6px] rounded-full bg-neutral-400" />
        {t.hero.eyebrow}
      </div>

      {/* Title */}
      <h1 className="mb-7 text-[clamp(2.9rem,7.5vw,6.4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-neutral-50 max-[900px]:mb-5">
        <span data-reveal>{t.hero.titleLead}</span>
        <br />
        <span className="text-neutral-500">
          Full-Stack <span data-reveal>{t.hero.titleTail}</span>
        </span>
      </h1>

      {/* Subtitle */}
      <p
        data-reveal
        className="mb-11 max-w-[560px] text-[1.02rem] font-light leading-[1.8] text-neutral-400 max-[900px]:mb-8"
      >
        {t.hero.subtitle}
      </p>

      {/* Actions */}
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          data-reveal
          href="#work"
          className="inline-block rounded-[12px] bg-neutral-50 px-8 py-[15px] text-[0.85rem] font-semibold text-neutral-950 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
        >
          {t.hero.cta1}
        </Link>
        <Link
          data-reveal
          href="#contact"
          className="inline-block rounded-[12px] border border-white/15 px-8 py-[15px] text-[0.85rem] font-medium text-neutral-200 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.03]"
        >
          {t.hero.cta2}
        </Link>
      </div>

      {/* Scroll cue — always visible, like "Full-Stack" */}
      <div
        className="absolute bottom-[34px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.62rem] uppercase tracking-[0.24em] text-neutral-600 max-[900px]:static max-[900px]:mt-12 max-[900px]:translate-x-0"
      >
        <span className="h-[42px] w-px animate-[scrollCue_2.4s_ease_infinite] bg-gradient-to-b from-neutral-500 to-transparent max-[900px]:h-[24px]" />
        {t.hero.scroll}
      </div>
    </div>
  )
}
