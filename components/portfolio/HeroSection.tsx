"use client"

import { useEffect, useRef, type CSSProperties } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { STAT_TARGETS } from "@/lib/stats"

/**
 * Splits text into per-character spans (for the stagger animation) while
 * keeping each word wrapped in its own inline-block — without that, the
 * browser treats every letter as its own break opportunity and wraps
 * mid-word on narrow screens. The space between words stays a normal,
 * breakable text node. Ships as real text; this only adds spans around it.
 */
function animatedText(text: string, counter: { i: number }) {
  const words = text.split(" ")
  const nodes: React.ReactNode[] = []
  words.forEach((word, wi) => {
    nodes.push(
      <span key={`w${wi}`} className="inline-block whitespace-nowrap">
        {Array.from(word).map((ch, ci) => {
          const i = counter.i++
          return (
            <span key={ci} className="h-char" style={{ "--i": i } as CSSProperties}>
              {ch}
            </span>
          )
        })}
      </span>
    )
    if (wi < words.length - 1) nodes.push(" ")
  })
  return nodes
}

export function HeroSection() {
  const { t } = useLanguage()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Faint monochrome grid drifting behind the hero — ambient, not content.
  // Frozen under reduced motion instead of animating.
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const spacing = 44
    let offset = 0
    let raf = 0

    const size = () => {
      const r = canvas.getBoundingClientRect()
      canvas.width = Math.max(1, Math.round(r.width * dpr))
      canvas.height = Math.max(1, Math.round(r.height * dpr))
    }

    const draw = () => {
      const { width: w, height: h } = canvas
      const g = spacing * dpr
      ctx.clearRect(0, 0, w, h)
      ctx.strokeStyle = "rgba(255,255,255,0.05)"
      ctx.lineWidth = 1
      const o = offset % g
      ctx.beginPath()
      for (let x = -g + o; x < w + g; x += g) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
      }
      for (let y = -g + o; y < h + g; y += g) {
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
      }
      ctx.stroke()

      const vignette = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.72)
      vignette.addColorStop(0, "rgba(10,10,10,0)")
      vignette.addColorStop(1, "rgba(10,10,10,0.95)")
      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, w, h)
    }

    const tick = () => {
      offset += 0.15 * dpr
      draw()
      raf = requestAnimationFrame(tick)
    }

    size()
    draw()
    if (!reduceMotion) raf = requestAnimationFrame(tick)

    const onResize = () => {
      size()
      draw()
    }
    window.addEventListener("resize", onResize, { passive: true })
    return () => {
      window.removeEventListener("resize", onResize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const counter = { i: 0 }
  const line1 = animatedText(t.hero.titleLine1, counter)
  const line2 = animatedText(t.hero.titleLine2, counter)

  return (
    <div className="relative overflow-hidden">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <div className="relative z-[1] flex flex-col items-center px-10 pb-16 pt-[132px] text-center max-[900px]:px-5 max-[900px]:pb-12 max-[900px]:pt-[112px]">
        {/* Eyebrow */}
        <div className="mb-8 inline-flex items-center gap-[10px] text-[0.72rem] font-medium uppercase tracking-[0.22em] text-neutral-500 max-[900px]:mb-6">
          <span className="h-[6px] w-[6px] rounded-full bg-neutral-400" />
          {t.hero.eyebrow}
        </div>

        {/* Title */}
        <h1 className="mb-7 max-w-full text-[clamp(2.5rem,6.2vw,5.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-neutral-50 max-[900px]:mb-5">
          {line1}
          <br />
          <span className="text-neutral-500">{line2}</span>
        </h1>

        {/* Subtitle */}
        <p className="mb-11 max-w-[560px] text-[1.02rem] font-light leading-[1.8] text-neutral-400 max-[900px]:mb-8">
          {t.hero.subtitle}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="#work"
            className="inline-block rounded-[12px] bg-neutral-50 px-8 py-[15px] text-[0.85rem] font-semibold text-neutral-950 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
          >
            {t.hero.cta1}
          </Link>
          <Link
            href="#contact"
            className="inline-block rounded-[12px] border border-white/15 px-8 py-[15px] text-[0.85rem] font-medium text-neutral-200 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.03]"
          >
            {t.hero.cta2}
          </Link>
        </div>
      </div>

      {/* Context strip — bridges the hero into the stats band instead of
          leaving dead space below the fold. */}
      <div className="relative z-[1] flex flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t border-white/[0.07] px-6 py-4 font-mono text-[0.64rem] uppercase tracking-[0.12em] text-neutral-600 max-[900px]:gap-x-5 max-[900px]:px-4 max-[900px]:text-[0.58rem]">
        <span className="inline-flex items-center gap-2">
          <span className="h-[5px] w-[5px] rounded-full bg-neutral-500" />
          {t.about.availability}
        </span>
        <span>{t.about.location}</span>
        <span>{t.hero.responseTime}</span>
        <span>
          <b className="font-medium text-neutral-300">{STAT_TARGETS.projects}+</b> {t.hero.statProjects}
        </span>
        <span>
          <b className="font-medium text-neutral-300">{STAT_TARGETS.years}+</b> {t.hero.statYears}
        </span>
        <span>
          <b className="font-medium text-neutral-300">{STAT_TARGETS.stacks}+</b> {t.hero.statStacks}
        </span>
      </div>
    </div>
  )
}
