"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { type Lang } from "@/lib/i18n/translations"

const langs: { lang: Lang; code: string }[] = [
  { lang: "en", code: "EN" },
  { lang: "pt", code: "PT" },
  { lang: "es", code: "ES" },
]

export function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)

  const links = [
    { href: "#about",      label: t.nav.about },
    { href: "#skills",     label: t.nav.skills },
    { href: "#work",       label: t.nav.work },
    { href: "#experience", label: t.nav.experience },
  ]

  return (
    <nav className="fixed inset-x-0 top-0 z-[200] border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="flex items-center justify-between px-12 py-[18px] max-[900px]:px-5 max-[900px]:py-4">
        <Link
          href="#"
          className="text-sm font-medium tracking-tight no-underline"
        >
          <span className="text-neutral-100">Leonardo</span>{" "}
          <span className="text-neutral-500">Muniz</span>
        </Link>

        <div className="flex items-center gap-7">
          <ul className="flex list-none gap-9 max-[900px]:hidden">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-neutral-500 no-underline transition-colors duration-200 hover:text-neutral-100"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="inline-block rounded-full bg-neutral-50 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-neutral-950 no-underline transition-all duration-200 hover:-translate-y-px hover:bg-white"
              >
                {t.nav.hire}
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-3 border-l border-white/[0.08] pl-6 max-[900px]:border-l-0 max-[900px]:pl-0">
            {langs.map(({ lang: l, code }) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`cursor-pointer select-none text-[0.68rem] font-medium tracking-[0.12em] transition-colors duration-200 ${
                  lang === l
                    ? "text-neutral-100"
                    : "text-neutral-600 hover:text-neutral-300"
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="hidden h-9 w-9 -mr-2 items-center justify-center text-neutral-300 transition-colors duration-200 hover:text-neutral-100 max-[900px]:flex"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="hidden animate-[heroFadeDown_0.25s_ease_forwards] flex-col gap-1 border-t border-white/[0.06] bg-[#0a0a0a]/98 px-5 pb-5 opacity-0 max-[900px]:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/[0.06] py-3 text-[0.8rem] font-medium uppercase tracking-[0.12em] text-neutral-400 no-underline transition-colors duration-200 hover:text-neutral-100"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-neutral-50 px-5 py-3 text-center text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-neutral-950 no-underline"
          >
            {t.nav.hire}
          </Link>
        </div>
      )}
    </nav>
  )
}
