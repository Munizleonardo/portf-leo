"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const curRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cur  = curRef.current
    const ring = ringRef.current
    if (!cur || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      cur.style.left = `${mx}px`
      cur.style.top  = `${my}px`
    }

    const loop = () => {
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      ring.style.left = `${rx}px`
      ring.style.top  = `${ry}px`
      rafId = requestAnimationFrame(loop)
    }
    loop()

    document.addEventListener("mousemove", onMove)

    const addHov = () => document.body.classList.add("hov")
    const remHov = () => document.body.classList.remove("hov")
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", addHov)
      el.addEventListener("mouseleave", remHov)
    })

    return () => {
      document.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={curRef}
        className="cursor-dot fixed w-[10px] h-[10px] bg-sky-400 rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-[width,height,background-color,box-shadow] duration-250"
      />
      <div
        ref={ringRef}
        className="cursor-ring fixed w-[38px] h-[38px] border border-sky-400/40 rounded-full pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-300"
      />
    </>
  )
}
