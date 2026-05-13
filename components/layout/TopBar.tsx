export function TopBar() {
  return (
    <div className="bg-brand-dark text-slate-400 text-[10px] sm:text-xs border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        <span className="truncate pr-4">Best IPTV Providers in Canada – Your Search Ends Here!</span>
        <div className="flex items-center gap-2 text-slate-500 flex-shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a6fd4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8z" />
            <path d="M6 2v4" />
            <path d="M18 2v4" />
          </svg>
          <span className="hidden xs:inline-flex items-center">
            Fast <span className="text-[#1a6fd4] mx-1.5">•</span>
            Reliable <span className="text-[#1a6fd4] mx-1.5">•</span>
            Unlimited
          </span>
          <span className="xs:hidden text-[9px]">Fast • Reliable</span>
        </div>
      </div>
    </div>
  );
}