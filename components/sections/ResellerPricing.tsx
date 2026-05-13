import { CheckCircle2, Plus } from "lucide-react";
import { resellerPlans } from "@/constants/reseller-plans";

export function ResellerPricing() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {resellerPlans.map((plan, index) => (
            <div key={index} className="flex flex-col rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
              {/* Header */}
              <div className="bg-brand-blue py-6 text-center">
                <span className="text-white font-black text-xl tracking-tight">
                  {plan.credits}
                </span>
              </div>

              {/* Body */}
              <div className="bg-[#f2f2f2] p-10 flex-grow relative">
                <div className="flex items-baseline justify-center gap-1 mb-8">
                  <span className="text-5xl font-black text-brand-dark tracking-tighter">
                    {plan.price}
                  </span>
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">$CA</span>
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-brand-dark/80 text-sm font-semibold">
                      <CheckCircle2 className="text-brand-blue shrink-0" size={18} fill="currentColor" fillOpacity={0.1} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="bg-[#262626] p-8 flex justify-center">
                <a 
                  href={plan.paymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-100 text-brand-dark font-black px-10 py-3 rounded-lg text-xs uppercase tracking-widest flex items-center gap-2 transition-colors"
                >
                  GET THIS PLAN <Plus size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
