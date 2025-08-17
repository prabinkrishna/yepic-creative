// src/components/Services.tsx
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="border-t border-white/10 w-full">
      <div className="custom-container py-14 md:py-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Services</h2>
          <p className="max-w-xl text-white/70 text-sm md:text-base lg:text-right">
            From positioning to launch, we build coherent brands and campaigns
            that convert attention into trust.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 p-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}