// src/components/WorkGrid.tsx
import Image from "next/image";
import Link from "next/link";
import { work } from "@/lib/data";

export default function WorkGrid() {
  return (
    <section className="border-t border-white/10">
      <div className="container py-14 md:py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Selected work</h2>
          <Link
            href="/work"
            className="text-sm text-[var(--muted)] hover:text-white"
          >
            View all →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-white/60">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
