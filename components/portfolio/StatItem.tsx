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
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
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
      className="flex-1 min-w-[180px] text-center px-5 py-[38px] border-r border-sky-400/10 last:border-r-0 max-[900px]:border-r-0 max-[900px]:border-b max-[900px]:border-sky-400/10 transition-colors duration-300 hover:bg-sky-400/4"
    >
      <div className="font-mono text-[2.5rem] font-bold text-sky-400 leading-none mb-[6px] [text-shadow:0_0_30px_rgba(56,189,248,.35)]">
        {count}{suffix}
      </div>
      <div className="text-[.75rem] font-medium tracking-[1.5px] uppercase text-slate-600">
        {label}
      </div>
    </div>
  )
}
