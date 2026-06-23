"use client";

import { motion } from "framer-motion";

const fragmentedItems = [
  { name: "Reservations & Booking Logs", status: "Disconnected" },
  { name: "POS & Billing Systems", status: "Manual Sync" },
  { name: "Guest Profiles & CRMs", status: "Decaying Data" },
  { name: "Staff Coordination & Chat", status: "Scattered Tabs" },
  { name: "Marketing & Campaigns", status: "Inaccessible Insights" }
];

export function WhyExistSection() {
  return (
    <section 
      id="about" 
      className="relative bg-[#FAFAFA] px-6 py-28 md:py-36 border-t border-b border-[#E5E7EB] overflow-hidden" 
      aria-labelledby="why-exist-title"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B]">
            Why We Exist
          </span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          
          {/* Left Column: The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 
              id="why-exist-title" 
              className="heading text-3xl md:text-5xl text-[#0B1120] font-extrabold tracking-tight leading-tight"
            >
              Business software feels broken.
            </h2>
            <p className="text-base md:text-lg text-[#475569] font-normal leading-relaxed">
              Every day, operators switch between fragmented tools to run their business. 
              Important guest details decay, communication breaks down, and team focus is scattered across browser tabs. 
              Running a business should not feel like managing a software integration project.
            </p>
          </motion.div>

          {/* Right Column: The Fragmented Reality */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-[#E5E7EB] bg-white rounded-3xl p-6 md:p-8 shadow-xs"
          >
            <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-6">
              The Fragmented Status Quo
            </span>
            <ul className="space-y-4">
              {fragmentedItems.map((item) => (
                <li key={item.name} className="flex justify-between items-center py-2 border-b border-[#E5E7EB] last:border-0 last:pb-0">
                  <span className="text-xs md:text-sm font-semibold text-[#0B1120]">{item.name}</span>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#64748B] bg-[#FAFAFA] border border-[#E5E7EB] px-2 py-0.5 rounded-full">
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Philosophy Block */}
        <div className="mt-28 md:mt-36 border-t border-[#E5E7EB] pt-20 md:pt-28 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B] mb-6">
              Our Core Philosophy
            </span>
            <h3 className="heading text-3xl md:text-5xl lg:text-6xl text-[#0B1120] font-extrabold tracking-tight leading-none">
              Technology should <br className="hidden sm:inline" />
              feel invisible.
            </h3>
            <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-[#475569] font-normal">
              Nexra builds tools that respect the pace of real operations: fast to learn, dependable under pressure, and refined enough to disappear into the daily work. We believe intelligence is best when it quietly serves your workflow, not when it demands your attention.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
