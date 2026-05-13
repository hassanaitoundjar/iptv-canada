import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Devices } from "@/components/sections/Devices";
import { Steps } from "@/components/sections/Steps";
import { FAQ } from "@/components/sections/FAQ";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Sports } from "@/components/sections/Sports";
import { Testimonials } from "@/components/sections/Testimonials";
import { Reseller } from "@/components/sections/Reseller";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Canada — #1 Best IPTV Subscription Service 2025",
  description: "Experience premium IPTV in Canada with 25,000+ live channels, 120,000+ VODs, and 4K quality. Fast activation, local support, and no contracts.",
  keywords: ["best IPTV Canada", "IPTV Smarters Canada", "IPTV subscription", "4K IPTV", "IPTV reseller", "Canadian IPTV service"],
  alternates: {
    canonical: "https://yourdomain.ca",
  },
};

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "IPTV Canada",
    "url": "https://yourdomain.ca",
    "description": "Premium IPTV service provider in Canada.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://yourdomain.ca/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IPTV Canada",
    "url": "https://yourdomain.ca",
    "logo": "https://yourdomain.ca/logo.png",
    "sameAs": [
      "https://facebook.com/iptvcanada",
      "https://twitter.com/iptvcanada"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Hero />
      <Sports />
      <Devices />
      <ComparisonSection />
      <Steps />
      <WhyChoose />
      <Testimonials />
      <Pricing />
      <Reseller />
      <FAQ />
    </>
  );
}
