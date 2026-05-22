import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  tags: string[]
}

export function ServiceCard({ icon, title, description, tags }: ServiceCardProps) {
  return (
    <Card className="svc-accent bg-[#0b1120] border border-sky-400/10 rounded-[14px] p-7 gap-0 ring-0 transition-[transform,border-color,box-shadow] duration-380 ease-[cubic-bezier(.22,.68,0,1.2)] hover:translate-y-[-7px] hover:scale-[1.015] hover:border-sky-400/22 hover:shadow-[0_24px_60px_rgba(0,0,0,.4),0_0_40px_rgba(56,189,248,.06)]">
      <CardContent className="p-0 flex flex-col gap-0">
        <span className="text-[1.8rem] mb-4 block">{icon}</span>
        <h3 className="text-[1.02rem] font-bold text-slate-100 mb-[10px] tracking-[-0.3px]">
          {title}
        </h3>
        <p className="text-[.855rem] font-light text-slate-600 leading-[1.75] mb-[18px]">
          {description}
        </p>
        <div className="flex flex-wrap gap-[6px]">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="font-mono text-[.67rem] text-cyan-400 bg-cyan-400/8 border border-cyan-400/18 rounded-full px-[10px] py-[3px] h-auto"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
