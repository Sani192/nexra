import { AboutSection } from "../components/sections/about-section";
import { FinalCtaSection } from "../components/sections/final-cta-section";
import { HeroSection } from "../components/sections/hero-section";
import { PhilosophySection } from "../components/sections/philosophy-section";
import { PrinciplesSection } from "../components/sections/principles-section";
import { RoadmapSection } from "../components/sections/roadmap-section";
import { TableBoostSection } from "../components/sections/tableboost-section";
import { Footer } from "../components/footer";

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexra",
  description:
    "Nexra helps organizations turn AI tools into durable workflows, thoughtful products, and measurable operating improvements.",
  url: "https://nexra.example",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <main>
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
