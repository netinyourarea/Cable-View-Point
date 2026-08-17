import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, XCircle, Mail, Phone, Clock3 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { LegalContent } from "@/components/site/LegalContent";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/phone";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy | Cable View Point" },
      { name: "description", content: "Cable View Point refund policy for independent third-party service assistance. Eligibility, timelines and how to request a refund." },
      { property: "og:title", content: "Refund Policy — Cable View Point" },
      { property: "og:url", content: "/refund-policy" },
    ],
    links: [{ rel: "canonical", href: "https://cableviewpoint.com/refund-policy" }],
  }),
  component: RefundPolicyPage,
});

const eligible = [
  "The assistance session was not completed or was significantly delayed through no fault of yours.",
  "The guidance provided was materially inaccurate or incomplete due to an error on our part.",
  "You cancel the request before the advisor begins the assistance session.",
  "There was a duplicate or accidental charge.",
];

const ineligible = [
  "The assistance session has been fully completed and guidance delivered.",
  "The refund request is submitted outside the stated eligibility window.",
  "The issue stems from provider-side decisions, equipment failure, or coverage limitations beyond our control.",
  "Fees for third-party tools, reports, or expedited research that were already procured on your behalf.",
];

function RefundPolicyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Policies"
        title="Refund Policy"
        subtitle="Clear, fair and written in plain English. Here's exactly how refunds work for our independent assistance services."
      />

      {/* Quick-reference badges */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-8">
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="panel p-5 flex items-center gap-3">
            <Clock3 className="h-5 w-5 text-signal shrink-0" />
            <div>
              <div className="text-[11px] uppercase tracking-widest text-ink-muted">Refund window</div>
              <div className="font-display text-sm text-ink">7–15 days</div>
            </div>
          </div>
          <div className="panel p-5 flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary shrink-0" />
            <div>
              <div className="text-[11px] uppercase tracking-widest text-ink-muted">Response time</div>
              <div className="font-display text-sm text-ink">2 business days</div>
            </div>
          </div>
          <div className="panel p-5 flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary shrink-0" />
            <div>
              <div className="text-[11px] uppercase tracking-widest text-ink-muted">Processing time</div>
              <div className="font-display text-sm text-ink">5–10 business days</div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligible vs non-refundable — color-coded panels */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-3xl border border-border p-6 bg-surface">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-bold text-ink">Eligible scenarios</h2>
            </div>
            <ul className="mt-4 space-y-3">
              {eligible.map((li) => (
                <li key={li} className="text-sm text-ink-muted leading-relaxed flex gap-2">
                  <span className="text-primary">•</span> {li}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border p-6 bg-surface-elev">
            <div className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-signal" />
              <h2 className="font-display text-lg font-bold text-ink">Non-refundable scenarios</h2>
            </div>
            <ul className="mt-4 space-y-3">
              {ineligible.map((li) => (
                <li key={li} className="text-sm text-ink-muted leading-relaxed flex gap-2">
                  <span className="text-signal">•</span> {li}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <LegalContent>
        <h2>1. Overview</h2>
        <p>Cable View Point is an independent third-party assistance platform. We charge a service/assistance fee for informational guidance. This Refund Policy explains when and how you may request a refund of that fee.</p>

        <h2>2. General Refund Window</h2>
        <p>Refund requests may be submitted within 7 to 15 days of your service purchase, depending on the type of assistance provided and whether the guidance has already been delivered. The specific eligibility window will be confirmed at the time of purchase.</p>

        <h2>3. Eligible & Non-Refundable Scenarios</h2>
        <p>See the eligible and non-refundable scenarios summarized above. Those lists are not exhaustive — contact us if your situation isn't covered and we'll evaluate it individually.</p>

        <h2>4. How to Request a Refund</h2>
        <p>To request a refund, email us at <a href="mailto:support@cableviewpoint.com">support@cableviewpoint.com</a> or call <a href={PHONE_TEL}>{PHONE_DISPLAY}</a> with your name, date of purchase, and reason for the request. We aim to respond within 2 business days.</p>

        <h2>5. Processing Time</h2>
        <p>Approved refunds are processed to the original payment method within 5 to 10 business days. Depending on your bank or card issuer, it may take an additional 3 to 5 business days for the funds to appear in your account.</p>

        <h2>6. Partial Refunds</h2>
        <p>In some cases, a partial refund may be issued if only a portion of the purchased assistance was unused or if the session was partially completed. The amount will be calculated based on the proportion of service not rendered.</p>

        <h2>7. Changes to This Policy</h2>
        <p>We may update this Refund Policy from time to time. Changes take effect immediately upon posting to this page with an updated date. We encourage you to review this page periodically.</p>

        <h2>8. Contact</h2>
        <p>For questions about this Refund Policy, reach us at <a href="mailto:support@cableviewpoint.com">support@cableviewpoint.com</a> or call <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>.</p>
      </LegalContent>
    </SiteLayout>
  );
}
