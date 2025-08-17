// src/app/contact/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact - Yepic Creatives",
};

export default function ContactPage() {
  return (
    <section className="container py-20">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        Reach us at
        <Link
          href="mailto:hello@yepic.creative"
          className="text-[var(--accent)] hover:underline ml-1"
        >
          hello@yepic.creative
        </Link>
        .
      </p>
    </section>
  );
}

