// src/components/CTA.tsx
import Link from "next/link";

export default function CTA() {
  return (
    <section className="border-t border-white/10">
      <div className="custom-container py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Ready to build a memorable brand?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Tell us where you are today and where you want to go. We’ll chart the path.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-black text-sm shadow-elev hover:scale-[1.01] transition"
          >
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
