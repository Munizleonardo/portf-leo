const CORE_TECH = [
  "TypeScript", "JavaScript", "React", "Next.js", "Node.js",
  "Tailwind CSS", "Supabase", "PostgreSQL", "Vercel", "Git", "N8N", "REST API",
]

export function TechMarquee() {
  const items = [...CORE_TECH, ...CORE_TECH]

  return (
    <div className="relative overflow-hidden border-y border-white/[0.07] py-6 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-[marquee_36s_linear_infinite] gap-12 hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-[10px] whitespace-nowrap text-[0.82rem] tracking-[0.02em] text-neutral-500"
          >
            <span className="h-[4px] w-[4px] rounded-full bg-neutral-600" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
