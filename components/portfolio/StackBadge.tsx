interface StackBadgeProps {
  label: string
}

export function StackBadge({ label }: StackBadgeProps) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-[9px] py-[3px] text-[0.63rem] font-medium tracking-[0.02em] text-neutral-400">
      {label}
    </span>
  )
}
