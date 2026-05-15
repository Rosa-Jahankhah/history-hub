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
      <Slide tone="charcoal" eyebrow="Survivor voices">
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-stone-100 sm:text-5xl">
          From the archive to a living voice.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-300">
          The objects in the previous section are silent. Oral history brings
          back the silence between sentences, the breath, the pause. In your
          video, play one short clip — under a minute — and let the survivor
          carry the room.
        </p>
        <p className="mt-3 text-sm text-stone-400">
          Tip: when you cite a clip, always say the survivor’s full name on
          screen.
        </p>
      </Slide>

      {voices.map((voice, index) => (
        <Slide
          key={voice.id}
          tone={index % 2 === 0 ? "sepia" : "ivory"}
          eyebrow={`Voice ${String(index + 1).padStart(2, "0")}`}
        >
          <h2 className="max-w-3xl font-serif text-3xl leading-tight text-stone-900 sm:text-4xl">
            {voice.title}
          </h2>
          <p className="mt-2 text-sm font-medium text-stone-700/80">
            {voice.attribution}
          </p>

          <blockquote className="mt-8 max-w-3xl rounded-r-xl border-l-4 border-stone-900/40 bg-white/60 p-6 font-serif text-xl italic leading-snug text-stone-900 shadow-sm">
            “{voice.excerpt}”
          </blockquote>

          {voice.embedUrl && (
            <div className="mt-8 aspect-video w-full max-w-3xl overflow-hidden rounded-xl border border-stone-900/15 bg-stone-900 shadow-lg">
              <iframe
                src={voice.embedUrl}
                title={voice.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          )}

          <p className="mt-8 text-sm text-stone-700">
            Source:{" "}
            <a
              href={voice.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-amber-900 underline-offset-4 hover:underline"
            >
              {voice.source}
            </a>
          </p>
        </Slide>
      ))}

      <Slide tone="amber" fill={false}>
        <div className="flex flex-col items-start gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/70">
            From listening to remembering
          </p>
          <h2 className="font-serif text-3xl text-amber-50 sm:text-4xl">
            How should we keep them with us?
          </h2>
          <Link
            href="/remembrance"
            className="rounded-full bg-amber-50 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white"
          >
            Conclusion: Remembrance →
          </Link>
        </div>
      </Slide>
    </div>
  );
}
