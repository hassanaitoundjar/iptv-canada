import { Shield, Download, Zap, Smartphone, Monitor, Tv } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recommended IPTV Apps — Download Smarters Pro & V17Mate",
  description: "Download the best IPTV apps for Android, Firestick, iOS, and Smart TV. Get Smarters Pro, V17Mate, and TiviMate setup guides for IPTV Canada.",
  keywords: ["IPTV Smarters Pro download", "V17Mate app", "best IPTV player android", "TiviMate premium", "firestick iptv app"],
};

const apps = [
  {
    name: "V17Mate (Official)",
    description: "Our recommended player for Android and Firestick. High performance, no buffering, and optimized for Canadian servers.",
    icon: <Zap className="text-brand-blue" size={32} />,
    platform: "Android / Firestick",
    link: "https://bit.ly/v17mate-apk", // Example link
    features: ["4K Support", "Auto-Update", "Premium EPG", "Catch-up TV"],
    primary: true
  },
  {
    name: "IPTV Smarters Pro",
    description: "The most popular IPTV player worldwide. Works on almost every device with a clean, user-friendly interface.",
    icon: <Tv className="text-slate-400" size={32} />,
    platform: "iOS / Android / Web",
    link: "https://www.iptvsmarters.com/download",
    features: ["Multi-Screen", "Parental Control", "VPN Integration", "External Player Support"],
    primary: false
  },
  {
    name: "TiviMate Premium",
    description: "For advanced users. Offers a true cable TV-like experience with a professional grid guide and sleek UI.",
    icon: <Monitor className="text-slate-400" size={32} />,
    platform: "Android TV / Firestick",
    link: "https://play.google.com/store/apps/details?id=ar.tvplayer.tv",
    features: ["Cable-like UI", "Recording", "Custom Groups", "Search History"],
    primary: false
  }
];

export default function AppsPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Recommended IPTV Players",
    "description": "A curated list of the best IPTV players for various platforms.",
    "publisher": {
      "@type": "Organization",
      "name": "IPTV Canada"
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      
      {/* Hero */}
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 mb-6">
            <Smartphone size={14} className="text-brand-blue" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[4px] text-brand-blue">App Downloads</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-6 leading-none">
            Best <span className="text-brand-blue">IPTV Players</span>
          </h1>
          
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Choose the perfect player for your device. We recommend V17Mate for the best experience on Android and Firestick.
          </p>
        </div>
      </section>

      {/* Apps List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {apps.map((app, i) => (
            <div 
              key={i} 
              className={`relative rounded-[32px] p-8 sm:p-10 border transition-all duration-300 flex flex-col ${
                app.primary 
                ? "bg-slate-50 border-brand-blue/30 shadow-xl shadow-brand-blue/5 scale-105 z-10" 
                : "bg-white border-slate-100 hover:border-slate-200"
              }`}
            >
              {app.primary && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                  Recommended
                </div>
              )}

              <div className="mb-8">{app.icon}</div>
              
              <h3 className="text-2xl font-black text-brand-dark tracking-tight mb-2">{app.name}</h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">{app.platform}</p>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
                {app.description}
              </p>

              <div className="space-y-3 mb-10 flex-grow">
                {app.features.map((feat, fi) => (
                  <div key={fi} className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <div className="w-1 h-1 rounded-full bg-brand-blue" />
                    {feat}
                  </div>
                ))}
              </div>

              <a 
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 ${
                  app.primary 
                  ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20 hover:bg-blue-600" 
                  : "bg-brand-dark text-white hover:bg-slate-900 shadow-xl shadow-slate-900/10"
                }`}
              >
                Download Now <Download size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Security Note */}
        <div className="mt-20 p-8 sm:p-12 bg-brand-dark rounded-[40px] text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-brand-blue/5 pointer-events-none" />
           <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-blue mx-auto mb-6">
                <Shield size={24} />
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight mb-4">Safe & Secure Installations</h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
                All apps listed here are verified and safe to use. We always recommend using our official V17Mate player for the most stable connection and highest streaming quality in Canada.
              </p>
           </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
