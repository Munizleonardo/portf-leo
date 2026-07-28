"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative z-2 flex flex-col items-center gap-2 text-center px-10 py-[26px] border-t border-sky-400/10 font-mono text-[.7rem] text-slate-600 tracking-[.5px]">
      <span>{t.footer}</span>
      <a
        href="https://github.com/Munizleonardo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-700 no-underline transition-colors duration-200 hover:text-sky-400"
      >
        github.com/Munizleonardo
      </a>
    </footer>
  )
}
