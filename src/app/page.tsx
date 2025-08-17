import CTA from "@/component/CTA";
import Hero from "@/component/Hero";
import Marquee from "@/component/Marquee";
import Services from "@/component/Services";
import WorkGrid from "@/component/WorkGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <WorkGrid />
      <CTA />
    </>
  );
}
