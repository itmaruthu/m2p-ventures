"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsMounted(true);
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      const x = (e.clientX / clientWidth - 0.5) * 30; // Max 15px displacement
      const y = (e.clientY / clientHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { scrollY } = useScroll();
  // Scroll parallax effects for background elements
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const textY = useTransform(scrollY, [0, 800], [0, -100]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  const headingWords = "Building Brands. Creating Future.".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  } as const;

  const wordVariants = {
    hidden: { y: 60, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 70,
      },
    },
  } as const;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient py-20 px-4 md:px-8"
    >
      {/* Background Image with Parallax & Mouse Move */}
      <motion.div
        style={{ y: isMounted ? bgY : 0 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <motion.div
          style={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
          className="absolute inset-0"
        >
          <Image
            src="/images/ventures-hero.png"
            alt="M2P Ventures background"
            fill
            priority
            className="object-cover opacity-85 scale-105 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-bg via-transparent to-primary-bg" />
        </motion.div>
      </motion.div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Dynamic Glow Meshes */}
      <motion.div
        animate={{
          x: mousePosition.x * -1.2,
          y: mousePosition.y * -1.2,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
        className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full glow-ventures pointer-events-none"
      />
      <motion.div
        animate={{
          x: mousePosition.x * 0.8,
          y: mousePosition.y * 0.8,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
        className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full glow-cocos pointer-events-none"
      />

      {/* Content Container */}
      <motion.div
        style={{ y: isMounted ? textY : 0, opacity: isMounted ? opacity : 1 }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
      >
        {/* Badge */}
        <motion.div
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
          }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-navy/10 bg-white/50 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-navy-muted mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-accent-blue animate-pulse" />
          Strategic Enterprise Group
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-extrabold tracking-tight mb-8 leading-[1.05] text-navy">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 overflow-hidden">
            {headingWords.map((word, idx) => (
              <motion.span
                key={idx}
                variants={wordVariants}
                className={
                  word === "Building"
                    ? "text-gradient-ventures"
                    : word === "Creating"
                    ? "text-gradient-cocos"
                    : "text-navy"
                }
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        {/* Subtitle */}
        <motion.p
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
          }}
          className="text-navy-muted text-lg md:text-xl font-medium max-w-2xl mb-12 leading-relaxed font-sans"
        >
          Cultivating a premium network of high-growth strategic enterprises.
          Transforming traditional markets through modern operational scale and premium standards.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          <a
            href="#showcase-nexus"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-navy hover:bg-navy-muted text-[#0B0A1A] font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-navy/10 hover:scale-[1.02]"
          >
            Explore Ventures
            <span className="w-5 h-5 rounded-full bg-[#0B0A1A]/10 group-hover:bg-[#0B0A1A]/20 flex items-center justify-center transition-colors">
              <Play className="w-2.5 h-2.5 fill-[#0B0A1A] text-[#0B0A1A] translate-x-[1px]" />
            </span>
          </a>
          <a
            href="#ecosystem"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-navy/10 bg-white/80 hover:bg-navy/5 text-navy font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02]"
          >
            Our Ecosystem
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      {isMounted && (
        <motion.div
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer hidden md:flex flex-col items-center gap-2"
          onClick={() => {
            const aboutSection = document.getElementById("about");
            aboutSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-xs uppercase tracking-widest text-navy-light font-semibold">
            Scroll to discover
          </span>
          <div className="w-8 h-8 rounded-full border border-navy/10 flex items-center justify-center bg-white/80 shadow-sm">
            <ArrowDown className="w-4 h-4 text-navy-muted" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
