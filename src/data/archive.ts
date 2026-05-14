export type ArchiveEntry = {
  slug: string;
  title: string;
  summary: string;
  period: string;
  themes: string[];
  /** Short note on why this entry matters for students or readers */
  whyItMatters: string;
};

export const archiveEntries: ArchiveEntry[] = [
  {
    slug: "reading-newspapers-as-history",
    title: "Reading newspapers as history",
    summary:
      "Newspapers are written in the moment—not with hindsight. That makes them vivid, but also biased by audience, advertisers, and politics.",
    period: "Method",
    themes: ["sources", "bias", "newspapers"],
    whyItMatters:
      "Learning to read for framing (what is on page one vs. buried) is a transferable skill for any period you study.",
  },
  {
    slug: "migration-and-memory",
    title: "Migration and memory",
    summary:
      "People carry stories across borders. Archives often hold departure and arrival traces in different languages and bureaucracies.",
    period: "19th–20th centuries",
    themes: ["migration", "oral history", "archives"],
    whyItMatters:
      "Connecting records across countries can reconstruct lives that official histories flatten.",
  },
  {
    slug: "yiddish-press-and-public-life",
    title: "The Yiddish press and public life",
    summary:
      "Yiddish newspapers linked communities across cities. They reported labor, culture, local crime, and international events—sometimes in the same issue.",
    period: "1880s–1940s",
    themes: ["Yiddish", "press", "Jewish history"],
    whyItMatters:
      "The Yiddish press is a major primary-source window into daily politics and culture in Eastern Europe and the Americas.",
  },
];

export function getArchiveBySlug(slug: string): ArchiveEntry | undefined {
  return archiveEntries.find((e) => e.slug === slug);
}
