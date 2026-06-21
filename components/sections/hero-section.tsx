export function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-24">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
        Nexra
      </p>
      <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
        Practical systems for teams building with AI.
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
        We help organizations turn emerging tools into durable workflows,
        thoughtful products, and measurable operating improvements.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
          href="#about"
        >
          Work with us
        </a>
        <a
          className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-950"
          href="#roadmap"
        >
          See the approach
        </a>
      </div>
    </section>
  );
}
