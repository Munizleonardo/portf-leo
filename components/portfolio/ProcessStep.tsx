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
      <div className="group -mx-3 flex gap-[22px] rounded-[14px] px-3 py-[26px] transition-colors duration-300 hover:bg-white/[0.025]">
        <div className="min-w-[54px] text-[2.2rem] font-semibold leading-none tracking-[-0.02em] text-white/[0.12] tabular-nums transition-colors duration-300 group-hover:text-neutral-100">
          {number}
        </div>
        <div>
          <h3 className="mb-[7px] text-[0.98rem] font-semibold tracking-[-0.01em] text-neutral-50">
            {title}
          </h3>
          <p className="text-[0.845rem] font-light leading-[1.75] text-neutral-400">
            {description}
          </p>
        </div>
      </div>
      {!isLast && <Separator className="bg-white/[0.07]" />}
    </>
  )
}
