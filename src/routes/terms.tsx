import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/phone";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Cable View Point" },
      { name: "description", content: "Terms of service governing the use of Cable View Point internet, cable, and related services." },
      { property: "og:title", content: "Terms & Conditions — Cable View Point" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "https://cableviewpoint.com/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  { h: "Acceptance of Terms", p: "By using the Cable View Point website or requesting assistance from our team, you agree to these Terms & Conditions and our Privacy Policy." },
  { h: "Service Description", p: "Cable View Point operates an independent comparison and information platform covering residential internet, TV, streaming and wireless options from participating providers across the United States. We do not own or operate any network and are not a party to the service agreement you enter into with the provider you choose." },
  { h: "Account Responsibilities", p: "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account." },
  { h: "Billing & Payment", p: "Cable View Point does not bill for internet, TV, streaming or wireless service — those charges are set and billed directly by the provider you sign up with. If you purchase optional paid assistance from us, that fee is billed at the time of purchase, as described in our Refund Policy." },
  { h: "Acceptable Use", p: "You agree not to use our website or services for unlawful activities, to distribute malware, to send unsolicited bulk communications, or to scrape or resell our content without written authorization." },
  { h: "Third-Party Equipment", p: "Any modem, router or receiver you use comes from the provider you sign up with and is governed by that provider's equipment terms, not ours. Cable View Point does not supply, lease or take return of provider equipment." },
  { h: "Service Availability", p: "We aim to keep our website and comparison tools available at all times but do not guarantee uninterrupted access. We are not liable for outages or service issues caused by a provider's network, third-party infrastructure, or your own equipment." },
  { h: "Cancellation", p: "Cancelling internet, TV, streaming or wireless service is handled directly with the provider under their own terms. If you purchased paid assistance from Cable View Point, see our Refund Policy for how to cancel or request a refund of that fee." },
  { h: "Limitation of Liability", p: "To the maximum extent permitted by law, our liability for any claim arising out of these terms is limited to the fees, if any, paid by you to Cable View Point in the 12 months preceding the claim." },
  { h: "Governing Law", p: "These terms are governed by the laws of the State of Colorado, without regard to its conflict-of-laws principles." },
  { h: "Contact", p: `For questions about these terms, call ${PHONE_DISPLAY} or email legal@cableviewpoint.com.` },
];

function TermsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Last updated: January 2026. The rules that keep our service fair, fast and dependable for everyone."
      />

      {/* Jump chips instead of a sidebar TOC */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          {sections.map((s, i) => (
            <a key={s.h} href={`#term-${i + 1}`} className="chip !py-1.5 !px-3 !text-[10px] hover:!bg-primary/15 transition">
              {i + 1}. {s.h}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-24">
        <div className="space-y-8">
          {sections.map((s, i) => (
            <div key={s.h} id={`term-${i + 1}`} className="flex gap-5 scroll-mt-28">
              <div className="shrink-0 h-9 w-9 rounded-full bg-secondary grid place-items-center font-display text-sm text-primary">{i + 1}</div>
              <div className="pt-1">
                <h2 className="font-display text-lg font-bold text-ink">{s.h}</h2>
                <p className="mt-2 text-ink-muted leading-relaxed">
                  {s.h === "Contact" ? (
                    <>For questions about these terms, call <a href={PHONE_TEL} className="text-primary font-medium hover:underline">{PHONE_DISPLAY}</a> or email <a href="mailto:legal@cableviewpoint.com" className="text-primary font-medium hover:underline">legal@cableviewpoint.com</a>.</>
                  ) : s.p}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
