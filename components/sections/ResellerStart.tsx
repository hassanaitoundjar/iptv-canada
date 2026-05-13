import { Briefcase, TrendingUp, ShieldCheck } from "lucide-react";

export function ResellerStart() {
  const points = [
    {
      icon: "💼",
      title: "Your Own Brand",
      text: "Sell IPTV subscriptions under your own identity and build customer loyalty.",
    },
    {
      icon: "💵",
      title: "Steady Income",
      text: "Enjoy recurring revenue with every subscription renewal.",
    },
    {
      icon: "🇨🇦",
      title: "Reliable Service",
      text: "Provide one of Canada's most stable and trusted IPTV services.",
    },
  ];

  return (
    <section className="bg-[#fcfcfc] py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tighter mb-6">
          Start Your IPTV Reselling Business
        </h2>
        <p className="text-slate-500 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-16">
          Become an <span className="font-bold text-brand-dark">IPTV reseller</span> and launch your own profitable business. 
          Our reseller program helps you grow your brand and income with a trusted IPTV service.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 text-left hover:shadow-md transition-shadow">
              <div className="text-2xl mb-4">{point.icon}</div>
              <h3 className="text-lg font-black text-brand-dark mb-3 tracking-tight">
                {point.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
