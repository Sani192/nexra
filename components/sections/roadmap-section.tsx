import { products } from "@/lib/site-content";

export function RoadmapSection() {
  return (
    <section id="roadmap" className="px-6 py-24" aria-labelledby="roadmap-title">
      <div className="mx-auto max-w-7xl">
        <h2 id="roadmap-title" className="heading text-4xl md:text-5xl">Product roadmap</h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-600">Availability reflects current product status and may evolve as each product moves through validation and release.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="rounded-3xl border border-border p-7">
              <p className="text-sm font-bold text-primary">{product.status}</p>
              <h3 className="heading mt-4 text-3xl">{product.name}</h3>
              <p className="mt-4 leading-7 text-slate-600">{product.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
