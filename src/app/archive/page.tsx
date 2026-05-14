import type { Metadata } from "next";
import Link from "next/link";
import { ArchiveTeaser } from "@/components/ArchiveTeaser";
import { archiveEntries } from "@/data/archive";

export const metadata: Metadata = {
  title: "Archive | History Hub",
  description: "Short historical notes and how to think with primary sources.",
};

export default function ArchiveIndexPage() {
  return (
    <div className="mx-auto max-w-5xl flex-1 px-4 py-12 sm:px-6">
      <p className="text-sm font-medium uppercase tracking-wide text-amber-800/80">
        Archive
      </p>
      <h1 className="mt-2 font-serif text-4xl tracking-tight text-amber-950">
        Notes for close reading
      </h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-amber-950/75">
        These are not encyclopedia articles—they are compact guides meant to pair with the external
        collections linked on the home page.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {archiveEntries.map((entry) => (
          <ArchiveTeaser key={entry.slug} entry={entry} />
        ))}
      </div>

      <p className="mt-10 text-sm text-amber-900/65">
        Want to add your own notes? Edit{" "}
        <code className="rounded bg-amber-100/80 px-1.5 py-0.5 text-amber-900">
          src/data/archive.ts
        </code>{" "}
        or{" "}
        <Link href="/" className="font-medium text-amber-800 underline-offset-2 hover:underline">
          return home
        </Link>
        .
      </p>
    </div>
  );
}
