"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Shield, Target, TrendingUp } from "lucide-react";

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const blur = useTransform(progress, range, ["blur(4px)", "blur(0px)"]);

  return (
    <span className="relative mr-2 md:mr-3 inline-block">
      <span className="absolute opacity-10 text-navy-light select-none">{children}</span>
      <motion.span style={{ opacity, filter: blur }} className="text-navy font-semibold">
        {children}
      </motion.span>
    </span>
  );
}

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Track scroll of the text container
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 80%", "end 50%"],
  });

  const storyText = 
    "At M2P Ventures, we believe in building enterprises that define tomorrow. " +
    "We stand as the central nervous system of a diverse enterprise group, " +
    "fostering operations that combine premium sensory products with custom enterprise technology. " +
    "Through M2P Nexus, we modernize manufacturing, trading, and agribusinesses. " +
    "Through M2P Cocos, we redefine premium agricultural trade and organic coconut sales. " +
    "Two divisions, one united corporate vision of luxury, resilience, and scale.";

  const words = storyText.split(" ");

  const timelineMilestones = [
    {
      year: "2021",
      title: "Founding & Capitalization",
      desc: "M2P Ventures was incorporated with a vision to merge lifestyle craftsmanship with strategic logistics networks.",
      icon: Shield,
      color: "border-purple-500/30 text-purple-400",
    },
    {
      year: "2025",
      title: "M2P Nexus Inception",
      desc: "Deployed next-gen logistics tracking, dry bulk shipping charters, and global trade corridors, connecting international markets.",
      icon: TrendingUp,
      color: "border-nexus/30 text-nexus",
    },
    {
      year: "2023",
      title: "M2P Cocos Launch",
      desc: "Disrupted the agricultural sales sector by establishing a premium direct-to-consumer organic coconut water and wellness brand.",
      icon: Target,
      color: "border-cocos/30 text-cocos",
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen py-24 md:py-32 px-4 md:px-8 bg-section-bg overflow-hidden border-t border-navy/5"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full glow-ventures pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
        
        {/* Left: Scroll Reveal Text Story */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs uppercase tracking-widest text-navy-light font-bold mb-4">
            Ecosystem Vision
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-8 text-navy">
            Architecting the next epoch of enterprise.
          </h2>

          <div ref={textRef} style={{ fontFamily: '"Times New Roman", Times, serif' }} className="flex flex-wrap text-xl md:text-3xl leading-relaxed text-left py-4">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = (i + 1) / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </div>
        </div>

        {/* Right: Vertical Timeline */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="text-xs uppercase tracking-widest text-navy-light font-bold mb-8">
            Our Timeline
          </span>

          <div className="relative border-l-2 border-navy/10 ml-4 pl-8 py-2 space-y-12">
            {timelineMilestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[45px] top-1.5 w-7 h-7 rounded-full bg-section-bg border flex items-center justify-center ${milestone.color} shadow-md shadow-navy/5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-navy mt-1 group-hover:text-navy-muted transition-colors duration-300">
                    {milestone.title}
                  </h3>
                  
                  <p className="text-navy-muted text-sm md:text-base mt-2 leading-relaxed font-sans font-light">
                    {milestone.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
