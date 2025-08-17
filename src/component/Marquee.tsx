// src/components/Marquee.tsx
"use client";

import Image from "next/image";
import { marqueeClients } from "@/lib/data";

export default function Marquee() {
  return (
    <div className="border-t border-white/10">
      <div className="container py-8">
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-12">
            {marqueeClients.concat(marqueeClients).map((src, i) => (
              <div key={i} className="h-10 w-28 relative opacity-70">
                <Image src={src} alt="Client logo" fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
