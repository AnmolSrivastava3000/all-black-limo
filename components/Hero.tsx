import Image from "next/image";
import { ShieldCheck, Clock, Plane, Compass } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";
import QuoteForm from "./QuoteForm";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 flex items-center overflow-hidden border-b border-white/10"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2000&q=85"
          alt="All Black Limo luxury chauffeur sedan in Seattle"
          fill
          priority
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/90 to-obsidian/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-3 border border-champagne/40 bg-obsidian/70 px-4 py-1.5">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne">
                01 · Seattle &amp; Puget Sound
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.08] tracking-tight">
              Luxury transportation.{" "}
              <span className="italic font-normal text-champagne">Without compromise.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              {BUSINESS_INFO.subtitle} Dedicated black car, full-size SUV, and Mercedes-Benz Sprinter service for SeaTac Airport, Pier 66 &amp; Pier 91 cruise terminals, corporate roadshows, and private charters.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-2.5">
                <Plane className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-white uppercase tracking-wider">SeaTac (SEA)</p>
                  <p className="text-[11px] text-zinc-400">Flight-tracked pickups</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Compass className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-white uppercase tracking-wider">Pier 66 &amp; 91</p>
                  <p className="text-[11px] text-zinc-400">Direct cruise transfers</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-white uppercase tracking-wider">Licensed LLC</p>
                  <p className="text-[11px] text-zinc-400">Vetted chauffeurs</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-white uppercase tracking-wider">24/7 Dispatch</p>
                  <p className="text-[11px] text-zinc-400">Seattle · Bellevue · Tacoma</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}