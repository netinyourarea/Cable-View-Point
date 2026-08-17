import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Wifi, Tv, Smartphone, Search, MapPin, ListChecks,
  ShieldCheck, Gauge, Users, Sparkles, PhoneCall, ChevronRight, Quote,
  Home, Building2, Laptop, Globe, Radio, Signal, Cable, Cloud,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/phone";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import hero from "@/assets/b-hero.jpg";
import fiber from "@/assets/b-fiber.jpg";
import tv from "@/assets/b-tv.jpg";
import wireless from "@/assets/b-wireless.jpg";
import coverage from "@/assets/b-coverage.jpg";
import support from "@/assets/b-support.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cable View Point - Compare Internet, TV & Wireless | cableviewpoint.com" },
      { name: "description", content: "Cable View Point helps households compare internet, cable TV, streaming and wireless options clearly at cableviewpoint.com." },
      { property: "og:title", content: "Cable View Point - Compare Internet, TV & Wireless" },
      { property: "og:description", content: "Compare home connectivity options at cableviewpoint.com: fiber, cable, fixed wireless, streaming and mobile explained simply." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cableviewpoint.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cableviewpoint.com/" }],
  }),
  component: HomePage,
});

const categories = [
  { icon: Wifi, title: "Home Internet", to: "/internet-services", img: fiber, copy: "Fiber, cable and fixed wireless compared on real-world speed, reliability and what each one needs at your address." },
  { icon: Tv, title: "TV & Streaming", to: "/tv-streaming", img: tv, copy: "Cable packages, live-TV apps and on-demand libraries — mapped to what your household actually watches." },
  { icon: Smartphone, title: "Wireless", to: "/wireless", img: wireless, copy: "Mobile plans, 5G home internet and hotspots weighed against the coverage where you live and travel." },
];

const testimonials = [
  { name: "Marcus T.", loc: "Tampa, FL", avatar: avatar1, quote: "I'd spent a whole Saturday on provider chat windows getting nowhere. Seeing fiber and cable side by side for my actual address took maybe ten minutes." },
  { name: "Priya K.", loc: "Austin, TX", avatar: avatar2, quote: "Switching felt risky because of the cancellation window on my old plan. Someone walked me through the overlap so I never lost internet during the move." },
  { name: "Denise R.", loc: "Columbus, OH", avatar: avatar3, quote: "I didn't know 5G home internet was even an option on my street until I compared it here. It's half what I was paying for cable." },
];

const wordmarks = [
  { icon: Cable, t: "Fiber-optic" }, { icon: Signal, t: "5G Home" }, { icon: Radio, t: "Fixed Wireless" },
  { icon: Cloud, t: "Cable Broadband" }, { icon: Globe, t: "Satellite" }, { icon: Wifi, t: "Mesh Wi-Fi" },
];

const setups = [
  { key: "renter", label: "Renter", icon: Building2, headline: "Flexible, no-install setups.", body: "Skip long contracts and drilled walls. 5G home internet or a cable plan with a self-install kit gets you online the day you move in, and cancels cleanly when the lease ends.", points: ["No technician visit required", "Month-to-month or short-term contracts", "Equipment you can take with you"] },
  { key: "homeowner", label: "Homeowner", icon: Home, headline: "Built for the long haul.", body: "Fiber pays off when you're staying put — symmetrical upload, steady speeds as the household grows, and room for smart-home devices you haven't bought yet.", points: ["Fiber where available, cable as backup", "Whole-home mesh Wi-Fi coverage", "Bundling options for TV and phone"] },
  { key: "remote", label: "Remote Worker", icon: Laptop, headline: "Video calls that don't drop.", body: "Upload speed and low latency matter more than the number on the brochure. Fiber or a top cable tier keeps calls, cloud files and VPNs steady during the workday.", points: ["Prioritize upload speed, not just download", "Low-latency options for calls and VPN", "A backup line or hotspot for outages"] },
];

export default function _unused() { return null; }

function HomePage() {
  return (
    <SiteLayout>
      {/* 01 — Hero: offset image + floating stat card */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="blob h-[460px] w-[460px] -top-24 -left-28 bg-primary/25" />
        <div aria-hidden className="blob h-[380px] w-[380px] top-40 -right-20 bg-signal/25" />
        <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 pt-6 pb-14 sm:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <span className="eyebrow">Independent comparison platform</span>
                <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.9rem] font-semibold leading-[1.03] text-ink">
                  See what internet actually <span className="text-gradient">reaches your street</span> — then choose calmly.
                </h1>
                <p className="mt-6 max-w-xl text-lg text-ink-muted leading-relaxed">
                  Cable View Point turns confusing provider pages into clear, side-by-side answers. Understand fiber
                  versus cable, what a streaming stack really costs you in time, and which wireless signal holds up
                  at your kitchen table.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary">Check what's available <ArrowRight className="h-4 w-4" /></Link>
                  <Link to="/learning-center" className="btn-ghost">Start with the basics</Link>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-muted">
                  <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> No sales pressure</span>
                  <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-signal" /> Plain-English guides</span>
                  <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Address-level insight</span>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={120}>
                <div className="relative">
                  <div className="rounded-[2.5rem] overflow-hidden border border-border shadow-elegant">
                    <img src={hero} alt="Family comparing home internet options on a tablet" width={1600} height={1100} className="h-[300px] sm:h-[440px] w-full object-cover" />
                  </div>
                  <div className="absolute -bottom-6 left-4 sm:-left-6 panel !rounded-3xl p-5 w-[240px] bg-surface">
                    <div className="num-tag">Tracked nationwide</div>
                    <div className="mt-2 font-display text-3xl text-ink">124+ providers</div>
                    <p className="mt-1 text-xs text-ink-muted">Availability and technology data refreshed continuously.</p>
                  </div>
                  <div className="hidden sm:block absolute -top-5 -right-3 panel !rounded-3xl px-5 py-4 bg-surface">
                    <div className="flex items-center gap-2 text-sm font-semibold text-ink"><Gauge className="h-4 w-4 text-signal" /> Speeds explained</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Live stat bar, animated counters */}
      <section className="relative border-y border-border bg-surface/60">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { to: 124, suffix: "+", l: "Providers tracked" },
            { to: 50, suffix: "", l: "States indexed" },
            { to: 4, suffix: " min", l: "Average call wait" },
            { to: 0, suffix: "", l: "Sales quotas we run" },
          ].map((s) => (
            <div key={s.l} className="text-center sm:text-left">
              <div className="font-display text-3xl sm:text-4xl text-primary"><Counter to={s.to} suffix={s.suffix} /></div>
              <div className="mt-1 text-xs text-ink-muted">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 03 — Category rail */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-14 sm:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div className="max-w-xl">
                <span className="num-tag">Explore service categories</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">Three decisions shape how connected your home feels.</h2>
              </div>
              <Link to="/learning-center" className="text-sm font-semibold text-primary inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                Browse the Learning Center <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <Link to={c.to} className="panel group h-full flex flex-col">
                  <div className="relative h-40 overflow-hidden">
                    <img src={c.img} alt={c.title} loading="lazy" width={1400} height={1000} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-4 left-4 grid place-items-center h-10 w-10 rounded-full bg-surface/90 backdrop-blur">
                      <c.icon className="h-4.5 w-4.5 text-primary" />
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-xl text-ink">{c.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed flex-1">{c.copy}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Compare options <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03b — Tabbed setup guide by household type */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 pb-14 sm:pb-20">
          <Reveal>
            <span className="num-tag">Pick your situation</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">The right setup depends on how you live, not just where.</h2>
          </Reveal>
          <Reveal delay={100}>
            <Tabs defaultValue="renter" className="mt-8">
              <TabsList className="!h-auto !bg-secondary !p-1.5 rounded-full flex flex-wrap gap-1">
                {setups.map((s) => (
                  <TabsTrigger
                    key={s.key}
                    value={s.key}
                    className="!rounded-full !px-5 !py-2.5 text-sm font-semibold gap-2 data-[state=active]:!bg-primary data-[state=active]:!text-primary-foreground data-[state=active]:!shadow-none"
                  >
                    <s.icon className="h-4 w-4" /> {s.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {setups.map((s) => (
                <TabsContent key={s.key} value={s.key} className="!mt-6 focus-visible:!outline-none focus-visible:!ring-0">
                  <div className="panel !rounded-[2.5rem] p-8 sm:p-12 grid md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-7">
                      <h3 className="font-display text-2xl sm:text-3xl text-ink leading-tight">{s.headline}</h3>
                      <p className="mt-4 text-ink-muted leading-relaxed">{s.body}</p>
                    </div>
                    <div className="md:col-span-5 space-y-3">
                      {s.points.map((p) => (
                        <div key={p} className="flex items-start gap-3 rounded-2xl bg-secondary/60 p-4">
                          <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-ink">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </Reveal>
        </div>
      </section>

      {/* 04 — Coverage feature: image left, steps right */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 pb-14 sm:pb-20">
          <div className="rounded-[2.5rem] bg-surface border border-border shadow-soft overflow-hidden grid lg:grid-cols-2">
            <div className="relative min-h-[280px]">
              <img src={coverage} alt="Aerial view of a neighborhood served by broadband networks" loading="lazy" width={1400} height={1000} className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="p-8 sm:p-12">
              <span className="num-tag">How comparison works</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">Three steps, no phone tag.</h2>
              <div className="mt-8 space-y-6">
                {[
                  { icon: Search, t: "Tell us the address", d: "Availability is decided street by street. Everything starts with where the line actually terminates." },
                  { icon: ListChecks, t: "See the honest shortlist", d: "Technologies, speed tiers, contract shape and equipment needs laid out side by side — including the options we'd skip." },
                  { icon: PhoneCall, t: "Decide, or ask a human", d: "Sign up directly with the provider you like, or talk it through with a specialist who isn't working a quota." },
                ].map((s, i) => (
                  <Reveal key={s.t} delay={i * 90}>
                    <div className="flex gap-4">
                      <span className="grid place-items-center h-11 w-11 shrink-0 rounded-2xl bg-secondary"><s.icon className="h-5 w-5 text-primary" /></span>
                      <div>
                        <div className="font-display text-lg text-ink">{s.t}</div>
                        <p className="mt-1 text-sm text-ink-muted leading-relaxed">{s.d}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Technology guide, dark band */}
      <section className="relative px-3 sm:px-6">
        <div className="mx-auto max-w-[1240px] rounded-[2.5rem] bg-gradient-cyan text-primary-foreground overflow-hidden">
          <div className="p-8 sm:p-14 line-grid">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground/70">Technology guide</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl leading-tight">What the words on the pricing page actually mean.</h2>
                <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
                  Every technology has a personality — how it behaves when the whole house is online, when it rains, when you upload.
                </p>
                <Link to="/internet-services" className="mt-7 inline-flex items-center gap-2 rounded-full bg-surface px-6 py-3 text-sm font-semibold text-primary hover:-translate-y-0.5 transition-transform">
                  Read the full guide <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Fiber", d: "Light through glass. Symmetrical upload, steady under load, unaffected by neighborhood congestion." },
                  { t: "Cable", d: "Coax to the node. Fast downloads and wide availability, with upload that trails behind." },
                  { t: "Fixed wireless / 5G", d: "Signal from a nearby tower. Self-install in minutes; performance depends on line of sight." },
                  { t: "Satellite", d: "Coverage where nothing else reaches. Higher latency makes calls and gaming feel slower." },
                ].map((x) => (
                  <div key={x.t} className="rounded-3xl bg-primary-foreground/10 border border-primary-foreground/15 p-6 backdrop-blur-sm">
                    <div className="font-display text-xl">{x.t}</div>
                    <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">{x.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — Benefits + support portrait */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-14 sm:py-20 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-[2.5rem] overflow-hidden border border-border shadow-soft">
                <img src={support} alt="Connectivity specialist ready to answer questions" loading="lazy" width={1400} height={1000} className="h-[340px] w-full object-cover" />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <span className="num-tag">Why households use Cable View Point</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">Information first. Everything else follows.</h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, t: "No quotas, no pushing", d: "We surface what fits, including the cheaper option or staying where you are." },
                { icon: Gauge, t: "Speed in real terms", d: "Megabits translated into video calls, 4K streams and game downloads." },
                { icon: Users, t: "Built for households", d: "Four people on Wi-Fi at 8pm is the test that matters, not a lab number." },
                { icon: MapPin, t: "Local reality", d: "Coverage, build-outs and equipment requirements change block by block." },
              ].map((b, i) => (
                <Reveal key={b.t} delay={i * 70}>
                  <div className="panel p-6 h-full">
                    <span className="grid place-items-center h-10 w-10 rounded-full bg-secondary"><b.icon className="h-4.5 w-4.5 text-primary" /></span>
                    <div className="mt-4 font-display text-lg text-ink">{b.t}</div>
                    <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">{b.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06b — Technology marquee strip */}
      <section className="relative border-y border-border bg-surface/60 overflow-hidden py-8">
        <div className="flex w-max marquee-track">
          {[...wordmarks, ...wordmarks].map((w, i) => (
            <div key={i} className="flex items-center gap-3 px-8 shrink-0">
              <w.icon className="h-5 w-5 text-primary shrink-0" />
              <span className="font-display text-xl sm:text-2xl text-ink-muted whitespace-nowrap">{w.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 06c — Testimonials carousel */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-14 sm:py-20">
          <Reveal>
            <span className="num-tag">Households who switched</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">They didn't guess. They compared.</h2>
          </Reveal>
          <Reveal delay={100}>
            <Carousel opts={{ align: "start", loop: true }} className="mt-10">
              <CarouselContent className="-ml-5">
                {testimonials.map((t) => (
                  <CarouselItem key={t.name} className="pl-5 sm:basis-1/2 lg:basis-1/3">
                    <div className="panel h-full p-7 flex flex-col">
                      <Quote className="h-7 w-7 text-signal" />
                      <p className="mt-4 text-ink leading-relaxed flex-1">"{t.quote}"</p>
                      <div className="mt-6 flex items-center gap-3">
                        <img src={t.avatar} alt={t.name} width={80} height={80} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
                        <div>
                          <div className="text-sm font-semibold text-ink">{t.name}</div>
                          <div className="text-xs text-ink-muted">{t.loc}</div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-6 flex items-center gap-3">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </Reveal>
        </div>
      </section>

      {/* 07 — FAQ + CTA */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 pb-16 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <span className="num-tag">Common questions</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">Answers before you ask.</h2>
            <div className="mt-8 space-y-3">
              {[
                { q: "Does Cable View Point sell internet service?", a: "No. We are a comparison and information platform. Service agreements are always made directly between you and the provider you choose." },
                { q: "How do you make money?", a: "Participating providers may compensate us when a household signs up. It does not change what we recommend or how plans are ordered." },
                { q: "Why do results change by address?", a: "Networks are physical. Fiber may serve one side of a street and not the other, and wireless depends on distance to the nearest tower." },
                { q: "Can you help me leave a provider?", a: "We can explain notice periods, equipment returns and overlap windows so you switch without paying twice." },
              ].map((f) => (
                <details key={f.q} className="panel group p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg text-ink">
                    {f.q}
                    <ChevronRight className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="panel !rounded-[2.5rem] p-8 sm:p-10 h-full flex flex-col justify-between bg-surface-elev">
              <div>
                <span className="chip chip-signal">Free · No obligation</span>
                <h2 className="mt-5 font-display text-3xl text-ink leading-tight">Find out what's live at your address.</h2>
                <p className="mt-4 text-sm text-ink-muted leading-relaxed">
                  Share a ZIP code and we'll walk through the technologies available, what each one costs in practice,
                  and which providers are actually building near you.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <Link to="/contact" className="btn-primary w-full">Check availability <ArrowRight className="h-4 w-4" /></Link>
                <a href={PHONE_TEL} className="btn-ghost w-full"><PhoneCall className="h-4 w-4 text-signal" /> {PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
