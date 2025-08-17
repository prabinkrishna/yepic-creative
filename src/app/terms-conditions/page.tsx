// src/app/terms-conditions/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - Yepic Creatives",
};

export default function TermsPage() {
  return (
    <section className="prose prose-invert container py-20">
      <h1>Terms & Conditions</h1>
      <p>Our terms of service are coming soon.</p>
    </section>
  );
}

