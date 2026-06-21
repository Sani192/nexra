import { Sparkles } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { principles } from "@/lib/site-content";

export function PrinciplesSection() {
  return (
    <section id="principles" className="px-6 py-24" aria-labelledby="principles-title">
      <div className="mx-auto max-w-7xl">
        <h2 id="principles-title" className="heading text-4xl md:text-5xl">Principles</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {principles.map((principle) => (
            <MotionSection key={principle.title}>
              <article className="h-full rounded-3xl border border-border bg-white p-7 shadow-sm">
                <Sparkles className="mb-8 size-6 text-primary" aria-hidden="true" />
                <h3 className="heading text-2xl">{principle.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{principle.description}</p>
              </article>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
