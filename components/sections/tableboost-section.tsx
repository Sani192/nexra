import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/motion-section";
import { tableBoostBenefits } from "@/lib/site-content";

export function TableBoostSection() {
  return (
    <section id="products" className="bg-surface px-6 py-24" aria-labelledby="featured-title">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <MotionSection>
          <h2 id="featured-title" className="heading text-4xl md:text-5xl">TableBoost keeps service moving.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">A restaurant operations product for reservations, waitlists, floor visibility, and guest flow, presented in a clean workspace teams can trust during a rush.</p>
          <ul className="mt-8 space-y-4">
            {tableBoostBenefits.map((item) => (
              <li className="flex gap-3" key={item}>
                <Check className="mt-1 size-5 text-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild><a href="mailto:hello@nexra.ai?subject=TableBoost%20demo%20request">Request TableBoost demo</a></Button>
            <Button asChild variant="secondary"><a href="mailto:hello@nexra.ai?subject=TableBoost%20waitlist">Join the waitlist</a></Button>
          </div>
        </MotionSection>
        <Image className="rounded-3xl border border-border bg-white shadow-xl" src="/tableboost-desktop.svg" alt="Detailed TableBoost desktop product interface with reservations, floor status, and next-up queue" width={1440} height={920} />
      </div>
    </section>
  );
}
