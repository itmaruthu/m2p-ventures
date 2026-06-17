"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FormEvent, useState } from "react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const footerLinks = {
    ventures: [
      { name: "M2P Nexus", href: "#showcase-nexus" },
      { name: "M2P Cocos", href: "#showcase-cocos" },
    ],
    company: [
      { name: "About Ecosystem", href: "#about" },
      { name: "Synergy Framework", href: "#ecosystem" },
      { name: "Core Strengths", href: "#why-choose-us" },
      { name: "Governance", href: "#" },
    ],
    socials: [
      { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
      { name: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
      { name: "GitHub", href: "https://github.com", icon: GithubIcon },
    ],
  };

  return (
    <footer
      id="contact"
      className="relative bg-footer-bg pt-24 pb-12 px-4 md:px-8 border-t border-navy/5 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full glow-ventures opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-navy/5">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="#" className="flex items-center gap-2 group w-fit">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-white p-0.5 border border-white/10 shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="M2P Ventures Logo"
                  fill
                  sizes="32px"
                  className="object-contain rounded-md"
                />
              </div>
              <span className="font-sans font-bold text-lg md:text-xl tracking-tight text-navy group-hover:text-navy-muted transition-colors duration-300">
                M2P <span className="font-light text-navy-muted">Ventures</span>
              </span>
            </Link>
            <p className="text-navy-muted text-sm max-w-sm leading-relaxed font-sans font-light">
              M2P Ventures is a luxury holding ecosystem driving innovation, culinary excellence, and advanced custom enterprise software solutions. Fostering tomorrow&apos;s market leaders.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {footerLinks.socials.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-navy/5 bg-navy/5 flex items-center justify-center text-navy-muted hover:text-navy hover:border-navy/15 hover:scale-105 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column 1: Ventures */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-navy-light font-bold mb-6">
              Our Ventures
            </h4>
            <ul className="space-y-4 text-sm">
              {footerLinks.ventures.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-navy-muted hover:text-navy transition-colors duration-300 flex items-center gap-1 group w-fit"
                  >
                    {link.name}{" "}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2: Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-navy-light font-bold mb-6">
              Ecosystem
            </h4>
            <ul className="space-y-4 text-sm">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-navy-muted hover:text-navy transition-colors duration-300 flex items-center gap-1 group w-fit"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-navy-light font-bold mb-6">
              Contact
            </h4>
            <div className="flex items-start gap-3 text-navy-muted text-sm">
              <MapPin className="w-4 h-4 text-navy-light mt-0.5 shrink-0" />
              <span className="font-light">
                Sithalangudi, Madurai,<br />
                Tamil Nadu, India
              </span>
            </div>
            <div className="flex items-center gap-3 text-navy-muted text-sm">
              <Mail className="w-4 h-4 text-navy-light shrink-0" />
              <a href="mailto:hello@m2pnexus.com" className="hover:text-navy transition-colors font-light">
                hello@m2pnexus.com
              </a>
            </div>
            <div className="flex items-start gap-3 text-navy-muted text-sm">
              <Phone className="w-4 h-4 text-navy-light mt-0.5 shrink-0" />
              <div className="flex flex-col gap-1.5">
                <a href="tel:+919944283316" className="hover:text-navy transition-colors font-light">
                  +91 99442 83316
                </a>
                <a href="tel:+916380465605" className="hover:text-navy transition-colors font-light">
                  +91 63804 65605
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Input */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest text-navy-light font-bold mb-2">
              Subscribe Briefs
            </h4>
            <p className="text-xs text-navy-light leading-relaxed font-sans font-light">
              Receive quarterly updates on AI automations, luxury culinary events, and enterprise engineering briefs.
            </p>
            <form onSubmit={handleSubmit} className="relative mt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#13112e]/50 border border-white/10 text-navy text-xs placeholder-navy-light/40 focus:outline-none focus:border-white/20 transition-all font-sans"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 w-7.5 h-7.5 rounded-lg bg-navy hover:bg-navy-muted text-[#0B0A1A] flex items-center justify-center transition-colors"
                aria-label="Submit Newsletter"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
            <AnimatePresence>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-[10px] text-purple-400 font-semibold"
                >
                  ✓ Successfully subscribed to Briefs.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs text-navy-light font-sans font-light gap-4">
          <span>&copy; {new Date().getFullYear()} M2P Ventures Inc. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-navy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-navy transition-colors">Sovereign Statement</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
