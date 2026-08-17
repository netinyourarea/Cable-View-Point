import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Search, ArrowRight, Clock, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/phone";
import { PageHero } from "@/components/site/PageHero";
import support from "@/assets/v3-support.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Cable View Point — ZIP Availability Check & Guide Line" },
      { name: "description", content: "Reach a Cable View Point guide, run a ZIP-level availability check, or send a message. We answer in minutes, not days." },
      { property: "og:title", content: "Contact Cable View Point" },
      { property: "og:description", content: "ZIP check, phone line and email — reach a human guide fast." },
      { property: "og:image", content: support },
    ],
    links: [{ rel: "canonical", href: "https://cableviewpoint.com/contact" }],
  }),
  component: ContactPage,
});

const faqs = [
  { q: "What happens after I submit the ZIP scan?", a: "A guide who knows the technologies in your area calls or emails within one business day with a real shortlist — no auto-generated quote." },
  { q: "Do I need to know my current provider or plan?", a: "No. If you have a recent bill handy it speeds things up, but it's not required to get a shortlist." },
  { q: "Is there a charge for this?", a: "No. Checking availability and talking to a guide is free, with no obligation to switch anything." },
  { q: "What if nothing shows up for my address?", a: "That happens in some rural areas. We'll say so plainly and point you toward the best remaining option, including satellite or fixed wireless." },
];

function ContactPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <SiteLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        eyebrow="Contact"
        title="Talk to a person. Not a portal."
        subtitle="Get a ZIP-level scan, or pick up the phone. Either way, you'll be talking to someone who knows the plans in your area."
        bgImage={support}
      />

      <section className="relative border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 py-20">
          <div className="grid lg:grid-cols-12 gap-0 border border-border">
            {/* ZIP check */}
            <div className="lg:col-span-7 p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-border">
              <span className="num-tag">/ 01 — ZIP scan</span>
              <h2 className="mt-4 font-display text-4xl text-ink leading-tight">Which technologies reach <span className="text-signal">your address?</span></h2>
              <div className="mt-8 space-y-5">
                <div>
                  <label className="mono text-[10px] tracking-widest uppercase text-ink-muted">ZIP code</label>
                  <input placeholder="e.g. 30301" className="mt-2 w-full bg-background border border-border px-4 py-4 mono text-ink text-lg focus:outline-none focus:border-primary" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="mono text-[10px] tracking-widest uppercase text-ink-muted">Name</label>
                    <input placeholder="Full name" className="mt-2 w-full bg-background border border-border px-4 py-4 text-ink focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="mono text-[10px] tracking-widest uppercase text-ink-muted">Phone</label>
                    <input placeholder="(555) 123-4567" className="mt-2 w-full bg-background border border-border px-4 py-4 text-ink focus:outline-none focus:border-primary" />
                  </div>
                </div>
                <div>
                  <label className="mono text-[10px] tracking-widest uppercase text-ink-muted">Interested in</label>
                  <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["Internet", "TV", "Wireless", "Bundle"].map((t) => (
                      <label key={t} className="cursor-pointer border border-border px-3 py-3 text-center mono text-xs uppercase tracking-widest hover:bg-primary/10 hover:border-primary transition">
                        <input type="checkbox" className="sr-only" /> {t}
                      </label>
                    ))}
                  </div>
                </div>
                <button className="btn-signal w-full justify-between" data-track="lead_form_click">
                  <span className="flex items-center gap-2"><Search className="h-4 w-4" /> Run availability scan</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mono text-[10px] tracking-widest uppercase text-ink-muted">// Free · No obligation · We never sell your info</p>
              </div>
            </div>

            {/* Contact channels */}
            <div className="lg:col-span-5 p-10 lg:p-14 bg-surface/40">
              <span className="num-tag">/ 02 — Direct lines</span>
              <div className="mt-8 space-y-6">
                <a href={PHONE_TEL} className="block border border-border p-6 hover:border-primary transition group" data-track="contact_phone_click">
                  <div className="flex items-center justify-between">
                    <div className="mono text-[10px] tracking-widest uppercase text-signal">// PHONE</div>
                    <Phone className="h-5 w-5 text-primary group-hover:text-signal" />
                  </div>
                  <div className="mt-3 font-display text-2xl text-ink mono">{PHONE_DISPLAY}</div>
                  <div className="mt-2 text-sm text-ink-muted">Mon–Sat · 8 AM – 9 PM ET</div>
                </a>
                <a href="mailto:hello@cableviewpoint.com" className="block border border-border p-6 hover:border-primary transition group" data-track="contact_email_click">
                  <div className="flex items-center justify-between">
                    <div className="mono text-[10px] tracking-widest uppercase text-signal">// EMAIL</div>
                    <Mail className="h-5 w-5 text-primary group-hover:text-signal" />
                  </div>
                  <div className="mt-3 font-display text-2xl text-ink">hello@cableviewpoint.com</div>
                  <div className="mt-2 text-sm text-ink-muted">Reply within one business day</div>
                </a>
                <div className="border border-border p-6">
                  <div className="flex items-center justify-between">
                    <div className="mono text-[10px] tracking-widest uppercase text-signal">// COVERAGE</div>
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="mt-3 font-display text-2xl text-ink">All 50 states</div>
                  <div className="mt-2 text-sm text-ink-muted">Remote-first · U.S. only</div>
                </div>
                <div className="border border-border p-6 flex items-center gap-4">
                  <Clock className="h-5 w-5 text-signal" />
                  <div>
                    <div className="mono text-[10px] tracking-widest uppercase text-ink-muted">Avg response</div>
                    <div className="font-display text-xl text-ink">Under 4 minutes on the phone</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — rounded panel/accordion style, distinct from the bordered form above */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-xl">
            <span className="eyebrow">Before you call</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ink leading-tight">Quick answers about reaching us.</h2>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {faqs.map((f) => (
              <details key={f.q} className="panel group p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-base text-ink">
                  {f.q}
                  <ChevronRight className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
