// src/components/Marquee.tsx
"use client";

import Image from "next/image";
import { marqueeClients } from "@/lib/data";

export default function Marquee() {
  // Create enough duplicates to ensure seamless loop
  const duplicatedLogos = Array(4).fill(marqueeClients).flat();

  return (
    <div className="border-t border-white/10 overflow-hidden">
      <div className="py-8">
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-continuous gap-12 whitespace-nowrap">
            {duplicatedLogos.map((src, i) => (
              <div key={i} className="h-10 w-28 relative opacity-70 flex-shrink-0">
                <Image 
                  src={src} 
                  alt="Client logo" 
                  fill 
                  className="object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}