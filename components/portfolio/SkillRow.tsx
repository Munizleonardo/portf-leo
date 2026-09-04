import { Badge } from "@/components/ui/badge"

interface SkillRowProps {
  title: string
  items: string[]
  itemsLabel: string
}

/** One line of the Skills list: category on the left, stack flowing on the
 *  right, natural height — no forced row height, so a 2-tag category
 *  never stretches to match a 7-tag one. */
export function SkillRow({ title, items, itemsLabel }: SkillRowProps) {
  return (
    <div className="grid grid-cols-[200px_1fr] items-baseline gap-8 border-b border-white/[0.07] py-[18px] max-[620px]:grid-cols-1 max-[620px]:gap-3 max-[620px]:py-4">
      <div>
        <div className="text-[0.95rem] font-semibold tracking-[-0.01em] text-neutral-50">{title}</div>
        <div className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-neutral-600">
          {items.length} {itemsLabel}
        </div>
      </div>
      <div className="flex flex-wrap gap-[6px]">
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
    </div>
  )
}
