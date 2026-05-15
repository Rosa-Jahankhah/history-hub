import Link from "next/link";
import type { Metadata } from "next";
import { Slide } from "@/components/Slide";
import { evidenceItems } from "@/data/evidence";

export const metadata: Metadata = {
  title: "She'erit Hapletah · Jewish DPs in Postwar Europe",
  description:
    "A Yiddish 103 final project presentation on Jewish Displaced Persons in postwar Europe.",
};

export default function Home() {
  const featured = evidenceItems.slice(0, 3);

  return (
    <div className="flex-1">
      {/* Slide 1 — Title */}
      <Slide tone="indigo" eyebrow="Yiddish 103 · Final Project">
        <div className="grid items-center gap-12 md:grid-cols-[1.5fr_1fr]">
          <div>
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              She'erit Hapletah
              <span className="mt-2 block text-indigo-200">
                The Surviving Remnant
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-indigo-100">
              Jewish Displaced Persons in postwar Europe — the objects they
              made, the voices they left behind, and the memory they asked us
              to carry.
            </p>
            <p className="mt-3 text-indigo-200/75">
              Drawn from the USHMM <em>Experiencing History</em> collection.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/evidence"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-indigo-700 shadow transition hover:bg-indigo-50"
              >
                Begin →
              </Link>
              <Link
                href="/sources"
                className="rounded-full border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/80"
              >
                Sources
              </Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-200">
              Order of the talk
            </p>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-indigo-50">
              <li><span className="font-bold">1. </span>Who were the Jewish DPs? (~1 min)</li>
              <li><span className="font-bold">2. </span>Evidence &amp; objects from the camps (~3 min)</li>
              <li><span className="font-bold">3. </span>A survivor's voice (~1.5 min)</li>
              <li><span className="font-bold">4. </span>How we remember — conclusion (~1 min)</li>
            </ol>
          </aside>
        </div>
      </Slide>

      {/* Slide 2 — Context */}
      <Slide tone="sky" eyebrow="01 · Setting the scene">
        <h2 className="max-w-3xl font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
          May 1945 — Europe is free.<br />But for whom?
        </h2>
        <div className="mt-10 grid gap-8 text-lg leading-relaxed text-slate-700 md:grid-cols-2">
          <p>
            About <strong className="text-slate-900">20 million people</strong> are on the move
            across Europe. By September 1945, roughly{" "}
            <strong className="text-slate-900">1.5 million</strong> remain in occupied Germany
            and Austria. Around <strong className="text-slate-900">300,000</strong> of them are
            Jewish survivors of the Holocaust.
          </p>
          <p>
            They cannot — or will not — go home. The Allies create a category:{" "}
            <em>Displaced Person</em>. They live in former barracks, in former concentration camps,
            in commandeered villages. The camps were supposed to last{" "}
            <strong className="text-slate-900">months</strong>. Many lasted{" "}
            <strong className="text-slate-900">years</strong>.
          </p>
        </div>
        <p className="mt-10 border-l-4 border-indigo-400 pl-5 text-slate-600">
          Source: USHMM,{" "}
          <a
            className="font-semibold text-indigo-600 underline-offset-4 hover:underline"
            href="https://perspectives.ushmm.org/collection/jewish-displaced-persons-in-postwar-europe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jewish Displaced Persons in Postwar Europe
          </a>
          .
        </p>
      </Slide>

      {/* Slide 3 — Harrison quote */}
      <Slide tone="rose" eyebrow="02 · A document changes policy">
        <h2 className="font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
          "What does 'liberation' mean?"
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
          In September 1945, Earl G. Harrison delivered a scathing report to President Truman on
          conditions in the camps. His words forced the U.S. military to change policy and recognize
          Jewish DPs as a group with distinct, urgent needs.
        </p>
        <blockquote className="mt-10 max-w-3xl rounded-2xl border-l-4 border-rose-500 bg-white p-7 font-serif text-2xl italic leading-snug text-slate-900 shadow-md">
          "Beyond knowing that they are no longer in danger of the gas chambers… they see, and
          there is, little change… they wonder and frequently ask what 'liberation' means."
          <footer className="mt-4 text-base not-italic text-slate-500">
            — Earl G. Harrison, <em>Report to President Truman</em>, 1945
          </footer>
        </blockquote>
      </Slide>

      {/* Slide 4 — Evidence preview */}
      <Slide tone="white" eyebrow="03 · Evidence & objects">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-2xl font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
            Five objects. Five stories.
          </h2>
          <Link
            href="/evidence"
            className="rounded-full border-2 border-indigo-600 px-5 py-2 text-sm font-bold text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
          >
            Open all evidence →
          </Link>
        </div>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
          Letters, songs, newspaper articles, documentary footage. Each object is a choice a
          survivor made: <em>to be seen</em>.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((item, i) => (
            <article
              key={item.id}
              className={`flex flex-col rounded-2xl p-6 shadow-sm ${
                i === 0
                  ? "bg-indigo-600 text-white"
                  : i === 1
                  ? "bg-amber-400 text-slate-900"
                  : "bg-sky-100 text-slate-900"
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-wider opacity-70">
                {item.kind} · {item.year}
              </p>
              <h3 className="mt-2 font-serif text-xl">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed opacity-90">
                {item.story.slice(0, 120)}…
              </p>
              <Link
                href={`/evidence#${item.id}`}
                className="mt-4 text-sm font-bold underline underline-offset-4"
              >
                Read full story →
              </Link>
            </article>
          ))}
        </div>
      </Slide>

      {/* Slide 5 — Voices teaser */}
      <Slide tone="navy" eyebrow="04 · Survivor voices">
        <h2 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
          From an object to a living voice.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
          Objects are silent. Oral history gives back the breath between sentences. In the video,
          one short clip — under a minute — and the survivor speaks for themselves.
        </p>
        <div className="mt-10">
          <Link
            href="/voices"
            className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
          >
            Survivor voices →
          </Link>
        </div>
      </Slide>

      {/* Slide 6 — Remembrance teaser */}
      <Slide tone="amber" eyebrow="05 · Remembrance">
        <h2 className="max-w-3xl font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
          How should we remember them — as humanity?
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-800">
          Survivors organized historical commissions, newspapers, and theaters{" "}
          <em>inside the camps</em>. They began the work of memory themselves.
          Our job is to keep it going.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/remembrance"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-700"
          >
            Read the conclusion →
          </Link>
          <Link
            href="/sources"
            className="rounded-full border-2 border-slate-900/40 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
          >
            Sources used
          </Link>
        </div>
      </Slide>
    </div>
  );
}
