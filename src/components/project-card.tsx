import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Braces, Check, FolderGit } from "lucide-react";
import type { Project } from "@/data/projects";

function ProjectVisual({ project }: { project: Project }) {
  const screenshot = project.screenshots[0];

  return (
    <div className="relative h-64 overflow-hidden border-b border-white/10 bg-[#080b09]">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20`} />
      <div className="absolute inset-x-5 top-5 flex items-center justify-between rounded-md border border-white/10 bg-black/35 px-3 py-2 text-xs text-zinc-300 backdrop-blur">
        <span>{project.metric}</span>
        <span className="h-2 w-2 rounded-full bg-[#75b183] shadow-[0_0_18px_rgba(117,177,131,0.9)]" />
      </div>

      {screenshot ? (
        <div className="absolute inset-x-4 bottom-4 top-16 rounded-md border border-white/15 bg-[#050705]/80 p-2 shadow-2xl shadow-black/50 backdrop-blur">
          <div className="mb-2 flex h-5 items-center gap-1.5 px-1">
            <span className="h-2 w-2 rounded-full bg-red-400/80" />
            <span className="h-2 w-2 rounded-full bg-yellow-300/80" />
            <span className="h-2 w-2 rounded-full bg-[#75b183]/80" />
            <span className="ml-2 h-1.5 flex-1 rounded-full bg-white/10" />
          </div>
          <div className="relative h-[calc(100%-1.75rem)] overflow-hidden rounded-sm bg-[#030403]">
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      ) : (
        <div className="absolute inset-x-5 bottom-5 rounded-md border border-white/10 bg-[#050705]/75 p-4 shadow-2xl backdrop-blur">
          <div className="mb-4 h-2 w-24 rounded-full bg-white/15" />
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 space-y-2">
              <div className="h-3 rounded-full bg-[#75b183]/70" />
              <div className="h-3 w-3/4 rounded-full bg-white/15" />
              <div className="h-3 w-1/2 rounded-full bg-white/10" />
            </div>
            <div className="grid place-items-center rounded-md border border-[#75b183]/25 bg-[#75b183]/10">
              <Braces className="h-8 w-8 text-[#75b183]" aria-hidden="true" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CapabilityList({ project }: { project: Project }) {
  return (
    <ul className="mt-5 grid gap-2 text-sm leading-5 text-zinc-300">
      {project.caseStudy.highlights.slice(0, 3).map((highlight) => (
        <li key={highlight} className="flex items-start gap-2">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#75b183]" aria-hidden="true" />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  );
}

function ScreenshotMeta({ project }: { project: Project }) {
  if (project.screenshots.length === 0) return null;

  return (
    <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-500">
      {project.screenshots.slice(0, 3).map((screenshot) => (
        <span key={screenshot.src} className="rounded-md border border-white/10 px-2 py-1">
          {screenshot.caption}
        </span>
      ))}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="reveal overflow-hidden rounded-lg border border-white/10 bg-[#050705] shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-[#75b183]/45">
      <ProjectVisual project={project} />
      <div className="p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
          <span className="rounded-md border border-[#75b183]/30 bg-[#75b183]/10 px-3 py-1 text-xs font-semibold text-[#bce4c4]">
            {project.status}
          </span>
        </div>
        <p className="text-sm leading-6 text-zinc-400">{project.description}</p>
        <CapabilityList project={project} />
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
        <ScreenshotMeta project={project} />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-[#75b183] px-3 text-sm font-semibold text-[#061008] transition hover:bg-[#8ac897]"
          >
            Case Study
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-white/8 px-3 text-sm font-semibold text-white transition hover:bg-white/12"
            >
              Demo
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-white/15 px-3 text-sm font-semibold text-white transition hover:border-[#75b183]/60 hover:bg-[#75b183]/10"
          >
            <FolderGit className="h-4 w-4" aria-hidden="true" />
            GitHub
            <span className="sr-only">: {project.name} (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
