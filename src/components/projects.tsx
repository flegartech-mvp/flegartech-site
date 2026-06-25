import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredProjects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-white/10 bg-[#080b09] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work, shown through real product screens."
          description="The strongest FlegarTech projects, ordered by portfolio value and backed by genuine screenshots from the actual builds."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex h-12 items-center gap-2 rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-[#75b183]/60 hover:bg-[#75b183]/10"
          >
            View all projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
