import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Compass, Scale, Shield, Users, Search, FileCheck, MessageSquare } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/phone";
import support from "@/assets/v3-support.jpg";
import network from "@/assets/v3-network.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Cable View Point — A Consumer-First Connectivity Platform" },
      { name: "description", content: "Cable View Point is an independent comparison desk. Here's the charter, the process and the four rules we don't break." },
      { property: "og:title", content: "About Cable View Point" },
      { property: "og:description", content: "An independent, consumer-first connectivity comparison platform." },
      { property: "og:image", content: support },
    ],
    links: [{ rel: "canonical", href: "https://cableviewpoint.com/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Cable View Point"
        title="An independent comparison desk for how you get online."
        subtitle="Launched in 2026 with one job: cut through provider marketing and give households the information they need to choose well."
        bgImage={network}
      />

      {/* Charter split */}
      <section className="relative border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 py-24">
          <div className="grid lg:grid-cols-12 gap-0 border border-border">
            <div className="lg:col-span-7 p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-border">
              <span className="num-tag">/ CHARTER</span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ink leading-[1.02] tracking-[-0.035em]">
                We compare.<br /><span className="text-signal">We don't sell.</span>
              </h2>
              <p className="mt-6 text-ink-muted leading-relaxed max-w-xl">
                Cable View Point started as a spreadsheet one of our founders kept for family members who kept
                calling, confused about why their bill went up again. It grew into an index: every plan,
                technology and coverage footprint we can verify from participating providers, laid out so an
                ordinary household can actually read it in one sitting.
              </p>
              <p className="mt-4 text-ink-muted leading-relaxed max-w-xl">
                We don't own network infrastructure. We don't sign contracts on your behalf. We don't run
                quota-driven sales floors. Every path through this site ends the same way — you talking directly
                to the provider you picked, on your terms.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-signal">Reach the team <ArrowRight className="h-4 w-4" /></Link>
                <a href={PHONE_TEL} className="btn-ghost"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</a>
              </div>
            </div>
            <div className="lg:col-span-5 relative min-h-[380px]">
              <img src={support} alt="Cable View Point support" loading="lazy" width={1200} height={900} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="relative border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 py-20">
          <div className="max-w-xl mb-14">
            <span className="num-tag">/ HOW WE VET A LISTING</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ink leading-[1.02] tracking-[-0.035em]">Three checks before anything reaches this site.</h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-[27px] top-3 bottom-3 w-px bg-border" />
            <div className="space-y-10">
              {[
                { icon: Search, t: "Coverage confirmed at address level", d: "We cross-reference provider build-out filings and live availability checks rather than trusting a single national map." },
                { icon: FileCheck, t: "Pricing and terms re-checked monthly", d: "Promotional pricing, contract length, equipment fees and data caps are re-pulled on a rolling schedule — stale listings get pulled, not left up." },
                { icon: MessageSquare, t: "Plain-English rewrite", d: "Provider language gets translated into what it means for a household: what breaks, what it costs later, what to ask before signing." },
              ].map((s, i) => (
                <Reveal key={s.t} delay={i * 90}>
                  <div className="flex gap-6">
                    <span className="relative z-10 grid place-items-center h-14 w-14 shrink-0 rounded-2xl bg-surface border border-border shadow-soft"><s.icon className="h-6 w-6 text-primary" /></span>
                    <div className="pt-2">
                      <div className="font-display text-xl sm:text-2xl text-ink">{s.t}</div>
                      <p className="mt-2 text-ink-muted leading-relaxed max-w-2xl">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 py-20">
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-5">
              <span className="num-tag">/ VALUES</span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ink leading-[1.02] tracking-[-0.035em]">Four fixed points.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-border">
            {[
              { icon: Compass, code: "01", t: "Consumer-first", d: "Every guide is written for households first, providers second." },
              { icon: Scale, code: "02", t: "Neutral", d: "We compare across providers — no exclusive vendor deal shapes our editorial." },
              { icon: Shield, code: "03", t: "Transparent", d: "We disclose when a comparison involves a participating provider. No dark patterns." },
              { icon: Users, code: "04", t: "Human help", d: "Real people answer the phone. No chatbots pretending to be humans." },
            ].map((v, i) => (
              <div key={v.code} className={`p-8 bg-background hover:bg-surface transition ${i < 3 ? "border-b md:border-b-0 md:border-r border-border" : ""} ${i < 2 ? "md:border-b lg:border-b-0" : ""}`}>
                <div className="flex items-center justify-between">
                  <div className="mono text-[11px] tracking-[0.4em] uppercase text-signal">/ {v.code}</div>
                  <v.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-ink">{v.t}</h3>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / stats close */}
      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 py-20 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <span className="num-tag">/ IN OUR OWN WORDS</span>
            <blockquote className="mt-4 font-display text-3xl sm:text-4xl text-ink leading-[1.15] tracking-[-0.02em]">
              "The goal was never to be the biggest comparison site. It was to be the one call your parents make
              before signing anything."
            </blockquote>
            <p className="mt-6 text-sm text-ink-muted mono uppercase tracking-widest">— Cable View Point founding team</p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {[
              { k: "2026", l: "Founded" },
              { k: "50", l: "States indexed" },
              { k: "124+", l: "Providers" },
              { k: "0", l: "Sales quotas" },
            ].map((s) => (
              <div key={s.k} className="panel p-6">
                <div className="font-display text-3xl text-primary">{s.k}</div>
                <div className="mt-2 mono text-[10px] tracking-widest uppercase text-ink-muted">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
