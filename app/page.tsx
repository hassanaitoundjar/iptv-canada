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
import { faqData } from "@/constants/faq";

export const metadata: Metadata = {
  title: "IPTV Canada — #1 Best IPTV Subscription Service 2026",
  description: "Experience premium IPTV in Canada with 25,000+ live channels, 120,000+ VODs, and 4K quality. Fast activation, local support, and no contracts.",
  keywords: ["best IPTV Canada", "IPTV Smarters Canada", "IPTV subscription", "4K IPTV", "IPTV reseller", "Canadian IPTV service"],
  alternates: {
    canonical: "https://iptvv.ca",
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
