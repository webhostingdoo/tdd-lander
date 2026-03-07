"use client";

import Image from "next/image";

export default function InsuranceCoverage() {
  return (
    <section
      id="addiction-treatment"
      className="py-20 md:py-28 scroll-mt-24"
      style={{ backgroundColor: "#0a1f35" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <span className="text-gold text-sm uppercase tracking-[0.2em] mb-4 block">
          Inpatient Treatment
        </span>

        {/* Row 1: Big title left, image right */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
          <div>
            <h2 className="font-maistra text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Medical Detox &amp; Residential Treatment
            </h2>
            <p className="text-white/75 text-xl leading-relaxed">
              Our inpatient program is built for immediate placement — no waitlists, no runaround. If you&apos;re ready, we&apos;re ready.
            </p>
            <p className="text-white/75 text-xl leading-relaxed mt-4">
              From acute medical detox through full residential care, every level of treatment is under one roof.
            </p>
            <div className="flex flex-nowrap gap-6 mt-8">
              <div className="flex flex-col items-center gap-2 text-white/90">
                <svg className="text-white shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                <span className="text-xs md:text-sm uppercase tracking-wider text-center">Immediate Placement</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-white/90">
                <svg className="text-white shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <span className="text-xs md:text-sm uppercase tracking-wider text-center">100% Confidential</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-white/90">
                <svg className="text-white shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <span className="text-xs md:text-sm uppercase tracking-wider text-center">Residential Care</span>
              </div>
            </div>
          </div>
          <Image
            src="/images/gallery/family.jpg"
            alt="Inpatient drug and alcohol detox"
            width={898}
            height={543}
            quality={80}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Row 2: Image left, text right */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <span className="text-gold text-sm uppercase tracking-[0.2em] mb-4 block">
              Your Insurance, Maximized
            </span>
            <h3 className="font-maistra text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Your PPO Plan Was Made for This
            </h3>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Most PPO plans cover the full cost of inpatient detox and residential treatment. We verify your benefits in minutes, handle the paperwork, and make sure you&apos;re using every dollar your plan allows — so you can focus on one thing.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "24/7 Medical Withdrawal Management",
                "Private Rooms, Single-Patient Focus",
                "30, 60, or 90-Day Residential Programs",
                "Most PPO Plans Covered Up to 100%",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white text-lg">
                  <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="tel:+18669717393"
                className="inline-block px-8 py-4 text-center font-semibold rounded btn-primary transition"
              >
                <span className="text-lg">(866) 971-7393</span>
                <br />
                <span className="text-sm font-normal">Call for Free Assessment</span>
              </a>
              <span className="text-white/50 text-sm uppercase tracking-widest">or</span>
              <a
                href="#verify-form"
                className="inline-block px-8 py-4 text-center font-semibold rounded border-2 border-white text-white hover:bg-white/10 transition"
              >
                <span className="text-lg uppercase">Verify Your Benefits</span>
                <br />
                <span className="text-sm font-normal text-white/75 uppercase">Quick &amp; Confidential</span>
              </a>
            </div>
          </div>
          <Image
            src="/images/gallery/group-therapy.jpg"
            alt="Relapse prevention program"
            width={600}
            height={400}
            quality={80}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-lg w-full h-auto object-cover md:order-first"
          />
        </div>
      </div>
    </section>
  );
}
