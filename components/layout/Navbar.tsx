"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { TopBar } from "./TopBar";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
      <TopBar />
      
      <nav className="bg-white border-b border-gray-100 h-20">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full transform group-hover:scale-110 transition-transform duration-300">
                <path d="M20,30 L80,30 L80,70 L20,70 Z" fill="none" />
                <path d="M30,20 C10,20 10,80 30,80 L70,80 C90,80 90,20 70,20 Z" className="fill-brand-blue" />
                <path d="M45,35 L65,50 L45,65 Z" fill="white" />
                <path d="M35,45 Q50,30 65,45 T35,55" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" className="opacity-40" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-[900] text-brand-blue leading-none tracking-tighter">IPTVV</span>
              <span className="text-[8px] sm:text-[10px] font-bold tracking-[2px] sm:tracking-[4px] uppercase text-slate-800 -mt-0.5">Canada</span>
            </div>
          </Link>

          {/* Desktop Links (Centered) */}
          <div className="hidden lg:flex flex-1 justify-center px-8">
            <ul className="flex items-center gap-6 list-none">
              {siteConfig.nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className={`text-[13px] font-bold tracking-tight transition-all relative py-2 ${
                        isActive ? "text-brand-blue" : "text-slate-800 hover:text-brand-blue"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-blue rounded-full" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Action Section */}
          <div className="flex items-center gap-4">
            <Link 
              href={siteConfig.trialUrl}
              className="hidden sm:inline-flex bg-brand-blue hover:bg-blue-700 text-white text-[13px] font-extrabold px-6 py-3 rounded-lg transition-all shadow-lg shadow-brand-blue/20 active:scale-95"
            >
              Get Free Trial
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 rounded-xl bg-slate-50 text-slate-900 border border-slate-200"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-[116px] bg-white z-40 transition-transform duration-500 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col p-6 h-full bg-white overflow-y-auto">
          <div className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 border-b border-slate-50 text-base font-bold text-slate-800 hover:text-[#1a6fd4] group"
              >
                {item.label}
                <ChevronRight size={18} className="text-slate-300 group-hover:text-[#1a6fd4] transition-colors" />
              </Link>
            ))}
          </div>
          
          <div className="mt-8">
            <Link 
              href={siteConfig.trialUrl}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-full bg-[#1a6fd4] text-white text-base font-bold py-4 rounded-2xl shadow-xl shadow-blue-500/20"
            >
              Get Free Trial
            </Link>
          </div>
          
          <div className="mt-auto py-10 text-center">
            <p className="text-slate-400 text-xs">24/7 Premium Support Available</p>
          </div>
        </div>
      </div>
    </header>
  );
}