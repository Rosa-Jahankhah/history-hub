export type HistoryLink = {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
};

export const historyLinks: HistoryLink[] = [
  {
    id: "library-congress",
    title: "Library of Congress Digital Collections",
    url: "https://www.loc.gov/collections/",
    description:
      "Digitized manuscripts, maps, photos, and newspapers from the United States and worldwide.",
    tags: ["primary sources", "maps", "newspapers"],
  },
  {
    id: "internet-archive",
    title: "Internet Archive",
    url: "https://archive.org/",
    description:
      "Books, audio, video, and web captures—useful for tracing how sites and movements documented themselves over time.",
    tags: ["books", "web archive", "audio"],
  },
  {
    id: "yivo",
    title: "YIVO Encyclopedia of Jews in Eastern Europe",
    url: "https://encyclopedia.yivo.org/",
    description:
      "Scholarly articles on places, culture, and historical events across Eastern European Jewish life.",
    tags: ["encyclopedia", "Eastern Europe"],
  },
  {
    id: "europeana",
    title: "Europeana",
    url: "https://www.europeana.eu/",
    description:
      "Aggregated cultural heritage from European museums, libraries, and archives.",
    tags: ["Europe", "images", "metadata"],
  },
  {
    id: "national-archives",
    title: "U.S. National Archives",
    url: "https://www.archives.gov/",
    description:
      "Federal records, exhibits, and research tools for U.S. political and social history.",
    tags: ["government", "U.S."],
  },
  {
    id: "chronicling-america",
    title: "Chronicling America (Library of Congress)",
    url: "https://chroniclingamerica.loc.gov/",
    description:
      "Historic American newspapers with rich metadata for place and date-based research.",
    tags: ["newspapers", "U.S."],
  },
];
