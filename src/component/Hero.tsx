// src/components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(241,161,10,0.25),transparent)]" />
      <div className="container py-20 md:py-28">
        <p className="text-[var(--muted)] text-sm uppercase tracking-[0.18em]">
          Kochi • Branding & Creative
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
          We craft <span className="text-[var(--accent)]">brands</span> that
          people remember and experiences they love.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/80">
          Strategy, identity, packaging, and campaigns—joined up to build
          momentum for your business.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="rounded-full bg-white px-5 py-2 text-black text-sm shadow-elev hover:scale-[1.01] transition"
          >
            See our work
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white hover:text-black transition"
          >
            What we do
          </Link>
        </div>
      </div>
    </section>
  );
}
