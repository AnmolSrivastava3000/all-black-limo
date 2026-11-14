"use client";

import { useState, FormEvent } from "react";
import { MapPin, Calendar, Clock, Users, Car, CheckCircle2, AlertCircle, Phone, RotateCcw } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

interface QuoteFormState {
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: string;
  vehicle: string;
}

interface FormErrors {
  pickup?: string;
  dropoff?: string;
  date?: string;
  time?: string;
  passengers?: string;
  vehicle?: string;
}

const INITIAL_STATE: QuoteFormState = {
  pickup: "",
  dropoff: "",
  date: "",
  time: "",
  passengers: "",
  vehicle: "",
};

const QUICK_LOCATIONS = [
  "SeaTac Airport (SEA)",
  "Pier 66 Cruise Terminal",
  "Pier 91 Cruise Terminal",
  "Downtown Bellevue",
];

export default function QuoteForm() {
  const [form, setForm] = useState<QuoteFormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<QuoteFormState | null>(null);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!form.pickup.trim() || form.pickup.trim().length < 3) {
      nextErrors.pickup = "Please enter a valid pickup address, airport, or pier.";
    }
    if (!form.dropoff.trim() || form.dropoff.trim().length < 3) {
      nextErrors.dropoff = "Please enter a valid destination address.";
    }
    if (
      form.pickup.trim() &&
      form.dropoff.trim() &&
      form.pickup.trim().toLowerCase() === form.dropoff.trim().toLowerCase()
    ) {
      nextErrors.dropoff = "Drop-off location must differ from pickup location.";
    }
    if (!form.date) {
      nextErrors.date = "Please select a travel date.";
    }
    if (!form.time) {
      nextErrors.time = "Please select a pickup time.";
    }
    if (!form.passengers) {
      nextErrors.passengers = "Select passenger count.";
    }
    if (!form.vehicle) {
      nextErrors.vehicle = "Select a preferred vehicle class.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(form);
    }
  };

  const handleReset = () => {
    setForm(INITIAL_STATE);
    setErrors({});
    setSubmittedData(null);
  };

  if (submittedData) {
    return (
      <div
        id="quote-form"
        role="status"
        aria-live="polite"
        className="bg-charcoal/95 backdrop-blur-md border border-champagne/40 p-6 sm:p-8 shadow-2xl"
      >
        <div className="flex items-center gap-3 text-champagne mb-3">
          <CheckCircle2 className="w-6 h-6 shrink-0" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold">
            Quote Inquiry Validated (Demo Mode)
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2">
          Review Your Chauffeur Request
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
          This interactive assessment form validates your trip criteria. No live reservation has been dispatched or billed. Our Seattle dispatch team confirms exact flat-rate pricing and chauffeur assignment directly.
        </p>

        <dl className="bg-obsidian/90 border border-white/10 p-4 sm:p-5 space-y-3 text-xs sm:text-sm mb-6">
          <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
            <dt className="text-zinc-400">Pickup</dt>
            <dd className="text-white font-medium text-right">{submittedData.pickup}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
            <dt className="text-zinc-400">Drop-off</dt>
            <dd className="text-white font-medium text-right">{submittedData.dropoff}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
            <dt className="text-zinc-400">Date & Time</dt>
            <dd className="text-white font-medium text-right">
              {submittedData.date} at {submittedData.time}
            </dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
            <dt className="text-zinc-400">Passengers</dt>
            <dd className="text-white font-medium text-right">{submittedData.passengers}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-zinc-400">Vehicle Class</dt>
            <dd className="text-champagne font-semibold text-right">{submittedData.vehicle}</dd>
          </div>
        </dl>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(
              `Chauffeur Quote Request: ${submittedData.pickup} to ${submittedData.dropoff}`
            )}&body=${encodeURIComponent(
              `Hello All Black Limo Dispatch,\n\nI would like to request a quote for the following trip:\n\n- Pickup: ${submittedData.pickup}\n- Drop-off: ${submittedData.dropoff}\n- Date: ${submittedData.date}\n- Time: ${submittedData.time}\n- Passengers: ${submittedData.passengers}\n- Preferred Vehicle: ${submittedData.vehicle}\n\nThank you.`
            )}`}
            className="flex-1 py-3 px-4 bg-champagne text-obsidian font-semibold text-xs uppercase tracking-[0.18em] text-center hover:bg-champagne-light transition-colors"
          >
            Send to Dispatch Email
          </a>
          <a
            href={BUSINESS_INFO.phoneHref}
            className="flex items-center justify-center gap-2 py-3 px-4 border border-white/15 text-white text-xs uppercase tracking-widest hover:border-champagne transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-champagne" />
            Call {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="mt-4 w-full flex items-center justify-center gap-2 text-xs text-zinc-400 hover:text-champagne py-2 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Modify trip details
        </button>
      </div>
    );
  }

  return (
    <div
      id="quote-form"
      className="bg-charcoal/95 backdrop-blur-md border border-white/10 p-6 sm:p-8 shadow-2xl"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
        <div>
          <span className="text-[11px] uppercase tracking-[0.24em] text-champagne block">
            Instant Inquiry
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-white">Request Your Ride</h2>
        </div>
        <span className="text-[11px] text-zinc-400 border border-white/10 px-2.5 py-1">
          SeaTac · Pier 66/91
        </span>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label
            htmlFor="pickup"
            className="block text-xs uppercase tracking-wider text-zinc-300 mb-1.5"
          >
            Pickup Location *
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-champagne absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              id="pickup"
              name="pickup"
              type="text"
              placeholder="SeaTac Airport, Pier 91, Hotel or Address"
              value={form.pickup}
              onChange={(e) => setForm({ ...form, pickup: e.target.value })}
              className="w-full bg-obsidian border border-white/15 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-champagne"
            />
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {QUICK_LOCATIONS.map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => setForm({ ...form, pickup: loc })}
                className="text-[11px] px-2 py-0.5 bg-white/5 hover:bg-champagne/20 text-zinc-300 hover:text-champagne border border-white/5 transition-colors"
              >
                {loc}
              </button>
            ))}
          </div>
          {errors.pickup && (
            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {errors.pickup}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="dropoff"
            className="block text-xs uppercase tracking-wider text-zinc-300 mb-1.5"
          >
            Drop-off Location *
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              id="dropoff"
              name="dropoff"
              type="text"
              placeholder="Downtown Seattle, Bellevue, Tacoma, Pier 66..."
              value={form.dropoff}
              onChange={(e) => setForm({ ...form, dropoff: e.target.value })}
              className="w-full bg-obsidian border border-white/15 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-champagne"
            />
          </div>
          {errors.dropoff && (
            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {errors.dropoff}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="date"
              className="block text-xs uppercase tracking-wider text-zinc-300 mb-1.5"
            >
              Travel Date *
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-champagne absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-obsidian border border-white/15 pl-10 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-champagne [color-scheme:dark]"
              />
            </div>
            {errors.date && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.date}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="time"
              className="block text-xs uppercase tracking-wider text-zinc-300 mb-1.5"
            >
              Pickup Time *
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 text-champagne absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                id="time"
                name="time"
                type="time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full bg-obsidian border border-white/15 pl-10 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-champagne [color-scheme:dark]"
              />
            </div>
            {errors.time && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.time}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="passengers"
              className="block text-xs uppercase tracking-wider text-zinc-300 mb-1.5"
            >
              Passengers *
            </label>
            <div className="relative">
              <Users className="w-4 h-4 text-champagne absolute left-3.5 top-3.5 pointer-events-none" />
              <select
                id="passengers"
                name="passengers"
                value={form.passengers}
                onChange={(e) => setForm({ ...form, passengers: e.target.value })}
                className="w-full bg-obsidian border border-white/15 pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-champagne"
              >
                <option value="">Select guests</option>
                <option value="1 - 3 Passengers">1 – 3 Passengers</option>
                <option value="4 - 6 Passengers">4 – 6 Passengers</option>
                <option value="7 - 14 Passengers">7 – 14 Passengers</option>
                <option value="15 - 24 Passengers">15+ Passengers (Group)</option>
              </select>
            </div>
            {errors.passengers && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.passengers}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="vehicle"
              className="block text-xs uppercase tracking-wider text-zinc-300 mb-1.5"
            >
              Vehicle Type *
            </label>
            <div className="relative">
              <Car className="w-4 h-4 text-champagne absolute left-3.5 top-3.5 pointer-events-none" />
              <select
                id="vehicle"
                name="vehicle"
                value={form.vehicle}
                onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                className="w-full bg-obsidian border border-white/15 pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-champagne"
              >
                <option value="">Select vehicle</option>
                <option value="Executive Sedan (Up to 3 Pax)">Executive Sedan</option>
                <option value="Full-Size Luxury SUV (Up to 6 Pax)">Luxury SUV</option>
                <option value="Mercedes-Benz Sprinter (Up to 14 Pax)">Mercedes Sprinter</option>
                <option value="Executive Minibus (Up to 24 Pax)">Executive Minibus</option>
              </select>
            </div>
            {errors.vehicle && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.vehicle}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 bg-champagne text-obsidian font-semibold text-xs uppercase tracking-[0.22em] hover:bg-champagne-light transition-colors mt-2"
        >
          Get a Quote
        </button>

        <p className="text-[11px] text-zinc-400 text-center">
          No credit card required to request a quote · Direct Seattle dispatch:{" "}
          <a href={BUSINESS_INFO.phoneHref} className="text-champagne hover:underline">
            {BUSINESS_INFO.phoneDisplay}
          </a>
        </p>
      </form>
    </div>
  );
}