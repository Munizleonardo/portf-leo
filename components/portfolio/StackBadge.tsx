type TechType =
  | "html" | "css"  | "js"   | "ts"   | "next"
  | "node" | "supa" | "verc" | "api"  | "resp" | "dr"

interface StackBadgeProps {
  label: string
  type: TechType
}

const techStyle: Record<TechType, React.CSSProperties> = {
  html: { background: "rgba(227,79,38,.13)",  color: "#e34f26", border: "1px solid rgba(227,79,38,.22)" },
  css:  { background: "rgba(21,114,182,.13)",  color: "#1572b6", border: "1px solid rgba(21,114,182,.22)" },
  js:   { background: "rgba(247,223,30,.1)",   color: "#f7df1e", border: "1px solid rgba(247,223,30,.18)" },
  ts:   { background: "rgba(0,122,204,.13)",   color: "#007acc", border: "1px solid rgba(0,122,204,.22)" },
  next: { background: "rgba(255,255,255,.06)", color: "#e2e8f0", border: "1px solid rgba(255,255,255,.1)" },
  node: { background: "rgba(104,159,56,.13)",  color: "#8bc34a", border: "1px solid rgba(104,159,56,.22)" },
  supa: { background: "rgba(62,207,142,.1)",   color: "#3ecf8e", border: "1px solid rgba(62,207,142,.2)" },
  verc: { background: "rgba(255,255,255,.06)", color: "#c8d3e0", border: "1px solid rgba(255,255,255,.1)" },
  api:  { background: "rgba(139,92,246,.13)",  color: "#a78bfa", border: "1px solid rgba(139,92,246,.22)" },
  resp: { background: "rgba(56,189,248,.1)",   color: "#38bdf8", border: "1px solid rgba(56,189,248,.18)" },
  dr:   { background: "rgba(251,146,60,.1)",   color: "#fb923c", border: "1px solid rgba(251,146,60,.18)" },
}

export function StackBadge({ label, type }: StackBadgeProps) {
  return (
    <span
      className="font-mono text-[.63rem] font-medium px-[9px] py-[3px] rounded-[4px] tracking-[.4px]"
      style={techStyle[type]}
    >
      {label}
    </span>
  )
}
