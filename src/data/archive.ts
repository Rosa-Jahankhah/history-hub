export type ArchiveEntry = {
  slug: string;
  title: string;
  summary: string;
  period: string;
  themes: string[];
  whyItMatters: string;
};

export const archiveEntries: ArchiveEntry[] = [
  {
    slug: "what-is-a-dp",
    title: "What is a ‘Displaced Person’?",
    summary:
      "‘DP’ was a legal and social category invented by the Allies in 1943–45 to manage roughly 20 million people on the move at the end of World War II. About 1.5 million remained in occupied Germany and Austria in September 1945; about 300,000 of them were Jewish survivors of the Holocaust.",
    period: "1943–1951",
    themes: ["definitions", "policy", "UNRRA"],
    whyItMatters:
      "‘DP’ sounds bureaucratic, but it determined who got food, housing, and a path out of Europe. Categories shape lives.",
  },
  {
    slug: "the-harrison-report",
    title: "The Harrison Report and what changed",
    summary:
      "Earl G. Harrison’s September 1945 report told President Truman that Jewish survivors were being warehoused, sometimes alongside their former tormentors, and that conditions were unacceptable. After the report, the U.S. zone began to recognize Jewish DPs as a distinct group.",
    period: "1945",
    themes: ["policy", "advocacy", "U.S. zone"],
    whyItMatters:
      "It is one of the clearest cases where a single document changed Allied policy. Useful for talking about why writing things down matters in history.",
  },
  {
    slug: "rebuilding-jewish-life",
    title: "Rebuilding Jewish life inside the camps",
    summary:
      "Yiddish theater, Purim plays, songs, illustrated albums, historical commissions, religious courts that issued widowhood certificates so women could remarry — survivors did not wait to be remembered. They built institutions of memory in the camps themselves.",
    period: "1945–1951",
    themes: ["culture", "religion", "memory"],
    whyItMatters:
      "These are the everyday acts that turn ‘survivors’ back into a people with a future, not only a past.",
  },
];

export function getArchiveBySlug(slug: string): ArchiveEntry | undefined {
  return archiveEntries.find((e) => e.slug === slug);
}
