import { PhoneCall } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/phone";

export function FloatingCall() {
  return (
    <a
      href={PHONE_TEL}
      aria-label="Call Cable View Point"
      data-track="floating_call_click"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground pl-4 pr-5 py-3.5 shadow-glow hover:bg-primary-glow transition-all hover:-translate-y-0.5"
    >
      <span className="grid place-items-center h-8 w-8 rounded-full bg-signal">
        <PhoneCall className="h-4 w-4 text-accent-foreground" />
      </span>
      <span className="hidden sm:flex flex-col leading-tight text-left">
        <span className="text-[10px] uppercase tracking-[0.16em] opacity-80">Talk to a specialist</span>
        <span className="font-semibold text-sm">{PHONE_DISPLAY}</span>
      </span>
    </a>
  );
}
