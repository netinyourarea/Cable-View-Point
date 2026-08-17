import { useEffect, useState } from "react";
import { PhoneCall, X } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/phone";

export function CallPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-sm rounded-3xl bg-surface border border-border shadow-glow p-8 text-center animate-fade-in">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-4 right-4 grid place-items-center h-8 w-8 rounded-full text-ink-muted hover:bg-secondary hover:text-ink transition"
        >
          <X className="h-4 w-4" />
        </button>

        <span className="mx-auto mb-4 grid place-items-center h-14 w-14 rounded-full bg-primary/10">
          <PhoneCall className="h-6 w-6 text-primary" />
        </span>

        <h2 className="text-xl font-bold text-ink">Internet or Cable Not Working?</h2>
        <p className="mt-3 text-sm text-ink-muted leading-relaxed">
          Get instant help for slow internet, outages, setup issues, or cable problems.
        </p>

        <a
          href={PHONE_TEL}
          className="btn-primary mt-6 w-full justify-center !py-3.5 text-base"
          data-track="popup_call_button_click"
        >
          <PhoneCall className="h-4 w-4" /> CALL SUPPORT NOW
        </a>

        <a href={PHONE_TEL} className="mt-3 block font-display text-2xl font-semibold text-primary hover:underline" data-track="popup_phone_number_click">
          {PHONE_DISPLAY}
        </a>

        <p className="mt-4 text-xs text-ink-muted">
          Quick assistance • No forms • Talk to a real agent
        </p>
      </div>
    </div>
  );
}
