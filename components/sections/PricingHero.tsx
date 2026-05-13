import { Crown } from "lucide-react";

export function PricingHero() {
  return (
    <section className="bg-brand-dark pt-32 pb-32 overflow-hidden relative">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-6 text-brand-blue">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[6px]">
              Canada IPTV Pricing Plans
            </span>
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tighter mb-8 max-w-4xl leading-[1.1]">
            Most Popular IPTV <span className="text-brand-blue">Subscription</span> Plans
          </h1>

          {/* Subtext */}
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Choose the perfect plan for your entertainment needs. 
            Enjoy over 25,000+ live channels, VOD, and premium sports coverage 
            with no hidden fees or contracts.
          </p>

          {/* Stats/Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-300 text-xs font-bold uppercase tracking-wider">Instant Setup</span>
            </div>
            <div className="flex items-center gap-2 border-x border-slate-800 px-8">
              <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
              <span className="text-slate-300 text-xs font-bold uppercase tracking-wider">No Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
              <span className="text-slate-300 text-xs font-bold uppercase tracking-wider">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-brand-blue/5 to-transparent -z-0"></div>
    </section>
  );
}
