import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Slide } from "@/components/Slide";
import { evidenceItems } from "@/data/evidence";

export const metadata: Metadata = {
  title: "Evidence & Objects",
  description:
    "Five objects from the USHMM collection on Jewish DP camps — letters, songs, films, newspaper articles, and a report.",
};

const slideColors: Array<"white" | "sky" | "rose" | "amber" | "indigo"> = [
  "sky",
  "rose",
  "amber",
  "sky",
  "rose",
];

export default function EvidencePage() {
  return (
    <div className="flex-1">
      <Slide tone="indigo" eyebrow="Evidence & objects">
        <h1 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
          What survivors made, kept, and sent.
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-indigo-100">
          Five objects from the USHMM <em>Experiencing History</em> collection.
          Each one is its own slide — scroll to move through them, or jump directly.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {evidenceItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full border-2 border-white/40 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20"
            >
              {item.title}
            </a>
          ))}
        </div>
      </Slide>

      {evidenceItems.map((item, index) => (
        <Slide
          key={item.id}
          id={item.id}
          tone={slideColors[index % slideColors.length]}
          eyebrow={`Object ${String(index + 1).padStart(2, "0")} of ${evidenceItems.length} · ${item.kind}`}
        >
          <div className="grid items-start gap-10 md:grid-cols-[1fr_1.2fr]">
            {/* Image or placeholder */}
            <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-4 border-white bg-white/60 shadow-xl">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center text-slate-500">
                  <span className="font-serif text-7xl text-slate-300">✦</span>
                  <p className="mt-4 text-sm leading-relaxed">
                    Drop a photo at{" "}
                    <code className="rounded bg-black/10 px-1.5 py-0.5 text-xs">
                      public/images/{item.id}.jpg
                    </code>
                    <br />
                    and set{" "}
                    <code className="rounded bg-black/10 px-1.5 py-0.5 text-xs">
                      image: &quot;/images/{item.id}.jpg&quot;
                    </code>
                    <br />
                    in <code className="rounded bg-black/10 px-1.5 py-0.5 text-xs">src/data/evidence.ts</code>.
                  </p>
                </div>
              )}
            </figure>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider opacity-60">
                {item.label} · {item.year}
              </p>
              <h2 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">
                {item.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed opacity-90">
                {item.story}
              </p>
              {item.quote && (
                <blockquote className="mt-8 rounded-2xl border-l-4 border-current bg-white/50 p-6 font-serif text-xl italic leading-snug shadow-sm">
                  "{item.quote}"
                </blockquote>
              )}
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-1 rounded-full border-2 border-current px-4 py-2 text-sm font-bold transition hover:bg-black/5"
              >
                View source on USHMM →
              </a>
            </div>
          </div>
        </Slide>
      ))}

      <Slide tone="navy" fill={false}>
        <div className="flex flex-col items-start gap-6 py-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            End of objects
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl">
            Now let one of them speak.
          </h2>
          <Link
            href="/voices"
            className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
          >
            Survivor voices →
          </Link>
        </div>
      </Slide>
    </div>
  );
}
