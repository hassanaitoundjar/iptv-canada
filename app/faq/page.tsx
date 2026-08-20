import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schemas";
import { safeJsonLd } from "@/lib/safe-json-ld";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | IPTV Canada",
  description: "Got questions about our IPTV service? Read our FAQ to learn about channel lists, buffering fixes, device setup, and subscription billing.",
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
};

const faqs = [
  {
    category: "General & Setup",
    questions: [
      { q: "What devices do you support?", a: "We support almost all devices including Amazon Firestick, Android TV boxes, Samsung/LG Smart TVs, Apple TV, MAG boxes, and smartphones (iOS/Android)." },
      { q: "Do I need a VPN?", a: "No, a VPN is not strictly required. However, if your ISP throttles IPTV traffic during peak hours or live sports events, a VPN can help bypass those restrictions for smoother streaming." },
      { q: "How quickly will my account be activated?", a: "Accounts are typically activated instantly upon payment. You will receive an email with your login credentials and setup instructions within 5 minutes." },
    ]
  },
  {
    category: "Channels & Content",
    questions: [
      { q: "Do you offer local Canadian channels?", a: "Yes! We offer a full lineup of local Canadian channels, including regional news and sports networks from Toronto, Vancouver, Montreal, Calgary, and more." },
      { q: "Can I watch live sports and PPV?", a: "Absolutely. Our service includes all major sports networks (NHL, NFL, NBA, MLB, Premier League) and all major PPV events are included at no extra cost." },
      { q: "Are there French/Quebec channels available?", a: "Yes, we have a dedicated category for French-Canadian programming, including TVA, RDS, Noovo, and more." },
    ]
  },
  {
    category: "Troubleshooting",
    questions: [
      { q: "Why is my stream buffering?", a: "Buffering is usually caused by internet connection issues or ISP throttling. We recommend a minimum of 25 Mbps download speed. Try restarting your router and device, or use a VPN if throttling is suspected." },
      { q: "Can I use my subscription on multiple devices at the same time?", a: "Standard subscriptions allow for one simultaneous connection. If you need to watch on multiple TVs at the exact same time, you can purchase additional connections at a discount." },
    ]
  }
];

export default function FAQPage() {
  const flatFaqs = faqs.flatMap(category => category.questions.map(item => ({
    question: item.q,
    answer: item.a
  })));

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "FAQ", url: `${siteConfig.url}/faq` }
  ]);

  return (
    <main className="min-h-screen bg-[#f8fafc] pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(getFAQSchema(flatFaqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tighter mb-6">
            Frequently Asked <span className="text-brand-blue">Questions</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            Everything you need to know about our IPTV service. Can't find the answer? <Link href="/contact" className="text-brand-blue hover:underline">Contact our support team</Link>.
          </p>
        </div>

        <div className="space-y-12">
          {faqs.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-black text-brand-dark mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, i) => (
                  <details key={i} className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-200 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between font-bold text-brand-dark text-lg outline-none">
                      {faq.q}
                      <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                        <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="pt-4 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
