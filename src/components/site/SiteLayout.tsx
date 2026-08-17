import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingCall } from "./FloatingCall";
import { CallPopup } from "./CallPopup";
import { SchemaMarkup } from "./SchemaMarkup";
import { AnalyticsPageView } from "./AnalyticsPageView";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SchemaMarkup />
      <AnalyticsPageView />
      <Navbar />
      <main className="flex-1 pt-24 animate-fade-in">{children}</main>
      <Footer />
      <FloatingCall />
      <CallPopup />
    </div>
  );
}
