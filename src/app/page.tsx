import Link from "next/link";
import type { Metadata } from "next";
import { Slide } from "@/components/Slide";
import { evidenceItems } from "@/data/evidence";
import { archiveEntries } from "@/data/archive";

export const metadata: Metadata = {
  title: "She’erit Hapletah · Jewish DPs in Postwar Europe",
  description:
    "Final project for Yiddish 103. A short presentation on Jewish Displaced Persons in postwar Europe, drawn from the USHMM ‘Experiencing History’ collection.",
};

export default function Home() {
  const featured = evidenceItems.slice(0, 3);
  const harrison = archiveEntries.find((e) => e.slug === "the-harrison-report");

  return (
    <div className="flex-1">
      {/* Slide 1 — Title */}
      <Slide tone="amber" eyebrow="Yiddish 103 · Final project">
        <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-amber-50 sm:text-6xl md:text-7xl">
              She’erit Hapletah
              <span className="block text-amber-200/85">
                The Surviving Remnant
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-amber-100/85 sm:text-xl">
              Jewish Displaced Persons in postwar Europe — the people, the
              objects they made, and the testimony they left behind.
            </p>
            <p className="mt-3 max-w-xl text-amber-100/65">
              A 6–8 minute presentation built from the USHMM{" "}
              <em>Experiencing History</em> collection.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/evidence"
                className="rounded-full bg-amber-50 px-6 py-3 text-sm font-semibold text-stone-900 shadow-sm transition hover:bg-white"
              >
                Begin →
              </Link>
              <Link
                href="/sources"
                className="rounded-full border border-amber-100/40 px-6 py-3 text-sm font-medium text-amber-50 transition hover:border-amber-100/80"
              >
                Sources
              </Link>
            </div>
          </div>
          <aside className="rounded-2xl border border-amber-100/15 bg-stone-900/30 p-6 text-amber-50/90 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">
              Order of the talk
            </p>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed">
              <li>
                <span className="font-semibold">1. </span>Who were the Jewish
                DPs? (~1 min)
              </li>
              <li>
                <span className="font-semibold">2. </span>Evidence &amp; objects
                from the camps (~3 min)
              </li>
              <li>
                <span className="font-semibold">3. </span>Survivor interview
                clip (~1.5 min)
              </li>
              <li>
                <span className="font-semibold">4. </span>How we remember —
                conclusion (~1 min)
              </li>
            </ol>
          </aside>
        </div>
      </Slide>

      {/* Slide 2 — Setting the scene */}
      <Slide tone="ivory" eyebrow="01 · Setting the scene">
        <h2 className="max-w-3xl font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
          May 1945 — Europe is free, but for whom?
        </h2>
        <div className="mt-10 grid gap-10 text-lg leading-relaxed text-stone-800 md:grid-cols-2">
          <p>
            About <strong>20 million people</strong> are on the move across
            Europe. By September 1945, roughly{" "}
            <strong>1.5 million</strong> remain in occupied Germany and
            Austria. Around <strong>300,000</strong> are Jewish survivors of
            the Holocaust.
          </p>
          <p>
            They cannot — or will not — go home. The Allies invent a category
            for them: <em>Displaced Person</em>. They live in former
            barracks, in former concentration camps, in commandeered
            villages. The camps were supposed to last <strong>months</strong>.
            Many lasted <strong>years</strong>.
          </p>
        </div>
        <p className="mt-10 max-w-3xl border-l-2 border-stone-900/30 pl-5 text-stone-700">
          Source: USHMM,{" "}
          <a
            className="underline underline-offset-4 hover:text-stone-900"
            href="https://perspectives.ushmm.org/collection/jewish-displaced-persons-in-postwar-europe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jewish Displaced Persons in Postwar Europe
          </a>
          .
        </p>
      </Slide>

      {/* Slide 3 — Harrison */}
      {harrison && (
        <Slide tone="sepia" eyebrow="02 · A document changes policy">
          <h2 className="font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
            “What ‘liberation’ means.”
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-800">
            {harrison.summary}
          </p>
          <blockquote className="mt-10 max-w-3xl rounded-r-xl border-l-4 border-stone-700 bg-white/60 p-6 font-serif text-2xl italic leading-snug text-stone-900 shadow-sm">
            “Beyond knowing that they are no longer in danger of the gas
            chambers… they see, and there is, little change… they wonder and
            frequently ask what ‘liberation’ means.”
            <footer className="mt-3 text-sm not-italic text-stone-600">
              — Earl G. Harrison, <em>Report to President Truman</em>, 1945
            </footer>
          </blockquote>
        </Slide>
      )}

      {/* Slide 4 — Evidence preview */}
      <Slide tone="ivory" eyebrow="03 · Evidence & objects">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-2xl font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
            What did survivors leave behind?
          </h2>
          <Link
            href="/evidence"
            className="rounded-full border border-stone-900/30 px-5 py-2 text-sm font-medium text-stone-900 transition hover:bg-stone-900/5"
          >
            Open all evidence →
          </Link>
        </div>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-800">
          Letters, songs, illustrated albums, theater photographs, religious
          documents, films of buses leaving for emigration. Each object is a
          decision survivors made: <em>to be seen</em>.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((item) => (
            <article
              key={item.id}
              className="flex h-full flex-col rounded-xl border border-stone-900/10 bg-white/70 p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-700/70">
                {item.kind} · {item.year}
              </p>
              <h3 className="mt-2 font-serif text-xl text-stone-900">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-700">
                {item.story}
              </p>
              <Link
                href={`/evidence#${item.id}`}
                className="mt-4 text-sm font-medium text-amber-900 underline-offset-4 hover:underline"
              >
                Show this in the talk →
              </Link>
            </article>
          ))}
        </div>
      </Slide>

      {/* Slide 5 — Voices teaser */}
      <Slide tone="charcoal" eyebrow="04 · Survivor voices">
        <h2 className="max-w-3xl font-serif text-4xl leading-tight text-stone-100 sm:text-5xl">
          From an object to a voice.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-300">
          The objects tell us <em>what</em> survivors did. Oral histories tell
          us <em>how it felt</em>. In the video, play one short clip from a
          survivor interview — and let it speak.
        </p>
        <div className="mt-10">
          <Link
            href="/voices"
            className="rounded-full bg-amber-50 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white"
          >
            Open survivor voices →
          </Link>
        </div>
      </Slide>

      {/* Slide 6 — Remembrance teaser */}
      <Slide tone="sepia" eyebrow="05 · Remembrance">
        <h2 className="max-w-3xl font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
          How should we remember them — as humanity?
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-800">
          Not only as victims. Survivors organized historical commissions,
          newspapers, theaters, and religious courts <em>inside the
          camps</em>. They began the work of memory themselves. Our job is to
          keep it going.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/remembrance"
            className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-amber-50 transition hover:bg-stone-700"
          >
            Read the conclusion →
          </Link>
          <Link
            href="/sources"
            className="rounded-full border border-stone-900/30 px-6 py-3 text-sm font-medium text-stone-900 transition hover:bg-stone-900/5"
          >
            Sources used
          </Link>
        </div>
      </Slide>
    </div>
  );
}
