import Image from "next/image";
import { ArrowRight, Check, Facebook, Instagram, Mail, Sparkles, X } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { Navigation } from "@/components/navigation";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";

const principles = [
  ["Simple", "Clear workflows, calm interfaces, and fewer clicks between intent and outcome."],
  ["Practical", "Products shaped around real operational work, not novelty for its own sake."],
  ["Intelligent", "Automation that supports decisions while keeping teams in control."],
  ["Growth", "Systems designed to compound: better data, smoother service, stronger businesses."],
];
const products: Product[] = [
  { name: "TableBoost", status: "Live", description: "Restaurant reservation, waitlist, and floor management built for focused service." },
  { name: "Society-Agent", status: "In development", description: "A business assistant for organizing customer communication and daily follow-up." },
  { name: "RiseRoot", status: "Research", description: "Tools for local brands to turn operations, content, and customer insight into durable growth." },
];
const socials = [
  { href: "https://instagram.com/nexraai", label: "Instagram", icon: Instagram },
  { href: "https://x.com/nexraai", label: "X", icon: X },
  { href: "https://facebook.com/nexraai", label: "Facebook", icon: Facebook },
  { href: "mailto:hello@nexra.ai", label: "Email", icon: Mail },
];

export default function Home() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Organization", name: "Nexra AI", url: "https://nexra.ai", email: "hello@nexra.ai", sameAs: socials.filter((s) => !s.href.startsWith("mailto:")).map((s) => s.href), makesOffer: products.map((p) => ({ "@type": "SoftwareApplication", name: p.name, applicationCategory: "BusinessApplication", description: p.description })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main id="top">
        <section className="min-h-screen overflow-hidden px-6 py-20 md:py-28" aria-labelledby="hero-title">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <MotionSection><p className="mb-5 inline-flex rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-primary">Nexra AI product studio</p><h1 id="hero-title" className="heading max-w-3xl text-6xl leading-[0.92] md:text-8xl">Building Better Business Software.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">We design focused products that help teams run cleaner operations, serve customers better, and grow without adding complexity.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><a href="#products">Explore products <ArrowRight className="size-4" /></a></Button><Button asChild variant="secondary" size="lg"><a href="mailto:hello@nexra.ai">Contact Nexra AI</a></Button></div></MotionSection>
            <div className="relative min-h-[560px]"><Image className="rounded-[2rem] border border-border bg-white shadow-2xl" src="/tableboost-desktop.svg" alt="TableBoost desktop dashboard showing reservations, seated guests, waitlist, and table map" width={1440} height={920} priority /><Image className="absolute -bottom-10 right-0 w-40 rounded-[2rem] shadow-2xl md:w-56" src="/tableboost-mobile.svg" alt="TableBoost mobile waitlist screen showing ready tables and guest parties" width={520} height={1040} priority /></div>
          </div>
        </section>
        <section className="bg-surface px-6 py-24" aria-labelledby="philosophy"><MotionSection><div className="mx-auto max-w-5xl text-center"><h2 id="philosophy" className="heading text-4xl md:text-6xl">Software should help people. Not slow them down.</h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">Nexra AI builds tools that respect the pace of real businesses: fast to learn, dependable under pressure, and refined enough to disappear into the work.</p></div></MotionSection></section>
        <section className="px-6 py-24" aria-labelledby="principles"><div className="mx-auto max-w-7xl"><h2 id="principles" className="heading text-4xl md:text-5xl">Principles</h2><div className="mt-10 grid gap-5 md:grid-cols-4">{principles.map(([title, text]) => <MotionSection key={title}><article className="h-full rounded-3xl border border-border bg-white p-7 shadow-sm"><Sparkles className="mb-8 size-6 text-primary" aria-hidden="true" /><h3 className="heading text-2xl">{title}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p></article></MotionSection>)}</div></div></section>
        <section id="products" className="bg-surface px-6 py-24" aria-labelledby="featured"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2"><MotionSection><h2 id="featured" className="heading text-4xl md:text-5xl">TableBoost keeps service moving.</h2><p className="mt-5 text-lg leading-8 text-slate-600">A restaurant operations product for reservations, waitlists, floor visibility, and guest flow, presented in a clean workspace teams can trust during a rush.</p><ul className="mt-8 space-y-4">{["See reservations, tables, and waitlist status in one place.", "Coordinate front-of-house decisions from desktop or mobile.", "Give managers a calmer view of the shift without burying details."].map((item) => <li className="flex gap-3" key={item}><Check className="mt-1 size-5 text-accent" aria-hidden="true" /><span>{item}</span></li>)}</ul></MotionSection><Image className="rounded-[2rem] border border-border bg-white shadow-xl" src="/tableboost-desktop.svg" alt="Detailed TableBoost desktop product screenshot with table map and next-up queue" width={1440} height={920} /></div></section>
        <section className="px-6 py-24" aria-labelledby="roadmap"><div className="mx-auto max-w-7xl"><h2 id="roadmap" className="heading text-4xl md:text-5xl">Product roadmap</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{products.map((p) => <article key={p.name} className="rounded-3xl border border-border p-7"><p className="text-sm font-bold text-primary">{p.status}</p><h3 className="heading mt-4 text-3xl">{p.name}</h3><p className="mt-4 leading-7 text-slate-600">{p.description}</p></article>)}</div></div></section>
        <section id="about" className="bg-[#0B1120] px-6 py-24 text-white" aria-labelledby="about-title"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3"><h2 id="about-title" className="heading text-4xl md:text-5xl">About Nexra AI</h2>{[["Mission", "Build better business software that makes everyday work clearer, faster, and more resilient."], ["Vision", "A portfolio of focused products that help independent businesses operate with the confidence of larger teams."], ["Brand philosophy", "Premium does not need to be loud. Nexra AI favors useful design, strong fundamentals, and measured intelligence."]].map(([h, t]) => <article key={h}><h3 className="heading text-2xl text-cyan-200">{h}</h3><p className="mt-4 leading-7 text-slate-300">{t}</p></article>)}</div></section>
        <section className="px-6 py-24 text-center" aria-labelledby="cta"><h2 id="cta" className="heading text-4xl md:text-6xl">Build with Nexra AI.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">Follow the studio, ask about TableBoost, or start a conversation about practical software for your business.</p><div className="mt-9 flex flex-wrap justify-center gap-3">{socials.map(({ href, label, icon: Icon }) => <Button key={label} asChild variant={label === "Email" ? "default" : "secondary"}><a href={href}><Icon className="size-4" aria-hidden="true" />{label}</a></Button>)}</div></section>
      </main>
      <footer className="border-t border-border px-6 py-10"><div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between"><Logo /><nav className="flex flex-wrap gap-5 text-sm font-semibold" aria-label="Footer navigation"><a href="#products">Products</a><a href="#about">About</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></nav><p className="text-sm text-slate-500">© {new Date().getFullYear()} Nexra AI. All rights reserved.</p></div></footer>
    </>
  );
}
