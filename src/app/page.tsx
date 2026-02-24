"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";

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
  {
    label: "Outdoor Activities",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="1.5"/><path d="M7 22l2.5-7 2.5 3 2.5-3L17 22"/><path d="M8 12l1.5-4h5L16 12"/>
      </svg>
    )
  },
  {
    label: "Medical Detox Services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    )
  },
  {
    label: "Wellness & Spa",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 1 6 2.5c-2 1-4 1.5-6 1.5s-4-.5-6-1.5A9 9 0 0 1 12 2z"/><path d="M12 6c0 4-3 7-7 9"/><path d="M12 6c0 4 3 7 7 9"/><path d="M8 21h8"/><path d="M12 15v6"/>
      </svg>
    )
  },
  {
    label: "Beach Outings",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>
      </svg>
    )
  },
  {
    label: "Chef-Prepared Meals",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6z"/><line x1="6" y1="17" x2="18" y2="17"/>
      </svg>
    )
  },
  {
    label: "FMLA Assistance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    )
  }
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
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Process />

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

            {/* Row 1: Big title left, image right */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
              <div>
                <h2 className="font-maistra text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                  Insurance-Covered Addiction Treatment
                </h2>
                <p className="text-white/75 text-xl leading-relaxed">
                  Our inpatient treatment centers specialize in immediate placement for individuals nationwide.
                </p>
                <p className="text-white/75 text-xl leading-relaxed mt-4">
                  A wide range of critical recovery services, including acute medical detoxification and residential care.
                </p>
              </div>
              <Image
                src="/images/gallery/amity-family.jpg"
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
                  Insurance Coverage
                </span>
                <h3 className="font-maistra text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                  We Work With All Major Insurers
                </h3>
                <p className="text-white/75 text-lg leading-relaxed mb-8">
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
                    href="tel:+17275098278"
                    className="inline-block px-8 py-4 text-center font-semibold rounded btn-primary transition"
                  >
                    <span className="text-lg">(727) 509-8278</span>
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
                src="/images/gallery/amity-group-therapy.jpg"
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

        {/* ═══════════════════ TESTIMONIAL QUOTE ═══════════════════ */}
        <div className="quote-section">
          <div className="quote-watermark" aria-hidden="true">&ldquo;</div>
          <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
            <blockquote className="quote-text">
              &ldquo;Discharge is not the end; it is a clinical transition. We
              secure your <strong>sobriety</strong> through seamless{" "}
              <strong>IOP integration</strong>, a trusted nationwide network, and{" "}
              <strong>24/7 crisis support</strong>, ensuring professional safety
              follows you home.&rdquo;
            </blockquote>
            <div>
              <div className="quote-name">Althea Walters, M.A.</div>
              <div className="quote-title">Primary Therapist</div>
            </div>
          </div>
        </div>

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
                <li key={item.label} className="flex items-center gap-3 text-white text-lg">
                  <span className="text-gold shrink-0">{item.icon}</span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Dr. Chaghouri Quote */}
          <div className="quote-section">
            <div className="quote-watermark" aria-hidden="true">&ldquo;</div>
            <div className="relative max-w-3xl mx-auto px-4 md:px-8 text-center">
              <blockquote className="quote-text">
                &ldquo;Recovery is about building a life you want to live. We provide the <strong>dignity</strong>, <strong>privacy</strong>, and <strong>clinical excellence</strong> to bridge that gap.&rdquo;
              </blockquote>
              <div>
                <div className="quote-name">Dr. Eric Chaghouri, MD</div>
                <div className="quote-title">Medical Director</div>
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
                  className="inline-block px-8 py-4 text-center font-semibold rounded btn-primary transition"
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
                className="w-full py-4 rounded font-semibold text-lg btn-primary transition"
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

      <Footer />
    </>
  );
}
