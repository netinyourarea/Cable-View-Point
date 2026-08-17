import { createFileRoute } from "@tanstack/react-router";
import { Building2, Link2Off, ScrollText, Tag, Mail } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { PHONE_DISPLAY } from "@/lib/phone";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Cable View Point" },
      { name: "description", content: "Cable View Point is an independent comparison platform. This disclaimer explains what we do and do not do." },
    ],
    links: [{ rel: "canonical", href: "https://cableviewpoint.com/disclaimer" }],
  }),
  component: DisclaimerPage,
});

const sections = [
  { icon: Building2, h: "Comparison platform, not a provider", p: "Cable View Point is an independent, consumer-facing comparison platform. We do not own or operate any internet, cable, satellite, streaming or wireless network. Availability, speeds, pricing and terms shown on this site are indexed from information published by participating providers and change frequently." },
  { icon: Link2Off, h: "No affiliation", p: "Cable View Point is not affiliated with, endorsed by, or an agent of any provider unless explicitly stated. Brand names, logos and trademarks referenced on this site are the property of their respective owners." },
  { icon: ScrollText, h: "Editorial independence", p: "Our guides are written to help households understand connectivity options. Cable View Point may receive compensation when a household chooses to sign up with a participating provider, but this does not shape our editorial recommendations or the way plans appear in comparisons." },
  { icon: Tag, h: "Availability & pricing", p: "Plan availability, promotional pricing and speed tiers are set by providers and vary by service address. Always confirm details directly with the provider before purchasing." },
];

function DisclaimerPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Disclaimer" subtitle="What Cable View Point is, what it isn't, and how to read every comparison on this site." />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-8">
        <div className="grid gap-4">
          {sections.map((s) => (
            <div key={s.h} className="flex gap-5 rounded-3xl border border-border bg-surface p-6 sm:p-7">
              <span className="shrink-0 grid place-items-center h-11 w-11 rounded-2xl bg-secondary"><s.icon className="h-5 w-5 text-primary" /></span>
              <div>
                <h2 className="font-display text-lg font-bold text-ink">{s.h}</h2>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{s.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-24">
        <div className="rounded-3xl bg-gradient-cyan text-primary-foreground p-6 sm:p-8 flex items-center gap-5">
          <span className="shrink-0 grid place-items-center h-11 w-11 rounded-2xl bg-primary-foreground/15"><Mail className="h-5 w-5" /></span>
          <div>
            <h2 className="font-display text-lg font-bold">Questions about this disclaimer?</h2>
            <p className="mt-1 text-sm text-primary-foreground/85">
              Reach us at <a href="mailto:hello@cableviewpoint.com" className="underline underline-offset-2">hello@cableviewpoint.com</a> or {PHONE_DISPLAY}.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
