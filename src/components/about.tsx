export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#75b183]">
            About
          </p>
          <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">
            A focused freelance studio for serious web products.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-zinc-300">
          <p>
            FlegarTech is built around modern web apps, fast MVP development and practical software
            solutions. The work is direct: understand the product, build the core workflow, keep the
            UI clean and ship something people can actually use.
          </p>
          <p>
            The best projects combine product thinking with strong execution: typed code, clear data
            models, smooth interfaces and deployment choices that fit the stage of the business.
          </p>
        </div>
      </div>
    </section>
  );
}
