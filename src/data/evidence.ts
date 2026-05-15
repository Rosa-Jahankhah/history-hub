export type EvidenceItem = {
  id: string;
  title: string;
  /** A short attribution / object label */
  label: string;
  year: string;
  /** What kind of object this is */
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
  /** A short narrative paragraph for the slide */
  story: string;
  /** Optional pull quote from the source (verify before use) */
  quote?: string;
  /** Optional path to an image you add to /public/images/ */
  image?: string;
  /** USHMM "Experiencing History" item URL — paste the exact item link here */
  sourceUrl: string;
};

/**
 * All items below are from the USHMM "Experiencing History" collection
 * "Jewish Displaced Persons in Postwar Europe":
 * https://perspectives.ushmm.org/collection/jewish-displaced-persons-in-postwar-europe
 *
 * `sourceUrl` defaults to the collection page; replace each one with the exact item URL
 * from the collection (open the item, then copy the page URL).
 */
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
      "In September 1945, Earl G. Harrison delivered a scathing report on the conditions facing Jewish DPs. He argued that liberation alone was not enough — that Jewish survivors needed to be recognized as a distinct group with distinct needs.",
    quote:
      "Beyond knowing that they are no longer in danger of the gas chambers… they see, and there is, little change… they wonder and frequently ask what 'liberation' means.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "eisenhower-truman",
    title: "Eisenhower writes back to Truman",
    label: "Letter from Dwight D. Eisenhower to Harry S. Truman",
    year: "Sept. 18, 1945",
    kind: "Letter",
    story:
      "After the Harrison Report, the Allies were forced to respond. Eisenhower's letter shows how high the question of Jewish DP welfare had reached — and how the U.S. military began to change camp policies in response.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "falik-letter",
    title: "Letter from Barbara Falik",
    label: "Falik to the PM Standard",
    year: "1945",
    kind: "Letter",
    story:
      "An American observer writing about hunger, hygiene, and the everyday treatment of Jewish DPs — a reminder that ordinary Americans were learning about these camps in real time.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "lewy-letter",
    title: "Letter from Julius Lewy to ‘the liberators’",
    label: "Julius Lewy",
    year: "1945",
    kind: "Letter",
    story:
      "A survivor addresses the Allied soldiers directly, exposing bureaucracy, food shortages, and the strange position of being free but not yet at home.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "faktor-letter",
    title: "Letter from Szyja Faktor to His Relatives",
    label: "Szyja Faktor",
    year: "1948",
    kind: "Letter",
    story:
      "A private letter that pulls us inside one family — debating Zionism, emigration, and survival, three years after liberation.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "deggendorf-song",
    title: "Song from Deggendorf DP Camp",
    label: "Deggendorf DP Camp pamphlet",
    year: "1945",
    kind: "Pamphlet",
    story:
      "Music as evidence. The camps were not only sites of waiting; they were sites where Jewish culture was reasserted in Yiddish song, theater, and print.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "gurvits-album",
    title: "‘The Book of Life in the Zeilsheim Camp’",
    label: "Zvi Gurvits, illustrated album",
    year: "1945",
    kind: "Album",
    story:
      "Survivors made their own books. This album records communal life in Zeilsheim through art and Hebrew/Yiddish text — survivors writing themselves back into history.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "kadish-persecuted",
    title: "George Kadish, ‘The Persecuted’",
    label: "Documentary, Landsberg DP Camp",
    year: "1947",
    kind: "Documentary",
    story:
      "Kadish, who had secretly photographed the Kovno ghetto, kept documenting after liberation. His Landsberg footage shows children, music, and women rebuilding daily life.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "kazet-theater",
    title: "‘This Is How It Began’ at Kazet Theater",
    label: "Photograph of performance, Sami Feder",
    year: "1947",
    kind: "Photograph",
    story:
      "Survivor theater reenacted the recent past on stage — turning trauma into testimony in front of an audience of other survivors.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "purim-photo",
    title: "Purim Play in the DP Camps",
    label: "Herbert Friedman, photograph",
    year: "1945",
    kind: "Photograph",
    story:
      "On Purim — the holiday of Jewish survival against an attempted annihilator — survivors staged a play in costume. A photograph of joy that is also a photograph of defiance.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "fischer-map",
    title: "Greta Fischer, Camp Map",
    label: "Hand-drawn map by aid worker",
    year: "1945",
    kind: "Map",
    story:
      "Aid workers like Fischer mapped the camps to find missing children and reunite families. Geography becomes a tool of care.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "munzer-questionnaire",
    title: "Children’s Questionnaire of Josef Munzer",
    label: "Postwar children’s questionnaire",
    year: "1946",
    kind: "Report",
    story:
      "Children were asked to write what had happened to them. These forms became some of the earliest formal Jewish testimony of the Holocaust.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "feygnboym-article",
    title: "Moyshe Feygnboym, ‘Why Historical Commissions?’",
    label: "Newspaper article in the DP press",
    year: "1946",
    kind: "Newspaper Article",
    story:
      "Survivors did not wait to be remembered — they organized historical commissions, gathered testimony, and published in their own Yiddish press.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "weiss-widowhood",
    title: "Widowhood Release of Golda Leitman Weiss",
    label: "Rabbinic certificate",
    year: "1946",
    kind: "Petition",
    story:
      "Religious life had to be rebuilt. To remarry, women needed proof their husbands had died. This document is the bureaucratic shape of grief.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "pinkusevits-mama",
    title: "Rivke Horvits-Pinkusevits, ‘Mama, You Live On’",
    label: "Article in The Jewish World",
    year: "1946",
    kind: "Newspaper Article",
    story:
      "A daughter publicly mourns her mother in the Yiddish press — turning private loss into communal witness.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "jdc-buses",
    title: "JDC Emigration Buses Leave Paris",
    label: "Newsreel of refugee transport",
    year: "1940s",
    kind: "Newsreel",
    story:
      "The Joint Distribution Committee organized emigration. Watch the buses leave: this is the moment ‘DP’ becomes ‘immigrant.’",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "kibbutz-buchenwald",
    title: "Booklet from Kibbutz Buchenwald",
    label: "Album for Major Alexander Rosenbaum",
    year: "1945",
    kind: "Album",
    story:
      "Survivors organized agricultural collectives inside camps to prepare for emigration to Palestine — a future-oriented act in a place built for waiting.",
    sourceUrl: COLLECTION_URL,
  },
  {
    id: "neu-freimann",
    title: "Incident at Neu Freimann DP Camp",
    label: "Wachtel report",
    year: "1946",
    kind: "Report",
    story:
      "When survivors recognized former tormentors, the camps became sites of confrontation. The report is evidence that ‘liberation’ did not erase the social world of the war.",
    sourceUrl: COLLECTION_URL,
  },
];
