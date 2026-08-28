import { Authority } from "@/components/site/Authority";
import { Benefits } from "@/components/site/Benefits";
import { BrandsNeutral } from "@/components/site/BrandsNeutral";
import { CapacityStrip } from "@/components/site/CapacityStrip";
import { ContactBand } from "@/components/site/ContactBand";
import { FAQ } from "@/components/site/FAQ";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Markets } from "@/components/site/Markets";
import { ProductPillars } from "@/components/site/ProductPillars";
import { Services } from "@/components/site/Services";
import { TaglineReveal } from "@/components/site/TaglineReveal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapacityStrip />
      <ProductPillars />
      <Benefits />
      <HowItWorks />
      <Services />
      <BrandsNeutral />
      <Authority />
      <Markets />
      <TaglineReveal />
      <FAQ />
      <ContactBand />
    </>
  );
}
