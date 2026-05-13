"use client";

import { useState, useRef } from "react";
import { ChevronDown, X } from "lucide-react";
import { devices } from "@/constants/devices";

export function TutorialDeviceGrid() {
  const [selected, setSelected] = useState<string | null>(null);
  const guideRef = useRef<HTMLDivElement>(null);

  const handleSelect = (id: string) => {
    const device = devices.find((d) => d.id === id);
    if (device?.unsupported) return;
    setSelected(id);
    setTimeout(() => {
      guideRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const selectedDevice = devices.find((d) => d.id === selected);

  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Device Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {devices.map((device) => (
            <button
              key={device.id}
              onClick={() => handleSelect(device.id)}
              disabled={device.unsupported}
              className={`flex flex-col items-center justify-center p-5 rounded-2xl border-2 text-center transition-all duration-200 gap-2
                ${device.unsupported
                  ? "opacity-50 cursor-not-allowed border-slate-100 bg-slate-50"
                  : selected === device.id
                  ? "border-brand-blue bg-brand-blue/5 shadow-lg shadow-brand-blue/10 scale-[1.02]"
                  : "border-slate-100 bg-white hover:border-brand-blue/40 hover:shadow-md cursor-pointer"
                }`}
            >
              <span className="text-3xl">{device.icon}</span>
              <span className={`text-sm font-black tracking-tight ${selected === device.id ? "text-brand-blue" : "text-brand-dark"}`}>
                {device.name}
              </span>
              <span className="text-[11px] text-slate-400 leading-tight">
                {device.unsupported ? (
                  <span className="flex items-center gap-1 justify-center">
                    <X size={12} className="text-red-500" /> {device.subtitle}
                  </span>
                ) : (
                  device.subtitle
                )}
              </span>
            </button>
          ))}
        </div>

        {/* Scroll Hint */}
        {!selected && (
          <div className="flex justify-center mt-8 text-slate-400 text-xs gap-1 items-center animate-bounce">
            <ChevronDown size={16} />
            <span>Select a device above to see the setup guide</span>
          </div>
        )}
      </div>

      {/* Setup Guide */}
      {selectedDevice && (
        <div ref={guideRef} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl">{selectedDevice.icon}</span>
              <div>
                <h3 className="text-2xl font-black text-brand-dark tracking-tight">
                  {selectedDevice.name} Setup Guide
                </h3>
                <p className="text-slate-500 text-sm mt-1">{selectedDevice.subtitle}</p>
              </div>
            </div>

            <ol className="space-y-4">
              {selectedDevice.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-black">
                    {i + 1}
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 p-4 bg-brand-blue/5 border border-brand-blue/20 rounded-2xl text-sm text-brand-blue font-semibold text-center">
              Still need help? Contact us on WhatsApp — we&apos;ll set it up for you! 💬
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
