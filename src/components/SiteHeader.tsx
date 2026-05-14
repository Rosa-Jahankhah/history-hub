import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/archive", label: "Archive" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-amber-900/15 bg-[#faf7f2]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-lg tracking-tight text-amber-950 group-hover:text-amber-800 sm:text-xl">
            History Hub
          </span>
          <span className="text-xs text-amber-900/60">
            Links, archive notes, and a research assistant
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-amber-950/80">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1 transition hover:bg-amber-900/10 hover:text-amber-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
