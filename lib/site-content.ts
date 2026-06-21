import { Facebook, Instagram, Mail, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Product } from "@/types/product";

export type Principle = { title: string; description: string };
export type SocialLink = { href: string; label: string; icon: LucideIcon; external?: boolean };
export type AboutItem = { title: string; description: string };

export const siteUrl = "https://nexra.ai";
export const contactEmail = "hello@nexra.ai";

export const principles = [
  { title: "Simple", description: "Clear workflows, calm interfaces, and fewer clicks between intent and outcome." },
  { title: "Practical", description: "Products shaped around real operational work, not novelty for its own sake." },
  { title: "Intelligent", description: "Automation that supports decisions while keeping teams in control." },
  { title: "Growth", description: "Systems designed to compound: better data, smoother service, stronger businesses." },
] satisfies Principle[];

export const products = [
  { name: "TableBoost", status: "Live", description: "Restaurant reservation, waitlist, and floor management built for focused service." },
  { name: "Society-Agent", status: "In development", description: "A business assistant for organizing customer communication and daily follow-up." },
  { name: "RiseRoot", status: "Research", description: "Tools for local brands to turn operations, content, and customer insight into durable growth." },
] satisfies Product[];

export const tableBoostBenefits = [
  "See reservations, tables, and waitlist status in one place.",
  "Coordinate front-of-house decisions from desktop or mobile.",
  "Give managers a calmer view of the shift without burying details.",
] as const;

export const socials = [
  { href: "https://instagram.com/nexraai", label: "Instagram", icon: Instagram, external: true },
  { href: "https://x.com/nexraai", label: "X", icon: X, external: true },
  { href: "https://facebook.com/nexraai", label: "Facebook", icon: Facebook, external: true },
  { href: `mailto:${contactEmail}`, label: "Email", icon: Mail },
] satisfies SocialLink[];

export const aboutItems = [
  { title: "Mission", description: "Build better business software that makes everyday work clearer, faster, and more resilient." },
  { title: "Vision", description: "A portfolio of focused products that help independent businesses operate with the confidence of larger teams." },
  { title: "Brand philosophy", description: "Premium does not need to be loud. Nexra AI favors useful design, strong fundamentals, and measured intelligence." },
] satisfies AboutItem[];

export const footerLinks = [
  { label: "Products", href: "/#products" },
  { label: "About", href: "/#about" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;
