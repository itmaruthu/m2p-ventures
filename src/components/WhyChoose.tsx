"use client";

import React, { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Eye, Shield, Globe, Award } from "lucide-react";

interface TiltCardProps {
  title: string;
  description: string;
  index: number;
  icon: React.ComponentType<{ className?: string }>;
  glowColor: string;
}

function TiltCard({ title, description, index, icon: Icon, glowColor }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation angles (max 10 degrees)
    const rX = ((mouseY / height) - 0.5) * -10;
    const rY = ((mouseX / width) - 0.5) * 10;

    setRotateX(rX);
    setRotateY(rY);
    
    card.style.setProperty("--mouse-x", `${mouseX}px`);
    card.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // Stagger entry: left for even, right for odd
  const isEven = index % 2 === 0;
  const initialX = isEven ? -50 : 50;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 60 }}
      className="perspective-1000"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.15s ease-out",
          transformStyle: "preserve-3d",
        }}
        className={`relative w-full h-80 rounded-3xl p-8 bg-card-bg border border-navy/5 shadow-sm hover:shadow-md flex flex-col justify-between group cursor-pointer hover:border-navy/10`}
      >
        {/* Inner Card Glow Mesh */}
        <div
          className={`absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
          style={{
            background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor} 0%, transparent 60%)`,
          }}
        />

        {/* 3D Floating elements */}
        <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-navy/5 border border-navy/10 flex items-center justify-center text-navy mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-4 tracking-tight group-hover:text-navy-muted transition-colors duration-300">
            {title}
          </h3>
          <p className="text-navy-muted text-sm leading-relaxed font-sans font-light">
            {description}
          </p>
        </div>

        <div
          style={{ transform: "translateZ(30px)" }}
          className="relative z-10 mt-auto flex items-center justify-between text-xs text-navy-light font-bold uppercase tracking-widest group-hover:text-navy transition-colors duration-300"
        >
          <span>Learn Standard</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyChoose() {
  const cardData = [
    {
      title: "Sovereign Governance",
      description: "We enforce strict institutional backing, centralized legal structuring, and robust liquidity pools, shielding all operations from market fluctuations.",
      icon: Shield,
      glowColor: "rgba(94, 92, 230, 0.08)",
    },
    {
      title: "Hedging Synergy",
      description: "Our dual-sector system cushions organic coconut sales against technology consulting dynamics, producing unique trade resilience and capital balance.",
      icon: Award,
      glowColor: "rgba(200, 157, 124, 0.08)",
    },
    {
      title: "Democratic Software",
      description: "We believe software shouldn't be a luxury for mega-corps. M2P Nexus builds custom enterprise systems and AI to shield SMEs from operational vulnerabilities.",
      icon: Globe,
      glowColor: "rgba(59, 130, 246, 0.08)",
    },
    {
      title: "Obsessive Craftsmanship",
      description: "We don't settle for volume; we construct landmarks. From premium packaging to visual identity, every detail matches Apple/Framer standards of aesthetic perfection.",
      icon: Eye,
      glowColor: "rgba(16, 42, 67, 0.05)",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative bg-section-bg py-24 md:py-32 px-4 md:px-8 border-t border-navy/5 overflow-hidden"
    >
      {/* Background glow meshes */}
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] rounded-full glow-nexus opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest text-navy-light font-bold mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-navy mb-6">
            Ecosystem Strengths
          </h2>
          <p className="text-navy-muted text-base md:text-lg max-w-xl mx-auto font-sans font-light">
            How we protect wealth, construct premium products, and drive frictionless trade routing.
          </p>
        </div>

        {/* 3D Tilt Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, idx) => (
            <TiltCard
              key={idx}
              index={idx}
              title={card.title}
              description={card.description}
              icon={card.icon}
              glowColor={card.glowColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
