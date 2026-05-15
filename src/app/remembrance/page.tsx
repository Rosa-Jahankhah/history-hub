import type { Metadata } from "next";
import Link from "next/link";
import { Slide } from "@/components/Slide";

export const metadata: Metadata = {
  title: "Remembrance",
  description:
    "Conclusion of the presentation: how should we, as humanity, remember the Jewish DPs and survivors of the Holocaust?",
};

export default function RemembrancePage() {
  return (
    <div className="flex-1">
      <Slide tone="amber" eyebrow="Conclusion">
        <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-amber-50 sm:text-6xl">
          How do we remember
          <span className="block text-amber-200/85">— as humanity?</span>
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-amber-100/90">
          Survivors did not wait for us. They wrote, sang, photographed,
          mapped, prayed, and testified — sometimes within months of
          liberation. Memory was already underway in the camps.
        </p>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-amber-100/80">
          So our duty is not to <em>invent</em> their memory. It is to{" "}
          <em>continue</em> it.
        </p>
      </Slide>

      <Slide tone="ivory" eyebrow="Three things we can carry forward">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              n: "1",
              t: "Name them",
              p: "When you cite a survivor, say their full name. ‘Survivor’ is a category. A name is a person.",
            },
            {
              n: "2",
              t: "Read them in their own language",
              p: "Many sources are in Yiddish, Hebrew, German, Polish. Translation matters — and so does noticing what gets lost.",
            },
            {
              n: "3",
              t: "Pass the document on",
              p: "Share the link to the source. Memory only stays public if the next person can also reach the original.",
            },
          ].map((card) => (
            <div
              key={card.n}
              className="rounded-2xl border border-stone-900/10 bg-white/70 p-6 shadow-sm"
            >
              <p className="font-serif text-5xl text-amber-900/80">{card.n}</p>
              <h3 className="mt-3 font-serif text-2xl text-stone-900">
                {card.t}
              </h3>
              <p className="mt-2 text-stone-700">{card.p}</p>
            </div>
          ))}
        </div>
      </Slide>

      <Slide tone="sepia" eyebrow="Closing line">
        <blockquote className="max-w-3xl border-l-4 border-stone-900/40 pl-6 font-serif text-3xl italic leading-snug text-stone-900 sm:text-4xl">
          “She’erit Hapletah” — the surviving remnant — chose to be a
          beginning, not an ending. Our remembrance has to choose the same.
        </blockquote>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/sources"
            className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-amber-50 transition hover:bg-stone-700"
          >
            Show sources slide →
          </Link>
          <Link
            href="/"
            className="rounded-full border border-stone-900/30 px-6 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-900/5"
          >
            Back to title
          </Link>
        </div>
      </Slide>
    </div>
  );
}
