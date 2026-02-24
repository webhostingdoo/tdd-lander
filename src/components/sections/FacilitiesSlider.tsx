"use client";

import Image from "next/image";

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

export default function FacilitiesSlider() {
  return (
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
  );
}
