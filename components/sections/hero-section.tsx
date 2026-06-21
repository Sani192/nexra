import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/motion-section";

export function HeroSection() {
  return (
    <section className="overflow-hidden px-6 py-16 md:py-24 lg:py-28" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <MotionSection>
          <p className="mb-5 inline-flex rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-primary">
            Nexra AI software company
          </p>
          <h1 id="hero-title" className="heading max-w-3xl text-[clamp(3.25rem,13vw,5.75rem)] leading-[0.96] md:text-8xl">
            Building Better Business Software.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            We design focused products that help teams run cleaner operations, serve customers better, and grow without adding complexity.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg"><a href="#products">Explore products <ArrowRight className="size-4" aria-hidden="true" /></a></Button>
            <Button asChild variant="secondary" size="lg"><a href="mailto:hello@nexra.ai">Contact Nexra AI</a></Button>
          </div>
        </MotionSection>
        <div className="relative mx-auto w-full max-w-3xl pb-14 md:pb-20">
          <Image className="rounded-3xl border border-border bg-white shadow-2xl" src="/tableboost-desktop.svg" alt="TableBoost desktop interface showing reservations, table status, waitlist, and shift notes" width={1440} height={920} priority />
          <Image className="absolute bottom-0 right-2 w-36 rounded-3xl shadow-2xl sm:w-44 md:w-56" src="/tableboost-mobile.svg" alt="TableBoost mobile interface showing today’s waitlist and ready table updates" width={520} height={1040} />
        </div>
      </div>
    </section>
  );
}
