import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function CtaBanner() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-blue rounded-[48px] p-8 sm:p-16 lg:p-24 relative overflow-hidden shadow-2xl shadow-brand-blue/30 group">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[4px] text-white">Get Started Today</span>
              </div>
              
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter leading-none mb-8">
                Ready to Experience <br />
                <span className="opacity-70">Premium IPTV?</span>
              </h2>
              
              <p className="text-white/80 text-base sm:text-lg font-medium max-w-lg leading-relaxed mb-10">
                Join 50,000+ satisfied Canadians. Start your 24-hour trial or choose a premium plan for instant activation.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link 
                  href={siteConfig.trialUrl}
                  className="w-full sm:w-auto bg-white text-brand-blue hover:bg-slate-50 font-black px-10 py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-black/10 active:scale-95"
                >
                  START FREE TRIAL <ArrowRight size={20} />
                </Link>
                <Link 
                  href="/pricing"
                  className="w-full sm:w-auto bg-brand-dark/20 hover:bg-brand-dark/30 text-white border border-white/20 font-black px-10 py-5 rounded-2xl flex items-center justify-center gap-3 transition-all backdrop-blur-md active:scale-95"
                >
                  VIEW PLANS <ArrowRight size={20} className="opacity-50" />
                </Link>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                   <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-blue shadow-lg">
                      <MessageCircle size={24} />
                   </div>
                   <div>
                      <p className="text-white font-black text-lg">Need Assistance?</p>
                      <p className="text-white/60 text-xs font-bold uppercase tracking-widest">24/7 Live Agent Support</p>
                   </div>
                </div>
                
                <p className="text-white/70 text-sm font-medium leading-relaxed mb-8">
                  &quot;Our team is standing by to help you set up your device and answer any questions you have about our channel lineup.&quot;
                </p>

                <a 
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/10 hover:bg-white/20 px-6 py-4 rounded-2xl border border-white/10 transition-all group/wa"
                >
                  <span className="text-white font-black text-xs uppercase tracking-widest">Chat on WhatsApp</span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-blue group-hover/wa:scale-110 transition-transform">
                    <ArrowRight size={16} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
