import Link from "next/link";
import type { ArchiveEntry } from "@/data/archive";

export function ArchiveTeaser({ entry }: { entry: ArchiveEntry }) {
  return (
    <Link
      href={`/archive/${entry.slug}`}
      className="group block rounded-xl border border-amber-900/12 bg-[#fffefb] p-5 shadow-sm transition hover:border-amber-800/30 hover:shadow-md"
    >
      <p className="text-xs font-medium uppercase tracking-wide text-amber-800/70">
        {entry.period}
      </p>
      <h3 className="mt-1 font-serif text-xl text-amber-950 group-hover:text-amber-900">
        {entry.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-amber-950/75">
        {entry.summary}
      </p>
      <span className="mt-3 inline-block text-sm font-medium text-amber-800 underline-offset-4 group-hover:underline">
        Read note
      </span>
    </Link>
  );
}
