import { Facebook, Instagram, Mail, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "https://instagram.com/nexraai", label: "Instagram", icon: Instagram },
  { href: "https://x.com/nexraai", label: "X", icon: X },
  { href: "https://facebook.com/nexraai", label: "Facebook", icon: Facebook },
  { href: "mailto:hello@nexra.ai", label: "Email", icon: Mail },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Primary navigation">
        <a href="#top"><Logo /></a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label, icon: Icon }) => (
            <Button key={label} asChild variant="ghost" size="default">
              <a href={href} aria-label={label}>{Icon ? <Icon className="size-4" aria-hidden="true" /> : null}{label}</a>
            </Button>
          ))}
        </div>
        <details className="group md:hidden">
          <summary className="list-none rounded-full border border-border p-3 marker:hidden" aria-label="Open menu"><Menu className="size-5" /></summary>
          <div className="absolute inset-x-4 top-20 rounded-3xl border border-border bg-white p-4 shadow-xl">
            {links.map(({ href, label }) => <a key={label} className="block rounded-2xl px-4 py-3 font-semibold hover:bg-surface" href={href}>{label}</a>)}
          </div>
        </details>
      </nav>
    </header>
  );
}
