// src/app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Yepic Creatives",
};

export default function AboutPage() {
  return (
    <section className="container py-20">
      <h1 className="text-3xl font-semibold">About us</h1>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        We’re a branding and creative studio in Kochi. Full story coming soon.
      </p>
    </section>
  );
}

