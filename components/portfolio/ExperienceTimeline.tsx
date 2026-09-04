import { Badge } from "@/components/ui/badge"
import type { ExperienceJobTranslation } from "@/lib/i18n/translations"

interface ExperienceTimelineProps {
  jobs: ExperienceJobTranslation[]
}

/** One continuous career timeline instead of two separate grids — featured
 *  roles expand with bullets and tech, earlier ones condense to a single
 *  line. The spine fills the section top to bottom instead of leaving the
 *  "earlier experience" grid to trail off with ragged card heights. */
export function ExperienceTimeline({ jobs }: ExperienceTimelineProps) {
  return (
    <div className="relative pl-8 max-[600px]:pl-6">
      <div className="absolute bottom-1 left-[3px] top-1 w-px bg-white/10" />
      {jobs.map((job, i) => (
        <div
          key={`${job.company}-${job.role}`}
          className={`relative ${i < jobs.length - 1 ? "pb-9 max-[600px]:pb-7" : ""}`}
        >
          <span
            className={`absolute -left-8 top-[7px] h-[9px] w-[9px] rounded-full ring-[6px] ring-[#0a0a0a] max-[600px]:-left-6 ${
              job.featured ? "bg-neutral-50" : "bg-neutral-600"
            }`}
          />
          {job.featured ? (
            <>
              <h3 className="text-[0.98rem] font-semibold tracking-[-0.01em] text-neutral-50">
                {job.role}
              </h3>
              <div className="mb-4 mt-1 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-neutral-500">
                {job.company}
              </div>
              <ul className="mb-4 flex flex-col gap-[7px]">
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative pl-[16px] text-[0.82rem] font-light leading-[1.7] text-neutral-400"
                  >
                    <span className="absolute left-0 top-0 text-neutral-600">–</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-[6px]">
                {job.tech.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="h-auto rounded-full border border-white/10 bg-white/[0.03] px-[9px] py-[2px] text-[0.65rem] font-normal text-neutral-400"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-wrap items-baseline gap-x-2 pt-[3px]">
              <span className="text-[0.87rem] font-medium text-neutral-200">{job.role}</span>
              <span className="text-[0.72rem] uppercase tracking-[0.12em] text-neutral-500">
                {job.company}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
