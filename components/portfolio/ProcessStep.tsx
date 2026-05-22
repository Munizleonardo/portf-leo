import { Separator } from "@/components/ui/separator"

interface ProcessStepProps {
  number: string
  title: string
  description: string
  isLast?: boolean
}

export function ProcessStep({ number, title, description, isLast = false }: ProcessStepProps) {
  return (
    <>
      <div className="flex gap-[22px] py-[26px] px-3 -mx-3 rounded-xl transition-[padding-left,background-color] duration-300 hover:pl-5 hover:bg-sky-400/6 group">
        <div className="font-mono text-[2.3rem] font-bold text-sky-400/10 leading-none min-w-[54px] transition-[color,text-shadow] duration-300 group-hover:text-sky-400 group-hover:[text-shadow:0_0_20px_rgba(56,189,248,.5)]">
          {number}
        </div>
        <div>
          <h3 className="text-[.98rem] font-bold text-slate-100 mb-[7px] tracking-[-0.2px]">
            {title}
          </h3>
          <p className="text-[.845rem] font-light text-slate-600 leading-[1.75]">
            {description}
          </p>
        </div>
      </div>
      {!isLast && <Separator className="bg-sky-400/10" />}
    </>
  )
}
