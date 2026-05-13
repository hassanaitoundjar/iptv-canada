import { Users } from "lucide-react";

export function ResellerHero() {
  return (
    <section className="bg-brand-dark pt-24 pb-16 overflow-hidden relative border-b border-white/5">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-6 text-brand-blue">
            <Users size={16} />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[6px]">
              IPTV Canada
            </span>
          </div>
          
          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tighter mb-6 max-w-4xl leading-[1.1]">
            IPTV Reseller Program - <span className="text-brand-blue">Start Your Own</span> IPTV Business In Canada & Worldwide
          </h1>

          {/* Subtext */}
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed mb-8">
            Join the most reliable IPTV reseller network in Canada. 
            We provide the panel, the credits, and the 24/7 technical 
            support you need to build a successful recurring income.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-brand-blue hover:bg-blue-700 text-white font-black px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-brand-blue/20 active:scale-95 text-sm uppercase tracking-wider">
              JOIN RESELLER PROGRAM
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-black px-8 py-3.5 rounded-xl transition-all active:scale-95 text-sm uppercase tracking-wider">
              VIEW PANEL DEMO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
