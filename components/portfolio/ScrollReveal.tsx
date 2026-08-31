"use client"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  /** Kept for call-site compatibility; every reveal now uses the same quiet fade-up. */
  variant?: "up" | "left" | "right" | "scale" | "rotate" | "flip"
  delay?: number
  className?: string
}

export function ScrollReveal({ children, delay = 0, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          obs.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : undefined }}
      className={`rv-init ${visible ? "rv-visible" : ""} ${className}`}
    >
      {children}
    </div>
  )
}
