// src/components/Services.tsx
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="border-t border-white/10">
      <div className="container py-14 md:py-20">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
          <p className="max-w-xl text-white/70 text-sm md:text-base">
            From positioning to launch, we build coherent brands and campaigns
            that convert attention into trust.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 p-5 hover:border-white/20 transition"
            >
              <h3 className="font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
