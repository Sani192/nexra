"use client";

import { Menu, X } from "lucide-react";
import { useState, type ComponentType } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { socials } from "@/lib/site-content";

type NavLink = { href: string; label: string; icon?: ComponentType<{ className?: string; "aria-hidden"?: boolean }>; external?: boolean };

const primaryLinks = [
  { href: "/#products", label: "Products" },
  { href: "/#about", label: "About" },
] satisfies NavLink[];

const links: NavLink[] = [...primaryLinks, ...socials];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Primary navigation">
        <a href="/#top" aria-label="Nexra AI home" onClick={() => setIsOpen(false)}>
          <Logo />
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label, icon: Icon, external }) => (
            <Button key={label} asChild variant="ghost" size="default">
              <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
                {Icon ? <Icon className="size-4" aria-hidden="true" /> : null}
                {label}
              </a>
            </Button>
          ))}
        </div>
        <button
          type="button"
          className="rounded-full border border-border p-3 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
        {isOpen ? (
          <div id="mobile-menu" className="absolute inset-x-4 top-20 rounded-3xl border border-border bg-white p-4 shadow-xl md:hidden">
            {links.map(({ href, label, external }) => (
              <a
                key={label}
                className="block rounded-2xl px-4 py-3 font-semibold hover:bg-surface"
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  );
}
