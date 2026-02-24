import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import InsuranceCoverage from "@/components/sections/InsuranceCoverage";
import TestimonialQuote from "@/components/sections/TestimonialQuote";
import BreakTheAddiction from "@/components/sections/BreakTheAddiction";
import FacilitiesSlider from "@/components/sections/FacilitiesSlider";
import Accommodations from "@/components/sections/Accommodations";
import TreatmentCards from "@/components/sections/TreatmentCards";
import InsuranceLogos from "@/components/sections/InsuranceLogos";
import LeadForm from "@/components/sections/LeadForm";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Process />

        <InsuranceCoverage />

        <TestimonialQuote />

        <BreakTheAddiction />

        <FacilitiesSlider />

        <Accommodations />

        <TreatmentCards />

        <InsuranceLogos />

        <LeadForm />
      </main>

      <Footer />
    </>
  );
}
