import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { trackEvent } from "@/lib/analytics";
import { canonicalUrl } from "@/lib/seo";

export function AnalyticsPageView() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    trackEvent("page_view", {
      page_location: canonicalUrl(pathname),
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}
