"use client";

import { motion } from "framer-motion";
import { EyeOff, Layers, Cpu, TrendingUp } from "lucide-react";

const principles = [
  {
    step: "01",
    title: "Simple",
    subtitle: "Software should feel invisible.",
    description: "Interface elements must disappear into the flow of active service. We shadow real operations to cut out the clutter. Every button and input field must earn its place by proving it makes daily service faster.",
    icon: EyeOff
  },
  {
    step: "02",
    title: "Practical",
    subtitle: "Real problems demand real answers.",
    description: "We prioritize day-to-day stability over decorative trends. Our tools have zero fluff, load instantly, and are built to be highly dependable under the physical pressure of active shifts.",
    icon: Layers
  },
  {
    step: "03",
    title: "Intelligent",
    subtitle: "Quiet automation in the background.",
    description: "We run repetitive administrative tasks silently, resolving bottlenecks before you notice them. This allows your team to keep their eyes on the room, not on a glowing screen.",
    icon: Cpu
  },
  {
    step: "04",
    title: "Growth",
    subtitle: "Designed for durable expansion.",
    description: "We translate unified customer profiles, visit habits, and floor trends into natural triggers for repeat business, building high-retention customer relationships without extra work.",
    icon: TrendingUp
  }
];

export function HowWeThinkSection() {
  return (
    <section 
      id="how-we-think" 
      className="bg-white px-6 py-28 md:py-36 relative overflow-hidden"
      aria-labelledby="think-title"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B] block mb-6">
            How We Think
          </span>
          <h2 
            id="think-title" 
            className="heading text-3xl md:text-5xl text-[#0B1120] font-extrabold tracking-tight"
          >
            Our core principles.
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#475569] font-normal leading-relaxed">
            We follow a strict set of design and engineering principles to ensure our products solve real operational hurdles. No compromises, no decorative features, no visual noise.
          </p>
        </div>

        {/* 4-Column Typographic Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mt-16">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.article 
                key={principle.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col items-start"
              >
                {/* Monospace Step Indicator & Icon */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] text-[#0B1120]">
                    <Icon className="size-4" aria-hidden={true} />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#64748B]">
                    {principle.step}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="heading text-xl text-[#0B1120] font-bold">
                  {principle.title}
                </h3>
                <p className="text-xs font-semibold text-[#64748B] mt-1.5 uppercase tracking-wider">
                  {principle.subtitle}
                </p>

                {/* Description */}
                <p className="mt-4 text-xs md:text-sm text-[#475569] leading-relaxed font-normal">
                  {principle.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
