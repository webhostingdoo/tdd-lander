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
  );
}
