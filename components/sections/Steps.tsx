import { HelpCircle, ChevronRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Choose Your Plan",
    description: "Select from our 1, 3, 6, or 12-month plans with 25,000+ live channels in crystal-clear 4K streaming. Watch anywhere, anytime!"
  },
  {
    number: "2",
    title: "Complete Your Order",
    description: "Secure your subscription with a quick payment. Go for our popular 12-month package and save $20 - our subscribers' top choice!"
  },
  {
    number: "3",
    title: "Start Watching!",
    description: "Check your email for login details, grab your favorite snacks, and dive into endless entertainment on all your devices!"
  }
];

export function Steps() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-20">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="text-brand-blue" size={18} />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[4px] text-brand-blue">How To Get Your IPTV?</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter">
            3 Easy Steps To Ultimate Entertainment!
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-px border-t-2 border-dashed border-slate-100" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                {/* Number Circle */}
                <div className="w-20 h-20 rounded-full border-2 border-brand-blue flex items-center justify-center mb-8 bg-white transition-all duration-500 group-hover:bg-brand-blue group-hover:scale-110 shadow-lg shadow-brand-blue/10">
                  <span className="text-3xl font-black text-brand-blue group-hover:text-white transition-colors duration-300">
                    {step.number}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-brand-blue transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-slate-500 text-[13px] leading-relaxed max-w-[280px]">
                  {step.description}
                </p>

                {/* Mobile/Tablet Arrow */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden mt-8 text-slate-200">
                    <ChevronRight className="rotate-90" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
