import { principles } from "../../lib/site-content";

export function PrinciplesSection() {
  return (
    <section id="principles" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Principles
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          A small set of rules keeps every engagement grounded.
        </h2>
        <ol className="mt-12 space-y-4">
          {principles.map((principle, index) => (
            <li
              key={principle}
              className="flex gap-5 rounded-2xl border border-slate-200 p-6 text-lg text-slate-700"
            >
              <span className="font-mono text-sm text-slate-400">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <span>{principle}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
