import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = { title: "Terms of Use", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main id="top" className="px-6 py-20">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold text-primary">Legal</p>
          <h1 className="heading mt-4 text-5xl">Terms of Use</h1>
          <p className="mt-6 leading-8 text-slate-600">By using the Nexra AI website, you agree to use it only for lawful purposes and in a way that does not disrupt the site, compromise security, or misrepresent your relationship with Nexra AI.</p>
          <h2 className="heading mt-10 text-3xl">Product information</h2>
          <p className="mt-4 leading-8 text-slate-600">Website content is provided for general product and company information. Product availability, capabilities, and timelines may change as Nexra AI improves its software.</p>
          <h2 className="heading mt-10 text-3xl">Intellectual property</h2>
          <p className="mt-4 leading-8 text-slate-600">Nexra AI owns or licenses the content, branding, and interface materials on this website. Do not copy or reuse them without permission.</p>
          <h2 className="heading mt-10 text-3xl">Contact</h2>
          <p className="mt-4 leading-8 text-slate-600">For terms questions, contact <a className="font-semibold text-primary" href="mailto:hello@nexra.ai">hello@nexra.ai</a>.</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
