import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-obsidian border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-champagne block mb-3">
              04 · Reviews
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white">
              Trusted by travelers across Seattle
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Representative feedback from airport, cruise terminal, and corporate travelers across Puget Sound.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.id}
              className="bg-charcoal border border-white/10 p-8 flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-champagne/20 absolute top-6 right-6" />
              <div>
                <div className="flex items-center gap-1 mb-6" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-champagne text-champagne" />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-base text-zinc-200 leading-relaxed mb-8">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <figcaption className="pt-4 border-t border-white/10">
                <div className="font-serif text-lg text-white">{item.author}</div>
                <div className="text-xs text-champagne mt-0.5">{item.context}</div>
                <div className="text-[11px] text-zinc-500 mt-1">{item.source}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}