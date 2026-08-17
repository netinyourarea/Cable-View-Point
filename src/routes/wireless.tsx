import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Signal, Smartphone, Wifi, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/phone";

import mobile from "@/assets/v3-mobile.jpg";
import network from "@/assets/v3-network.jpg";
import router from "@/assets/v3-router.jpg";

export const Route = createFileRoute("/wireless")({
  head: () => ({
    meta: [
      { title: "Wireless — Mobile Plans, 5G Home Internet & Hotspots | Cable View Point" },
      { name: "description", content: "Compare mobile plans, 5G home internet, hotspots and coverage from participating carriers." },
      { property: "og:title", content: "Wireless — Cable View Point" },
      { property: "og:description", content: "Compare mobile, 5G home internet and hotspots." },
      { property: "og:image", content: mobile },
    ],
    links: [{ rel: "canonical", href: "https://cableviewpoint.com/wireless" }],
  }),
  component: WirelessPage,
});

const steps = [
  { icon: Smartphone, t: "Phone plans", d: "Unlimited, family, prepaid and international-friendly plans from participating carriers, compared on data, hotspot allowance and roaming — not just the sticker price." },
  { icon: Signal, t: "5G home internet", d: "A cable-free way to bring fast internet into a home. Flat pricing, no installer visit, self-install in minutes where the signal is strong enough to carry a household." },
  { icon: Wifi, t: "Mobile hotspots", d: "For the cabin, the road trip, or the day the main line goes down. Compared on data caps, real-world speed and how far the coverage actually reaches." },
  { icon: MapPin, t: "Coverage maps", d: "Wireless is only as good as the signal at your address. We cross-check carrier maps against home, work and the places you actually travel." },
];

function WirelessPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Wireless / Layer 03"
        title="Mobile, 5G home internet and hotspots — compared by the signal at your door."
        subtitle="Coverage is local. Cable View Point helps you weigh carriers against where you actually live, work and travel."
        bgImage={mobile}
      />

      {/* Vertical timeline of wireless options — distinct from bordered grids used elsewhere */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-16 sm:py-20">
          <div className="relative">
            <div className="hidden md:block absolute left-[27px] top-3 bottom-3 w-px bg-border" />
            <div className="space-y-10">
              {steps.map((s, i) => (
                <Reveal key={s.t} delay={i * 80}>
                  <div className="flex gap-6">
                    <span className="relative z-10 grid place-items-center h-14 w-14 shrink-0 rounded-2xl bg-surface border border-border shadow-soft"><s.icon className="h-6 w-6 text-primary" /></span>
                    <div className="pt-2 pb-2">
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

      {/* Image band with stat panels overlaid */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={network} alt="" loading="lazy" width={1600} height={800} className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/60" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-xl">
            <span className="eyebrow">Coverage first</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ink leading-tight">Price second. The cheapest carrier isn't a bargain if it drops signal in your kitchen.</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { v: "3", l: "Major nationwide 5G carriers" },
              { v: "12+", l: "MVNO options tracked" },
              { v: "3", l: "Coverage layers: 5G / 4G / roam" },
              { v: "Cross-carrier", l: "Home + mobile bundles" },
            ].map((k) => (
              <div key={k.l} className="panel p-6">
                <div className="font-display text-3xl text-primary">{k.v}</div>
                <div className="mt-2 text-xs text-ink-muted leading-snug">{k.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image feature */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-16 sm:py-20">
          <div className="rounded-[2.5rem] bg-surface border border-border shadow-soft overflow-hidden grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <span className="num-tag">5G home internet</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">No installer visit, no wire in the wall.</h2>
              <p className="mt-4 text-ink-muted leading-relaxed">
                A receiver goes near a window, pairs with the carrier app, and you're online — usually inside
                twenty minutes. It's the fastest onboarding of any technology we track, which is exactly why
                it's worth double-checking the coverage claim before you commit.
              </p>
              <Link to="/contact" className="mt-6 btn-primary w-fit">Check coverage at my address <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="relative min-h-[260px]">
              <img src={router} alt="5G home internet receiver" loading="lazy" width={1400} height={1000} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-3 sm:px-6 pb-6">
        <div className="mx-auto max-w-[1240px] rounded-[2.5rem] bg-gradient-cyan text-primary-foreground overflow-hidden">
          <div className="p-8 sm:p-14 line-grid flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <h2 className="font-display text-3xl sm:text-4xl leading-tight max-w-lg">Check carrier coverage at your address.</h2>
            <div className="flex flex-col gap-3 shrink-0">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-surface px-6 py-3.5 text-sm font-semibold text-primary hover:-translate-y-0.5 transition-transform">
                Check coverage <ArrowRight className="h-4 w-4" />
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
