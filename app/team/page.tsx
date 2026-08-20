import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { authors } from "@/constants/authors";
import Image from "next/image";
import { Users } from "lucide-react";
import { safeJsonLd } from "@/lib/safe-json-ld";
import { getBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Our Team | IPTV Canada",
  description: "Meet the experts behind IPTV Canada. Our technical support and editorial team are dedicated to providing the best streaming experience.",
  alternates: {
    canonical: `${siteConfig.url}/team`,
  },
};

export default function TeamPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Our Team", url: `${siteConfig.url}/team` }
  ]);

  return (
    <main className="min-h-screen bg-[#f8fafc] pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tighter mb-6">
            Meet the <span className="text-brand-blue">Team</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Our content and support team is based in Canada, bringing years of technical experience in network infrastructure and streaming to help you cut the cord.
          </p>
        </div>

        <div className="space-y-12">
          {Object.values(authors).map((author) => (
            <div 
              key={author.id}
              id={author.id}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-8 items-start scroll-mt-32"
            >
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-100 border-2 border-brand-blue/10 flex items-center justify-center text-brand-blue">
                <Users size={48} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h2 className="text-2xl font-black text-brand-dark">{author.name}</h2>
                  <span className="text-xs font-black uppercase tracking-widest bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full">
                    {author.role}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed mt-4">
                  {author.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
