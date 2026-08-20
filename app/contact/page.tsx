import { ContactHero } from "@/components/sections/ContactHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactFAQ } from "@/components/sections/ContactFAQ";
import type { Metadata } from "next";
import { safeJsonLd } from "@/lib/safe-json-ld";
import { getBreadcrumbSchema } from "@/lib/schemas";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us | IPTV Canada Support",
  description: "Get in touch with IPTV Canada. Our 24/7 Canadian support team is here to help with installation, troubleshooting, and account inquiries.",
  keywords: ["IPTV Canada support", "contact IPTV", "IPTV customer service Canada", "IPTV technical support"],
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact IPTV Canada",
    "description": "24/7 customer support for IPTV users in Canada.",
    "mainEntity": {
      "@type": "Organization",
      "name": "IPTV Canada",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "support@iptvsmartproviders.com",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    }
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Contact", url: `${siteConfig.url}/contact` }
  ]);

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <ContactHero />
      <ContactForm />
      <ContactFAQ />
    </main>
  );
}
