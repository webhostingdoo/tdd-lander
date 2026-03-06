"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Detox", href: "/detox" },
  { label: "Residential", href: "/residential" },
  { label: "FAQ", href: "/faq" },
  { label: "Verify Insurance", href: "/verify-insurance" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ═══════════════════════ HEADER ═══════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-navy/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        {/* Top bar */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 py-9">
          <a href="#" className="shrink-0">
            <Image
              src="/images/logos/amity-logo.png"
              alt="Tru Dallas Detox"
              width={250}
              height={50}
              priority
              className="w-[180px] md:w-[250px] h-auto"
            />
          </a>

          {/* Logo + title group */}
          <div className="hidden lg:flex items-center gap-4 ml-4">
            <div className="w-px h-8 bg-white/30" />
            <div className="flex items-center gap-3">
              <span className="text-white font-maistra text-base tracking-widest uppercase">
                Tru Dallas Detox
              </span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Spacer to push mobile button right */}
          <div className="flex items-center gap-3 ml-auto">
            <a
              href="tel:+18669717393"
              className="hidden sm:inline-block lg:hidden px-4 py-2 text-sm font-semibold rounded btn-primary transition"
            >
              (866) 971-7393
            </a>
            <button
              className="block text-white text-2xl p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className="block w-6 h-px bg-white lg:w-8"></span>
                <span className="block w-6 h-px bg-white lg:w-8"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Desktop navigation bar */}
        <nav className="hidden lg:block border-t border-b border-white/15">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-8 h-[44px]">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`nav-link text-base tracking-[0.05em] text-white/75 hover:text-white transition-colors ${activeLink === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="tel:+18669717393"
              className="px-5 py-2.5 text-sm font-semibold rounded btn-primary transition whitespace-nowrap"
            >
              (866) 971-7393
            </a>
          </div>
        </nav>

      </header>

      {/* Full overlay navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* LEFT PANEL - white/cream */}
          <div className="relative z-10 w-full lg:w-[35%] bg-[#f7f5f0] flex flex-col overflow-y-auto h-full">

            {/* Mobile only: hero image at top */}
            <div className="lg:hidden relative h-[220px] w-full shrink-0">
              <img
                src="/images/hero/tdd-hero-desktop.jpg"
                alt="Tru Dallas Detox"
                className="w-full h-full object-cover"
              />
              {/* Mobile top bar over image */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3 bg-navy/80">
                <img src="/images/logos/amity-logo.png" alt="Tru Dallas Detox" className="h-8 w-auto" />
                <a href="tel:+18669717393" className="px-4 py-2 text-sm font-semibold bg-navy text-white rounded">
                  (866) 971-7393
                </a>
                <button onClick={() => setMobileMenuOpen(false)} className="text-white text-2xl p-1">{"\u2715"}</button>
              </div>
            </div>

            {/* Desktop logo area */}
            <div className="hidden lg:flex items-start gap-3 px-10 pt-10 pb-6">
              <img src="/images/logos/amity-logo.png" alt="Tru Dallas Detox" className="h-10 w-auto" />
            </div>

            {/* Title + stars - desktop only */}
            <div className="hidden lg:block px-10 pb-8">
              <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-1">Tru Dallas Detox</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#D4AF37">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-8 lg:px-10 py-4 lg:py-0 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => { setActiveLink(link.href); setMobileMenuOpen(false); }}
                  className={`py-4 text-lg font-light border-b border-gray-200 transition-colors ${
                    activeLink === link.href ? "text-[#0e2a47] font-semibold" : "text-gray-600 hover:text-[#0e2a47]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Bottom link */}
            <div className="px-8 lg:px-10 mt-6">
              <div className="border-t border-gray-300">
                <a href="#" className="flex items-center justify-between py-5 text-xl font-light text-gray-800 hover:text-[#0e2a47] transition-colors">
                  <span>Tru Dallas Detox</span>
                  <span className="text-2xl">&rarr;</span>
                </a>
                <div className="border-t border-gray-300"></div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - hero image, desktop only */}
          <div className="hidden lg:block flex-1 relative">
            <img
              src="/images/hero/tdd-hero-desktop.jpg"
              alt="Tru Dallas Detox"
              className="w-full h-full object-cover"
            />
            {/* X close button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white text-xl flex items-center justify-center hover:bg-white/30 transition"
            >
              {"\u2715"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
