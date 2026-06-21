"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sprout, Box, Award, Sparkles, Feather, Cpu, Zap, Users } from "lucide-react";
import Image from "next/image";
import { prefixPath } from "@/config";

export default function Showcase() {
  const [hoveredBrand, setHoveredBrand] = useState<"cocos" | "nexus" | null>(null);

  const cocosSpecs = [
    { icon: Award, text: "Premium Organic Selection" },
    { icon: Sparkles, text: "Pure Coconut Water & Oil" },
    { icon: Feather, text: "Sustainable Smallholder Farming" },
  ];

  const nexusSpecs = [
    { icon: Cpu, text: "Custom Enterprise Systems" },
    { icon: Zap, text: "Tailored AI Automations" },
    { icon: Users, text: "Targeted Talent Placement" },
  ];

  return (
    <section className="relative bg-section-bg py-24 md:py-32 px-4 md:px-8 border-t border-navy/5 overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] glow-ventures opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest text-navy-light font-bold mb-4 block">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-navy mb-6">
            Pioneering Ventures. Elite Standards.
          </h2>
          <p className="text-navy-muted text-base md:text-lg max-w-xl mx-auto font-sans font-light">
            Explore our two foundational business divisions, built on innovation, aesthetics, and operational scale.
          </p>
        </div>

        {/* Dynamic Expanding Layout */}
        <div className="flex flex-col lg:flex-row gap-6 h-[750px] md:h-[650px] w-full">
          {/* M2P Nexus Card */}
          <motion.div
            id="showcase-nexus"
            onMouseEnter={() => setHoveredBrand("nexus")}
            onMouseLeave={() => setHoveredBrand(null)}
            animate={{
              flex: hoveredBrand === "nexus" ? 1.8 : hoveredBrand === "cocos" ? 0.7 : 1,
            }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className={`relative rounded-3xl overflow-hidden bg-card-bg flex flex-col justify-between p-8 md:p-12 group cursor-pointer border border-navy/5 ${
              hoveredBrand === "nexus"
                ? "border-nexus/40 shadow-[0_0_50px_rgba(59,130,246,0.1)]"
                : "border-navy/5"
            }`}
          >
            {/* Background Zoom Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={prefixPath("/images/nexus-bg.png")}
                alt="M2P Nexus Shipping Logistics"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-25 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-card-bg/60 to-transparent" />
            </div>

            {/* Glowing Cyan Mesh */}
            <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full glow-nexus pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Top Row: Brand Header */}
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-cocos/20 bg-cocos/5 text-[10px] font-bold tracking-widest text-cocos uppercase mb-3 w-fit">
                  <Box className="w-3 h-3" />
                  Technology & Digital Solutions
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight group-hover:text-gradient-nexus transition-all duration-500">
                  M2P Nexus
                </h3>
              </div>
              <a
                href="https://www.m2pnexus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-navy/10 flex items-center justify-center bg-white/80 text-navy group-hover:bg-cocos group-hover:text-black group-hover:scale-110 group-hover:border-cocos transition-all duration-500"
              >
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </a>
            </div>

            {/* Bottom Row: Content & Specs */}
            <div className="relative z-10 mt-auto">
              <p className="text-navy-muted text-sm md:text-base max-w-md mb-8 leading-relaxed font-sans font-light">
                A premier technology consulting and digital solutions partner founded in Madurai, Tamil Nadu. Modernizing traditional manufacturing lines, trading operations, and agribusinesses through custom enterprise systems, AI automations, and targeted talent placement.
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-navy/10 pt-6">
                {nexusSpecs.map((spec, i) => {
                  const Icon = spec.icon;
                  return (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-cocos/10 border border-cocos/15 text-cocos">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs text-navy-muted font-medium font-sans">
                        {spec.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Action Button */}
              <a
                href="https://www.m2pnexus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center gap-3 w-fit"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-cocos group-hover:underline">
                  Visit M2P Nexus
                </span>
                <div className="h-[1px] bg-cocos/30 flex-grow max-w-[80px] group-hover:max-w-[120px] transition-all duration-500" />
              </a>
            </div>
          </motion.div>

          {/* M2P Cocos Card */}
          <motion.div
            id="showcase-cocos"
            onMouseEnter={() => setHoveredBrand("cocos")}
            onMouseLeave={() => setHoveredBrand(null)}
            animate={{
              flex: hoveredBrand === "cocos" ? 1.8 : hoveredBrand === "nexus" ? 0.7 : 1,
            }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className={`relative rounded-3xl overflow-hidden bg-card-bg flex flex-col justify-between p-8 md:p-12 group cursor-pointer border border-navy/5 ${
              hoveredBrand === "cocos"
                ? "border-cocos/40 shadow-[0_0_50px_rgba(200,157,124,0.1)]"
                : "border-navy/5"
            }`}
          >
            {/* Background Zoom Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={prefixPath("/images/cocos-bg.jpg")}
                alt="M2P Cocos Premium Coconut"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-25 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-card-bg/60 to-transparent" />
            </div>

            {/* Glowing Amber Mesh */}
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full glow-cocos pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Top Row: Brand Header */}
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-cocos/20 bg-cocos/5 text-[10px] font-bold tracking-widest text-cocos uppercase mb-3 w-fit">
                  <Sprout className="w-3 h-3" />
                  Premium Organic Coconut Sales
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight group-hover:text-gradient-cocos transition-all duration-500">
                  M2P Cocos
                </h3>
              </div>
              <span className="w-12 h-12 rounded-full border border-navy/10 flex items-center justify-center bg-white/80 text-navy group-hover:bg-cocos group-hover:text-black group-hover:scale-110 group-hover:border-cocos transition-all duration-500">
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </span>
            </div>

            {/* Bottom Row: Content & Specs */}
            <div className="relative z-10 mt-auto">
              <p className="text-navy-muted text-sm md:text-base max-w-md mb-8 leading-relaxed font-sans font-light">
                An ultra-luxury organic brand delivering premium direct-to-consumer coconut water, cold-pressed oils, and functional products. Built on ethical smallholder partnerships and clean-label hydration.
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-navy/10 pt-6">
                {cocosSpecs.map((spec, i) => {
                  const Icon = spec.icon;
                  return (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-cocos/10 border border-cocos/15 text-cocos">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs text-navy-muted font-medium font-sans">
                        {spec.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Action Button */}
              <div className="mt-8 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-cocos group-hover:underline">
                  Visit M2P Cocos
                </span>
                <div className="h-[1px] bg-cocos/30 flex-grow max-w-[80px] group-hover:max-w-[120px] transition-all duration-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
