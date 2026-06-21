import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", weight: ["800"], display: "swap" });

const siteUrl = "https://nexra.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Nexra AI | Building Better Business Software", template: "%s | Nexra AI" },
  description: "Nexra AI builds simple, practical, intelligent business software, starting with TableBoost for restaurant operations.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nexra AI | Building Better Business Software",
    description: "Minimal, practical software products for growing businesses.",
    url: siteUrl,
    siteName: "Nexra AI",
    images: [{ url: "/og-image.svg", width: 1440, height: 920, alt: "TableBoost dashboard by Nexra AI" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexra AI | Building Better Business Software",
    description: "Simple, practical, intelligent business software from Nexra AI.",
    images: ["/og-image.svg"],
    creator: "@nexraai",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${manrope.variable}`}><body>{children}</body></html>;
}
