"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="flex flex-col items-center gap-2 border-t border-white/[0.07] px-10 py-[28px] text-center text-[0.72rem] tracking-[0.04em] text-neutral-600">
      <span>{t.footer}</span>
      <a
        href="https://github.com/Munizleonardo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-500 no-underline transition-colors duration-200 hover:text-neutral-200"
      >
        github.com/Munizleonardo
      </a>
    </footer>
  )
}
