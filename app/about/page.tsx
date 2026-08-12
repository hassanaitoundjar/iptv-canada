import type { Metadata } from "next";
import { Clock, ShieldCheck, Server, Users, MessageCircle, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { safeJsonLd } from "@/lib/safe-json-ld";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About IPTV Canada | Reliable Canadian Streaming",
  description: "Learn more about IPTV Canada. We deliver reliable, stable IPTV services tailored for Canadian households with dedicated, responsive support.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About IPTV Canada | Reliable Canadian Streaming",
    description: "Learn more about IPTV Canada. We deliver reliable, stable IPTV services tailored for Canadian households with dedicated, responsive support.",
    url: `${siteConfig.url}/about`,
    siteName: "IPTV Canada",
    locale: "en_CA",
    type: "website",
    images: [{
      url: `${siteConfig.url}/og?title=About%20IPTV%20Canada`,
      width: 1200,
      height: 630,
      alt: "About IPTV Canada",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About IPTV Canada | Reliable Canadian Streaming",
    description: "We deliver reliable, stable IPTV services tailored for Canadian households.",
    images: [`${siteConfig.url}/og?title=About%20IPTV%20Canada`],
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "IPTV Canada",
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
      description: "IPTV service provider offering live channels and VOD content with dedicated Canadian support.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: siteConfig.whatsapp,
        email: siteConfig.supportEmail,
        areaServed: "CA",
        availableLanguage: ["English", "French"]
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] pt-32 pb-24">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(aboutSchema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-6 text-brand-blue">
            <div className="w-2 h-2 rotate-45 bg-brand-blue" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[4px]">Our Operations</span>
            <div className="w-2 h-2 rotate-45 bg-brand-blue" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-brand-dark tracking-tighter mb-6">
            Reliable Streaming for <span className="text-brand-blue">Canadians</span>
          </h1>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-medium">
            At IPTV Canada, our goal is simple: provide stable, high-quality television without the exorbitant costs of traditional Canadian cable providers.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-brand-dark tracking-tight">
              How We Deliver Content
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The biggest issue with budget IPTV services is instability during peak viewing hours. We solve this by investing in load-balanced server infrastructure. Instead of routing all traffic through a single point, our network intelligently distributes bandwidth.
            </p>
            <p className="text-slate-600 leading-relaxed">
              When thousands of Canadians tune in for Hockey Night in Canada or a major PPV event, our servers automatically scale to handle the load, drastically reducing the buffering and freezing associated with standard streaming services.
            </p>
            <div className="pt-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Server className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-black text-brand-dark text-sm uppercase tracking-widest mb-1">Optimized Routing</h4>
                  <p className="text-slate-500 text-sm">Engineered to minimize latency across Canadian ISPs.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-lg text-center transform translate-y-8">
                <MessageCircle className="w-10 h-10 text-brand-blue mx-auto mb-4" />
                <h3 className="text-xl font-black text-brand-dark mb-2">Fast Response</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Via WhatsApp</p>
              </div>
              <div className="bg-brand-dark p-8 rounded-[32px] border border-slate-800 shadow-xl text-center">
                <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-black text-white mb-2">Tested</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Reliability</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-brand-blue p-8 rounded-[32px] shadow-xl text-center">
                <ShieldCheck className="w-10 h-10 text-white mx-auto mb-4" />
                <h3 className="text-xl font-black text-white mb-2">Secure</h3>
                <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">Infrastructure</p>
              </div>
              <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-lg text-center transform -translate-y-8">
                <Users className="w-10 h-10 text-brand-blue mx-auto mb-4" />
                <h3 className="text-xl font-black text-brand-dark mb-2">Canadian</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Support Team</p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-white rounded-[40px] p-10 md:p-16 border border-slate-100 shadow-2xl shadow-slate-200/50 mb-12">
          <h2 className="text-3xl font-black text-center text-brand-dark tracking-tight mb-12">
            Real Support, Real People
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="text-brand-blue" size={28} />
              </div>
              <h3 className="text-xl font-black text-brand-dark mb-3">Response Times</h3>
              <p className="text-slate-500 text-sm leading-relaxed">We strive to answer all WhatsApp and email inquiries within a few hours during normal business operations. We won't leave you hanging when you need setup help.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-brand-blue" size={28} />
              </div>
              <h3 className="text-xl font-black text-brand-dark mb-3">No Contracts</h3>
              <p className="text-slate-500 text-sm leading-relaxed">We believe in earning your business every month. There are no hidden fees, no credit checks, and no restrictive long-term contracts required.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="text-brand-blue" size={28} />
              </div>
              <h3 className="text-xl font-black text-brand-dark mb-3">Direct Communication</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Reach out directly via our <Link href="/contact" className="text-brand-blue hover:underline">Contact Page</Link>. Our team is experienced with all major devices (Firestick, Apple TV, Smart TVs) and networking setups.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
