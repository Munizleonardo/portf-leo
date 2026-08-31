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
    <Card className="h-full gap-0 rounded-[20px] border border-white/[0.07] bg-white/[0.02] p-7 ring-0 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.035]">
      <CardContent className="flex min-h-0 flex-1 flex-col gap-0 p-0">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[12px] border border-white/10 bg-white/[0.03] text-neutral-200">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <h3 className="mb-[14px] text-[1.02rem] font-semibold tracking-[-0.01em] text-neutral-50">
          {title}
        </h3>
        <div className="mt-auto flex flex-wrap gap-[6px]">
          {items.map((item) => (
            <Badge
              key={item}
              variant="outline"
              className="h-auto rounded-full border border-white/10 bg-white/[0.03] px-[10px] py-[3px] text-[0.68rem] font-normal text-neutral-400"
            >
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
