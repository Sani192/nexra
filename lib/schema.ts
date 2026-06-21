import { contactEmail, products, siteUrl, socials } from "@/lib/site-content";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Nexra AI",
        url: siteUrl,
        email: contactEmail,
        sameAs: socials.filter((social) => social.external).map((social) => social.href),
      },
      ...products.map((product) => ({
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#${product.name.toLowerCase().replaceAll(" ", "-")}`,
        name: product.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: product.description,
        publisher: { "@id": `${siteUrl}/#organization` },
      })),
    ],
  };
}
