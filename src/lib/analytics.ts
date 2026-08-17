type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA4_ID = import.meta.env.VITE_GA4_ID;
const GTM_ID = import.meta.env.VITE_GTM_ID;

function appendScript(src: string) {
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

export function initAnalytics() {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  if (GA4_ID) {
    window.gtag = function gtag() {
      window.dataLayer?.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA4_ID, { send_page_view: false });
    appendScript(`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`);
  }

  if (GTM_ID) {
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    appendScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
  }

  setupClickTracking();
  setupScrollTracking();
}

export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", eventName, params);
  window.dataLayer?.push({ event: eventName, ...params });
}

function setupClickTracking() {
  document.addEventListener("click", (event) => {
    const link = (event.target as Element | null)?.closest("a,button");
    if (!link) return;

    const href = link instanceof HTMLAnchorElement ? link.href : "";
    const label = link.textContent?.trim().replace(/\s+/g, " ").slice(0, 120);
    const customEvent = link.getAttribute("data-track");

    if (customEvent) {
      trackEvent(customEvent, { label });
      return;
    }

    if (href.startsWith("tel:")) trackEvent("phone_click", { link_url: href, label });
    if (href.startsWith("mailto:")) trackEvent("email_click", { link_url: href, label });
    if (href.includes("wa.me") || href.includes("whatsapp.com")) {
      trackEvent("whatsapp_click", { link_url: href, label });
    }
  });
}

function setupScrollTracking() {
  const trackedDepths = new Set<number>();
  const depths = [25, 50, 75, 90];

  window.addEventListener(
    "scroll",
    () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const depth = Math.round((window.scrollY / scrollable) * 100);
      for (const target of depths) {
        if (depth >= target && !trackedDepths.has(target)) {
          trackedDepths.add(target);
          trackEvent("scroll_depth", { percent_scrolled: target });
        }
      }
    },
    { passive: true },
  );
}
