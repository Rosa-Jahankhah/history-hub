import type { HistoryLink } from "@/data/links";

export function HistoryLinkCard({ link }: { link: HistoryLink }) {
  return (
    <article className="flex flex-col rounded-xl border border-amber-900/12 bg-white/70 p-5 shadow-sm shadow-amber-900/5 transition hover:border-amber-800/25 hover:shadow-md">
      <h3 className="font-serif text-lg text-amber-950">{link.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-amber-950/75">
        {link.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {link.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-amber-100/80 px-2.5 py-0.5 text-xs text-amber-900/80"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex text-sm font-medium text-amber-800 underline-offset-4 hover:underline"
      >
        Visit resource
      </a>
    </article>
  );
}
