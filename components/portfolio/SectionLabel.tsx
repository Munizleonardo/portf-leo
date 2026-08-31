interface SectionLabelProps {
  children: string
  className?: string
}

/** Small uppercase section marker — just the label text, nothing before it. */
export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div
      className={`text-[0.7rem] font-medium uppercase tracking-[0.24em] text-neutral-400 ${className}`}
    >
      {children}
    </div>
  )
}
