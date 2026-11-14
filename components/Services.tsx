import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-obsidian border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne block mb-3">
              02 · Services
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white">
              Transportation for every occasion
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            From early-morning SeaTac departures to multi-vehicle corporate charters across Bellevue, Tacoma, and Gig Harbor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <article
              key={service.id}
              className={`group bg-charcoal border border-white/10 hover:border-champagne/50 transition-colors flex flex-col justify-between overflow-hidden ${
                idx === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                  <span className="absolute top-4 left-4 bg-obsidian/85 border border-white/15 px-3 py-1 text-xs font-mono text-champagne">
                    {service.number}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="font-serif text-2xl text-white mb-3">{service.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.highlights.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-champagne shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href="#quote-form"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-champagne hover:text-champagne-light"
                >
                  Request Service
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}