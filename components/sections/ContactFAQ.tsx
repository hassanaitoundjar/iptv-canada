"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { contactFaqs } from "@/constants/contact-faq";

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm font-semibold">
            Please read these answers before sending a support request.
          </p>
        </div>

        <div className="space-y-4">
          {contactFaqs.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index 
                ? "border-brand-blue bg-blue-50/10 shadow-lg shadow-blue-500/5" 
                : "border-slate-100 bg-white hover:border-slate-200"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
              >
                <span className={`text-[13px] sm:text-[14px] font-black tracking-tight leading-tight ${
                  openIndex === index ? "text-brand-blue" : "text-brand-dark"
                }`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? "bg-brand-blue text-white rotate-180" : "bg-slate-100 text-slate-400"
                }`}>
                  {openIndex === index ? <Minus size={12} strokeWidth={4} /> : <Plus size={12} strokeWidth={4} />}
                </div>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed whitespace-pre-line font-medium">
                  {faq.answer.split('\n').map((line, i) => (
                    <p key={i} className={line.startsWith('-') ? 'ml-2' : ''}>
                      {line.startsWith('-') ? <strong>{line}</strong> : line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
