import { Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const comparisonData = [
  { feature: "Monthly Cost", iptv: "$15 - $25", cable: "$120 - $180", status: true },
  { feature: "Live Channels", iptv: "25,000+", cable: "200 - 500", status: true },
  { feature: "4K/UHD Quality", iptv: "Included", cable: "Extra Fee", status: true },
  { feature: "Contract Required", iptv: "No (Pay as you go)", cable: "2-Year Term", status: false },
  { feature: "Hardware Rental", iptv: "$0 (Use your device)", cable: "$15/mo per box", status: false },
  { feature: "Installation Time", iptv: "5 Minutes (Instant)", cable: "3-5 Days (Technician)", status: true },
  { feature: "Multi-Device Use", iptv: "Yes (Up to 4)", cable: "Extra Fee per TV", status: true },
];

export function ComparisonSection() {
  return (
    <section className="bg-[#f8fafc] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 px-4 py-2 rounded-full mb-6">
            <span className="text-[10px] font-black uppercase tracking-[4px] text-brand-blue">Smart Choice</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-brand-dark tracking-tighter mb-6 leading-none">
            IPTV vs <span className="text-brand-blue">Traditional Cable</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Stop overpaying for limited content and long-term contracts. See how IPTV Canada compares to traditional Canadian cable providers.
          </p>
        </div>

        <div className="bg-white rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="py-8 px-10 text-xs font-black uppercase tracking-widest border-r border-white/5">Feature</th>
                  <th className="py-8 px-10 text-center border-r border-white/5">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-brand-blue text-[10px] font-black uppercase tracking-[4px]">Recommended</span>
                      <span className="text-xl font-black tracking-tight">IPTV Canada</span>
                    </div>
                  </th>
                  <th className="py-8 px-10 text-center opacity-50">
                    <span className="text-xl font-black tracking-tight">Cable TV</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/30"}>
                    <td className="py-6 px-10 border-r border-slate-100">
                      <span className="text-sm font-black text-brand-dark">{row.feature}</span>
                    </td>
                    <td className="py-6 px-10 text-center border-r border-slate-100">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                          <Check size={14} strokeWidth={4} />
                        </div>
                        <span className="text-sm font-bold text-brand-blue">{row.iptv}</span>
                      </div>
                    </td>
                    <td className="py-6 px-10 text-center">
                       <div className="flex flex-col items-center gap-2 opacity-60">
                        <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-600">
                          <X size={14} strokeWidth={4} />
                        </div>
                        <span className="text-sm font-bold text-slate-500">{row.cable}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-brand-blue p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-black text-white tracking-tight mb-2">Save up to $1,800/year</h3>
              <p className="text-white/70 text-sm font-medium">Join the thousands of Canadians who have already made the switch.</p>
            </div>
            <Link 
              href={siteConfig.trialUrl}
              className="bg-white text-brand-blue hover:bg-slate-50 font-black px-10 py-5 rounded-2xl flex items-center gap-3 transition-all shadow-xl shadow-black/10 active:scale-95 whitespace-nowrap"
            >
              START SAVING NOW <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center text-slate-400 text-[11px] font-bold uppercase tracking-widest">
           * Based on average Canadian cable pricing as of 2024
        </div>
      </div>
    </section>
  );
}
