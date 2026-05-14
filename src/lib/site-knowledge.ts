import { archiveEntries } from "@/data/archive";
import { historyLinks } from "@/data/links";

/**
 * Compact context for the assistant so answers align with this site's curated material.
 */
export function buildSiteKnowledgeContext(): string {
  const links = historyLinks
    .map((l) => `- ${l.title} (${l.tags.join(", ")}): ${l.description}`)
    .join("\n");

  const archive = archiveEntries
    .map(
      (a) =>
        `- ${a.title} [${a.period}]: ${a.summary} Themes: ${a.themes.join(", ")}.`,
    )
    .join("\n");

  return [
    "You are the assistant for a small history hub website.",
    "Prefer accurate, source-aware guidance. When users ask for facts, remind them to verify in primary sources.",
    "Curated links on the site:",
    links,
    "",
    "Archive summaries on the site:",
    archive,
  ].join("\n");
}
