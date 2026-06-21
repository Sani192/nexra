import { roadmapItems } from "../../lib/site-content";

export function RoadmapSection() {
  return (
    <section id="roadmap" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Roadmap
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          From discovery to a working operating system.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {roadmapItems.map((item) => (
            <article key={item.phase} className="rounded-3xl border border-slate-200 p-6">
              <p className="font-mono text-sm text-slate-400">{item.phase}</p>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
