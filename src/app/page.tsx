import CTA from "@/component/CTA";
import Hero from "@/component/Hero";
import Marquee from "@/component/Marquee";
import Services from "@/component/Services";
import WorkGrid from "@/component/WorkGrid";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Hero />
      <Marquee />
      <Services />
      <WorkGrid />
      <CTA />
    </div>
  );
}
