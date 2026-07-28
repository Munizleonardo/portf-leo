"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { type Lang } from "@/lib/i18n/translations"

const flags: { lang: Lang; emoji: string; label: string }[] = [
  { lang: "en", emoji: "🇺🇸", label: "English" },
  { lang: "pt", emoji: "🇧🇷", label: "Português" },
  { lang: "es", emoji: "🇪🇸", label: "Español" },
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
    <nav className="fixed top-0 left-0 right-0 z-[200] backdrop-blur-xl backdrop-saturate-[1.4] bg-[rgba(3,5,8,0.78)] border-b border-sky-400/10">
      <div className="flex justify-between items-center px-12 py-[18px] max-[900px]:px-5 max-[900px]:py-4">
        <Link
          href="#"
          className="font-mono text-[.92rem] font-medium text-sky-400 tracking-[1px] no-underline"
        >
          &lt;<span className="text-slate-600">leo</span>.dev /&gt;
        </Link>

        <div className="flex items-center gap-6">
          {/* Nav links */}
          <ul className="flex gap-9 list-none max-[900px]:hidden">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[.8rem] font-medium tracking-[1.5px] uppercase text-slate-600 no-underline transition-colors duration-250 hover:text-slate-100"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="text-[.8rem] font-medium tracking-[1.5px] uppercase text-[#030508] no-underline bg-sky-400 px-[22px] py-2 rounded-[6px] transition-[background-color,transform] duration-250 hover:bg-cyan-400 hover:translate-y-[-2px] inline-block"
              >
                {t.nav.hire}
              </Link>
            </li>
          </ul>

          {/* Language flags */}
          <div className="flex items-center gap-[6px] border-l border-sky-400/10 pl-5 max-[900px]:pl-0 max-[900px]:border-l-0">
            {flags.map(({ lang: l, emoji, label }) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                title={label}
                className={`text-lg leading-none transition-[opacity,transform] duration-200 hover:scale-125 cursor-pointer select-none ${
                  lang === l
                    ? "opacity-100 scale-110"
                    : "opacity-35 hover:opacity-75"
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="hidden max-[900px]:flex items-center justify-center w-9 h-9 -mr-2 text-slate-300 hover:text-sky-400 transition-colors duration-200"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="hidden max-[900px]:flex flex-col gap-1 px-5 pb-5 border-t border-sky-400/10 bg-[rgba(3,5,8,0.97)] opacity-0 animate-[heroFadeDown_0.25s_ease_forwards]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[.85rem] font-medium tracking-[1px] uppercase text-slate-400 no-underline py-3 border-b border-sky-400/6 transition-colors duration-200 hover:text-slate-100"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-[.85rem] font-bold tracking-[1px] uppercase text-[#030508] no-underline bg-sky-400 px-5 py-3 rounded-[8px] text-center mt-4"
          >
            {t.nav.hire}
          </Link>
        </div>
      )}
    </nav>
  )
}
