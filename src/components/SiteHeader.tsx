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
    <header className="sticky top-0 z-30 border-b border-black/10 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-indigo-600">
            Yiddish 103 · Final Project
          </span>
          <span className="font-serif text-base font-semibold text-slate-900 group-hover:text-indigo-700 sm:text-lg">
            She'erit Hapletah — Jewish DPs in Postwar Europe
          </span>
        </Link>
        <nav className="hidden gap-1 text-sm font-semibold sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-1.5 text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <nav className="flex gap-2 text-sm font-semibold sm:hidden">
          <Link
            href="/evidence"
            className="rounded-lg bg-indigo-600 px-3 py-1.5 text-white hover:bg-indigo-700"
          >
            Slides →
          </Link>
        </nav>
      </div>
    </header>
  );
}
