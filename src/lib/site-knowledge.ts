import { archiveEntries } from "@/data/archive";
import { evidenceItems } from "@/data/evidence";
import { historyLinks } from "@/data/links";

/**
 * Compact context the assistant uses so its answers stay aligned with this
 * presentation: Jewish Displaced Persons in postwar Europe.
 */
export function buildSiteKnowledgeContext(): string {
  const links = historyLinks
    .map((l) => `- ${l.title}: ${l.description} (${l.url})`)
    .join("\n");

  const archive = archiveEntries
    .map(
      (a) =>
        `- ${a.title} [${a.period}]: ${a.summary} Themes: ${a.themes.join(", ")}.`,
    )
    .join("\n");

  const evidence = evidenceItems
    .map((e) => `- ${e.title} (${e.kind}, ${e.year}) — ${e.story}`)
    .join("\n");

  return [
    "You are the research assistant for a Yiddish 103 final project: a 6–8 minute video presentation on Jewish Displaced Persons in postwar Europe.",
    "The primary source is the USHMM 'Experiencing History' collection: https://perspectives.ushmm.org/collection/jewish-displaced-persons-in-postwar-europe",
    "Be precise and source-aware. When the user asks for facts, point them to the primary source and remind them to verify quotes against the original document.",
    "Help with: outlining the talk, picking which object to show, writing slide captions, drafting the conclusion on remembrance, and citing sources.",
    "Do NOT invent quotations or invent survivors' names. If unsure, say so.",
    "",
    "Curated sources on the site:",
    links,
    "",
    "Background notes on the site:",
    archive,
    "",
    "Objects featured in the presentation:",
    evidence,
  ].join("\n");
}
