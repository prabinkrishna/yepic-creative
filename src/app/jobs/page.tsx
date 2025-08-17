// src/app/jobs/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs - Yepic Creatives",
};

export default function JobsPage() {
  return (
    <section className="container py-20">
      <h1 className="text-3xl font-semibold">Jobs</h1>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        We’re not hiring right now, but feel free to share your portfolio for
        future opportunities.
      </p>
    </section>
  );
}

