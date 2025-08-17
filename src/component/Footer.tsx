// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-lg font-bold">Yepic<span className="text-[var(--accent)]">.</span></div>
          <p className="mt-3 text-sm text-white/70">
            Kochi, Kerala • hello@yepic.creative
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="flex flex-col gap-2">
            <Link href="/services" className="text-white/80 hover:text-white">Services</Link>
            <Link href="/work" className="text-white/80 hover:text-white">Work</Link>
            <Link href="/about" className="text-white/80 hover:text-white">About</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/jobs" className="text-white/80 hover:text-white">Jobs</Link>
            <Link href="/privacy-policy" className="text-white/80 hover:text-white">Privacy</Link>
            <Link href="/terms-conditions" className="text-white/80 hover:text-white">Terms</Link>
          </div>
        </div>

        <div className="md:text-right">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Yepic Creatives</p>
        </div>
      </div>
    </footer>
  );
}
