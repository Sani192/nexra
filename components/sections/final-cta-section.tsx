export function FinalCtaSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-slate-950 px-8 py-16 text-center text-white md:px-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Ready to turn AI exploration into dependable workflows?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
          Start with a focused conversation about the systems, teams, and
          decisions where better tooling could create leverage.
        </p>
        <a
          className="mt-10 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          href="mailto:hello@nexra.example"
        >
          Contact Nexra
        </a>
      </div>
    </section>
  );
}
