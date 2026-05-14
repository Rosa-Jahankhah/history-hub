import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { archiveEntries, getArchiveBySlug } from "@/data/archive";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return archiveEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getArchiveBySlug(slug);
  if (!entry) return { title: "Not found" };
  return {
    title: `${entry.title} | Archive`,
    description: entry.summary,
  };
}

export default async function ArchiveEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = getArchiveBySlug(slug);
  if (!entry) notFound();

  return (
    <article className="mx-auto max-w-3xl flex-1 px-4 py-12 sm:px-6">
      <Link
        href="/archive"
        className="text-sm font-medium text-amber-800 underline-offset-4 hover:underline"
      >
        ← All archive notes
      </Link>
      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-amber-800/75">
        {entry.period}
      </p>
      <h1 className="mt-2 font-serif text-4xl tracking-tight text-amber-950">{entry.title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-amber-950/80">{entry.summary}</p>

      <section className="mt-10 rounded-xl border border-amber-900/12 bg-white/80 p-6 shadow-sm">
        <h2 className="font-serif text-xl text-amber-950">Why it matters</h2>
        <p className="mt-2 leading-relaxed text-amber-950/80">{entry.whyItMatters}</p>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-amber-950">Themes</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {entry.themes.map((t) => (
            <li
              key={t}
              className="rounded-full bg-amber-100/90 px-3 py-1 text-sm text-amber-900/85"
            >
              {t}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
