"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, X } from "lucide-react";
import { contactEmail } from "@/lib/site-content";

const withoutPoints = [
  { title: "Multiple Subscriptions", desc: "Paying for 4 separate tools that do not communicate with each other." },
  { title: "Manual Syncs", desc: "Staff manually syncing bookings, walk-ins, text templates, and floor layouts." },
  { title: "Decaying Guest History", desc: "Guests return, but your staff has no record of their allergies or preferences." },
  { title: "Lost Reservations", desc: "Dropped calls, forgotten waitlist alerts, and missed repeat dining opportunities." }
];

const withPoints = [
  { title: "One Unified Workspace", desc: "Reservations, waitlist updates, table states, and SMS in a single tab." },
  { title: "Invisible Automation", desc: "Autoconfirms, floor triggers, and hostess alerts sync quietly in the background." },
  { title: "Persistent Guest Profiles", desc: "Every dining preference, spending stat, and note tied directly to their profile." },
  { title: "Durable Growth Loops", desc: "Turn operational insight into automatic SMS campaigns that bring guests back on slow nights." }
];

const faqData = [
  {
    question: "What is TableBoost?",
    answer: "TableBoost is a restaurant operations workspace designed to centralize reservations, walk-in waitlists, floor layouts, and guest communications into a single, clean browser tab."
  },
  {
    question: "Who is it for?",
    answer: "It is built for independent restaurants, bistros, and hospitality groups looking to simplify floor operations and replace fragmented tools with useful, focused software."
  },
  {
    question: "Does it replace my current POS?",
    answer: "No. TableBoost works alongside your Point of Sale (POS) billing system. It is dedicated exclusively to guest hospitality: scheduling bookings, waitlist text updates, and customer intelligence."
  },
  {
    question: "How does AI help in TableBoost?",
    answer: "AI runs quietly in the background to predict peak seat occupancy, model average table stay durations, and draft customer outreach campaigns based on dining habits."
  },
  {
    question: "Why should I choose Nexra?",
    answer: "We design software that values speed, reliability, and craftsmanship. Our tools have zero clutter, load instantly, and are built to be dependable under the pressure of active shifts."
  },
  {
    question: "What future products are you working on?",
    answer: "We are currently developing Society-Agent (to automate customer communications and follow-ups) and RiseRoot (local branding tools). Check out our Roadmap section below for details."
  },
  {
    question: "How does pricing work?",
    answer: `TableBoost is billed as a flat monthly subscription with unlimited reservations and zero cover-based fees. Contact us directly at ${contactEmail} for a setup plan matching your floor size.`
  }
];


function AccordionItem({ 
  question, 
  answer, 
  isOpen, 
  onClick, 
  idx 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void; 
  idx: number;
}) {
  return (
    <div className="border-b border-[#E5E7EB] last:border-0">
      <h3>
        <button
          type="button"
          onClick={onClick}
          className="flex w-full items-center justify-between py-5 px-3 text-left font-bold text-[#0B1120] hover:bg-[#FAFAFA] rounded-xl transition-all duration-200 focus:outline-none group cursor-pointer"
          aria-expanded={isOpen}
          aria-controls={`faq-content-${idx}`}
          id={`faq-btn-${idx}`}
        >
          <span className="text-sm md:text-base leading-snug group-hover:translate-x-0.5 transition-transform duration-200">{question}</span>
          <ChevronDown 
            className={`size-4 text-[#64748B] transition-transform duration-200 shrink-0 ml-4 group-hover:scale-110 ${
              isOpen ? "rotate-180 text-[#0B1120]" : ""
            }`} 
            aria-hidden={true}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-content-${idx}`}
            role="region"
            aria-labelledby={`faq-btn-${idx}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 pt-2 px-3 text-xs md:text-sm text-[#475569] font-normal leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function WhyCareSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faq" 
      className="bg-white px-6 py-28 md:py-36 relative overflow-hidden" 
      aria-labelledby="why-care-title"
    >
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B] block mb-6">
            Why It Matters
          </span>
          <h2 id="why-care-title" className="heading text-3xl md:text-5xl text-[#0B1120] font-extrabold tracking-tight">
            Why choose simplicity?
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#475569] font-normal leading-relaxed">
            Running a busy service demands focus. Compare how TableBoost resolves operational friction to let your staff get back to hosting.
          </p>
        </div>

        {/* Side-by-Side Typographic Comparison */}
        <div className="grid gap-12 lg:grid-cols-2 mt-16 pb-28 border-b border-[#E5E7EB]">
          
          {/* Fragmented Column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="heading text-xl md:text-2xl font-bold text-[#64748B] flex items-center gap-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#FAFAFA] border border-[#E5E7EB] text-[#64748B]">
                <X className="size-3" />
              </span>
              The Fragmented Way
            </h3>
            <div className="space-y-6">
              {withoutPoints.map((item) => (
                <div key={item.title} className="space-y-1">
                  <h4 className="font-bold text-[#475569] text-sm md:text-base">{item.title}</h4>
                  <p className="text-xs md:text-sm text-[#64748B] leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* TableBoost Column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <h3 className="heading text-xl md:text-2xl font-bold text-[#0B1120] flex items-center gap-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#0B1120] text-white">
                <Check className="size-3" />
              </span>
              The TableBoost Way
            </h3>
            <div className="space-y-6">
              {withPoints.map((item) => (
                <div key={item.title} className="space-y-1">
                  <h4 className="font-bold text-[#0B1120] text-sm md:text-base">{item.title}</h4>
                  <p className="text-xs md:text-sm text-[#475569] leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* FAQs Accordion */}
        <div className="mt-28 md:mt-36 max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B] block mb-6">
              FAQ
            </span>
            <h3 className="heading text-2xl md:text-3xl text-[#0B1120] font-bold">
              Frequently asked questions.
            </h3>
          </div>

          <div className="border-t border-[#E5E7EB] mt-8">
            {faqData.map((faq, idx) => (
              <AccordionItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === idx}
                onClick={() => toggleIndex(idx)}
                idx={idx}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
