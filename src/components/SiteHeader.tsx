import Link from "next/link";

const nav = [
  { href: "/", label: "Title" },
  { href: "/evidence", label: "Evidence" },
  { href: "/voices", label: "Survivor Voices" },
  { href: "/remembrance", label: "Remembrance" },
  { href: "/sources", label: "Sources" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-900/10 bg-[#f6f1e7]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-700/70">
            Yiddish 103 · Final project
          </span>
          <span className="font-serif text-base text-stone-900 group-hover:text-stone-700 sm:text-lg">
            She’erit Hapletah — Jewish DPs in Postwar Europe
          </span>
        </Link>
        <nav className="hidden gap-1 text-sm font-medium text-stone-800 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-1.5 transition hover:bg-stone-900/10"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <nav className="flex gap-2 text-sm font-medium text-stone-800 sm:hidden">
          <Link
            href="/evidence"
            className="rounded-md bg-stone-900/5 px-2.5 py-1 hover:bg-stone-900/10"
          >
            Slides →
          </Link>
        </nav>
      </div>
    </header>
  );
}
