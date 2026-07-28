import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkillCategoryCardProps {
  icon: LucideIcon
  title: string
  items: string[]
}

export function SkillCategoryCard({ icon: Icon, title, items }: SkillCategoryCardProps) {
  return (
    <Card className="svc-accent bg-[#0b1120] border border-sky-400/10 rounded-[14px] p-7 gap-0 ring-0 h-full transition-[transform,border-color,box-shadow] duration-380 ease-[cubic-bezier(.22,.68,0,1.2)] hover:translate-y-[-7px] hover:scale-[1.015] hover:border-sky-400/22 hover:shadow-[0_24px_60px_rgba(0,0,0,.4),0_0_40px_rgba(56,189,248,.06)]">
      <CardContent className="p-0 flex flex-col gap-0 flex-1 min-h-0">
        <div className="w-11 h-11 rounded-[10px] bg-sky-400/8 border border-sky-400/18 flex items-center justify-center mb-4 text-sky-400">
          <Icon className="w-5 h-5" strokeWidth={1.75} />
        </div>
        <h3 className="text-[1.02rem] font-bold text-slate-100 mb-[14px] tracking-[-0.3px]">
          {title}
        </h3>
        <div className="flex flex-wrap gap-[6px] mt-auto">
          {items.map((item) => (
            <Badge
              key={item}
              variant="outline"
              className="font-mono text-[.67rem] text-cyan-400 bg-cyan-400/8 border border-cyan-400/18 rounded-full px-[10px] py-[3px] h-auto"
            >
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
