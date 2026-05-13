"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate form submission
    setTimeout(() => setStatus("success"), 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-white py-24 text-center">
        <div className="max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
            <Send size={32} />
          </div>
          <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-4">Message Sent!</h2>
          <p className="text-slate-500 mb-8 font-semibold">Thank you for reaching out. Our support team will get back to you within 1-2 hours.</p>
          <button 
            onClick={() => setStatus("idle")}
            className="text-brand-blue font-black text-sm uppercase tracking-widest hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side: Information */}
          <div>
            <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-6">
              Send Us a Message
            </h2>
            <p className="text-slate-500 mb-10 leading-relaxed font-semibold">
              Whether you're a new customer looking for a trial or an existing user needing technical help, 
              fill out the form and we'll prioritize your request.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 h-fit">
                  <Send size={20} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-black text-brand-dark tracking-tight mb-1">Direct Support</h4>
                  <p className="text-slate-500 text-sm font-semibold">For faster service, contact us via WhatsApp using the button in the header.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 h-fit">
                  <Send size={20} className="text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-black text-brand-dark tracking-tight mb-1">Technical Issues</h4>
                  <p className="text-slate-500 text-sm font-semibold">Please include your device type and app name in the message for quicker troubleshooting.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-slate-50 border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-semibold text-brand-dark placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-semibold text-brand-dark placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-1">Subject</label>
                <div className="relative">
                  <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-semibold text-brand-dark appearance-none cursor-pointer">
                    <option className="text-brand-dark">General Inquiry</option>
                    <option className="text-brand-dark">Technical Support</option>
                    <option className="text-brand-dark">Billing Question</option>
                    <option className="text-brand-dark">Reseller Program</option>
                    <option className="text-brand-dark">Free Trial Request</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <Send size={14} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-1">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all font-semibold text-brand-dark placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-brand-blue hover:bg-blue-700 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-brand-blue/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
