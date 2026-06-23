"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { contactEmail } from "@/lib/site-content";

type NavLink = { 
  href: string; 
  label: string; 
};

const primaryLinks = [
  { href: "/#products", label: "Products" },
  { href: "/#about", label: "About" },
  { href: "/#roadmap", label: "Roadmap" },
  { href: "/#faq", label: "FAQ" },
] satisfies NavLink[];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-8">
      <nav 
        className={cn(
          "w-full max-w-4xl rounded-full border px-4 md:px-6 py-2 flex items-center justify-between transition-all duration-300",
          isScrolled || isOpen
            ? "bg-white/80 border-[#E5E7EB] shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-md" 
            : "bg-white/60 border-[#E5E7EB]/60 shadow-[0_4px_20px_rgba(0,0,0,0.01)] backdrop-blur-sm"
        )}
        aria-label="Primary navigation"
      >
        {/* Left: Logo */}
        <Link href="/#top" aria-label="Nexra home" onClick={() => setIsOpen(false)} className="pl-1">
          <Logo />
        </Link>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {primaryLinks.map(({ href, label }) => (
            <Link 
              key={label}
              href={href}
              className="text-xs font-semibold text-[#475569] hover:text-[#0B1120] px-4 py-1.5 rounded-full transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right: Desktop CTA Button */}
        <div className="hidden md:block">
          <Button asChild size="default" className="h-9 px-4 text-xs font-semibold shadow-none text-[#FFFFFF]">
            <a href={`mailto:${contactEmail}?subject=Learn%20more%20about%20TableBoost`} className="text-[#FFFFFF]">
              Request Demo
            </a>
          </Button>
        </div>

        {/* Mobile Hamburg Toggle */}
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#475569] hover:bg-[#FAFAFA] focus:outline-none md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="size-4" aria-hidden={true} /> : <Menu className="size-4" aria-hidden={true} />}
        </button>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, scale: 0.98, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-x-4 top-full mt-3 z-50 rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-xl md:hidden"
            >
              <div className="flex flex-col gap-4">
                <div className="space-y-1">
                  <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Navigation</p>
                  {primaryLinks.map(({ href, label }) => (
                    <Link
                      key={label}
                      className="block rounded-2xl px-3 py-2.5 font-semibold text-[#0B1120] hover:bg-[#FAFAFA] transition-colors"
                      href={href}
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>

                <div className="h-px bg-[#E5E7EB]" aria-hidden={true} />

                <Button asChild size="default" className="w-full h-10 font-semibold shadow-none text-[#FFFFFF]">
                  <a href={`mailto:${contactEmail}?subject=Learn%20more%20about%20TableBoost`} onClick={() => setIsOpen(false)} className="text-[#FFFFFF]">
                    Request Demo
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
