"use client";

import Image from "next/image";
import { useState } from "react";

type Photo = { src: string; caption: string };

export function PhotoCarousel({
  photos,
  title,
}: {
  photos: Photo[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const total = photos.length;
  const current = photos[index];

  return (
    <div className="mt-6">
      {/* Main image */}
      <div className="relative w-full overflow-hidden rounded border border-slate-200 bg-slate-50"
           style={{ aspectRatio: "4/3" }}>
        <Image
          src={current.src}
          alt={`${title} — ${current.caption}`}
          fill
          sizes="(min-width: 768px) 672px, 100vw"
          className="object-contain"
          priority={index === 0}
        />
      </div>

      {/* Controls */}
      <div className="mt-3 flex items-center justify-between">
        <button
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          disabled={index === 0}
          className="rounded border border-slate-200 px-3 py-1.5 text-sm text-slate-600 hover:border-slate-400 disabled:opacity-30"
        >
          ← Previous
        </button>

        <span className="text-sm text-slate-500">
          {index + 1} of {total}
          {current.caption !== String(index + 1) && (
            <span className="ml-2 text-slate-400">— {current.caption}</span>
          )}
        </span>

        <button
          onClick={() => setIndex((i) => Math.min(i + 1, total - 1))}
          disabled={index === total - 1}
          className="rounded border border-slate-200 px-3 py-1.5 text-sm text-slate-600 hover:border-slate-400 disabled:opacity-30"
        >
          Next →
        </button>
      </div>

      {/* Dot indicators */}
      <div className="mt-3 flex justify-center gap-1.5">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-slate-600" : "bg-slate-300"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
