import type { Metadata } from "next";
import { Slide } from "@/components/Slide";
import { historyLinks } from "@/data/links";
import { evidenceItems } from "@/data/evidence";

export const metadata: Metadata = {
  title: "Sources",
  description:
    "Sources used in this presentation, including the USHMM ‘Experiencing History’ collection.",
};

export default function SourcesPage() {
  return (
    <div className="flex-1">
      <Slide tone="ivory" eyebrow="Sources">
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
          What I used to make this presentation
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-800">
          Primary sources first, then context articles and oral history
          archives. All links open in a new tab so you can pull them up live
          during your video if you want.
        </p>

        <h2 className="mt-12 font-serif text-2xl text-stone-900">
          Collections &amp; encyclopedias
        </h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {historyLinks.map((link) => (
            <li
              key={link.id}
              className="rounded-xl border border-stone-900/12 bg-white/70 p-5 shadow-sm"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-lg text-stone-900 hover:underline"
              >
                {link.title}
              </a>
              <p className="mt-2 text-sm leading-relaxed text-stone-700">
                {link.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {link.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-amber-100/80 px-2.5 py-0.5 text-xs text-amber-900/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 font-serif text-2xl text-stone-900">
          Individual objects shown in the talk
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-stone-700">
          Each object below is from the USHMM <em>Experiencing History</em>{" "}
          collection. Open the collection, click into the item, and copy the
          page URL into <code>src/data/evidence.ts</code> to make these go
          straight to the item.
        </p>
        <ol className="mt-6 grid list-decimal gap-2 pl-6 text-stone-800 marker:text-stone-500 md:grid-cols-2">
          {evidenceItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                {item.title}
              </a>{" "}
              <span className="text-stone-600">
                — {item.kind}, {item.year}
              </span>
            </li>
          ))}
        </ol>
      </Slide>
    </div>
  );
}
