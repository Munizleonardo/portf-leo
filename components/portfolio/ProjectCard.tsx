import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { StackBadge } from "./StackBadge"

type TechType =
  | "html" | "css"  | "js"   | "ts"   | "next"
  | "node" | "supa" | "verc" | "api"  | "resp" | "dr"

interface Tech {
  readonly label: string
  readonly type: TechType
}

interface ProjectCardProps {
  emoji: string
  gradient: string
  category: string
  title: string
  description: string
  stack: readonly Tech[]
  type: string
  href?: string
}

export function ProjectCard({
  emoji,
  gradient,
  category,
  title,
  description,
  stack,
  type,
  href,
}: ProjectCardProps) {
  return (
    <Card className="bg-[#0b1120] border border-sky-400/10 rounded-[16px] p-7 gap-0 ring-0 relative overflow-hidden h-full transition-[transform,border-color,box-shadow] duration-380 ease-[cubic-bezier(.22,.68,0,1.2)] hover:translate-y-[-7px] hover:scale-[1.012] hover:border-sky-400/22 hover:shadow-[0_24px_60px_rgba(0,0,0,.4),0_0_40px_rgba(56,189,248,.08)] group">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: gradient }} />

      <CardContent className="p-0 flex flex-col gap-0 flex-1 min-h-0">
        <div className="flex items-center justify-between mb-5">
          <div
            className="w-12 h-12 rounded-[12px] flex items-center justify-center text-[1.4rem] shrink-0"
            style={{ background: gradient }}
          >
            {emoji}
          </div>
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-sky-400/10 border border-sky-400/22 flex items-center justify-center text-sky-400 text-[.85rem] shrink-0 transition-[background-color,transform,color] duration-250 group-hover:bg-sky-400 group-hover:text-[#030508] group-hover:rotate-45"
            >
              →
            </a>
          ) : (
            <span className="font-mono text-[.6rem] text-slate-700 uppercase tracking-[1px] shrink-0">
              Private
            </span>
          )}
        </div>

        <div className="font-mono text-[.68rem] text-sky-400 tracking-[2px] uppercase mb-[7px]">
          {category}
        </div>
        <h3 className="text-[1.12rem] font-bold text-slate-100 mb-[9px] tracking-[-0.4px]">
          {title}
        </h3>
        <p className="text-[.845rem] font-light text-slate-600 leading-[1.75] mb-[18px]">
          {description}
        </p>

        <div className="flex flex-wrap gap-[5px] mt-auto">
          {stack.map((tech) => (
            <StackBadge key={tech.label} label={tech.label} type={tech.type} />
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-0 pt-5 mt-5 bg-transparent border-t border-sky-400/10 rounded-none">
        <span className="font-mono text-[.66rem] text-slate-600">{`// ${type}`}</span>
      </CardFooter>
    </Card>
  )
}
