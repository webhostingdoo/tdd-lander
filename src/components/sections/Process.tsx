"use client";

import { useState } from "react";

const processSteps = [
  {
    number: "01",
    title: "Verify Insurance",
    description:
      "We work with most major insurance providers. Our team handles the paperwork so you can focus on healing.",
    cta: "Check coverage now",
    href: "#verify-form",
  },
  {
    number: "02",
    title: "Speak with a Specialist",
    description:
      "Connect with a compassionate intake coordinator who will listen to your story and answer all your questions privately.",
    cta: "Call 727-509-8278",
    href: "tel:+17275098278",
  },
  {
    number: "03",
    title: "Begin Your Recovery",
    description:
      "Arrive at our facility where our clinical team has prepared a personalized treatment plan specifically for you.",
    cta: "View Admissions Info",
    href: "#verify-form",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left — Blockquote */}
        <div className="relative pl-8 border-l-2 border-white/20">
          <blockquote className="font-maistra italic font-normal text-white leading-tight mb-8" style={{fontSize: "3rem"}}>
            &ldquo;We don&rsquo;t just treat symptoms; we build the
            foundation for a life you actually want to live.&rdquo;
          </blockquote>
          <div>
            <strong className="text-white text-sm tracking-[0.2em] uppercase">
              Patrick Santosuosso
            </strong>
            <p className="text-white/60 text-xs tracking-[0.15em] uppercase mt-1">
              CEO &amp; Co-Founder
            </p>
          </div>
        </div>

        {/* Right — Accordion */}
        <div className="space-y-4">
          {processSteps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <div
                key={step.number}
                className="rounded-lg overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: isActive ? "rgba(42,82,152,0.4)" : "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderLeft: isActive ? "3px solid var(--gold)" : "1px solid rgba(255,255,255,0.12)",
                }}
                onClick={() =>
                  setActiveStep(isActive ? null : i)
                }
              >
                <div className="flex items-center justify-between px-6 py-5">
                  <div className="flex items-center gap-4">
                    <span className="text-white/30 font-cormorant italic text-4xl leading-none">
                      {step.number}
                    </span>
                    <h2 className="text-base font-semibold text-white tracking-wide">
                      {step.title}
                    </h2>
                  </div>
                  <span
                    className="text-white/50 text-sm transition-transform duration-300"
                    style={{
                      transform: isActive
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    &#9660;
                  </span>
                </div>
                <div
                  className="transition-all duration-300 overflow-hidden"
                  style={{
                    maxHeight: isActive ? "200px" : "0",
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-6">
                    <p className="text-white/75 mb-3">
                      {step.description}
                    </p>
                    <a
                      href={step.href}
                      className="text-gold text-sm font-semibold hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {step.cta} &rarr;
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
