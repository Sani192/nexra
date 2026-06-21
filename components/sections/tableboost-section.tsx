import { tableBoostFeatures } from "../../lib/site-content";

export function TableBoostSection() {
  return (
    <section id="tableboost" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
            TableBoost
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Cleaner table work without losing the audit trail.
          </h2>
        </div>
        <div className="rounded-3xl bg-white/10 p-8 ring-1 ring-white/15">
          <p className="leading-8 text-slate-200">
            TableBoost is our focused workflow concept for teams that spend too
            much time cleaning, reshaping, and validating operational data.
          </p>
          <ul className="mt-8 space-y-4">
            {tableBoostFeatures.map((feature) => (
              <li key={feature} className="flex gap-3 text-slate-100">
                <span aria-hidden="true">→</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
