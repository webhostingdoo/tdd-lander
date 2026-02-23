"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/* ─── Navigation ─── */
const navLinks = [
  { label: "Home", href: "#" },
  { label: "Addiction Treatment", href: "#addiction-treatment" },
  { label: "Mental Health", href: "#mental-health" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact Us", href: "#verify-form" },
];

/* ─── Process Steps ─── */
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

/* ─── Facility Cards ─── */
const facilityCards = [
  {
    name: "Amity Palm Beach FL",
    location: "Palm Beach FL",
    image: "/images/gallery/amity-palm%20beach-slide.jpg",
    description:
      "Our mission at Amity Palm Beach is to empower individuals to achieve lasting recovery through addiction treatment in Palm Beach and providing personalized treatment plans tailored to each client\u2019s unique needs.",
  },
  {
    name: "Amity Huntington Beach CA",
    location: "Huntington Beach, CA",
    image: "/images/gallery/amity-3-slide.jpg",
    description:
      "Located in the restorative coastal community of Huntington Beach, Amity offers a calm, grounding atmosphere essential for early recovery. Our facility utilizes this serene setting to help patients disconnect from stress and focus entirely on their clinical treatment plan.",
  },
  {
    name: "Amity San Diego CA",
    location: "San Diego, CA",
    image: "/images/gallery/amity-2-slide.jpg",
    description:
      "Amity San Diego is a holistic, evidence-based drug and alcohol treatment center located in beautiful San Diego, California. We combine evidence-based practices with holistic therapies to address the physical, emotional, and spiritual aspects of addiction.",
  },
];

/* ─── Treatment Cards ─── */
const treatmentCards = [
  {
    title: "Medical Drug & Alcohol Detox",
    image: "/images/gallery/Amiti-Palm-Beach-Detox-facility.jpg",
    alt: "Drug and Alcohol Detox - Palm Beach, FL",
    description:
      "A clinically supervised process to manage withdrawal safely and comfortably. Our medical professionals provide 24/7 care, ensuring a stable foundation for your addiction recovery journey.",
  },
  {
    title: "Inpatient Treatment",
    image: "/images/gallery/Amitiy-Behavioral-Health-house-outdoors.jpg",
    alt: "Inpatient Residential Treatment in Florida and California",
    description:
      "An immersive, structured approach to care, laying the groundwork for successful recovery. Our team offers a blend of support and evidence-based therapies, setting the stage for a stable foundation after drug and alcohol detox.",
  },
  {
    title: "Alumni Aftercare & Relapse Prevention",
    image: "/images/gallery/Amity-Behavioral-Health-Alumni.jpg",
    alt: "Alumni Aftercare & Relapse Prevention",
    description:
      "Ongoing support beyond treatment, including regular check-ins and relapse-prevention strategies. Stay connected and maintain your recovery success long-term.",
  },
];

/* ─── Insurance Logos ─── */
const insuranceLogos = [
  { name: "Aetna", src: "/images/insurance/aetna.png" },
  { name: "Cigna", src: "/images/insurance/cigna.png" },
  { name: "GEHA", src: "/images/insurance/geha.png" },
  { name: "Anthem", src: "/images/insurance/anthem.png" },
  { name: "UnitedHealthcare", src: "/images/insurance/unitedhealthcare.png" },
  {
    name: "Blue Cross Blue Shield",
    src: "/images/insurance/bluecross-blueshield.png",
  },
  { name: "HealthPartners", src: "/images/insurance/healthpartners.png" },
  { name: "ComPsych", src: "/images/insurance/compsych.png" },
];

/* ─── Amenities ─── */
const amenities = [
  "Outdoor Activities",
  "Medical Detox Services",
  "Wellness & Spa",
  "Beach Outings",
  "Chef-Prepared Meals",
];

/* ─── Insurance Bullets ─── */
const insuranceBullets = [
  "Most PPO Insurance Accepted",
  "Free Benefit Verification",
  "Streamlined Admissions",
  "Individual Therapy",
  "Co-Occurring Mental Health Disorders",
  "Immediate Help Available",
];

/* ══════════════════════════════════════════════════════════════════════════ */

export default function Home() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 py-3">
          <a href="#" className="shrink-0">
            <Image
              src="/images/logos/amity-logo.png"
              alt="Amity Palm Beach"
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
                Amity Palm Beach
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
            <button
              className="block text-white text-2xl p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className="block w-6 h-px bg-white"></span>
                <span className="block w-6 h-px bg-white"></span>
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
                  className="text-xs tracking-[0.15em] uppercase text-white/75 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="tel:+17275098278"
              className="px-5 py-2.5 text-sm font-semibold rounded bg-gold text-navy hover:brightness-110 transition whitespace-nowrap"
            >
              (727) 509-8278
            </a>
          </div>
        </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-white/15 bg-navy px-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-sm tracking-wider uppercase text-white/75 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+17275098278"
              className="block mt-4 text-center py-3 rounded font-semibold bg-gold text-navy sm:hidden"
            >
              (727) 509-8278
            </a>
          </nav>
        )}
      </header>

      <main>
        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section className="relative min-h-[100svh] flex items-center">
          {/* Background picture element with 3 sources */}
          <picture className="absolute inset-0 w-full h-full">
            <source
              media="(min-width: 1440px)"
              srcSet="/images/hero/amity-2-4k.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/images/hero/amity-2-desktop.jpg"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero/amity-2-mobile.jpg"
              alt="Amity Palm Beach treatment center in California"
              className="w-full h-full object-cover"
              fetchPriority="high"
              sizes="100vw"
            />
          </picture>

          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(14,42,71,0.85) 0%, rgba(14,42,71,0.5) 50%, rgba(0,0,0,0.3) 100%)",
            }}
          />

          {/* Hero content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32 md:py-40">
            <p className="text-sm md:text-base uppercase tracking-[0.2em] text-gold mb-4">
              24/7 Medical Detox &amp; Residential Inpatient
            </p>
            <h1 className="font-maistra text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Top-rated Addiction Treatment
            </h1>
            <hr className="border-t-2 border-gold w-20 mb-6" />
            <p className="text-lg md:text-xl max-w-2xl text-white/75 mb-10 leading-relaxed">
              One call handles everything: free assessment, travel coordination,
              and same-day admission. Available 24/7.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="tel:+17275098278"
                className="inline-block px-8 py-4 text-center font-semibold rounded bg-gold text-navy hover:brightness-110 transition"
              >
                <span className="text-lg">(727) 509-8278</span>
                <br />
                <span className="text-sm font-normal">
                  Call for Free Assessment
                </span>
              </a>
              <a
                href="#verify-form"
                className="inline-block px-8 py-4 text-center font-semibold rounded border-2 border-white text-white hover:bg-white/10 transition"
              >
                VERIFY YOUR BENEFITS
                <br />
                <span className="text-sm font-normal text-white/75">
                  Quick &amp; Confidential
                </span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 md:gap-10">
              <div className="flex items-center gap-2 text-white/90">
                <svg
                  className="text-gold shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span className="text-xs md:text-sm uppercase tracking-wider">
                  100% CONFIDENTIAL
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <svg
                  className="text-gold shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 4v16" />
                  <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                  <path d="M2 17h20" />
                  <path d="M6 8v9" />
                </svg>
                <span className="text-xs md:text-sm uppercase tracking-wider">
                  Same-Day Admission
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <svg
                  className="text-gold shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
                <span className="text-xs md:text-sm uppercase tracking-wider">
                  24/7 Clinical Staff
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <svg
                  className="text-gold shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                <span className="text-xs md:text-sm uppercase tracking-wider">
                  INSURANCE ACCEPTED
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ PROCESS SECTION ═══════════════════════ */}
        <section className="bg-navy py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left — Blockquote */}
            <div>
              <blockquote className="font-cormorant text-2xl md:text-3xl lg:text-4xl italic text-white leading-relaxed mb-8">
                &ldquo;We don&rsquo;t just treat symptoms; we build the
                foundation for a life you actually want to live.&rdquo;
              </blockquote>
              <div>
                <strong className="text-gold text-lg">
                  Patrick Santosuosso
                </strong>
                <p className="text-white/60 text-sm mt-1">
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
                      backgroundColor: isActive
                        ? "var(--navy-light)"
                        : "transparent",
                      border: isActive
                        ? "1px solid var(--gold)"
                        : "1px solid rgba(255,255,255,0.15)",
                      borderLeft: isActive
                        ? "3px solid var(--gold)"
                        : "1px solid rgba(255,255,255,0.15)",
                    }}
                    onClick={() =>
                      setActiveStep(isActive ? null : i)
                    }
                  >
                    <div className="flex items-center justify-between p-5">
                      <div className="flex items-center gap-4">
                        <span className="text-gold font-maistra text-xl">
                          {step.number}
                        </span>
                        <h2 className="font-maistra text-lg md:text-xl text-white">
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
                      <div className="px-5 pb-5">
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

        {/* ═══════════════════ INSURANCE COVERAGE ═══════════════════ */}
        <section
          id="addiction-treatment"
          className="py-20 md:py-28 scroll-mt-24"
          style={{ backgroundColor: "#0a1f35" }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <span className="text-gold text-sm uppercase tracking-[0.2em] mb-4 block">
              Coast to Coast Locations
            </span>
            <h2 className="font-maistra text-3xl md:text-5xl text-white mb-12">
              Insurance-Covered Addiction Treatment
            </h2>

            {/* Two gallery images */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Image
                src="/images/gallery/amity-family.jpg"
                alt="Inpatient drug and alcohol detox"
                width={898}
                height={543}
                quality={80}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg w-full h-auto object-cover"
              />
              <Image
                src="/images/gallery/amity-group-therapy.jpg"
                alt="Relapse prevention program"
                width={600}
                height={400}
                quality={80}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>

            <div className="max-w-2xl">
              <p className="text-white/75 text-lg leading-relaxed mb-8">
                Our inpatient treatment centers specialize in immediate placement
                for individuals nationwide.
                <br />
                <br />
                A wide range of critical recovery services, including acute
                medical detoxification and residential care.
                <br />
                <br />
                We prioritize accessible treatment with a streamlined intake
                process, 24/7 nursing support, and a community-based setting
                designed for rapid stabilization.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  "24/7 Withdrawals Management",
                  "Multiple Locations",
                  "30, 60, or 90-Day Programs",
                  "Insurance May Cover up to 100%",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-white text-lg"
                  >
                    <svg
                      className="w-5 h-5 text-gold shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="tel:+17275098278"
                className="inline-block px-8 py-4 text-center font-semibold rounded bg-gold text-navy hover:brightness-110 transition"
              >
                <span className="text-lg">(727) 509-8278</span>
                <br />
                <span className="text-sm font-normal">
                  Call for Free Assessment
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════ TESTIMONIAL QUOTE ═══════════════════ */}
        <section
          className="py-20 md:py-28 relative overflow-hidden"
          style={{ backgroundColor: "#F7F5F2" }}
        >
          <div
            className="absolute top-[-40px] left-4 md:left-12 font-cormorant text-[18rem] md:text-[28rem] leading-none select-none pointer-events-none"
            style={{ color: "rgba(0,0,0,0.04)" }}
            aria-hidden="true"
          >
            &ldquo;
          </div>
          <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
            <blockquote
              className="font-cormorant text-xl md:text-2xl lg:text-3xl italic leading-relaxed mb-8"
              style={{ color: "#2a3a4e" }}
            >
              &ldquo;Discharge is not the end; it is a clinical transition. We
              secure your <strong>sobriety</strong> through seamless{" "}
              <strong>IOP integration</strong>, a trusted nationwide network, and{" "}
              <strong>24/7 crisis support</strong>, ensuring professional safety
              follows you home.&rdquo;
            </blockquote>
            <div>
              <div
                className="font-semibold text-lg"
                style={{ color: "#0e2a47" }}
              >
                Althea Walters, M.A.
              </div>
              <div className="text-sm" style={{ color: "#6b7280" }}>
                Primary Therapist
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ BREAK THE ADDICTION ══════════════════ */}
        <section
          id="amenities"
          className="py-20 md:py-28 scroll-mt-24"
          style={{ backgroundColor: "#0a1f35" }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            {/* Two-column: image left, text right */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <Image
                src="/images/gallery/amity-2.jpg"
                alt="Insurance covered detox and addiction treatment"
                width={800}
                height={600}
                quality={80}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg w-full h-auto object-cover"
              />
              <div>
                <span className="text-gold text-sm uppercase tracking-[0.2em] mb-4 block">
                  Our Expert Team Maximizes Your Insurance Benefits
                </span>
                <h2 className="font-maistra text-3xl md:text-5xl text-white mb-6">
                  Break the Addiction, Not Your Bank!
                </h2>
                <p className="text-white/75 text-lg leading-relaxed mb-8">
                  We&rsquo;ve guided thousands on their path to recovery, not
                  only by finding them the best treatment for drug, alcohol, and
                  mental health disorders but also by expertly navigating their
                  insurance to minimize or eliminate out-of-pocket costs.
                </p>
              </div>
            </div>

            {/* Amenities subheading + list */}
            <h3 className="text-xl md:text-2xl text-white mb-8">
              Our admissions team is here to discuss what&rsquo;s important to
              you.
            </h3>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              {amenities.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-white text-lg"
                >
                  <svg
                    className="w-5 h-5 text-gold shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Dr. Chaghouri Quote */}
          <div
            className="relative overflow-hidden py-16 md:py-20"
            style={{ backgroundColor: "#F7F5F2" }}
          >
            <div
              className="absolute top-[-30px] left-4 md:left-12 font-cormorant text-[14rem] md:text-[22rem] leading-none select-none pointer-events-none"
              style={{ color: "rgba(0,0,0,0.04)" }}
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <div className="relative max-w-3xl mx-auto px-4 md:px-8 text-center">
              <blockquote
                className="font-cormorant text-xl md:text-2xl lg:text-3xl italic leading-relaxed mb-6"
                style={{ color: "#2a3a4e" }}
              >
                &ldquo;Recovery is about building a life you want to live. We
                provide the <strong>dignity</strong>,{" "}
                <strong>privacy</strong>, and{" "}
                <strong>clinical excellence</strong> to bridge that gap.&rdquo;
              </blockquote>
              <div>
                <div
                  className="font-semibold text-lg"
                  style={{ color: "#0e2a47" }}
                >
                  Dr. Eric Chaghouri, MD
                </div>
                <div className="text-sm" style={{ color: "#6b7280" }}>
                  Medical Director
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ FACILITIES SLIDER ══════════════════ */}
        <section className="bg-navy py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-maistra text-3xl md:text-5xl text-white mb-4">
              A Glimpse Into Addiction Treatment Options
            </h2>
            <hr className="border-t-2 border-gold w-20 mb-6" />
            <p className="text-white/75 text-lg max-w-3xl leading-relaxed mb-12">
              Explore some of our certified centers, each offering unique
              programs and specialized care for lasting recovery. From serene
              retreats to exclusive locations, we&rsquo;ll find the perfect fit
              for your recovery journey.
            </p>

            {/* Cards — horizontal scroll on mobile, 3-col on desktop */}
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
              {facilityCards.map((card) => (
                <div
                  key={card.name}
                  className="min-w-[300px] md:min-w-0 snap-start flex flex-col rounded-lg overflow-hidden border border-white/10"
                  style={{ backgroundColor: "#0a1f35" }}
                >
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={1080}
                    height={1080}
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-maistra text-xl text-white mb-1">
                      {card.name}
                    </h3>
                    <p className="text-gold text-sm mb-4">{card.location}</p>
                    <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">
                      {card.description}
                    </p>
                    <a
                      href="tel:+17275098278"
                      className="inline-block text-center px-6 py-3 rounded border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition"
                    >
                      Contact Admissions
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ ACCOMMODATIONS ═══════════════════ */}
        <section
          id="mental-health"
          className="py-20 md:py-28 scroll-mt-24"
          style={{ backgroundColor: "#0a1f35" }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            {/* Top heading + description */}
            <div className="max-w-3xl mb-16">
              <h2 className="font-maistra text-3xl md:text-5xl text-white mb-4">
                Your Past Does Not Define Your Future!
              </h2>
              <hr className="border-t-2 border-gold w-20 mb-6" />
              <p className="text-white/75 text-lg leading-relaxed">
                The cycle of relapse can feel impossible to break on your own. We
                bridge the gap between acute stabilization and long-term success.
                <br />
                Through intensive individual therapy and structured
                accountability, we help you rediscover the person you were meant
                to be before addiction took hold.
              </p>
            </div>

            {/* Effective and Discreet — image + text */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <Image
                src="/images/gallery/Amity-Surf-City-Living-area.jpg"
                alt="Effective and Discreet addiction treatment environment"
                width={960}
                height={640}
                quality={80}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg w-full h-auto object-cover"
              />
              <div>
                <h3 className="font-maistra text-2xl md:text-3xl text-white mb-6">
                  Effective and Discreet addiction treatment environment
                </h3>
                <p className="text-white/75 text-lg leading-relaxed mb-8">
                  Our accommodation options offer a discreet, comfortable space
                  to focus on overcoming drug and alcohol addiction. Surrounded by
                  supportive care and upscale amenities, you&rsquo;ll have the
                  privacy and tranquility needed to heal&mdash;physically,
                  emotionally, and mentally.
                </p>
                <a
                  href="tel:+17275098278"
                  className="inline-block px-8 py-4 text-center font-semibold rounded bg-gold text-navy hover:brightness-110 transition"
                >
                  Call for Immediate Admissions
                  <br />
                  <span className="text-sm font-normal">(727) 509-8278</span>
                </a>
              </div>
            </div>

            {/* Second image */}
            <div className="mb-16">
              <Image
                src="/images/gallery/SurfCity_House-1.jpg"
                alt="Rehabs that take insurance"
                width={960}
                height={640}
                quality={80}
                sizes="100vw"
                className="rounded-lg w-full h-auto object-cover max-h-[500px]"
              />
            </div>

            {/* Insurance bullet list */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl text-white mb-4">
                  Don&rsquo;t let financial uncertainty delay your recovery.
                </h3>
                <p className="text-white/75 leading-relaxed">
                  We work directly with most major insurance providers to
                  minimize your out-of-pocket costs. Our dedicated admissions
                  team handles all the paperwork, utilization reviews, and
                  benefit verifications so you can focus entirely on getting
                  better.
                </p>
              </div>
              <ul className="space-y-3">
                {insuranceBullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-white text-lg"
                  >
                    <svg
                      className="w-5 h-5 text-gold shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══════════════════ TREATMENT CARDS ═══════════════════ */}
        <section className="bg-navy py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-maistra text-3xl md:text-5xl text-white mb-12">
              Addiction Rehab: Detox, Inpatient &amp; More
            </h2>

            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
              {treatmentCards.map((card) => (
                <div
                  key={card.title}
                  className="min-w-[300px] md:min-w-0 snap-start flex flex-col rounded-lg overflow-hidden border border-white/10"
                  style={{ backgroundColor: "#0a1f35" }}
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={800}
                    height={600}
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-maistra text-xl text-white mb-4">
                      {card.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">
                      {card.description}
                    </p>
                    <a
                      href="#verify-form"
                      className="inline-block text-center px-6 py-3 rounded border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition"
                    >
                      Verify Insurance
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ INSURANCE LOGOS ═══════════════════ */}
        <section className="bg-navy py-20 md:py-28 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="font-maistra text-3xl md:text-5xl text-white mb-4">
                Making Treatment Accessible
              </h2>
              <hr className="border-t-2 border-gold w-20 mb-6" />
              <p className="text-white/75 text-lg leading-relaxed">
                Unsure about your coverage? We can help! We partner with many
                insurance companies and offer a free benefits check to help you
                understand your coverage options. Find your provider below or
                contact us today.
              </p>
            </div>

            {/* Logo grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 items-center">
              {insuranceLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center p-4"
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.name} Insurance`}
                    width={200}
                    height={80}
                    quality={80}
                    className="w-full max-w-[180px] h-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ LEAD FORM ═══════════════════ */}
        <section
          id="verify-form"
          className="py-20 md:py-28 scroll-mt-24"
          style={{ backgroundColor: "#0a1f35" }}
        >
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <h2 className="font-maistra text-3xl md:text-5xl text-white mb-4 text-center">
              Verify Insurance Benefits
            </h2>
            <hr className="border-t-2 border-gold w-20 mx-auto mb-6" />
            <p className="text-white/75 text-lg leading-relaxed text-center mb-12">
              Fill out the form below to schedule a call back from one of our
              admissions coordinators or verify insurance benefits. If you would
              like to speed up the process please fill out the insurance info
              section as well.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded font-semibold text-lg bg-gold text-navy hover:brightness-110 transition"
              >
                Submit
              </button>
            </form>
            <p className="text-center text-white/50 text-sm mt-6">
              100% Confidential &mdash; Same Day Response
            </p>
          </div>
        </section>
      </main>

      {/* ═══════════════════════ FOOTER ═══════════════════════ */}
      <footer className="bg-navy border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/logos/amity-logo.png"
              alt="Amity Palm Beach"
              width={250}
              height={50}
              quality={80}
              className="w-[200px] h-auto"
            />
          </div>

          {/* Links + Social */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <nav className="flex flex-wrap gap-6 text-sm">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </nav>

            {/* Social icons */}
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* Pinterest */}
              <a
                href="#"
                aria-label="Pinterest"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="text-white/40 text-sm">
            2901 Broadway, West Palm Beach, FL 33407
          </div>
        </div>
      </footer>
    </>
  );
}
