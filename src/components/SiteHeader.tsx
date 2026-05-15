import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-3xl px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Yiddish 103 · Final Project
        </p>
        <Link href="/" className="block">
          <h1 className="mt-1 font-serif text-xl text-slate-900 hover:text-slate-700">
            She'erit Hapletah — Jewish Displaced Persons in Postwar Europe
          </h1>
        </Link>
      </div>
    </header>
  );
}
