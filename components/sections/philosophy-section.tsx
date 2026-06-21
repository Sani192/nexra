import { philosophyItems } from "../../lib/site-content";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Philosophy
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          Technology should make good judgment easier to apply.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {philosophyItems.map((item) => (
            <article key={item.title} className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
