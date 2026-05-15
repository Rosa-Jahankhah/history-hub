import type { ReactNode } from "react";

type SlideProps = {
  children: ReactNode;
  /** Optional eyebrow shown above the slide content */
  eyebrow?: string;
  /** Background tone */
  tone?: "ivory" | "sepia" | "charcoal" | "amber";
  /** Make the slide fill the viewport height — perfect for Zoom screen sharing */
  fill?: boolean;
  className?: string;
  id?: string;
};

const toneClass: Record<NonNullable<SlideProps["tone"]>, string> = {
  ivory: "bg-[#f6f1e7] text-stone-900",
  sepia: "bg-[#efe6d4] text-stone-900",
  amber: "bg-[#3a2a17] text-amber-50",
  charcoal: "bg-stone-900 text-stone-100",
};

export function Slide({
  children,
  eyebrow,
  tone = "ivory",
  fill = true,
  className = "",
  id,
}: SlideProps) {
  return (
    <section
      id={id}
      className={`${toneClass[tone]} ${
        fill ? "min-h-[88vh]" : ""
      } flex w-full items-center border-b border-stone-900/10 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        {eyebrow && (
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] opacity-70">
            {eyebrow}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
