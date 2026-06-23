import { Logo } from "@/components/logo";
import Link from "next/link";
import { socials } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#FAFAFA] px-6 py-16 md:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl relative z-10">
        <div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Logo and Tagline Column */}
          <div className="md:col-span-2 space-y-5">
            <Link href="/#top" aria-label="Nexra home" className="inline-block hover:opacity-90 transition-opacity">
              <Logo />
            </Link>
            <p className="text-xs md:text-sm text-[#475569] max-w-xs leading-relaxed font-normal">
              Intelligence that moves business forward. We build focused, practical software that helps independent businesses automate operations and grow with confidence.
            </p>
          </div>

          {/* Products Column */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Products</h4>
            <ul className="space-y-3 text-xs font-semibold text-[#475569]">
              <li>
                <Link href="/#products" className="hover:text-[#0B1120] transition-colors">TableBoost</Link>
              </li>
              <li>
                <span className="text-[#64748B] cursor-default flex items-center gap-1.5 font-normal">
                  Society-Agent
                  <span className="text-[9px] bg-white border border-[#E5E7EB] text-[#64748B] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-bold">Soon</span>
                </span>
              </li>
              <li>
                <span className="text-[#64748B] cursor-default flex items-center gap-1.5 font-normal">
                  RiseRoot
                  <span className="text-[9px] bg-white border border-[#E5E7EB] text-[#64748B] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-bold">Soon</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Company</h4>
            <ul className="space-y-3 text-xs font-semibold text-[#475569]">
              <li>
                <Link href="/#about" className="hover:text-[#0B1120] transition-colors">Philosophy</Link>
              </li>
              <li>
                <Link href="/#roadmap" className="hover:text-[#0B1120] transition-colors">Roadmap</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#0B1120] transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Connect & Legal Columns */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Connect</h4>
              <ul className="space-y-3 text-xs font-semibold text-[#475569]">
                {socials.map(({ href, label, icon: Icon, external }) => (
                  <li key={label}>
                    <a 
                      href={href} 
                      className="inline-flex items-center gap-2 hover:text-[#0B1120] transition-colors group"
                      target={external ? "_blank" : undefined} 
                      rel={external ? "noreferrer" : undefined}
                    >
                      <Icon className="size-3.5 text-[#64748B] group-hover:text-[#0B1120] transition-colors" aria-hidden={true} />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Legal</h4>
              <ul className="space-y-3 text-xs font-semibold text-[#475569]">
                <li>
                  <Link href="/privacy" className="hover:text-[#0B1120] transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#0B1120] transition-colors">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="mt-12 pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748B] font-normal" suppressHydrationWarning>
            © {new Date().getFullYear()} Nexra. All rights reserved.
          </p>
          <p className="text-xs text-[#64748B] font-normal">
            Designed with restraint.
          </p>
        </div>
      </div>
    </footer>
  );
}
