import type { ReactNode } from "react";

type SlideProps = {
  children: ReactNode;
  eyebrow?: string;
  tone?: "white" | "sky" | "indigo" | "rose" | "amber" | "navy";
  fill?: boolean;
  className?: string;
  id?: string;
};

const toneClass: Record<NonNullable<SlideProps["tone"]>, string> = {
  white:  "bg-white text-slate-900",
  sky:    "bg-sky-50 text-slate-900",
  indigo: "bg-indigo-700 text-white",
  rose:   "bg-rose-50 text-slate-900",
  amber:  "bg-amber-400 text-slate-900",
  navy:   "bg-slate-900 text-white",
};

export function Slide({
  children,
  eyebrow,
  tone = "white",
  fill = true,
  className = "",
  id,
}: SlideProps) {
  return (
    <section
      id={id}
      className={`${toneClass[tone]} ${
        fill ? "min-h-[88vh]" : ""
      } flex w-full items-center border-b border-black/10 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        {eyebrow && (
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] opacity-60">
            {eyebrow}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
