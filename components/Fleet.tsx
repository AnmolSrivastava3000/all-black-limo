import Image from "next/image";
import { Users, Briefcase, Check } from "lucide-react";
import { FLEET } from "@/lib/data";

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-charcoal border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne block mb-3">
              03 · Fleet
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white">
              Travel in comfort and style
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Late-model, meticulously detailed black vehicles configured for Pacific Northwest weather and executive comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FLEET.map((vehicle) => (
            <article
              key={vehicle.id}
              className="bg-obsidian border border-white/10 hover:border-champagne/40 transition-colors overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover object-center opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-obsidian/90 border border-champagne/40 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-champagne">
                    {vehicle.category}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10">
                    <h3 className="font-serif text-2xl sm:text-3xl text-white">{vehicle.name}</h3>
                    <div className="flex items-center gap-4 text-xs text-zinc-300">
                      <span className="inline-flex items-center gap-1.5 bg-white/5 px-3 py-1.5 border border-white/10">
                        <Users className="w-3.5 h-3.5 text-champagne" />
                        Up to {vehicle.passengers} Pax
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-white/5 px-3 py-1.5 border border-white/10">
                        <Briefcase className="w-3.5 h-3.5 text-champagne" />
                        {vehicle.luggage} Bags
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {vehicle.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {vehicle.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-champagne shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 py-4 bg-charcoal/60 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-zinc-400">Chauffeur &amp; fuel included</span>
                <a
                  href="#quote-form"
                  className="text-xs uppercase tracking-[0.2em] text-champagne font-semibold hover:underline"
                >
                  Select {vehicle.category} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}