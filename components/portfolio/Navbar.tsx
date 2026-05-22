"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { type Lang } from "@/lib/i18n/translations"

const flags: { lang: Lang; emoji: string; label: string }[] = [
  { lang: "en", emoji: "🇺🇸", label: "English" },
  { lang: "pt", emoji: "🇧🇷", label: "Português" },
  { lang: "es", emoji: "🇪🇸", label: "Español" },
]

export function Navbar() {
  const { lang, setLang, t } = useLanguage()

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-12 py-[18px] max-[900px]:px-5 max-[900px]:py-4 backdrop-blur-xl backdrop-saturate-[1.4] bg-[rgba(3,5,8,0.78)] border-b border-sky-400/10">
      <div className="font-mono text-[.92rem] font-medium text-sky-400 tracking-[1px]">
        &lt;<span className="text-slate-600">leo</span>.dev /&gt;
      </div>

      <div className="flex items-center gap-6">
        {/* Nav links */}
        <ul className="flex gap-9 list-none max-[900px]:hidden">
          <li>
            <Link
              href="#services"
              className="text-[.8rem] font-medium tracking-[1.5px] uppercase text-slate-600 no-underline transition-colors duration-250 hover:text-slate-100"
            >
              {t.nav.services}
            </Link>
          </li>
          <li>
            <Link
              href="#work"
              className="text-[.8rem] font-medium tracking-[1.5px] uppercase text-slate-600 no-underline transition-colors duration-250 hover:text-slate-100"
            >
              {t.nav.work}
            </Link>
          </li>
          <li>
            <Link
              href="#process"
              className="text-[.8rem] font-medium tracking-[1.5px] uppercase text-slate-600 no-underline transition-colors duration-250 hover:text-slate-100"
            >
              {t.nav.process}
            </Link>
          </li>
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
      </div>
    </nav>
  )
}
