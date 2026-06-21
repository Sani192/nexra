import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { AboutSection } from "@/components/sections/about-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { PrinciplesSection } from "@/components/sections/principles-section";
import { RoadmapSection } from "@/components/sections/roadmap-section";
import { TableBoostSection } from "@/components/sections/tableboost-section";
import { organizationSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <Navigation />
      <main id="top">
        <HeroSection />
        <PhilosophySection />
        <PrinciplesSection />
        <TableBoostSection />
        <RoadmapSection />
        <AboutSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
