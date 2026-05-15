export type EvidenceItem = {
  id: string;
  title: string;
  label: string;
  year: string;
  kind:
    | "Letter"
    | "Photograph"
    | "Documentary"
    | "Newspaper Article"
    | "Pamphlet"
    | "Album"
    | "Report"
    | "Map"
    | "Petition"
    | "Newsreel";
  /** A short narrative paragraph — the story of this object */
  story: string;
  /** Optional pull-quote to display prominently */
  quote?: string;
  /** Drop an image at /public/images/<id>.jpg to display it */
  image?: string;
  sourceUrl: string;
};

const COLLECTION_URL =
  "https://perspectives.ushmm.org/collection/jewish-displaced-persons-in-postwar-europe";

export const evidenceItems: EvidenceItem[] = [
  {
    id: "harrison-report",
    title: "The Harrison Report",
    label: "Earl G. Harrison to President Truman",
    year: "1945",
    kind: "Report",
    story:
      "In September 1945, Earl G. Harrison traveled through Allied-occupied Germany and wrote a report to President Truman that shocked Washington. He found Jewish survivors warehoused in camps — sometimes in the very same buildings where they had been prisoners under Nazi rule. The report forced the U.S. military to change its policies and begin recognizing Jewish DPs as a group with distinct, urgent needs.",
    quote:
      "Beyond knowing that they are no longer in danger of the gas chambers… they see, and there is, little change… they wonder and frequently ask what 'liberation' means.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "lewy-letter",
    title: "Letter from Julius Lewy to 'the liberators'",
    label: "Julius Lewy · written by a survivor",
    year: "1945",
    kind: "Letter",
    story:
      "Julius Lewy addresses the Allied soldiers directly — not as a grateful refugee, but as someone demanding accountability. He describes food shortages, bureaucratic walls, and the strange experience of being free but having nowhere to go. This letter is a rare case of a survivor speaking to power in his own words, shortly after liberation.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "deggendorf-song",
    title: "Song from Deggendorf DP Camp",
    label: "Pamphlet printed in the camp · in Yiddish",
    year: "1945",
    kind: "Pamphlet",
    story:
      "Within months of liberation, survivors in the Deggendorf camp were already printing pamphlets and performing songs in Yiddish. Music was not entertainment — it was a declaration that Jewish culture had survived. The language of the song matters too: Yiddish, the everyday language of Eastern European Jewish life, still spoken even after the communities that spoke it had been destroyed.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "kadish-persecuted",
    title: "George Kadish, 'The Persecuted'",
    label: "Documentary footage · Landsberg DP Camp",
    year: "1947",
    kind: "Documentary",
    story:
      "George Kadish had secretly photographed life and death in the Kovno ghetto under Nazi occupation — risking his life to preserve evidence. After liberation he kept his camera. At Landsberg DP Camp he filmed children playing, women sewing, and men debating their future. His footage is an act of double witness: he documented the Holocaust, then documented the survivors.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "feygnboym-article",
    title: "Moyshe Feygnboym, 'Why Historical Commissions?'",
    label: "Newspaper article in the DP press · in Yiddish",
    year: "1946",
    kind: "Newspaper Article",
    story:
      "In the DP camps survivors did not wait for historians to tell their story. They organized their own historical commissions and wrote in their own Yiddish newspapers. Feygnboym's article asks why this work matters — and his answer is simple: if we do not gather testimony now, while witnesses are alive and still in one place, the world will be left with silence. Reading it today, the urgency has not faded.",
    sourceUrl: COLLECTION_URL,
  },
];
