// src/components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/data";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-wide">
Yepic Creatives®<span className="text-[var(--accent)]">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm hover:text-white transition ${
                pathname === item.href ? "text-white" : "text-[var(--muted)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
          >
            Let’s talk
          </Link>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden text-[var(--muted)]"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <div className="container py-3 flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--muted)] hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 w-fit rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black"
              onClick={() => setOpen(false)}
            >
              Let’s talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
