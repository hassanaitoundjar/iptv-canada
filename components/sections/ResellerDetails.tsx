import { Check, ShieldCheck, Zap, MessageCircle } from "lucide-react";

export function ResellerDetails() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tighter mb-4">
            IPTV Reseller Program
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-10">
            Join the booming streaming market as an <span className="font-bold text-brand-dark">IPTV reseller</span> with <span className="text-brand-blue font-bold">IPTV Canada</span>. Use our easy panel, flexible credit system, and fast support to build your IPTV business.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              <ShieldCheck size={14} className="text-slate-400" />
              Interac e-Transfer <span className="lowercase font-normal">accepted</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              <Zap size={14} className="text-slate-400" />
              Instant activation <span className="lowercase font-normal">after payment</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              <MessageCircle size={14} className="text-slate-400" />
              Fast support on <span className="text-green-500">WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Grid Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Why Resell IPTV? */}
          <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-black text-brand-dark mb-6 tracking-tight">Why Resell IPTV?</h3>
            <ul className="space-y-4">
              {[
                "Streaming is replacing cable — huge growth potential.",
                "Low startup costs with recurring revenue.",
                "Sell globally with just an internet connection.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-600">
                  <div className="bg-green-100 p-0.5 rounded text-green-600 shrink-0">
                    <Check size={14} strokeWidth={4} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Program Highlights */}
          <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-black text-brand-dark mb-6 tracking-tight">Program Highlights</h3>
            <ul className="space-y-4">
              {[
                { label: "Reseller Panel:", text: "create & manage accounts easily." },
                { label: "Credit System:", text: "3 credits = 1 month. Set your price." },
                { label: "Bulk Ready:", text: "buy credits and grow margins." },
                { label: "Free Trials:", text: "convert leads into paying users." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <div className="bg-green-100 p-0.5 rounded text-green-600 shrink-0">
                    <Check size={14} strokeWidth={4} />
                  </div>
                  <span>
                    <span className="font-bold text-brand-dark">{item.label}</span> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why IPTV Canada? */}
          <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100 flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-black text-brand-dark mb-6 tracking-tight">Why IPTV Canada?</h3>
              <ul className="space-y-4">
                {[
                  "25,000+ live channels worldwide.",
                  "Stable servers with 99.9% uptime.",
                  "Works on all devices (TV, phone, box).",
                  "Fast support via WhatsApp & email.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-600">
                    <div className="bg-green-100 p-0.5 rounded text-green-600 shrink-0">
                      <Check size={14} strokeWidth={4} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
              <div className="bg-white p-5 rounded-2xl border border-slate-100">
                <h4 className="text-blue-600 font-black text-sm uppercase tracking-tighter mb-1">Scalable</h4>
                <p className="text-slate-500 text-xs font-semibold">Grow credits as you sell</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100">
                <h4 className="text-blue-600 font-black text-sm uppercase tracking-tighter mb-1">Canada-friendly</h4>
                <p className="text-slate-500 text-xs font-semibold">Sell worldwide</p>
              </div>
            </div>
          </div>

          {/* Credit System Table */}
          <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-black text-brand-dark mb-6 tracking-tight">Credit System</h3>
            <div className="space-y-3">
              {[
                { label: "1 month", value: "3 credits" },
                { label: "3 months", value: "6 credits" },
                { label: "6 months", value: "9 credits" },
                { label: "12 months", value: "12 credits" },
                { label: "24 months", value: "22 credits", promo: true },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl">
                  <span className="text-sm font-bold text-brand-dark">{row.label}</span>
                  <div className="flex items-center gap-3">
                    {row.promo && <span className="bg-blue-100 text-blue-600 text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-tighter">Promotion</span>}
                    <span className="text-sm font-semibold text-slate-500">{row.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 mt-6 leading-relaxed font-semibold italic">
              Example: <span className="text-brand-dark">3 credits = 1 month</span>. Top up credits, set your margin, grow your base.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
