"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, UserCheck, Clock, Play, Send, MessageSquare, Compass } from "lucide-react";
import { contactEmail } from "@/lib/site-content";

const showcaseItems = [
  {
    id: "desktop",
    label: "Desktop Hub",
    title: "Shift Operations Hub",
    description: "Your central point of control during peak hours. Manage reservations, view floor map layouts, and log shift details with zero lag.",
    src: "/tableboost-desktop.png",
    aspectRatio: "aspect-[1024/489]",
    frameClass: "rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-xs"
  },
  {
    id: "tablet",
    label: "Tablet Control",
    title: "Floor Table Tracker",
    description: "Optimized for mobile tablets carried by floor staff. Drag and drop reservations, update table cleaning states, and coordinate seating in real-time.",
    src: "/tableboost-desktop.png",
    aspectRatio: "aspect-[1024/489] max-w-3xl mx-auto",
    frameClass: "rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-xs"
  },
  {
    id: "mobile",
    label: "Mobile Companion",
    title: "Server Waitlist Assistant",
    description: "In the pocket of every server. Get instant alerts when tables are ready, walk-in notifications, and real-time waitlist updates.",
    src: "/tableboost-mobile.png",
    aspectRatio: "aspect-[472/1024] max-w-[280px] mx-auto",
    frameClass: "rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-xs"
  }
];

const capabilities = [
  {
    title: "Guest Intelligence",
    description: "Build clean visitor profiles containing dining preferences, seating preferences, allergies, and spending history.",
    icon: UserCheck
  },
  {
    title: "Visits Tracker",
    description: "Log seated times, cycle durations, and waitlist delays automatically to identify bottlenecks in real-time.",
    icon: Clock
  },
  {
    title: "Service Automation",
    description: "Auto-confirm waitlist bookings, notify walk-ins when tables open, and trigger seat status alerts automatically.",
    icon: Play
  },
  {
    title: "Outreach Campaigns",
    description: "Launch direct SMS and email outreach to guest cohorts based on visit frequency, dining habits, and profiles.",
    icon: Send
  },
  {
    title: "Focused Inbox",
    description: "A single, focused inbox to manage customer texts, updates, reservations, and dining special requests.",
    icon: MessageSquare
  },
  {
    title: "Service Insights",
    description: "Evaluate cover performance, identify high-volume shifts, and optimize table seating charts for efficiency.",
    icon: Compass
  }
];

export function WhatWeBuiltSection() {
  const [activeTab, setActiveTab] = useState("desktop");
  const activeItem = showcaseItems.find((item) => item.id === activeTab) || showcaseItems[0];

  return (
    <section 
      id="products" 
      className="bg-[#FAFAFA] px-6 py-28 md:py-36 border-t border-b border-[#E5E7EB] relative overflow-hidden" 
      aria-labelledby="built-title"
    >
      {/* Soft background radial light */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.025)_0%,transparent_60%)] pointer-events-none blur-3xl" 
        aria-hidden={true} 
      />

      <div className="mx-auto max-w-5xl relative z-10">
        
        {/* Intro */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B] block mb-6">
            What We Built
          </span>
          <h2 id="built-title" className="heading text-3xl md:text-5xl text-[#0B1120] font-extrabold tracking-tight">
            Meet TableBoost.
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#475569] font-normal leading-relaxed">
            A restaurant operations workspace that unifies reservations, waitlists, table management, and guest flow. Built to stay responsive under the pressure of active shifts.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex gap-1.5 p-1 bg-white border border-[#E5E7EB] rounded-full w-fit mb-12">
          {showcaseItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeTab === item.id 
                  ? "bg-[#0B1120] text-white shadow-xs" 
                  : "text-[#475569] hover:text-[#0B1120]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Showcase Canvas */}
        <div className="mb-28 min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.99, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.99, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] items-center w-full"
            >
              {/* Mockup Column */}
              <div className="w-full flex justify-center">
                <div className={`w-full overflow-hidden ${activeItem.frameClass}`}>
                  {/* Top Dots for Window Header */}
                  {activeItem.id !== "mobile" && (
                    <div className="flex gap-1.5 px-3 pb-2 pt-1 border-b border-[#F8FAFC]">
                      <span className="size-1.5 rounded-full bg-[#E5E7EB]" />
                      <span className="size-1.5 rounded-full bg-[#E5E7EB]" />
                      <span className="size-1.5 rounded-full bg-[#E5E7EB]" />
                    </div>
                  )}
                  <div className={`relative ${activeItem.aspectRatio} overflow-hidden rounded-xl bg-[#FAFAFA]`}>
                    <Image 
                      className="w-full object-cover select-none" 
                      src={activeItem.src} 
                      alt={activeItem.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 700px"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Description Column */}
              <div className="space-y-6">
                <h3 className="heading text-2xl font-bold text-[#0B1120]">
                  {activeItem.title}
                </h3>
                <p className="text-xs md:text-sm text-[#475569] leading-relaxed font-normal">
                  {activeItem.description}
                </p>
                <div className="flex gap-8 border-t border-[#E5E7EB] pt-6">
                  <div>
                    <span className="block text-[10px] font-bold text-[#64748B] uppercase tracking-wider">Sync Lag</span>
                    <span className="heading text-xl font-bold text-[#0B1120] mt-1 block">0.0ms</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-[#64748B] uppercase tracking-wider">Interface</span>
                    <span className="heading text-xl font-bold text-[#0B1120] mt-1 block">Real-time</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Capabilities Section */}
        <div className="border-t border-[#E5E7EB] pt-20">
          <div className="max-w-xl mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#64748B] block mb-4">
              Core Capabilities
            </span>
            <h3 className="heading text-2xl md:text-3xl text-[#0B1120] font-bold">
              Built for speed and control.
            </h3>
          </div>

          {/* Clean Borderless Capability List */}
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="flex flex-col items-start">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-white border border-[#E5E7EB] text-[#0B1120] mb-4 shadow-xs">
                    <Icon className="size-4" aria-hidden={true} />
                  </div>
                  <h4 className="heading text-base text-[#0B1120] font-bold">
                    {cap.title}
                  </h4>
                  <p className="mt-2.5 text-xs md:text-sm text-[#475569] leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 pt-8 border-t border-[#E5E7EB]/50 flex justify-center">
          <Button asChild size="lg" className="shadow-none text-[#FFFFFF]">
            <a href={`mailto:${contactEmail}?subject=Learn%20more%20about%20TableBoost`} className="text-[#FFFFFF] inline-flex items-center justify-center">
              Request Demo Access
              <ArrowRight className="size-4 ml-1.5 text-[#FFFFFF]" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}
