import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";

const stats = [
  ["MVP-first", "Product thinking"],
  ["Dark-mode", "Premium UI systems"],
  ["Full-stack", "Web apps & tools"],
];

export function Hero() {
  return (
    <section id="home" className="relative pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(117,177,131,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(117,177,131,0.08)_1px,transparent_1px)] bg-[size:52px_52px] opacity-35" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[#75b183]/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:min-h-[calc(86svh-7rem)] lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-[#75b183]/30 bg-[#75b183]/10 px-3 py-2 text-sm text-[#bce4c4]">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Practical software for real-world teams
          </div>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Building digital tools, web apps & MVPs that actually work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            FlegarTech creates modern web platforms, dashboards and custom software for real-world
            use.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#75b183] to-[#9dd8a8] px-5 text-sm font-semibold text-[#061008] transition hover:brightness-110"
            >
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-[#75b183]/60 hover:bg-[#75b183]/10"
            >
              Contact Me
              <Mail className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[31rem]">
          <div className="absolute inset-6 rounded-full bg-[#75b183]/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur">
            <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <Image
                src="/logo.png"
                alt="FlegarTech logo"
                width={360}
                height={86}
                preload
                className="h-auto w-full max-w-xs"
                style={{ height: "auto" }}
              />
              <div className="rounded-md border border-[#75b183]/30 bg-[#75b183]/10 px-3 py-2 text-sm text-[#bce4c4]">
                MVP ready
              </div>
            </div>
            <div className="hidden space-y-4 sm:block">
              {stats.map(([label, value]) => (
                <div key={label} className="rounded-md border border-white/10 bg-[#050705]/70 p-4">
                  <p className="text-2xl font-semibold text-white">{label}</p>
                  <p className="mt-1 text-sm text-zinc-400">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
