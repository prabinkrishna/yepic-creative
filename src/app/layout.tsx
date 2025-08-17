// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import "../styles/shadow.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

export const metadata: Metadata = {
  title: "Yepic Creatives — Branding & Creative",
  description:
    "A branding & creative studio crafting identities, campaigns, and digital experiences.",
  openGraph: {
    title: "Yepic Creatives",
    description:
      "Branding, identity, campaigns, and digital experiences.",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-white/10">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
