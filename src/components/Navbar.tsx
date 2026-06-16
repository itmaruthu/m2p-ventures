"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "Why Us", href: "#why-choose-us" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-8 py-4">
      <nav
        className={`max-w-7xl mx-auto rounded-full px-6 py-3 md:py-4 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "bg-[#0B0A1A]/75 backdrop-blur-lg border border-navy/5 shadow-md py-3 md:py-3.5"
            : "bg-transparent border-b border-navy/5 py-4"
        }`}
      >
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 group">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-white p-0.5 border border-white/10 shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
            <Image
              src="/images/logo.png"
              alt="M2P Ventures Logo"
              fill
              className="object-contain rounded-md"
            />
          </div>
          <span className="font-sans font-bold text-lg md:text-xl tracking-tight text-navy group-hover:text-navy-muted transition-colors duration-300">
            M2P <span className="font-light text-navy-muted">Ventures</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-navy-muted hover:text-navy transition-colors duration-300 relative py-2"
            >
              {item.name}
            </Link>
          ))}

          {/* Ventures Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="flex items-center gap-1 text-navy-muted hover:text-navy transition-colors duration-300 py-2 cursor-pointer">
              Our Companies <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl bg-[#13112e]/95 backdrop-blur-md p-2 shadow-lg border border-navy/5"
                >
                  <Link
                    href="#showcase-nexus"
                    className="flex flex-col p-3 rounded-xl hover:bg-navy/5 transition-colors duration-200 group/item"
                  >
                    <span className="text-nexus text-sm font-semibold flex items-center gap-1">
                      M2P Nexus <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    </span>
                    <span className="text-navy-light text-xs mt-0.5">
                      Technology consulting & digital solutions.
                    </span>
                  </Link>
                  <Link
                    href="#showcase-cocos"
                    className="flex flex-col p-3 rounded-xl hover:bg-navy/5 transition-colors duration-200 group/item mt-1"
                  >
                    <span className="text-cocos text-sm font-semibold flex items-center gap-1">
                      M2P Cocos <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    </span>
                    <span className="text-navy-light text-xs mt-0.5">
                      Premium organic coconut sales & products.
                    </span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Contact CTA */}
        <Link
          href="#contact"
          className="hidden md:flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#0B0A1A] bg-navy hover:bg-navy-muted px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm shadow-navy/5 hover:scale-[1.02]"
        >
          Connect <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full hover:bg-navy/5 text-navy transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Slide */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-white/95 border border-navy/10 rounded-3xl p-6 shadow-xl"
          >
            <div className="flex flex-col gap-5 text-base font-medium">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-navy-muted hover:text-navy transition-colors py-2 border-b border-navy/5"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <span className="text-xs text-navy-light font-bold uppercase tracking-widest px-2">
                  Our Divisions
                </span>
                <Link
                  href="#showcase-nexus"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-navy/5 text-nexus font-semibold"
                >
                  M2P Nexus <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#showcase-cocos"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-navy/5 text-cocos font-semibold"
                >
                  M2P Cocos <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-[#0B0A1A] bg-navy py-3 rounded-full mt-4"
              >
                Connect <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
