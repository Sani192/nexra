"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, Plus, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socials } from "@/lib/site-content";

const roadmapItems = [
  {
    name: "TableBoost",
    status: "Current",
    tagline: "Live Operation",
    description: "Reservation, waitlist, and floor operations built for focused service.",
    icon: Sparkles,
    details: "Active deployment. Updates weekly.",
    cardClass: "border-[#E5E7EB] bg-white text-[#0B1120] shadow-xs"
  },
  {
    name: "Society-Agent",
    status: "Coming Soon",
    tagline: "In Development",
    description: "A business assistant for organizing customer communication and automated daily follow-up.",
    icon: Calendar,
    details: "Private beta scheduled for Q4.",
    cardClass: "border-[#E5E7EB] bg-white text-[#0B1120] shadow-xs"
  },
  {
    name: "RiseRoot",
    status: "Coming Soon",
    tagline: "Prototyping",
    description: "Tools for local brands to turn operations, content, and customer insight into durable growth.",
    icon: Compass,
    details: "Early validation with partner merchants.",
    cardClass: "border-[#E5E7EB] bg-white text-[#0B1120] shadow-xs"
  },
  {
    name: "Future Suites",
    status: "Pipeline",
    tagline: "Product Vision",
    description: "Expanding our portfolio with focused tools to streamline payments, staff tracking, and logistics.",
    icon: Plus,
    details: "Core systems architecture scheduling.",
    cardClass: "border-[#E5E7EB]/50 bg-white/40 text-[#475569] shadow-none"
  }
];

export function WhatsNextSection() {
  return (
    <section 
      id="roadmap" 
      className="bg-[#FAFAFA] px-6 py-28 md:py-36 border-t border-[#E5E7EB] relative overflow-hidden" 
      aria-labelledby="whats-next-title"
    >
      <div className="mx-auto max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B] block mb-6">
            Future Vision
          </span>
          <h2 id="whats-next-title" className="heading text-3xl md:text-5xl text-[#0B1120] font-extrabold tracking-tight">
            Product roadmap.
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#475569] font-normal leading-relaxed">
            We build software for the long haul. Here is how we plan to expand our suite of focused business tools.
          </p>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {roadmapItems.map((item, index) => {
            const Icon = item.icon;
            const isCurrent = item.status === "Current";

            return (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative flex flex-col justify-between rounded-3xl p-6 border transition-all duration-300 hover:shadow-xs hover:border-[#CBD5E1] ${item.cardClass} h-full`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-[#E5E7EB] pb-4 mb-4">
                    <span className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider">
                      {item.tagline}
                    </span>
                    <span className={`inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      isCurrent 
                        ? "bg-[#0B1120] text-white border-transparent" 
                        : "bg-[#FAFAFA] text-[#64748B] border-[#E5E7EB]"
                    }`}>
                      <Icon className="size-2.5" />
                      {item.status}
                    </span>
                  </div>

                  <h3 className="heading text-lg text-[#0B1120] font-bold">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-[#475569] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex flex-col justify-end">
                  <span className="text-[10px] font-mono text-[#64748B]">
                    {item.details}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Final CTA Statement */}
        <div className="mt-32 md:mt-40 border-t border-[#E5E7EB] pt-20 md:pt-28 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B] mb-6">
              Our Journey
            </span>
            
            <h3 id="cta-title" className="heading text-3xl md:text-5xl lg:text-6xl text-[#0B1120] font-extrabold tracking-tight leading-none">
              This is only the <br className="hidden sm:inline" />beginning.
            </h3>
            
            <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-[#475569] font-normal">
              We are building software that helps independent businesses operate with the sophistication, intelligence, and confidence of larger teams.
            </p>
            
            {/* Social Buttons */}
            <div className="mt-12 flex flex-wrap justify-center gap-3.5 w-full sm:w-auto">
              {socials.map(({ href, label, icon: Icon, external }) => {
                return (
                  <Button 
                    key={label} 
                    asChild 
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto shadow-none"
                  >
                    <a 
                      href={href} 
                      target={external ? "_blank" : undefined} 
                      rel={external ? "noreferrer" : undefined}
                      className="inline-flex items-center justify-center gap-2 text-[#0B1120]"
                    >
                      <Icon className="size-4 text-[#475569] group-hover:text-[#0B1120] transition-colors" aria-hidden={true} />
                      <span>{label}</span>
                    </a>
                  </Button>
                );
              })}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
