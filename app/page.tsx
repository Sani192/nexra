import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { WhyExistSection } from "@/components/sections/why-exist-section";
import { HowWeThinkSection } from "@/components/sections/how-we-think-section";
import { WhatWeBuiltSection } from "@/components/sections/what-we-built-section";
import { WhyCareSection } from "@/components/sections/why-care-section";
import { WhatsNextSection } from "@/components/sections/whats-next-section";
import { organizationSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} 
      />
      <Navigation />
      <main id="top" className="relative">
        <HeroSection />
        <WhyExistSection />
        <HowWeThinkSection />
        <WhatWeBuiltSection />
        <WhyCareSection />
        <WhatsNextSection />
      </main>
      <Footer />
    </>
  );
}
