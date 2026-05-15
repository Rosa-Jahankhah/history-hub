import type { Metadata } from "next";
import { Slide } from "@/components/Slide";
import { historyLinks } from "@/data/links";
import { evidenceItems } from "@/data/evidence";

export const metadata: Metadata = {
  title: "Sources",
  description:
    "All sources used in this presentation on Jewish Displaced Persons in postwar Europe.",
};

export default function SourcesPage() {
  return (
    <div className="flex-1">
      <Slide tone="indigo" eyebrow="Sources">
        <h1 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
          Sources used in this presentation
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-indigo-100">
          Primary sources first, then context articles and oral history archives. All links open in
          a new tab.
        </p>
      </Slide>

      <Slide tone="white" eyebrow="Collections & encyclopedias">
        <h2 className="font-serif text-3xl text-slate-900">
          Collections &amp; encyclopedias
        </h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {historyLinks.map((link, i) => (
            <li
              key={link.id}
              className={`rounded-2xl p-6 shadow-sm ${
                i % 3 === 0
                  ? "bg-indigo-50 border border-indigo-200"
                  : i % 3 === 1
                  ? "bg-sky-50 border border-sky-200"
                  : "bg-rose-50 border border-rose-200"
              }`}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-lg font-semibold text-indigo-700 hover:underline underline-offset-4"
              >
                {link.title}
              </a>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {link.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {link.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white px-3 py-0.5 text-xs font-semibold text-slate-700 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Slide>

      <Slide tone="sky" eyebrow="Objects shown in the talk">
        <h2 className="font-serif text-3xl text-slate-900">
          The five objects shown in the talk
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          All from the USHMM <em>Experiencing History</em> collection. Open an item on USHMM, copy
          the page URL, and paste it into{" "}
          <code className="rounded bg-slate-900/10 px-1.5 py-0.5 text-sm">
            src/data/evidence.ts
          </code>{" "}
          to link directly to it.
        </p>
        <ol className="mt-8 space-y-3 pl-6 text-slate-800">
          {evidenceItems.map((item, i) => (
            <li key={item.id} className="list-decimal">
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-indigo-700 hover:underline underline-offset-4"
              >
                {item.title}
              </a>{" "}
              <span className="text-slate-500">
                — {item.kind}, {item.year}. {item.label}.
              </span>
            </li>
          ))}
        </ol>
      </Slide>

      <Slide tone="amber" fill={false}>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-700">
          Special thanks
        </p>
        <p className="mt-3 font-serif text-2xl text-slate-900 sm:text-3xl">
          Professor <strong>Miriam Borden</strong>
        </p>
        <p className="mt-2 max-w-xl text-slate-800">
          Thank you for teaching this course and for guiding this research.
        </p>
      </Slide>
    </div>
  );
}
