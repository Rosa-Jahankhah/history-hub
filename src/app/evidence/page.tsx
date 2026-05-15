import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Slide } from "@/components/Slide";
import { evidenceItems } from "@/data/evidence";

export const metadata: Metadata = {
  title: "Evidence & Objects",
  description:
    "A scrolling slide gallery of letters, photographs, songs, and reports from Jewish DP camps.",
};

export default function EvidencePage() {
  return (
    <div className="flex-1">
      <Slide tone="ivory" eyebrow="Evidence & objects">
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
          What survivors made, kept, and sent.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-800">
          These are objects from the USHMM <em>Experiencing History</em>{" "}
          collection on Jewish Displaced Persons. Each one is its own slide —
          scroll through them in your video, or jump straight to the ones you
          want to show.
        </p>
        <div className="mt-10 flex flex-wrap gap-2">
          {evidenceItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full border border-stone-900/20 bg-white/70 px-3 py-1 text-xs font-medium text-stone-800 transition hover:border-stone-900/50"
            >
              {item.title}
            </a>
          ))}
        </div>
      </Slide>

      {evidenceItems.map((item, index) => {
        const tone = index % 2 === 0 ? "sepia" : "ivory";
        return (
          <Slide
            key={item.id}
            id={item.id}
            tone={tone}
            eyebrow={`Object ${String(index + 1).padStart(2, "0")} · ${item.kind}`}
          >
            <div className="grid items-start gap-10 md:grid-cols-[1fr_1.1fr]">
              <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-stone-900/15 bg-stone-900/5 shadow-md">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center text-stone-700">
                    <span className="font-serif text-6xl text-stone-400">
                      ✦
                    </span>
                    <p className="mt-4 text-sm">
                      Drop an image at{" "}
                      <code className="rounded bg-stone-900/10 px-1 py-0.5 text-xs">
                        public/images/{item.id}.jpg
                      </code>
                      <br />
                      and set <code>image: &quot;/images/{item.id}.jpg&quot;</code>{" "}
                      in <code>src/data/evidence.ts</code>.
                    </p>
                  </div>
                )}
              </figure>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-700/70">
                  {item.label} · {item.year}
                </p>
                <h2 className="mt-2 font-serif text-3xl leading-tight text-stone-900 sm:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-stone-800">
                  {item.story}
                </p>
                {item.quote && (
                  <blockquote className="mt-6 rounded-r-xl border-l-4 border-stone-900/40 bg-white/60 p-5 font-serif text-lg italic text-stone-900 shadow-sm">
                    “{item.quote}”
                  </blockquote>
                )}
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-amber-900 underline-offset-4 hover:underline"
                >
                  Source on USHMM →
                </a>
              </div>
            </div>
          </Slide>
        );
      })}

      <Slide tone="amber" fill={false}>
        <div className="flex flex-col items-start gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/70">
            End of evidence
          </p>
          <h2 className="font-serif text-3xl text-amber-50 sm:text-4xl">
            Now let one of them speak.
          </h2>
          <Link
            href="/voices"
            className="rounded-full bg-amber-50 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white"
          >
            Survivor voices →
          </Link>
        </div>
      </Slide>
    </div>
  );
}
