import type { ReactNode } from "react";

export function LegalContent({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-24">
      <article
        className="card-premium [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_h2]:mt-8 [&_h2]:mb-3 [&_h2:first-child]:mt-0 [&_p]:text-ink-muted [&_p]:leading-relaxed [&_p]:mb-4 [&_a]:text-primary [&_a]:font-medium hover:[&_a]:underline"
      >
        {children}
      </article>
    </section>
  );
}
