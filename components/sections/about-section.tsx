import { aboutItems } from "@/lib/site-content";

export function AboutSection() {
  return (
    <section id="about" className="bg-[#0B1120] px-6 py-24 text-white" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <h2 id="about-title" className="heading text-4xl md:text-5xl">About Nexra AI</h2>
        {aboutItems.map((item) => (
          <article key={item.title}>
            <h3 className="heading text-2xl text-cyan-100">{item.title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
