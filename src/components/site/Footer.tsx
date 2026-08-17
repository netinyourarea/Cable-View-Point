import { Link } from "@tanstack/react-router";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import { Wordmark } from "@/components/site/Wordmark";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/phone";

export function Footer() {
  return (
    <footer className="relative mt-10 px-3 sm:px-6 pb-6">
      <div className="mx-auto max-w-[1240px] rounded-[2.5rem] bg-surface border border-border shadow-soft overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-10 p-8 sm:p-12">
          <div className="lg:col-span-5">
            <Link to="/" aria-label="Cable View Point — Home" className="inline-block">
              <Wordmark className="text-xl" />
            </Link>
            <p className="mt-5 max-w-md text-sm text-ink-muted leading-relaxed">
              Cable View Point is a consumer comparison and information platform for home internet, TV, streaming and wireless.
              We explain the technology, map what reaches your address, and let you decide without pressure.
            </p>
            <div className="mt-7 space-y-3 text-sm text-ink-muted">
              <a href={PHONE_TEL} className="flex items-center gap-3 hover:text-primary transition">
                <span className="grid place-items-center h-8 w-8 rounded-full bg-secondary"><PhoneCall className="h-4 w-4 text-primary" /></span>
                {PHONE_DISPLAY}
              </a>
              <a href="mailto:hello@cableviewpoint.com" className="flex items-center gap-3 hover:text-primary transition">
                <span className="grid place-items-center h-8 w-8 rounded-full bg-secondary"><Mail className="h-4 w-4 text-primary" /></span>
                hello@cableviewpoint.com
              </a>
              <div className="flex items-center gap-3">
                <span className="grid place-items-center h-8 w-8 rounded-full bg-secondary"><MapPin className="h-4 w-4 text-primary" /></span>
                Serving households across the United States
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-ink mb-4">Explore</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/internet-services" className="text-ink-muted hover:text-primary">Internet</Link></li>
              <li><Link to="/tv-streaming" className="text-ink-muted hover:text-primary">TV & Streaming</Link></li>
              <li><Link to="/wireless" className="text-ink-muted hover:text-primary">Wireless</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-ink mb-4">Company</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-ink-muted hover:text-primary">About</Link></li>
              <li><Link to="/learning-center" className="text-ink-muted hover:text-primary">Learning Center</Link></li>
              <li><Link to="/contact" className="text-ink-muted hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-ink mb-4">Legal</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy" className="text-ink-muted hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-ink-muted hover:text-primary">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="text-ink-muted hover:text-primary">Refund Policy</Link></li>
              <li><Link to="/disclaimer" className="text-ink-muted hover:text-primary">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border px-8 sm:px-12 py-6 grid md:grid-cols-2 gap-4 items-start bg-surface-elev">
          <p className="text-xs text-ink-muted leading-relaxed">
            Cable View Point is an independent comparison platform and is not affiliated with, endorsed by or an agent of any internet,
            cable, satellite, streaming or wireless provider. Brand names and trademarks belong to their respective owners.
          </p>
          <p className="text-xs text-ink-muted md:text-right">© {new Date().getFullYear()} Cable View Point. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
