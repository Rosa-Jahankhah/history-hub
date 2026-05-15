export type SurvivorVoice = {
  id: string;
  /** Short headline used as a slide title */
  title: string;
  /** Survivor name + a one-line context */
  attribution: string;
  /** A short excerpt — paraphrase if you have not verified the exact words */
  excerpt: string;
  /** Where the testimony comes from */
  source: string;
  /** Direct URL to listen / read */
  url: string;
  /** Optional embed URL (e.g. YouTube embed) for a quick clip in your video */
  embedUrl?: string;
};

/**
 * Replace these with interviews you actually want to cite in your video.
 * Good free archives:
 *  - USC Shoah Foundation Visual History Archive: https://sfi.usc.edu/vha
 *  - USHMM oral histories: https://collections.ushmm.org/search/?f%5Bavailability%5D%5B%5D=Online
 *  - Yale Fortunoff Video Archive (selected clips): https://fortunoff.library.yale.edu/
 */
export const voices: SurvivorVoice[] = [
  {
    id: "ushmm-oral-history",
    title: "A survivor remembers the DP camp",
    attribution: "Oral history from a Jewish DP, recorded postwar",
    excerpt:
      "Add a 1–3 sentence excerpt here from the interview you choose. Keep it short — your video has 6–8 minutes total.",
    source: "USHMM Oral History Collection (Online)",
    url: "https://collections.ushmm.org/search/?f%5Bavailability%5D%5B%5D=Online&q=displaced+persons",
  },
  {
    id: "vha-clip",
    title: "Survivor on rebuilding life after liberation",
    attribution: "USC Shoah Foundation Visual History Archive",
    excerpt:
      "Pick a 30–60 second clip about leaving the camp, getting a visa, or finding family. Cite the interviewee’s full name on screen.",
    source: "USC Shoah Foundation",
    url: "https://sfi.usc.edu/vha",
  },
  {
    id: "fortunoff",
    title: "Voice from the Fortunoff Video Archive",
    attribution: "Yale Fortunoff Video Archive for Holocaust Testimonies",
    excerpt:
      "Use a publicly available clip; many full testimonies require institutional access. Always credit the speaker.",
    source: "Yale Fortunoff Archive",
    url: "https://fortunoff.library.yale.edu/",
  },
];
