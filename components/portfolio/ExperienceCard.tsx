import { Code2, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceCardProps {
  company: string
  role: string
  bullets: string[]
  tech: string[]
  featured: boolean
}

export function ExperienceCard({ company, role, bullets, tech, featured }: ExperienceCardProps) {
  if (featured) {
    return (
      <Card className="bg-[#0b1120] border border-sky-400/10 rounded-[16px] p-7 gap-0 ring-0 h-full transition-[transform,border-color,box-shadow] duration-380 ease-[cubic-bezier(.22,.68,0,1.2)] hover:translate-y-[-7px] hover:scale-[1.012] hover:border-sky-400/22 hover:shadow-[0_24px_60px_rgba(0,0,0,.4),0_0_40px_rgba(56,189,248,.06)]">
        <CardContent className="p-0 flex flex-col gap-0 h-full">
          <div className="w-11 h-11 rounded-[10px] bg-sky-400/8 border border-sky-400/18 flex items-center justify-center text-sky-400 mb-4">
            <Code2 className="w-5 h-5" strokeWidth={1.75} />
          </div>
          <h3 className="text-[1.05rem] font-bold text-slate-100 mb-1 tracking-[-0.3px]">{role}</h3>
          <div className="font-mono text-[.74rem] text-sky-400 mb-5">{company}</div>
          <ul className="flex flex-col gap-[9px] mb-6">
            {bullets.map((b) => (
              <li key={b} className="text-[.82rem] font-light text-slate-600 leading-[1.7] pl-[18px] relative">
                <span className="absolute left-0 top-[1px] text-sky-400/60">›</span>
                {b}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-[6px] mt-auto pt-1">
            {tech.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="font-mono text-[.65rem] text-cyan-400 bg-cyan-400/8 border border-cyan-400/18 rounded-full px-[9px] py-[2px] h-auto"
              >
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-[#080c14] border border-sky-400/6 rounded-[14px] p-6 gap-0 ring-0 h-full transition-colors duration-300 hover:border-sky-400/14">
      <CardContent className="p-0 flex flex-col gap-0">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-[8px] bg-slate-100/[.04] border border-slate-100/10 flex items-center justify-center text-slate-500 shrink-0">
            <Briefcase className="w-[15px] h-[15px]" strokeWidth={1.75} />
          </div>
          <div>
            <div className="text-[.87rem] font-semibold text-slate-300">{role}</div>
            <div className="font-mono text-[.68rem] text-slate-600">{company}</div>
          </div>
        </div>
        <ul className="flex flex-col gap-[6px]">
          {bullets.map((b) => (
            <li key={b} className="text-[.78rem] font-light text-slate-600 leading-[1.65] pl-[14px] relative">
              <span className="absolute left-0 top-0 text-slate-600">–</span>
              {b}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
