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
      <Card className="h-full gap-0 rounded-[20px] border border-white/[0.07] bg-white/[0.02] p-7 ring-0 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.035]">
        <CardContent className="flex h-full flex-col gap-0 p-0">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[12px] border border-white/10 bg-white/[0.03] text-neutral-200">
            <Code2 className="h-5 w-5" strokeWidth={1.5} />
          </div>
          <h3 className="mb-1 text-[1.05rem] font-semibold tracking-[-0.01em] text-neutral-50">{role}</h3>
          <div className="mb-5 text-[0.76rem] uppercase tracking-[0.14em] text-neutral-500">{company}</div>
          <ul className="mb-6 flex flex-col gap-[9px]">
            {bullets.map((b) => (
              <li key={b} className="relative pl-[18px] text-[0.82rem] font-light leading-[1.7] text-neutral-400">
                <span className="absolute left-0 top-0 text-neutral-600">—</span>
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap gap-[6px] pt-1">
            {tech.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="h-auto rounded-full border border-white/10 bg-white/[0.03] px-[9px] py-[2px] text-[0.65rem] font-normal text-neutral-400"
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
    <Card className="h-full gap-0 rounded-[18px] border border-white/[0.05] bg-white/[0.015] p-6 ring-0 transition-colors duration-300 hover:border-white/12">
      <CardContent className="flex flex-col gap-0 p-0">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] border border-white/[0.08] bg-white/[0.02] text-neutral-500">
            <Briefcase className="h-[15px] w-[15px]" strokeWidth={1.5} />
          </div>
          <div>
            <div className="text-[0.87rem] font-medium text-neutral-200">{role}</div>
            <div className="text-[0.68rem] uppercase tracking-[0.12em] text-neutral-500">{company}</div>
          </div>
        </div>
        <ul className="flex flex-col gap-[6px]">
          {bullets.map((b) => (
            <li key={b} className="relative pl-[14px] text-[0.78rem] font-light leading-[1.65] text-neutral-500">
              <span className="absolute left-0 top-0 text-neutral-600">–</span>
              {b}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
