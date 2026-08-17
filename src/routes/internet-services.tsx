import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Zap, Signal, Cable, Wifi, Check, X, ChevronRight, Users, Home, Gauge } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/phone";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import fibers from "@/assets/v3-fibers.jpg";
import router from "@/assets/v3-router.jpg";
import network from "@/assets/v3-network.jpg";
import tech from "@/assets/v3-tech.jpg";

export const Route = createFileRoute("/internet-services")({
  head: () => ({
    meta: [
      { title: "Internet — Fiber, Cable, 5G & DSL Compared | Cable View Point" },
      { name: "description", content: "Compare fiber, cable, 5G home internet and DSL from participating providers. Speed tiers translated into real-life use." },
      { property: "og:title", content: "Internet Comparison — Cable View Point" },
      { property: "og:description", content: "Side-by-side internet technology comparisons." },
      { property: "og:image", content: fibers },
    ],
    links: [{ rel: "canonical", href: "https://cableviewpoint.com/internet-services" }],
  }),
  component: InternetPage,
});

const techs = [
  { key: "fiber", icon: Zap, tag: "Fiber", title: "Fiber Internet", img: fibers,
    desc: "Light pulses through glass strands run straight to your home. It's the most consistent technology available — the speed you're quoted is close to the speed you get, whether it's 8am or 11pm.",
    tiers: ["300 Mbps", "1 Gbps", "2 Gbps", "5 Gbps"],
    best: "Streaming-heavy households, remote workers, gamers, anyone who uploads large files regularly." },
  { key: "cable", icon: Cable, tag: "Cable", title: "Cable Internet", img: network,
    desc: "Delivered over the same coaxial line as cable TV, from a shared neighborhood node. Download speeds are strong and availability is wide, though upload lags and evenings can feel slower in dense areas.",
    tiers: ["100 Mbps", "300 Mbps", "600 Mbps", "1.2 Gbps"],
    best: "Suburban households, TV-and-internet bundles, mainstream streaming and browsing." },
  { key: "5g", icon: Signal, tag: "5G Home", title: "5G Home Internet", img: router,
    desc: "A receiver in your window or on a shelf pulls signal from the nearest 5G tower — no cable crew, no drilled walls. Setup takes minutes, but performance depends heavily on distance and line of sight to the tower.",
    tiers: ["100 Mbps", "300 Mbps", "500 Mbps", "1 Gbps"],
    best: "Renters, new-build homes, and anyone in an area with strong 5G coverage already." },
  { key: "dsl", icon: Wifi, tag: "DSL & Fixed", title: "DSL & Fixed Wireless", img: tech,
    desc: "Telephone-line DSL and tower-to-antenna fixed wireless still reach communities fiber and cable haven't built out to. Speeds are modest, but for many rural addresses it's the difference between service and none.",
    tiers: ["25 Mbps", "50 Mbps", "100 Mbps", "—"],
    best: "Rural households, seasonal cabins, and backup lines for when a primary connection drops." },
];

const speedCards = [
  { icon: Users, w: "Solo or a couple", range: "25–100 Mbps", d: "Browsing, email, video calls and a stream or two running at once. Fits comfortably in a studio or one-bedroom." },
  { icon: Home, w: "A busy household", range: "200–500 Mbps", d: "Several people streaming, gaming and video-calling at the same time without anyone noticing the others are online." },
  { icon: Gauge, w: "Power users", range: "1 Gbps", d: "Large uploads, cloud backups, multiplayer gaming and a house full of smart devices, all at once." },
  { icon: Zap, w: "Creators & studios", range: "2 Gbps+", d: "Multiple simultaneous 4K streams, massive file transfers, and zero patience for buffering." },
];

const compareRows = [
  { label: "Typical download speed", fiber: "300 Mbps – 5 Gbps", cable: "100 Mbps – 1.2 Gbps", g5: "100 Mbps – 1 Gbps", dsl: "10 – 100 Mbps" },
  { label: "Symmetrical upload", fiber: true, cable: false, g5: false, dsl: false },
  { label: "Typical install time", fiber: "1–2 weeks", cable: "Same week", g5: "Self-install, same day", dsl: "Self-install, same day" },
  { label: "Sensitive to weather", fiber: false, cable: false, g5: true, dsl: true },
  { label: "Typical monthly price", fiber: "$50–$90", cable: "$40–$80", g5: "$40–$60", dsl: "$35–$60" },
];

const faqs = [
  { q: "What equipment do I need to keep on hand?", a: "Fiber and cable both use a modem or ONT plus a router (often combined). 5G home internet ships a self-contained receiver/router unit. DSL uses a modem connected to your phone line. Most providers include the primary box in the monthly rate and charge separately for mesh Wi-Fi extenders." },
  { q: "How long does installation actually take?", a: "Fiber usually needs a technician visit to run or activate the line, which can take one to two weeks to schedule depending on your area. Cable is often available the same week. 5G home internet and DSL are typically self-install — plug it in and you're online within the hour." },
  { q: "Are contracts required?", a: "It varies by provider and technology. 5G home internet is frequently month-to-month with no contract. Fiber and cable more often carry 12- or 24-month agreements in exchange for promotional pricing, with early termination fees if you leave before the term ends." },
  { q: "Does weather actually affect my connection?", a: "Fixed wireless and 5G home internet rely on a clear signal path to a tower, so heavy rain, snow or new obstructions (like a tree growing in) can measurably slow things down. Fiber and cable run through buried or aerial cable and are essentially unaffected by weather." },
];

function InternetPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Internet technologies"
        title="Fiber, cable, 5G or DSL — find the one built for your address."
        subtitle="Every technology trades off speed, price and how it behaves under real household load. Switch between them below to see which one fits."
        bgImage={fibers}
      />

      {/* Technology tabs — replaces the old bordered row list */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-14 sm:py-20">
          <Reveal>
            <span className="num-tag">Compare by technology</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">Four ways your street can be wired.</h2>
          </Reveal>

          <Reveal delay={100}>
            <Tabs defaultValue="fiber" className="mt-8">
              <TabsList className="!h-auto !bg-secondary !p-1.5 rounded-full flex flex-wrap gap-1">
                {techs.map((t) => (
                  <TabsTrigger
                    key={t.key}
                    value={t.key}
                    className="!rounded-full !px-5 !py-2.5 text-sm font-semibold gap-2 data-[state=active]:!bg-primary data-[state=active]:!text-primary-foreground data-[state=active]:!shadow-none"
                  >
                    <t.icon className="h-4 w-4" /> {t.tag}
                  </TabsTrigger>
                ))}
              </TabsList>

              {techs.map((t) => (
                <TabsContent key={t.key} value={t.key} className="!mt-6 focus-visible:!outline-none focus-visible:!ring-0">
                  <div className="rounded-[2.5rem] bg-surface border border-border shadow-soft overflow-hidden grid lg:grid-cols-2">
                    <div className="relative min-h-[280px]">
                      <img src={t.img} alt={t.title} loading="lazy" width={1400} height={1000} className="absolute inset-0 h-full w-full object-cover" />
                    </div>
                    <div className="p-8 sm:p-12">
                      <span className="chip">{t.tag}</span>
                      <h3 className="mt-4 font-display text-3xl sm:text-4xl text-ink leading-tight">{t.title}</h3>
                      <p className="mt-4 text-ink-muted leading-relaxed">{t.desc}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {t.tiers.map((tier) => (
                          <span key={tier} className="chip">{tier}</span>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-border">
                        <div className="num-tag">Best for</div>
                        <p className="mt-1.5 text-sm text-ink">{t.best}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </Reveal>
        </div>
      </section>

      {/* Who needs how much speed — asymmetric card grid, not a meter list */}
      <section className="relative border-y border-border bg-surface/60">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-14 sm:py-20">
          <Reveal>
            <span className="num-tag">Speed, translated</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">What megabits actually buy you.</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {speedCards.map((s, i) => (
              <Reveal key={s.w} delay={i * 80}>
                <div className="panel p-7 h-full flex flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid place-items-center h-11 w-11 rounded-2xl bg-secondary shrink-0"><s.icon className="h-5 w-5 text-primary" /></span>
                    <span className="font-display text-2xl text-primary text-right">{s.range}</span>
                  </div>
                  <div className="mt-5 font-display text-lg text-ink">{s.w}</div>
                  <p className="mt-1.5 text-sm text-ink-muted leading-relaxed flex-1">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-14 sm:py-20">
          <Reveal>
            <span className="num-tag">Side by side</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">Four technologies, five real questions.</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 overflow-x-auto rounded-[2rem] border border-border">
              <table className="w-full text-sm border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-secondary/60">
                    <th className="text-left font-display text-base text-ink p-5">Fiber vs. Cable vs. 5G vs. DSL</th>
                    <th className="text-left font-semibold text-ink p-5">Fiber</th>
                    <th className="text-left font-semibold text-ink p-5">Cable</th>
                    <th className="text-left font-semibold text-ink p-5">5G Home</th>
                    <th className="text-left font-semibold text-ink p-5">DSL / Fixed</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((r) => (
                    <tr key={r.label} className="border-t border-border">
                      <td className="p-5 text-ink-muted">{r.label}</td>
                      {[r.fiber, r.cable, r.g5, r.dsl].map((v, i) => (
                        <td key={i} className="p-5 text-ink">
                          {typeof v === "boolean" ? (
                            v ? <Check className="h-4 w-4 text-primary" /> : <X className="h-4 w-4 text-ink-muted/50" />
                          ) : v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="relative border-t border-border bg-surface/60">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-14 sm:py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <span className="num-tag">Installation & equipment</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink leading-tight">Questions before the technician shows up.</h2>
            <Link to="/learning-center" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
              Read the full primer <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="panel !rounded-[2rem] px-6 sm:px-8 divide-y divide-border">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-border">
                  <AccordionTrigger className="font-display text-lg text-ink !py-5 hover:!no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-ink-muted leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA — two-column panel */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-14 sm:py-20">
          <div className="rounded-[2.5rem] bg-gradient-cyan text-primary-foreground overflow-hidden">
            <div className="p-8 sm:p-14 line-grid grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground/70">Next step</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl leading-tight">See which of these four is actually available at your address.</h2>
                <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed max-w-lg">
                  Availability changes block by block. Share your ZIP and we'll match it against fiber, cable, 5G and DSL coverage in your area.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-3">
                <Link to="/contact" className="inline-flex items-center justify-between gap-2 rounded-full bg-surface px-6 py-3.5 text-sm font-semibold text-primary hover:-translate-y-0.5 transition-transform">
                  Compare in my ZIP <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={PHONE_TEL} className="inline-flex items-center justify-between gap-2 rounded-full border border-primary-foreground/25 px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                  <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> Call a specialist</span>
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
