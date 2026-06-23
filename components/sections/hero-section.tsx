"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section 
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28 bg-white"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-5xl w-full flex flex-col items-center text-center">
        {/* Subtitle Badge */}
        <motion.span 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 font-mono text-[10px] uppercase tracking-[0.25em] text-[#64748B]"
        >
          Nexra / TableBoost
        </motion.span>

        {/* Headline */}
        <motion.h1 
          id="hero-title" 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="heading text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#0B1120] font-extrabold max-w-4xl"
        >
          Building Better Business Software.
        </motion.h1>

        {/* Paragraph Description */}
        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-[#475569] font-normal"
        >
          Practical, high-fidelity software built to help independent businesses automate floor operations, centralize customer communication, and grow with confidence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
        >
          <Button asChild size="lg" className="w-full sm:w-auto text-[#FFFFFF]">
            <a href="#products" className="text-[#FFFFFF] inline-flex items-center justify-center">
              Explore Products 
              <ArrowRight className="size-4 ml-1.5 text-[#FFFFFF]" aria-hidden={true} />
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
            <a href="#roadmap" className="text-[#0B1120]">Follow Our Journey</a>
          </Button>
        </motion.div>
      </div>

      {/* Product Showcase with Soft Radial Glow */}
      <div className="mx-auto max-w-5xl w-full mt-20 relative flex justify-center">
        {/* Soft, blurred radial glow behind the product mockup */}
        <div 
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(11,17,32,0.035)_0%,transparent_60%)] pointer-events-none blur-xl" 
          aria-hidden={true} 
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl"
        >
          {/* Main Desktop Mockup */}
          <div className="relative rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)]">
            {/* Window Controls */}
            <div className="flex gap-1.5 px-3 pb-2 pt-1 border-b border-[#F8FAFC]">
              <span className="size-2 rounded-full bg-[#E5E7EB]" />
              <span className="size-2 rounded-full bg-[#E5E7EB]" />
              <span className="size-2 rounded-full bg-[#E5E7EB]" />
            </div>
            <div className="overflow-hidden rounded-xl bg-[#FAFAFA] relative aspect-[1024/489]">
              <Image 
                className="w-full object-cover select-none" 
                src="/tableboost-desktop.png" 
                alt="TableBoost desktop interface showing reservations, table status, waitlist, and shift notes" 
                fill
                sizes="(max-width: 768px) 100vw, 960px"
                priority 
              />
            </div>
          </div>

          {/* Overlapping Mobile Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-8 -right-4 w-28 sm:w-36 md:w-44 rounded-2xl border border-[#E5E7EB] bg-white p-1.5 shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
            <div className="overflow-hidden rounded-[0.85rem] bg-[#FAFAFA] relative aspect-[472/1024] min-h-[180px] sm:min-h-[240px]">
              <Image 
                className="w-full object-cover select-none" 
                src="/tableboost-mobile.png" 
                alt="TableBoost mobile interface showing today’s waitlist and table updates" 
                fill
                sizes="150px"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
