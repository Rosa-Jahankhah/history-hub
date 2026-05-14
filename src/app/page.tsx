import { AssistantChat } from "@/components/AssistantChat";
import { HistoryLinkCard } from "@/components/HistoryLinkCard";
import { ArchiveTeaser } from "@/components/ArchiveTeaser";
import { archiveEntries } from "@/data/archive";
import { historyLinks } from "@/data/links";
import Link from "next/link";

export default function Home() {
  const featuredArchive = archiveEntries.slice(0, 2);

  return (
    <div className="flex-1">
      <section className="border-b border-amber-900/10 bg-gradient-to-b from-[#fff9f0] to-[#faf7f2]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-800/80">
            Curated history workspace
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight tracking-tight text-amber-950 sm:text-5xl">
            Links you can trust, archive notes you can grow, and an assistant for the craft of
            history.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-amber-950/75">
            Start with stable digital collections, read the short archive essays on method, then use
            the assistant to sharpen questions—not to replace close reading of sources.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/archive"
              className="rounded-lg bg-amber-900 px-5 py-2.5 text-sm font-medium text-amber-50 shadow-sm transition hover:bg-amber-800"
            >
              Browse archive
            </Link>
            <a
              href="#links"
              className="rounded-lg border border-amber-900/25 bg-white/60 px-5 py-2.5 text-sm font-medium text-amber-950 transition hover:border-amber-800/40"
            >
              Jump to links
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-16 px-4 py-14 sm:px-6">
        <section id="links">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-3xl text-amber-950">History links</h2>
              <p className="mt-1 max-w-xl text-amber-950/70">
                Replace or extend this list in{" "}
                <code className="rounded bg-amber-100/80 px-1.5 py-0.5 text-sm text-amber-900">
                  src/data/links.ts
                </code>
                .
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {historyLinks.map((link) => (
              <HistoryLinkCard key={link.id} link={link} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-3xl text-amber-950">From the archive</h2>
              <p className="mt-1 text-amber-950/70">
                Longer notes live on their own pages; add more entries anytime.
              </p>
            </div>
            <Link
              href="/archive"
              className="text-sm font-medium text-amber-800 underline-offset-4 hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {featuredArchive.map((entry) => (
              <ArchiveTeaser key={entry.slug} entry={entry} />
            ))}
          </div>
        </section>

        <AssistantChat />
      </div>
    </div>
  );
}
