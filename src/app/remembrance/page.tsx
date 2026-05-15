import type { Metadata } from "next";
import Link from "next/link";
import { Slide } from "@/components/Slide";

export const metadata: Metadata = {
  title: "Remembrance",
  description:
    "Conclusion: how should we, as humanity, remember the Jewish DPs and all those lost in the Holocaust?",
};

export default function RemembrancePage() {
  return (
    <div className="flex-1">
      <Slide tone="indigo" eyebrow="Conclusion">
        <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          How do we remember
          <span className="mt-2 block text-indigo-200">— as humanity?</span>
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-indigo-100">
          Survivors did not wait for us. Inside the camps they wrote, sang, photographed, prayed,
          and testified. Memory was already underway before the ink on any peace treaty was dry.
        </p>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-indigo-200">
          So our duty is not to <em>invent</em> their memory. It is to <em>continue</em> it.
        </p>
      </Slide>

      <Slide tone="white" eyebrow="Three things we carry forward">
        <h2 className="font-serif text-3xl text-slate-900 sm:text-4xl">
          Three things we can carry forward
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              color: "bg-indigo-600 text-white",
              n: "1",
              t: "Name them",
              p: "When you cite a survivor, say their full name on screen. 'Survivor' is a category. A name is a person.",
            },
            {
              color: "bg-amber-400 text-slate-900",
              n: "2",
              t: "Read them in their own language",
              p: "Many sources are in Yiddish. Translation matters — and so does noticing what words get lost in translation.",
            },
            {
              color: "bg-rose-500 text-white",
              n: "3",
              t: "Pass the document on",
              p: "Share the link to the source. Memory only stays public if the next person can also reach the original.",
            },
          ].map((card) => (
            <div
              key={card.n}
              className={`${card.color} rounded-2xl p-7 shadow-md`}
            >
              <p className="font-serif text-5xl opacity-60">{card.n}</p>
              <h3 className="mt-3 font-serif text-2xl">{card.t}</h3>
              <p className="mt-2 text-base leading-relaxed opacity-90">{card.p}</p>
            </div>
          ))}
        </div>
      </Slide>

      <Slide tone="sky" eyebrow="Closing">
        <blockquote className="max-w-3xl border-l-4 border-indigo-500 pl-7 font-serif text-3xl italic leading-snug text-slate-900 sm:text-4xl">
          "She'erit Hapletah" — the surviving remnant — chose to be a
          beginning, not an ending. Our remembrance has to choose the same.
        </blockquote>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/sources"
            className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow transition hover:bg-indigo-700"
          >
            Sources slide →
          </Link>
          <Link
            href="/"
            className="rounded-full border-2 border-slate-900/30 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
          >
            Back to title
          </Link>
        </div>
      </Slide>

      {/* Special thanks */}
      <Slide tone="amber" fill={false}>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-700">
          Special thanks
        </p>
        <p className="mt-3 font-serif text-2xl text-slate-900 sm:text-3xl">
          Professor <strong>Miriam Borden</strong>
        </p>
        <p className="mt-2 max-w-xl text-lg leading-relaxed text-slate-800">
          Thank you for teaching this course and for bringing these voices into
          the classroom.
        </p>
      </Slide>
    </div>
  );
}
