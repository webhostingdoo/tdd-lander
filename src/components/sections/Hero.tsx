"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-start">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        {/* Mobile image - shown below 768px */}
        <Image
          src="/images/hero/tdd-hero-mobile.jpg"
          alt="True Dallas Detox treatment center"
          fill
          priority
          quality={85}
          className="object-cover md:hidden"
          sizes="100vw"
        />
        {/* Desktop image - shown at 768px and above */}
        <Image
          src="/images/hero/tdd-hero-desktop.jpg"
          alt="True Dallas Detox treatment center"
          fill
          priority
          quality={85}
          className="object-cover hidden md:block"
          sizes="100vw"
        />
      </div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.05) 100%)",
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-28 sm:pt-36 md:pt-64 pb-16">
        <p className="text-sm md:text-base uppercase tracking-[0.2em] text-gold mb-4">
          24/7 Medical Detox &amp; Residential Inpatient
        </p>
        <h1 className="font-maistra text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight max-w-2xl">
          Top-rated Addiction Treatment
        </h1>
        <hr className="border-t-2 border-white w-64 mt-8 mb-8" />
        <p className="text-2xl max-w-lg text-white/75 mb-10 leading-relaxed">
          One call handles everything: free assessment, travel coordination,
          and same-day admission. Available 24/7.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 items-start">
          <a
            href="tel:+18669717393"
            className="inline-block px-8 py-4 text-center font-semibold rounded btn-primary transition"
          >
            <span className="text-xl uppercase">(866) 971-7393</span>
            <br />
            <span className="text-base font-normal uppercase">
              Call for Free Assessment
            </span>
          </a>
          <a
            href="#verify-form"
            className="inline-block px-8 py-4 text-center font-semibold rounded border-2 border-white text-white hover:bg-white/10 transition"
          >
            <span className="text-xl uppercase">VERIFY YOUR BENEFITS</span>
            <br />
            <span className="text-base font-normal text-white/75 uppercase">
              Quick &amp; Confidential
            </span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-2 text-white/90">
            <svg className="text-white shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="text-xs md:text-sm uppercase tracking-wider text-center">100% CONFIDENTIAL</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-white/90">
            <svg className="text-white shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 4v16" />
              <path d="M2 8h18a2 2 0 0 1 2 2v10" />
              <path d="M2 17h20" />
              <path d="M6 8v9" />
            </svg>
            <span className="text-xs md:text-sm uppercase tracking-wider text-center">Same-Day Admission</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-white/90">
            <svg className="text-white shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M12 8v8" />
              <path d="M8 12h8" />
            </svg>
            <span className="text-xs md:text-sm uppercase tracking-wider text-center">24/7 Clinical Staff</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-white/90">
            <svg className="text-white shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            <span className="text-xs md:text-sm uppercase tracking-wider text-center">INSURANCE ACCEPTED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
