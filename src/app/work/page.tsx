// src/app/work/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Yepic Creatives",
};

export default function WorkPage() {
  return (
    <section className="container py-20">
      <h1 className="text-3xl font-semibold">Work</h1>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        Case studies and project details coming soon.
      </p>
    </section>
  );
}

