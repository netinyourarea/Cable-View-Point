import { Reveal } from "@/components/site/Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  bgImage,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  bgImage?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="blob h-[420px] w-[420px] -top-32 -left-24 bg-primary/25" />
      <div aria-hidden className="blob h-[320px] w-[320px] top-10 right-0 bg-signal/25" />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 pt-14 pb-12 sm:pt-20 sm:pb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className={bgImage ? "lg:col-span-7" : "lg:col-span-9"}>
            <Reveal>
              {eyebrow && <span className="eyebrow">{eyebrow}</span>}
              <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink leading-[1.06]">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-5 max-w-2xl text-base sm:text-lg text-ink-muted leading-relaxed">{subtitle}</p>
              )}
            </Reveal>
          </div>

          {bgImage && (
            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-elegant">
                  <img src={bgImage} alt="" loading="lazy" width={1400} height={1000} className="h-64 sm:h-80 w-full object-cover" />
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
