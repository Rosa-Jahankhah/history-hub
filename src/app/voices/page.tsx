import type { Metadata } from "next";
import Link from "next/link";
import { Slide } from "@/components/Slide";
import { voices } from "@/data/voices";

export const metadata: Metadata = {
  title: "Survivor Voices",
  description:
    "Short clips and excerpts from survivor interviews — the human voice behind the documents.",
};

export default function VoicesPage() {
  return (
    <div className="flex-1">
      <Slide tone="navy" eyebrow="Survivor voices">
        <h1 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
          From the archive to a living voice.
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
          Objects are silent. Oral history gives back the breath between sentences, the pause, the
          voice. Play one short clip in your video — under a minute — and let the survivor carry the
          room.
        </p>
        <p className="mt-3 rounded-xl bg-white/10 px-4 py-3 text-sm text-slate-300">
          <strong className="text-white">Tip:</strong> Always say the survivor's full name on screen
          when citing a clip.
        </p>
      </Slide>

      {voices.map((voice, index) => (
        <Slide
          key={voice.id}
          tone={index % 2 === 0 ? "sky" : "rose"}
          eyebrow={`Voice ${String(index + 1).padStart(2, "0")}`}
        >
          <h2 className="max-w-3xl font-serif text-3xl leading-tight text-slate-900 sm:text-4xl">
            {voice.title}
          </h2>
          <p className="mt-2 text-sm font-semibold text-slate-600">{voice.attribution}</p>

          <blockquote className="mt-8 max-w-3xl rounded-2xl border-l-4 border-indigo-500 bg-white p-7 font-serif text-xl italic leading-snug text-slate-900 shadow-md">
            "{voice.excerpt}"
          </blockquote>

          {voice.embedUrl && (
            <div className="mt-8 aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border-4 border-white bg-slate-900 shadow-xl">
              <iframe
                src={voice.embedUrl}
                title={voice.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          )}

          <p className="mt-8 text-sm text-slate-600">
            Source:{" "}
            <a
              href={voice.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-indigo-600 underline-offset-4 hover:underline"
            >
              {voice.source}
            </a>
          </p>
        </Slide>
      ))}

      <Slide tone="amber" fill={false}>
        <div className="flex flex-col items-start gap-6 py-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
            From listening to remembering
          </p>
          <h2 className="font-serif text-3xl text-slate-900 sm:text-4xl">
            How should we keep them with us?
          </h2>
          <Link
            href="/remembrance"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-700"
          >
            Conclusion: Remembrance →
          </Link>
        </div>
      </Slide>
    </div>
  );
}
