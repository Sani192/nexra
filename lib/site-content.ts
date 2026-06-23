import { Facebook, Instagram, Mail, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Product } from "@/types/product";

export type Principle = { title: string; description: string };
export type SocialLink = { href: string; label: string; icon: LucideIcon; external?: boolean };
export type AboutItem = { title: string; description: string };

export const siteUrl = "https://nexra.ai";
export const contactEmail = "nexra.dev@gmail.com";

export const principles = [
  { title: "Simple", description: "Software should feel invisible." },
  { title: "Practical", description: "Real problems. Real solutions." },
  { title: "Intelligent", description: "Technology that quietly works in the background." },
  { title: "Growth", description: "Built for businesses that want to grow." },
] satisfies Principle[];

export const products = [
  { name: "TableBoost", status: "Current", description: "Restaurant reservation, waitlist, and floor management built for focused service." },
  { name: "Society-Agent", status: "Coming Soon", description: "A business assistant for organizing customer communication and daily follow-up." },
  { name: "RiseRoot", status: "Coming Soon", description: "Tools for local brands to turn operations, content, and customer insight into durable growth." },
] satisfies Product[];

export const tableBoostBenefits = [
  "More guests.",
  "More repeat visits.",
  "More revenue.",
] as const;

export const socials = [
  { href: "https://instagram.com/nexra.dev.ai", label: "Instagram", icon: Instagram, external: true },
  { href: "https://x.com/nexra_dev_ai", label: "X", icon: X, external: true },
  { href: "https://facebook.com/nexra", label: "Facebook", icon: Facebook, external: true },
  { href: `mailto:${contactEmail}`, label: "Email", icon: Mail },
] satisfies SocialLink[];

export const aboutItems = [
  { title: "Mission", description: "Build better business software that makes everyday work clearer, faster, and more resilient." },
  { title: "Vision", description: "A portfolio of focused products that help independent businesses operate with the confidence of larger teams." },
  { title: "Brand philosophy", description: "Premium does not need to be loud. Nexra favors useful design, strong fundamentals, and measured intelligence." },
] satisfies AboutItem[];

export const footerLinks = [
  { label: "Products", href: "/#products" },
  { label: "About", href: "/#about" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;
