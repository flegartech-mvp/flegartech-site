import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FolderGit } from "lucide-react";
import type { Project } from "@/data/projects";

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#080b09]">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-15`} />
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes="(min-width: 1024px) 50vw, (min-width: 640px) 90vw, 100vw"
        className="object-contain p-3"
      />
      <span className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-md border border-white/10 bg-black/45 px-2.5 py-1 text-xs text-zinc-200 backdrop-blur">
        {project.metric}
        <span className="h-2 w-2 rounded-full bg-[#75b183] shadow-[0_0_18px_rgba(117,177,131,0.9)]" />
      </span>
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
