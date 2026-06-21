import { MotionSection } from "@/components/motion-section";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-surface px-6 py-24" aria-labelledby="philosophy-title">
      <MotionSection>
        <div className="mx-auto max-w-5xl text-center">
          <h2 id="philosophy-title" className="heading text-4xl md:text-6xl">Software should help people. Not slow them down.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">Nexra AI builds tools that respect the pace of real businesses: fast to learn, dependable under pressure, and refined enough to disappear into the work.</p>
        </div>
      </MotionSection>
    </section>
  );
}
