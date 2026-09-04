"use client"

import { useEffect, useRef } from "react"

interface ProcessStepData {
  number: string
  title: string
  description: string
}

interface ProcessStepsProps {
  steps: ProcessStepData[]
}

/**
 * The step list with a spine that fills as the section scrolls and
 * brightens the number of the step you've reached — the section's own
 * sense of progress, instead of a plain static list. Fully lit and
 * static under `prefers-reduced-motion`.
 */
export function ProcessSteps({ steps }: ProcessStepsProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const root = rootRef.current
    const fill = fillRef.current
    if (!root || !fill) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      fill.style.transform = "scaleY(1)"
      itemRefs.current.forEach((el) => el?.setAttribute("data-active", "true"))
      return
    }

    const update = () => {
      const r = root.getBoundingClientRect()
      const start = window.innerHeight * 0.72
      const end = window.innerHeight * 0.3
      const p = Math.max(0, Math.min(1, (start - r.top) / (r.height + (start - end))))
      fill.style.transform = `scaleY(${p})`
      const lit = p <= 0 ? 0 : Math.max(1, Math.min(steps.length, Math.ceil(p * steps.length)))
      itemRefs.current.forEach((el, idx) => el?.setAttribute("data-active", String(idx < lit)))
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update, { passive: true })
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [steps.length])

  return (
    <div ref={rootRef} className="relative pl-8 max-[600px]:pl-6">
      <div className="absolute bottom-1 left-[3px] top-1 w-px bg-white/10" aria-hidden="true">
        {/* Initial scale ships as inline `style`, not a `scale-*` utility
            class: Tailwind v4 compiles those to the native CSS `scale`
            property, which composes with (rather than being overridden
            by) the `transform` this component sets from JS — mixing the
            two left the fill permanently pinned at zero height no matter
            what `update()` computed. One property, one owner. */}
        <div
          ref={fillRef}
          className="process-spine-fill h-full w-full origin-top bg-white/50"
          style={{ transform: "scaleY(0)" }}
        />
      </div>
      {steps.map((step, i) => (
        <div
          key={step.title}
          ref={(el) => {
            itemRefs.current[i] = el
          }}
          data-active="false"
          className="process-step relative -mx-3 rounded-[14px] px-3 pb-9 transition-colors duration-300 hover:bg-white/[0.025] last:pb-0 max-[600px]:pb-7"
        >
          <div className="process-step-number mb-[7px] font-mono text-[1.4rem] font-semibold leading-none tracking-[-0.01em] tabular-nums text-white/[0.14]">
            {step.number}
          </div>
          <h3 className="mb-[7px] text-[0.98rem] font-semibold tracking-[-0.01em] text-neutral-50">
            {step.title}
          </h3>
          <p className="text-[0.845rem] font-light leading-[1.75] text-neutral-400">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  )
}
