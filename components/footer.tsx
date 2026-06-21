import { Logo } from "@/components/logo";
import { footerLinks, socials } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <a href="/#top" aria-label="Nexra AI home"><Logo /></a>
        <nav className="flex flex-wrap gap-5 text-sm font-semibold" aria-label="Footer navigation">
          {footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <nav className="flex flex-wrap gap-3" aria-label="Social links">
          {socials.map(({ href, label, icon: Icon, external }) => (
            <a key={label} href={href} aria-label={label} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
              <Icon className="size-4" aria-hidden="true" />
            </a>
          ))}
        </nav>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Nexra AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
