"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative z-2 text-center px-10 py-[26px] border-t border-sky-400/10 font-mono text-[.7rem] text-slate-600 tracking-[.5px]">
      {t.footer}
    </footer>
  )
}
