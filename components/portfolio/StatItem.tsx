"use client"

import { useEffect, useRef, useState } from "react"

interface StatItemProps {
  target: number
  label: string
  suffix?: string
}

export function StatItem({ target, label, suffix = "+" }: StatItemProps) {
  const ref     = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          setRevealed(true)
          const dur  = 1800
          const step = target / (dur / 16)
          let c = 0
          const tm = setInterval(() => {
            c = Math.min(c + step, target)
            setCount(Math.floor(c))
            if (c >= target) clearInterval(tm)
          }, 16)
          obs.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <div
      ref={ref}
      className="h-full px-5 py-9 text-center transition-colors duration-300 hover:bg-white/[0.02] max-[900px]:px-3 max-[900px]:py-5"
    >
      <div className="mb-[10px] text-[2.6rem] font-semibold leading-none tracking-[-0.02em] text-neutral-50 tabular-nums max-[900px]:mb-2 max-[900px]:text-[1.7rem]">
        {count}{suffix}
      </div>
      <span
        className={`mx-auto mb-3 block h-px w-6 origin-center bg-white/25 transition-transform duration-700 ease-out ${
          revealed ? "scale-x-100" : "scale-x-0"
        }`}
        aria-hidden="true"
      />
      <div className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-neutral-500 max-[900px]:text-[0.58rem] max-[900px]:tracking-[0.12em]">
        {label}
      </div>
    </div>
  )
}
