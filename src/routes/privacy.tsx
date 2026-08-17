import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/phone";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Cable View Point" },
      { name: "description", content: "How Cable View Point collects, uses and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — Cable View Point" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://cableviewpoint.com/privacy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  { id: "collect", h: "1. Information We Collect", p: "Cable View Point (\"we\", \"us\") collects personal information you provide directly — name, address, phone, email, payment details, and ZIP code — as well as technical data such as device identifiers, IP address, and network performance metrics required to deliver your service." },
  { id: "use", h: "2. How We Use Your Information", p: "We use your information to provision service, process payments, deliver support, prevent fraud, improve our network, and (with your consent) send you product updates and promotional offers. We never sell your personal information." },
  { id: "sharing", h: "3. Sharing & Disclosure", p: "We share information only with service providers bound by strict confidentiality agreements (payment processors, installation contractors, regulatory bodies) or when required by law." },
  { id: "cookies", h: "4. Cookies & Tracking", p: "Our website uses essential cookies for session management and optional analytics cookies to understand site usage. You may opt out of non-essential cookies at any time from your browser settings." },
  { id: "security", h: "5. Data Security", p: "We use AES-256 encryption in transit and at rest, multi-factor authentication on internal systems, and continuous monitoring by an in-house SOC team." },
  { id: "rights", h: "6. Your Rights", p: "Depending on your state, you may have the right to access, correct, delete, or port your personal data. To exercise these rights, email privacy@cableviewpoint.com." },
  { id: "children", h: "7. Children's Privacy", p: "Our services are not directed to children under 13. We do not knowingly collect personal information from minors." },
  { id: "changes", h: "8. Changes to This Policy", p: "We may update this policy periodically. Material changes will be communicated by email and posted on this page with a new \"last updated\" date." },
  { id: "contact", h: "9. Contact", p: `Questions? Call ${PHONE_DISPLAY} or email privacy@cableviewpoint.com.` },
];

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: January 2026. Your data, handled with the same care we give your connection."
      />
      <section className="mx-auto max-w-[1100px] px-4 sm:px-6 pb-24">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Sticky TOC sidebar */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-28 panel p-5">
              <div className="text-[11px] font-bold uppercase tracking-widest text-ink-muted mb-3">On this page</div>
              <nav className="flex flex-col gap-1">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="text-sm text-ink-muted hover:text-primary py-1.5 leading-snug transition">
                    {s.h}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <span className="chip chip-signal mb-6 inline-flex">Last updated · January 2026</span>
            <article className="card-premium divide-y divide-border">
              {sections.map((s) => (
                <div key={s.id} id={s.id} className="py-6 first:pt-0 scroll-mt-28">
                  <h2 className="font-display text-xl font-bold text-ink">{s.h}</h2>
                  <p className="mt-3 text-ink-muted leading-relaxed">
                    {s.id === "rights" ? (
                      <>Depending on your state, you may have the right to access, correct, delete, or port your personal data. To exercise these rights, email <a href="mailto:privacy@cableviewpoint.com" className="text-primary font-medium hover:underline">privacy@cableviewpoint.com</a>.</>
                    ) : s.id === "contact" ? (
                      <>Questions? Call <a href={PHONE_TEL} className="text-primary font-medium hover:underline">{PHONE_DISPLAY}</a> or email <a href="mailto:privacy@cableviewpoint.com" className="text-primary font-medium hover:underline">privacy@cableviewpoint.com</a>.</>
                    ) : s.p}
                  </p>
                </div>
              ))}
            </article>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
