import { Phone, Mail, MapPin, Plane, Anchor } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-zinc-300">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne block mb-2">
              05 · Reserve Your Chauffeur
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white">
              Let&apos;s get you there.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#quote-form"
              className="px-7 py-4 bg-champagne text-obsidian font-semibold text-xs uppercase tracking-[0.2em] hover:bg-champagne-light transition-colors"
            >
              Request a Quote
            </a>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="px-7 py-4 border border-white/20 text-white text-xs uppercase tracking-[0.2em] hover:border-champagne transition-colors"
            >
              Call {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="font-serif text-2xl tracking-[0.2em] text-white">
            {BUSINESS_INFO.brand}
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            {BUSINESS_INFO.name} provides private black car, luxury SUV, and executive Sprinter transportation throughout Seattle and the Puget Sound region.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-champagne mb-4">
            Direct Dispatch
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center gap-2.5 text-zinc-300 hover:text-champagne"
              >
                <Phone className="w-4 h-4 text-champagne shrink-0" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2.5 text-zinc-300 hover:text-champagne break-all"
              >
                <Mail className="w-4 h-4 text-champagne shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-zinc-400 text-xs pt-1">
              <MapPin className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.location}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-champagne mb-4">
            Primary Hubs &amp; Service Areas
          </h3>
          <ul className="space-y-2 text-xs text-zinc-400">
            <li className="flex items-center gap-2 text-zinc-200">
              <Plane className="w-3.5 h-3.5 text-champagne" />
              {BUSINESS_INFO.airport}
            </li>
            {BUSINESS_INFO.cruiseTerminals.map((pier) => (
              <li key={pier} className="flex items-center gap-2 text-zinc-200">
                <Anchor className="w-3.5 h-3.5 text-champagne" />
                {pier}
              </li>
            ))}
            <li className="pt-2 text-zinc-400">
              {BUSINESS_INFO.serviceAreas.join(" · ")}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-champagne mb-4">
            Navigation
          </h3>
          <ul className="space-y-2.5 text-xs uppercase tracking-wider">
            <li><a href="#home" className="hover:text-champagne">01 · Home &amp; Quote</a></li>
            <li><a href="#services" className="hover:text-champagne">02 · Services</a></li>
            <li><a href="#fleet" className="hover:text-champagne">03 · Fleet</a></li>
            <li><a href="#reviews" className="hover:text-champagne">04 · Client Reviews</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p>Saywa Digital Practical Assessment · Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}