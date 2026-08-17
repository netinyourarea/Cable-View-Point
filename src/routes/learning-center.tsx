import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Zap, Wifi, Tv } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import fibers from "@/assets/v3-fibers.jpg";
import router from "@/assets/v3-router.jpg";
import mobile from "@/assets/v3-mobile.jpg";
import tv from "@/assets/v3-tv.jpg";
import network from "@/assets/v3-network.jpg";
import datacenter from "@/assets/v3-datacenter.jpg";

export const Route = createFileRoute("/learning-center")({
  head: () => ({
    meta: [
      { title: "Learning Center — Fiber, Cable, 5G, Wi-Fi Explained | Cable View Point" },
      { name: "description", content: "Plain-English guides to internet technologies, streaming platforms, wireless carriers and home Wi-Fi." },
      { property: "og:title", content: "Cable View Point Learning Center" },
      { property: "og:description", content: "Educational articles for smarter connectivity decisions." },
      { property: "og:image", content: fibers },
    ],
    links: [{ rel: "canonical", href: "https://cableviewpoint.com/learning-center" }],
  }),
  component: LearningPage,
});

const tracks = [
  { icon: Zap, l: "Internet", to: "/internet-services" },
  { icon: Tv, l: "TV & Streaming", to: "/tv-streaming" },
  { icon: Wifi, l: "Wireless", to: "/wireless" },
];

const articles = [
  { topic: "Internet", read: "6 min", title: "Fiber vs cable: which one actually wins?", img: fibers, note: "Symmetrical upload versus wide availability — the tradeoff that decides most households' answer." },
  { topic: "Wi-Fi", read: "5 min", title: "Wi-Fi 6 vs Wi-Fi 7 in plain English", img: router, note: "Skip the marketing numbers. Here's what each generation actually changes in a normal house." },
  { topic: "Streaming", read: "8 min", title: "Cutting cable without losing the sports", img: tv, note: "A realistic look at what live sports still costs once you go all-streaming." },
  { topic: "Wireless", read: "4 min", title: "How 5G home internet really works", img: mobile, note: "Why it installs itself in twenty minutes, and where the tradeoffs hide." },
  { topic: "Coverage", read: "7 min", title: "Reading coverage maps like a technician", img: network, note: "The difference between 'available' and 'reliably fast' on a provider's own map." },
  { topic: "Infrastructure", read: "10 min", title: "What actually lives inside a data center", img: datacenter, note: "A short tour of the buildings behind your streaming buffer and cloud backups." },
];

function LearningPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        headline: article.title,
        description: article.note,
        image: article.img,
        author: {
          "@type": "Organization",
          name: "Cable View Point",
        },
        publisher: {
          "@type": "Organization",
          name: "Cable View Point",
          logo: {
            "@type": "ImageObject",
            url: "https://cableviewpoint.com/logo.png",
          },
        },
      },
    })),
  };

  return (
    <SiteLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PageHero
        eyebrow="Learning Center"
        title="Read once. Decide with clarity."
        subtitle="Short, plain-English articles on how modern internet, TV and wireless actually work — so pricing pages stop feeling like a foreign language."
        bgImage={fibers}
      />

      {/* Track chips — horizontal, not a bordered 4-up */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 pt-2 pb-10 sm:pb-14">
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {tracks.map((t) => (
                <Link key={t.l} to={t.to} className="chip !py-2.5 !px-5 hover:!bg-primary/15 transition">
                  <t.icon className="h-3.5 w-3.5" /> {t.l}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article panel grid — rounded cards, homepage vocabulary */}
      <section className="relative">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 pb-16 sm:pb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <article className="panel group h-full flex flex-col">
                  <div className="relative h-44 overflow-hidden">
                    <img src={a.img} alt={a.title} loading="lazy" width={800} height={500} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-4 left-4 chip !bg-surface/90 backdrop-blur">{a.topic}</span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs text-ink-muted">{a.read} read</div>
                    <h3 className="mt-2 font-display text-xl text-ink leading-snug">{a.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed flex-1">{a.note}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read article <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA band */}
      <section className="relative px-3 sm:px-6 pb-6">
        <div className="mx-auto max-w-[1240px] rounded-[2.5rem] bg-gradient-cyan text-primary-foreground overflow-hidden">
          <div className="p-8 sm:p-14 line-grid flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground/70">Still unsure where to start?</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl leading-tight max-w-lg">A guide can point you to the right article — or skip straight to your answer.</h2>
            </div>
            <Link to="/contact" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-surface px-6 py-3.5 text-sm font-semibold text-primary hover:-translate-y-0.5 transition-transform">
              Talk to a guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
