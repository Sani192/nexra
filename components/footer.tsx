import { footerLinks } from "../lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Nexra. All rights reserved.</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <a key={link.href} className="hover:text-slate-950" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
