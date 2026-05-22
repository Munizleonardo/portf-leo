import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { StackBadge } from "./StackBadge"

type TechType =
  | "html" | "css"  | "js"   | "ts"   | "next"
  | "node" | "supa" | "verc" | "api"  | "resp" | "dr"

interface Tech {
  readonly label: string
  readonly type: TechType
}

interface ProjectCardProps {
  emoji: string
  gradient: string
  category: string
  title: string
  description: string
  stack: readonly Tech[]
  type: string
  href?: string
  image?: string
  video?: string
}

export function ProjectCard({
  emoji,
  gradient,
  category,
  title,
  description,
  stack,
  type,
  href,
  image,
  video,
}: ProjectCardProps) {
  return (
    <Card className="bg-[#0b1120] border border-sky-400/10 rounded-[16px] overflow-hidden p-0 gap-0 ring-0 relative transition-[transform,box-shadow] duration-[400ms] ease-[cubic-bezier(.22,.68,0,1.2)] hover:translate-y-[-9px] hover:scale-[1.012] hover:shadow-[0_32px_80px_rgba(0,0,0,.5),0_0_60px_rgba(56,189,248,.08)] group">
      {/* Thumbnail */}
      <div
        className="h-[200px] flex items-center justify-center relative overflow-hidden"
        style={{ background: gradient }}
      >
        {video ? (
          <>
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 z-10"
              style={{ background: "linear-gradient(180deg,transparent 45%,#0b1120 100%)" }}
            />
          </>
        ) : image ? (
          <>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 900px) 100vw, 400px"
            />
            <div
              className="absolute inset-0 z-10"
              style={{ background: "linear-gradient(180deg,transparent 45%,#0b1120 100%)" }}
            />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0 z-10"
              style={{ background: "linear-gradient(180deg,transparent 35%,#0b1120 100%)" }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-[10px] z-1">
              <span className="text-5xl">{emoji}</span>
              <p className="font-mono text-[.62rem] text-white/20 tracking-[1.5px] uppercase group-hover:text-sky-400/35 transition-colors duration-300">
                Image coming soon
              </p>
            </div>
          </>
        )}
      </div>

      {/* Body */}
      <CardContent className="p-6">
        <div className="font-mono text-[.68rem] text-sky-400 tracking-[2px] uppercase mb-[7px]">
          {category}
        </div>
        <div className="text-[1.12rem] font-bold text-slate-100 mb-[9px] tracking-[-0.4px]">
          {title}
        </div>
        <p className="text-[.845rem] font-light text-slate-600 leading-[1.75] mb-[18px]">
          {description}
        </p>
        <div className="flex flex-wrap gap-[5px] mb-[18px]">
          {stack.map((tech) => (
            <StackBadge key={tech.label} label={tech.label} type={tech.type} />
          ))}
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="px-6 pb-6 pt-0 bg-transparent border-t border-sky-400/10 rounded-none flex items-center justify-between">
        <span className="font-mono text-[.66rem] text-slate-600">// {type}</span>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[30px] h-[30px] rounded-full bg-sky-400/10 border border-sky-400/22 flex items-center justify-center text-sky-400 text-[.85rem] transition-[background-color,transform,color] duration-250 group-hover:bg-sky-400 group-hover:text-[#030508] group-hover:rotate-45"
          >
            →
          </a>
        ) : (
          <div className="w-[30px] h-[30px] rounded-full bg-sky-400/10 border border-sky-400/22 flex items-center justify-center text-sky-400 text-[.85rem] transition-[background-color,transform,color] duration-250 group-hover:bg-sky-400 group-hover:text-[#030508] group-hover:rotate-45">
            →
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
