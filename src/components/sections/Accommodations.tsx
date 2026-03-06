"use client";

import Image from "next/image";

const insuranceBullets = [
  "Most PPO Insurance Accepted",
  "Free Benefit Verification",
  "Streamlined Admissions",
  "Individual Therapy",
  "Co-Occurring Mental Health Disorders",
  "Immediate Help Available",
];

export default function Accommodations() {
  return (
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
              href="tel:+18669717393"
              className="inline-block px-8 py-4 text-center font-semibold rounded btn-primary transition"
            >
              Call for Immediate Admissions
              <br />
              <span className="text-sm font-normal">(866) 971-7393</span>
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
  );
}
