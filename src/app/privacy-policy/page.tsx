// src/app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Yepic Creatives",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="prose prose-invert container py-20">
      <h1>Privacy Policy</h1>
      <p>Our privacy policy is being drafted and will be available soon.</p>
    </section>
  );
}

