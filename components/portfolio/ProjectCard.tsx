import { ArrowUpRight } from "lucide-react"
import { StackBadge } from "./StackBadge"

interface ProjectCardProps {
  category: string
  title: string
  description: string
  stack: readonly string[]
  repo?: string
}

export function ProjectCard({ category, title, description, stack, repo }: ProjectCardProps) {
  const base =
    "group flex h-full flex-col rounded-[20px] border border-white/[0.07] bg-white/[0.02] p-7 transition-all duration-300 ease-out"

  const body = (
    <>
      <div className="mb-3 flex items-center justify-between gap-4">
        <span className="text-[0.66rem] font-medium uppercase tracking-[0.18em] text-neutral-500">
          {category}
        </span>
        {repo ? (
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-neutral-500 transition-colors duration-250 group-hover:text-neutral-100"
            strokeWidth={1.75}
          />
        ) : (
          <span className="shrink-0 text-[0.58rem] font-medium uppercase tracking-[0.16em] text-neutral-600">
            Privado
          </span>
        )}
      </div>

      <h3 className="mb-[9px] text-[1.12rem] font-semibold tracking-[-0.01em] text-neutral-50">
        {title}
      </h3>
      <p className="mb-5 text-[0.845rem] font-light leading-[1.7] text-neutral-400">
        {description}
      </p>

      <div className="mt-auto flex flex-wrap gap-[5px]">
        {stack.map((s) => (
          <StackBadge key={s} label={s} />
        ))}
      </div>

      {repo && (
        <div className="mt-5 flex items-center gap-1.5 border-t border-white/[0.07] pt-4 text-[0.72rem] font-medium text-neutral-400 transition-colors duration-250 group-hover:text-neutral-100">
          Ver repositório
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
        </div>
      )}
    </>
  )

  if (repo) {
    return (
      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} — repositório no GitHub`}
        className={`${base} hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.035]`}
      >
        {body}
      </a>
    )
  }

  return <div className={base}>{body}</div>
}
