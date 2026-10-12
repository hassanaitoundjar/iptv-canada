import Link from "next/link";
import { MapPin } from "lucide-react";
import { cities } from "@/constants/city-pages";

export function CityCoverageGrid() {
  return (
    <section aria-label="Canadian Regional IPTV Coverage" className="mt-16 pt-8 border-t border-slate-100">
      <div className="flex items-center gap-2 mb-3">
        <MapPin size={18} className="text-brand-blue" />
        <h2 className="text-lg sm:text-xl font-black text-brand-dark tracking-tight">
          Canadian Regional IPTV Coverage
        </h2>
      </div>
      <p className="text-xs text-slate-500 mb-6 leading-relaxed">
        Looking for localized Canadian TV channels, regional sports blackouts coverage, and ISP compatibility guides for your area? Explore our city hubs:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`/${city.slug}`}
            className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all group"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/50 group-hover:bg-brand-blue transition-colors shrink-0" />
            <div className="truncate">
              <span className="text-xs font-bold text-slate-800 group-hover:text-brand-blue transition-colors block truncate">
                {city.name}
              </span>
              <span className="text-[10px] text-slate-400 font-medium block">
                {city.provinceCode} • {city.population}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
