import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Tv, MonitorPlay, Film, Radio, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/phone";

import tv from "@/assets/v3-tv.jpg";
import home from "@/assets/v3-home.jpg";

export const Route = createFileRoute("/tv-streaming")({
  head: () => ({
    meta: [
      { title: "TV & Streaming — Cable vs Live TV vs On-Demand | Cable View Point" },
      { name: "description", content: "Compare traditional cable, live TV streaming and on-demand platforms — build a mix that matches how you actually watch." },
      { property: "og:title", content: "TV & Streaming — Cable View Point" },
      { property: "og:description", content: "Cable, satellite, live TV and on-demand — compared." },
      { property: "og:image", content: tv },
    ],
    links: [{ rel: "canonical", href: "https://cableviewpoint.com/tv-streaming" }],
  }),
  component: TvPage,
});

const options = [
  { icon: Tv, tag: "Cable", title: "Traditional cable", desc: "Deep channel lineups with local sports, live news, DVR and bundle discounts. Familiar, predictable, easy to install — the safe default for households that don't want to think about it." },
  { icon: MonitorPlay, tag: "Live TV streaming", title: "Live TV over the internet", desc: "Cloud-based live TV with no installer visit. Watch on multiple devices at once, cloud DVR included, and you can cancel the month you don't need it." },
  { icon: Film, tag: "On-demand", title: "Streaming platforms", desc: "Subscription libraries of movies, originals and series. Mixing two or three often replicates a full cable bundle for noticeably less, if you're picky about what you drop." },
  { icon: Radio, tag: "Satellite", title: "Satellite TV", desc: "The rural workhorse. Wide coverage, strong sports packages and HD/4K channels in places cable and fiber simply haven't built out to yet." },
];

const ledger = [
  { factor: "Live sports", cable: "Deep & regional", streaming: "Depends on the service" },
  { factor: "Local channels", cable: "Included", streaming: "Usually an add-on" },
  { factor: "Install", cable: "Technician visit", streaming: "Self-service, in minutes" },
  { factor: "Contract", cable: "Often 12–24 months", streaming: "Month-to-month" },
  { factor: "Devices", cable: "Set-top box", streaming: "Any smart TV or app" },
  { factor: "Bundle math", cable: "Cheaper with internet", streaming: "You pay per platform" },
];

function TvPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Television / Layer 02"
        title="Cable, satellite or streaming — the shortest path to a good watch."
        subtitle="Compare classic cable lineups, live-TV streaming and on-demand platforms without the sales pitch."
        bgImage={tv}
      />

      {/* Intro image band */}
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0">
          <img src={home} alt="" loading="lazy" width={1600} height={700} className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 py-14 sm:py-16">
          <div className="max-w-2xl">
            <span className="num-tag">Primetime, decoded</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">Your household, not a national average.</h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              More than 70% of U.S. homes now blend at least one streaming service with a traditional TV
              subscription. Cable View Point helps you build that mix around what your household actually
              watches, not what a bundle assumes you watch.
            </p>
          </div>
        </div>
      </section>

      {/* Options — panel cards, testimonial-style rhythm */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid sm:grid-cols-2 gap-5">
            {options.map((o, i) => (
              <Reveal key={o.title} delay={i * 70}>
                <div className="panel p-7 sm:p-8 h-full">
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center h-11 w-11 rounded-2xl bg-secondary"><o.icon className="h-5 w-5 text-primary" /></span>
                    <span className="chip chip-signal">{o.tag}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-ink">{o.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{o.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cable vs Streaming — accordion, not a table */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 pb-16 sm:pb-20">
          <span className="num-tag">Laid bare</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">Cable vs streaming, factor by factor.</h2>
          <div className="mt-8 space-y-3">
            {ledger.map((row) => (
              <details key={row.factor} className="panel group p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg text-ink">
                  {row.factor}
                  <ChevronRight className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-90" />
                </summary>
                <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl bg-secondary p-4">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-ink-muted">Cable</div>
                    <div className="mt-1 text-ink">{row.cable}</div>
                  </div>
                  <div className="rounded-2xl bg-secondary p-4">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-ink-muted">Streaming</div>
                    <div className="mt-1 text-ink">{row.streaming}</div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-3 sm:px-6 pb-6">
        <div className="mx-auto max-w-[1240px] rounded-[2.5rem] bg-gradient-cyan text-primary-foreground overflow-hidden">
          <div className="p-8 sm:p-14 line-grid flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <h2 className="font-display text-3xl sm:text-4xl leading-tight max-w-lg">Build the watch stack that fits how you actually watch.</h2>
            <div className="flex flex-col gap-3 shrink-0">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-surface px-6 py-3.5 text-sm font-semibold text-primary hover:-translate-y-0.5 transition-transform">
                Get my recommendation <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition">
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
