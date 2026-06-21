import { Button } from "@/components/ui/button";
import { socials } from "@/lib/site-content";

export function FinalCtaSection() {
  return (
    <section className="px-6 py-24 text-center" aria-labelledby="cta-title">
      <h2 id="cta-title" className="heading text-4xl md:text-6xl">Build with Nexra AI.</h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">Follow the company, ask about TableBoost, or start a conversation about practical software for your business.</p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        {socials.map(({ href, label, icon: Icon, external }) => (
          <Button key={label} asChild variant={label === "Email" ? "default" : "secondary"}>
            <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
              <Icon className="size-4" aria-hidden="true" />{label}
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
}
