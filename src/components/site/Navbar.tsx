import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, PhoneCall, X } from "lucide-react";
import { Wordmark } from "@/components/site/Wordmark";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/phone";

const links = [
  { to: "/", label: "Home" },
  { to: "/internet-services", label: "Internet" },
  { to: "/tv-streaming", label: "TV & Streaming" },
  { to: "/wireless", label: "Wireless" },
  { to: "/learning-center", label: "Learn" },
  { to: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4">
      <div
        className={`mx-auto max-w-[1240px] rounded-[1.75rem] lg:rounded-full transition-all duration-300 ${
          scrolled || open
            ? "bg-surface/90 backdrop-blur-xl border border-border shadow-soft"
            : "bg-surface/70 backdrop-blur-md border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-3 sm:px-5 lg:px-6 h-16">
          <Link to="/" aria-label="Cable View Point — Home" className="flex min-w-0 shrink items-center">
            <Wordmark className="text-base sm:text-lg lg:text-xl" />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-full px-2.5 xl:px-4 py-2 text-[13px] xl:text-sm font-medium text-ink-muted hover:text-primary hover:bg-secondary transition whitespace-nowrap"
                activeProps={{ className: "rounded-full px-2.5 xl:px-4 py-2 text-[13px] xl:text-sm font-semibold text-primary bg-secondary whitespace-nowrap" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a href={PHONE_TEL} className="hidden xl:inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-ink hover:text-primary transition whitespace-nowrap" data-track="header_phone_click">
              <PhoneCall className="h-4 w-4 text-signal shrink-0" /> {PHONE_DISPLAY}
            </a>
            <Link to="/contact" className="btn-primary !px-4 xl:!px-5 !py-2.5 whitespace-nowrap">Check availability</Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2.5 rounded-full border border-border text-ink shrink-0"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden px-3 sm:px-4 pb-4">
            <div className="rounded-3xl border border-border bg-surface p-3 flex flex-col max-h-[70vh] overflow-y-auto">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-ink hover:bg-secondary transition"
                  activeProps={{ className: "rounded-2xl px-4 py-3 text-sm font-semibold text-primary bg-secondary" }}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={PHONE_TEL}
                onClick={() => setOpen(false)}
                data-track="mobile_menu_phone_click"
                className="mt-1 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-ink hover:bg-secondary transition"
              >
                <PhoneCall className="h-4 w-4 text-signal shrink-0" /> {PHONE_DISPLAY}
              </a>
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full justify-center">
                Check availability
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
