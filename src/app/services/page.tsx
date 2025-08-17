// src/app/services/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Yepic Creatives",
};

export default function ServicesPage() {
  return (
    <section className="container py-20">
      <h1 className="text-3xl font-semibold">Services</h1>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        Details about our offerings are on the way.
      </p>
    </section>
  );
}

