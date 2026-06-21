"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle, Layers, ShieldCheck, Zap, ArrowRightLeft } from "lucide-react";
import Image from "next/image";
import { prefixPath } from "@/config";

export default function Ecosystem() {
  const [activeNode, setActiveNode] = useState<"parent" | "cocos" | "nexus" | null>(null);

  return (
    <section
      id="ecosystem"
      className="relative bg-section-bg py-24 md:py-32 px-4 md:px-8 border-t border-navy/5 overflow-hidden"
    >
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,42,67,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-navy-light font-bold mb-4 block">
            Ecosystem Architecture
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-navy mb-6">
            Synergetic Relationships
          </h2>
          <p className="text-navy-muted text-base md:text-lg max-w-2xl mx-auto font-sans font-light">
            M2P Ventures coordinates capital injection, resource deployment, and structural oversight, linking premium agricultural trade with custom enterprise software.
          </p>
        </div>

        {/* Node Diagram */}
        <div className="relative flex flex-col items-center justify-center min-h-[450px] py-10">
          
          {/* Animated Connections (SVG Lines) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" style={{ minHeight: "450px" }}>
            {/* Left Line: Ventures -> Nexus */}
            <path
              d="M 576,80 Q 400,80 300,240"
              fill="none"
              stroke="rgba(16,42,67,0.08)"
              strokeWidth="2"
            />
            {/* Left Glowing Flow Dash */}
            <motion.path
              d="M 576,80 Q 400,80 300,240"
              fill="none"
              stroke="url(#nexus-grad)"
              strokeWidth="3"
              strokeDasharray="20 120"
              animate={{
                strokeDashoffset: activeNode === "nexus" ? [0, -280] : [0, -140],
              }}
              transition={{
                repeat: Infinity,
                duration: activeNode === "nexus" ? 1.5 : 3,
                ease: "linear",
              }}
            />

            {/* Right Line: Ventures -> Cocos */}
            <path
              d="M 576,80 Q 752,80 852,240"
              fill="none"
              stroke="rgba(16,42,67,0.08)"
              strokeWidth="2"
            />
            {/* Right Glowing Flow Dash */}
            <motion.path
              d="M 576,80 Q 752,80 852,240"
              fill="none"
              stroke="url(#cocos-grad)"
              strokeWidth="3"
              strokeDasharray="20 120"
              animate={{
                strokeDashoffset: activeNode === "cocos" ? [0, -280] : [0, -140],
              }}
              transition={{
                repeat: Infinity,
                duration: activeNode === "cocos" ? 1.5 : 3,
                ease: "linear",
              }}
            />

            {/* Horizontal Shared Synergy Line: Cocos <-> Nexus */}
            <path
              d="M 300,280 Q 576,360 852,280"
              fill="none"
              stroke="rgba(16,42,67,0.05)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="cocos-grad" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#102a43" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#c89d7c" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="nexus-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#102a43" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Node Grid Layout */}
          <div className="relative z-10 flex flex-col md:grid md:grid-cols-3 gap-16 md:gap-8 items-center w-full max-w-4xl">
            
            {/* Column 1: M2P Nexus Node */}
            <div className="flex flex-col items-center justify-center">
              <motion.div
                onMouseEnter={() => setActiveNode("nexus")}
                onMouseLeave={() => setActiveNode(null)}
                whileHover={{ y: -5, scale: 1.03 }}
                className={`w-64 p-6 rounded-2xl bg-card-bg flex flex-col items-center text-center border transition-all duration-500 ${
                  activeNode === "nexus"
                    ? "border-accent-blue/40 shadow-lg shadow-accent-blue/5"
                    : "border-navy/5"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue mb-4 shadow-sm">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-1">M2P Nexus</h3>
                <span className="text-[10px] text-accent-blue font-semibold uppercase tracking-widest mb-3">
                  Digital Solutions
                </span>
                <p className="text-xs text-navy-muted font-sans font-light">
                  Modernizes manufacturing, trading, and agribusinesses through custom systems and AI.
                </p>
              </motion.div>
            </div>

            {/* Column 2: Parent M2P Ventures Node */}
            <div className="flex flex-col items-center justify-center md:-mt-16">
              <motion.div
                onMouseEnter={() => setActiveNode("parent")}
                onMouseLeave={() => setActiveNode(null)}
                whileHover={{ scale: 1.05 }}
                className={`w-64 p-7 rounded-3xl bg-card-bg flex flex-col items-center text-center border transition-all duration-500 ${
                  activeNode === "parent"
                    ? "border-purple-500/40 shadow-lg shadow-purple-500/5"
                    : "border-navy/10"
                }`}
              >
                <div className="relative w-14 h-14 rounded-2xl bg-white p-1 border border-white/10 shadow-md mb-4 shrink-0 overflow-hidden">
                  <Image
                    src={prefixPath("/images/logo.png")}
                    alt="M2P Ventures Logo"
                    fill
                    sizes="56px"
                    className="object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-black text-navy tracking-wide">M2P Ventures</h3>
                <span className="text-[10px] text-navy-light font-bold uppercase tracking-widest mb-3">
                  Central Governance
                </span>
                <p className="text-xs text-navy-muted font-sans font-light leading-relaxed">
                  Injects capital, risk-management systems, compliance, and corporate vision to all holdings.
                </p>
              </motion.div>
            </div>

            {/* Column 3: M2P Cocos Node */}
            <div className="flex flex-col items-center justify-center">
              <motion.div
                onMouseEnter={() => setActiveNode("cocos")}
                onMouseLeave={() => setActiveNode(null)}
                whileHover={{ y: -5, scale: 1.03 }}
                className={`w-64 p-6 rounded-2xl bg-card-bg flex flex-col items-center text-center border transition-all duration-500 ${
                  activeNode === "cocos"
                    ? "border-cocos/40 shadow-lg shadow-cocos/5"
                    : "border-navy/5"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-cocos/10 border border-cocos/20 flex items-center justify-center text-cocos mb-4 shadow-sm">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-1">M2P Cocos</h3>
                <span className="text-[10px] text-cocos font-semibold uppercase tracking-widest mb-3">
                  Sensory Brand
                </span>
                <p className="text-xs text-navy-muted font-sans font-light">
                  Feeds luxury retail demand. Leverages strategic group governance and supply chain systems.
                </p>
              </motion.div>
            </div>
            
          </div>
        </div>

        {/* Dynamic Synergy Explanation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          
          <div className="p-6 rounded-2xl bg-card-bg border border-navy/5 shadow-sm flex gap-4">
            <div className="p-3 rounded-xl bg-navy/5 text-purple-500 h-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-navy mb-1">1. Sovereign Capital</h4>
              <p className="text-xs text-navy-muted leading-relaxed font-sans font-light">
                Ventures acts as the central fund, allocating capital dynamically, cushioning market fluctuations, and securing credit lines.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-card-bg border border-navy/5 shadow-sm flex gap-4">
            <div className="p-3 rounded-xl bg-navy/5 text-accent-blue h-fit">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-navy mb-1">2. Intelligent Automation</h4>
              <p className="text-xs text-navy-muted leading-relaxed font-sans font-light">
                Nexus engineers enterprise systems and AI tools, automating supply tracking and crop intelligence for Cocos operations.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-card-bg border border-navy/5 shadow-sm flex gap-4">
            <div className="p-3 rounded-xl bg-navy/5 text-cocos h-fit">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-navy mb-1">3. Corporate Support</h4>
              <p className="text-xs text-navy-muted leading-relaxed font-sans font-light">
                Shared legal, marketing, and recruitment overheads are optimized under a unified, premium corporate architecture.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
