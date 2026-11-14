"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-obsidian/95 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-gradient-to-b from-obsidian/90 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#home"
          className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
        >
          <span className="font-serif text-xl sm:text-2xl tracking-[0.22em] text-white font-semibold">
            {BUSINESS_INFO.brand}
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-champagne">
            Seattle · Private Chauffeur
          </span>
        </a>

        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-[0.18em] text-zinc-300 hover:text-champagne transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href={BUSINESS_INFO.phoneHref}
            className="flex items-center gap-2 text-xs tracking-wider text-zinc-300 hover:text-champagne transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-champagne" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>
          <a
            href="#quote-form"
            className="px-5 py-2.5 bg-champagne text-obsidian font-semibold text-xs uppercase tracking-[0.18em] hover:bg-champagne-light transition-colors"
          >
            Book Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-zinc-200 hover:text-champagne focus:outline-none"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-charcoal border-b border-white/10 px-6 pt-4 pb-8 space-y-4">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-sm uppercase tracking-[0.2em] text-zinc-200 hover:text-champagne border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="flex items-center justify-center gap-2 py-3 border border-white/15 text-xs uppercase tracking-widest text-zinc-200"
            >
              <Phone className="w-4 h-4 text-champagne" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
            <a
              href="#quote-form"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-center bg-champagne text-obsidian font-semibold text-xs uppercase tracking-[0.2em]"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}