import { BookOpen } from "lucide-react";

export function TutorialHero() {
  return (
    <section className="bg-brand-dark pt-32 pb-24 overflow-hidden relative">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-6 text-brand-blue">
            <BookOpen size={16} />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[6px]">
              IPTV Installation Guide
            </span>
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tighter mb-8 max-w-4xl leading-[1.1]">
            How To <span className="text-brand-blue">Install</span> IPTV
          </h1>

          {/* Subtext */}
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Follow our step-by-step guides to set up IPTV on any device. 
            From Firestick to Smart TVs, we make the installation process 
            simple and fast for everyone.
          </p>

          {/* Breadcrumbs or secondary info */}
          <div className="mt-12 flex items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            <span>Choose Device</span>
            <div className="w-1 h-1 bg-brand-blue rounded-full"></div>
            <span>Follow Steps</span>
            <div className="w-1 h-1 bg-brand-blue rounded-full"></div>
            <span>Start Watching</span>
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-brand-blue/5 to-transparent -z-0"></div>
    </section>
  );
}
