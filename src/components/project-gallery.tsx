"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ProjectScreenshot } from "@/data/projects";

export function ProjectGallery({ screenshots }: { screenshots: ProjectScreenshot[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : screenshots[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index === null ? index : (index + screenshots.length - 1) % screenshots.length));
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index === null ? index : (index + 1) % screenshots.length));
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, screenshots.length]);

  if (screenshots.length === 0) return null;

  function previous() {
    setActiveIndex((index) => (index === null ? index : (index + screenshots.length - 1) % screenshots.length));
  }

  function next() {
    setActiveIndex((index) => (index === null ? index : (index + 1) % screenshots.length));
  }

  return (
    <section className="mt-14">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#75b183]">
            Screenshots
          </h2>
          <p className="mt-2 text-sm text-zinc-500">{screenshots.length} selected views</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {screenshots.map((screenshot, index) => {
          const isMobile = screenshot.height > screenshot.width * 1.4;

          return (
            <button
              key={screenshot.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] text-left shadow-2xl shadow-black/20 transition hover:-translate-y-0.5 hover:border-[#75b183]/45 ${
                isMobile ? "sm:max-w-sm" : ""
              }`}
            >
              <span
                className={`relative block overflow-hidden bg-[#020302] ${
                  isMobile ? "aspect-[9/16]" : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  sizes={isMobile ? "(max-width: 640px) 100vw, 24rem" : "(max-width: 640px) 100vw, 50vw"}
                  className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                />
              </span>
              <span className="block border-t border-white/10 px-4 py-3 text-sm font-medium text-zinc-200">
                {screenshot.caption}
              </span>
            </button>
          );
        })}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[80] grid place-items-center bg-black/88 p-3 backdrop-blur sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <div className="relative flex max-h-full w-full max-w-7xl flex-col overflow-hidden rounded-lg border border-white/15 bg-[#050705] shadow-2xl">
            <div className="flex h-14 items-center justify-between border-b border-white/10 px-4">
              <p className="min-w-0 truncate text-sm font-medium text-zinc-200">{active.caption}</p>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Close screenshot"
                title="Close screenshot"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-white/10 text-zinc-300 transition hover:border-[#75b183]/60 hover:text-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="relative grid min-h-0 flex-1 place-items-center bg-black/35 p-3 sm:p-5">
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="100vw"
                className="max-h-[calc(100vh-8rem)] w-auto max-w-full rounded-sm object-contain"
              />

              {screenshots.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous screenshot"
                    title="Previous screenshot"
                    className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-md border border-white/15 bg-black/55 text-white transition hover:border-[#75b183]/70 hover:bg-black/75"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next screenshot"
                    title="Next screenshot"
                    className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-md border border-white/15 bg-black/55 text-white transition hover:border-[#75b183]/70 hover:bg-black/75"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
