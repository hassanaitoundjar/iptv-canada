import { Monitor, Smartphone, Tv, Laptop, Cast, Cpu } from "lucide-react";

const devices = [
  { name: "amazon fireTV", type: "Fire TV" },
  { name: "android", type: "Android" },
  { name: "tv", type: "Apple TV" },
  { name: "SAMSUNG", type: "Samsung" },
  { name: "LG", type: "LG Smart TV" },
  { name: "Roku", type: "Roku" },
  { name: "VIDAA", type: "VIDAA" },
  { name: "Hisense", type: "Hisense" },
  { name: "chromecast", type: "Chromecast" },
  { name: "NVIDIA", type: "NVIDIA Shield" },
  { name: "IOS", type: "iOS" },
];

export function Devices() {
  return (
    <section className="bg-brand-dark py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Monitor className="text-brand-blue" size={16} />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[3px] text-brand-blue">Stream Anywhere Anytime</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tighter">
            Watch IPTV Canada On All Devices
          </h2>
          
          <p className="text-slate-400 text-sm max-w-3xl mx-auto leading-relaxed">
            Don&apos;t worry&mdash;your IPTV subscription works seamlessly on all smart devices, from Fire Stick and Smart TVs to Android, Apple, Magbox, and Roku. No matter what you use, you&apos;ll enjoy smooth streaming.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="relative group">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8 items-center justify-items-center opacity-70">
            {/* Amazon FireTV */}
            <div className="flex flex-col items-center gap-2 hover:opacity-100 transition-opacity">
              <span className="text-xl font-bold text-white tracking-tighter">amazon <span className="font-black text-brand-blue">fireTV</span></span>
            </div>

            {/* Android */}
            <div className="flex flex-col items-center gap-2 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center">
                  <Smartphone size={14} className="text-white" />
                </div>
                <span className="text-2xl font-black text-white lowercase tracking-tighter">android</span>
              </div>
            </div>

            {/* Apple TV */}
            <div className="flex flex-col items-center gap-2 hover:opacity-100 transition-opacity">
              <span className="text-3xl font-light text-white tracking-tighter flex items-center">
                <span className="text-4xl mr-1"></span>tv
              </span>
            </div>

            {/* Samsung */}
            <div className="flex flex-col items-center gap-2 hover:opacity-100 transition-opacity">
              <span className="text-xl font-black text-white tracking-[2px]">SAMSUNG</span>
            </div>

            {/* LG */}
            <div className="flex flex-col items-center gap-2 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center font-bold text-white text-xs">LG</div>
                <span className="text-2xl font-black text-white tracking-tighter">LG</span>
              </div>
            </div>

            {/* Roku */}
            <div className="flex flex-col items-center gap-2 hover:opacity-100 transition-opacity">
              <span className="text-3xl font-black text-white tracking-tighter italic">Roku</span>
            </div>

            {/* VIDAA */}
            <div className="flex flex-col items-center gap-2 hover:opacity-100 transition-opacity">
              <span className="text-2xl font-black text-white tracking-[4px]">VIDAΛ</span>
            </div>

            {/* Hisense */}
            <div className="flex flex-col items-center gap-2 hover:opacity-100 transition-opacity">
              <span className="text-2xl font-black text-white">Hisense</span>
            </div>

            {/* Chromecast */}
            <div className="flex flex-col items-center gap-2 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2">
                <Cast size={20} className="text-white" />
                <span className="text-xl font-bold text-white tracking-tight">chromecast</span>
              </div>
            </div>

            {/* NVIDIA */}
            <div className="flex flex-col items-center gap-2 hover:opacity-100 transition-opacity">
              <span className="text-xl font-black text-white tracking-[2px]">NVIDIA</span>
            </div>

            {/* iOS */}
            <div className="flex flex-col items-center gap-2 hover:opacity-100 transition-opacity">
              <span className="text-2xl font-black text-white tracking-widest">IOS</span>
            </div>

            {/* Smart TV Generic */}
            <div className="flex flex-col items-center gap-2 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2">
                <Tv size={20} className="text-brand-blue" />
                <span className="text-lg font-black text-white uppercase tracking-tighter">Smart TV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
