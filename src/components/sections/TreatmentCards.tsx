"use client";

import Image from "next/image";

const treatmentCards = [
  {
    title: "Medical Drug & Alcohol Detox",
    image: "/images/gallery/Amiti-Palm-Beach-Detox-facility.jpg",
    alt: "Drug and Alcohol Detox - Dallas, TX",
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

export default function TreatmentCards() {
  return (
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
  );
}
