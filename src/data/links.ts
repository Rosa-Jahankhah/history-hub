export type HistoryLink = {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
};

/**
 * Sources cited in this presentation. The primary one for the project is the
 * USHMM "Experiencing History" collection on Jewish Displaced Persons.
 */
export const historyLinks: HistoryLink[] = [
  {
    id: "ushmm-dp-collection",
    title: "USHMM — Jewish Displaced Persons in Postwar Europe",
    url: "https://perspectives.ushmm.org/collection/jewish-displaced-persons-in-postwar-europe",
    description:
      "Primary collection used in this presentation: 20 sources (letters, newsreels, photographs, songs, reports) from Jewish DP camps in postwar Europe.",
    tags: ["primary source", "USHMM", "DP camps"],
  },
  {
    id: "ushmm-encyclopedia-dp",
    title: "USHMM Holocaust Encyclopedia — Displaced Persons",
    url: "https://encyclopedia.ushmm.org/content/en/article/displaced-persons",
    description:
      "Background article on the postwar DP crisis, UNRRA, and Jewish survivors’ situation across Allied zones.",
    tags: ["encyclopedia", "context"],
  },
  {
    id: "ushmm-harrison",
    title: "USHMM — The Harrison Report (1945)",
    url: "https://encyclopedia.ushmm.org/content/en/article/the-harrison-report",
    description:
      "Background and excerpts from Earl G. Harrison’s September 1945 report to President Truman on the plight of Jewish DPs.",
    tags: ["primary source", "1945", "policy"],
  },
  {
    id: "yivo-dp",
    title: "YIVO Encyclopedia — Displaced Persons",
    url: "https://yivoencyclopedia.org/article.aspx/Displaced_Persons",
    description:
      "Scholarly overview of Jewish DPs, the She’erit Hapletah (the surviving remnant), and emigration routes.",
    tags: ["encyclopedia", "scholarly"],
  },
  {
    id: "vha",
    title: "USC Shoah Foundation — Visual History Archive",
    url: "https://sfi.usc.edu/vha",
    description:
      "Tens of thousands of survivor video testimonies. Use a short clip in your video and credit the interviewee.",
    tags: ["oral history", "testimony"],
  },
  {
    id: "fortunoff",
    title: "Fortunoff Video Archive (Yale)",
    url: "https://fortunoff.library.yale.edu/",
    description:
      "Holocaust survivor video testimony archive — selected clips publicly available.",
    tags: ["oral history", "testimony"],
  },
];
