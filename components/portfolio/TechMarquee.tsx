const CORE_TECH = [
  "TypeScript", "JavaScript", "React", "Next.js", "Node.js",
  "Tailwind CSS", "Supabase", "PostgreSQL", "Vercel", "Git", "N8N", "REST API",
]

export function TechMarquee() {
  const items = [...CORE_TECH, ...CORE_TECH]

  return (
    <div className="relative overflow-hidden border-y border-sky-400/10 py-6 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max gap-12 animate-[marquee_32s_linear_infinite] hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-[10px] font-mono text-[.85rem] text-slate-500 tracking-[.5px] whitespace-nowrap"
          >
            <span className="w-[5px] h-[5px] rounded-full bg-sky-400/50 shadow-[0_0_6px_rgba(56,189,248,.5)]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
