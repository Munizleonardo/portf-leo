"use client"

import { useEffect, useRef, useState } from "react"

type RevealVariant = "up" | "left" | "right" | "scale" | "rotate" | "flip"

const variantClass: Record<RevealVariant, string> = {
  up:     "rv-init",
  left:   "rv-l-init",
  right:  "rv-r-init",
  scale:  "rv-sc-init",
  rotate: "rv-ro-init",
  flip:   "rv-fl-init",
}

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: RevealVariant
  delay?: number
  className?: string
}

export function ScrollReveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
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
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`${variantClass[variant]} ${visible ? "rv-visible" : ""} ${className}`}
    >
      {children}
    </div>
  )
}
