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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nexra AI and TableBoost product preview" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexra AI | Building Better Business Software",
    description: "Simple, practical, intelligent business software from Nexra AI.",
    images: ["/og-image.png"],
    creator: "@nexraai",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <a className="skip-link" href="#top">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
